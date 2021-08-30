import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/http/auth.service';
import { UsuarioService } from 'src/app/services/http/usuario.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {

  usuario: Usuario
  isActive: boolean = false;
  constructor(private usuarioService: UsuarioService, private authService: AuthService) { }

  ngOnInit() {
    this.usuario = this.authService.getUser()
    this.getUsuario()
  }

  async getUsuario() {
    try {
      this.usuario = await this.usuarioService.getUser(this.usuario.id).toPromise()
      
      if(this.usuario.SocioOrgaoDate && new Date(this.usuario.SocioOrgaoDate) > new Date()) {
        this.usuario.SocioOrgaoDate = new Date(this.usuario.SocioOrgaoDate) 
        this.isActive = true
      }
      
    } catch (error) {
      
    }
  }
}
