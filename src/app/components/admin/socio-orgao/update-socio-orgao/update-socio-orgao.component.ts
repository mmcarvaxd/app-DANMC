import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/http/usuario.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-update-socio-orgao',
  templateUrl: './update-socio-orgao.component.html',
  styleUrls: ['./update-socio-orgao.component.scss'],
})
export class UpdateSocioOrgaoComponent implements OnInit {
  usuario: Usuario
  constructor(private usuarioService: UsuarioService, private activeRoute: ActivatedRoute, private router: Router, private toastController: ToastController) { }

  async ngOnInit() {
    let id = Number(this.activeRoute.snapshot.paramMap.get('id'))
    await this.getUsuario(id)
  }

  async getUsuario(id: Number) {
    try {
      this.usuario = await this.usuarioService.getUser(id).toPromise()
      if(this.usuario.SocioOrgaoDate) {
        this.usuario.SocioOrgaoDate = new Date(this.usuario.SocioOrgaoDate)
      }
    } catch (error) {
      
    }
  }

  async renovarSocioOrgao(tempoEmMeses: number) {
      await this.usuarioService.renovarSocioOrgão(this.usuario.id, tempoEmMeses).toPromise()
      let alert = await this.toastController.create({
        message: 'Renovado com sucesso!',
        duration: 2000
      })

      await alert.present()
      this.router.navigate(['socioorgao'], {replaceUrl: true});
  }
}
