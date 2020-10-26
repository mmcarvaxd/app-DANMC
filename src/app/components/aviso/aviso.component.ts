import { AvisoService } from './../../services/aviso.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';

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

  constructor(private activeRoute: ActivatedRoute, private avisoService: AvisoService, private toastController: ToastController, private router: Router,  private authService: AuthService) { }

  ngOnInit(): void {
    let id = this.activeRoute.snapshot.paramMap.get('id')
    this.avisoService.buscaId(id).subscribe(resp => {
      this.aviso = resp
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
