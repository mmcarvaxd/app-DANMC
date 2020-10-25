import { AvisoService } from './../../services/aviso.service';
import { Component, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-aviso',
  templateUrl: './aviso.component.html',
  styleUrls: ['./aviso.component.scss'],
})
export class AvisoComponent implements AfterViewInit {
  aviso: Aviso = {
    temaId: 1,
    conteudo: "",
    titulo: "",
    Tema: {
      descricao: ""
    }
  }

  constructor(private activeRoute: ActivatedRoute, private avisoService: AvisoService, private toastController: ToastController, private router: Router) { }

  ngAfterViewInit(): void {
    let id = this.activeRoute.snapshot.paramMap.get('id')
    this.avisoService.buscaId(id).subscribe(resp => {
      this.aviso = resp
    })
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
