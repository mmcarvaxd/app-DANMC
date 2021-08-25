import { AvisoService } from './../../services/http/aviso.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { AuthService } from 'src/app/services/http/auth.service';
import { LoadingService } from 'src/app/services/shared/loading.service';

@Component({
  selector: 'app-aviso',
  templateUrl: './aviso.component.html',
  styleUrls: ['./aviso.component.scss'],
})
export class AvisoComponent implements OnInit {
  aviso: Aviso = {
    temaId: 1,
    conteudo: "",
    titulo: "",
    Tema: {
      descricao: ""
    }
  }
  usuario: Usuario
  isAdmin: boolean = false

  constructor(private activeRoute: ActivatedRoute, private avisoService: AvisoService, private toastController: ToastController, private router: Router, private authService: AuthService, private loadingService: LoadingService) { }

  async ngOnInit() {

    let id = this.activeRoute.snapshot.paramMap.get('id')
    await this.loadingService.presentLoading()
    this.avisoService.buscaId(id)
      .subscribe(async resp => {
        if(!resp) {
          let alert = await this.toastController.create({
            message: 'Esse aviso foi deletado!',
            duration: 2000
          })
          
          alert.present()
          
          await this.loadingService.dismissLoading()
          return this.router.navigate(['/home'])
        }

        this.aviso = resp
        await this.loadingService.dismissLoading()
      }, async error => {
        let alert = await this.toastController.create({
          message: 'Esse aviso foi deletado!',
          duration: 2000
        })

        alert.present()
        this.router.navigate(['/home'])
      })
    this.usuario = this.authService.getUser()
    this.isAdmin = this.usuario.NivelAcessoId === 1;
  }

  deleteAviso() {
    let id = this.activeRoute.snapshot.paramMap.get('id')
    this.avisoService.delete(id)
      .subscribe(async () => {
        let alert = await this.toastController.create({
          message: 'Aviso deletado com sucesso!',
          duration: 2000
        })

        alert.present()
        this.router.navigate(['/home'])
      }, async () => {
        let alert = await this.toastController.create({
          message: 'Erro ao deletar o aviso!',
          duration: 2000
        })

        alert.present()
      })
  }

}
