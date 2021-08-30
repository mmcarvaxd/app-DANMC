import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/http/usuario.service';

@Component({
  selector: 'app-socio-orgao',
  templateUrl: './socio-orgao.component.html',
  styleUrls: ['./socio-orgao.component.scss'],
})
export class SocioOrgaoComponent implements OnInit {
  usuarios: Usuario[]
  usuariosList: Usuario[]

  constructor(private usuarioService: UsuarioService, private router: Router) { }

  async ngOnInit() {
    await this.getUsers();
  }

  clickUser(user: Usuario) {
      this.router.navigate(['socioorgao', 'manage', user.id]);
  }

  async getUsers() {
    try {
      this.usuarios = await this.usuarioService.getUsers().toPromise();
      this.usuariosList = this.usuarios
    } catch (error) {
      
    }
  }

  search(event) {
    let search = event.target.value
    this.usuariosList = this.usuarios.filter(user => user.nome.toLowerCase().includes(search.toLowerCase()) || user.login.toLowerCase().includes(search.toLowerCase()))
  }
}
