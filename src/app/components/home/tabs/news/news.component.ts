import { AvisoService } from './../../../../services/http/aviso.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/http/auth.service';
import { ModalController } from '@ionic/angular';
import { FiltroModalComponent } from './filtro-modal/filtro-modal.component';
import {OverlayEventDetail} from '@ionic/core'; 

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
})
export class NewsComponent implements OnInit {
  avisos: Aviso[]
  avisosTodos: Aviso[]
  
  usuario: Usuario
  isAdmin: boolean = false

  constructor(private router: Router, private avisoService: AvisoService, private authService: AuthService, public modalController: ModalController) {}

  ngOnInit() {
    this.getAvisos()
    this.usuario = this.authService.getUser()
    this.isAdmin = this.usuario.NivelAcessoId === 1;
  }

  getAvisos(event?) {
    this.avisoService.busca().subscribe(resp => {
      this.avisosTodos = this.avisos = resp
      if(event) {
        setTimeout(() => {
          event.target.complete();
        }, 2000);
      }
    }, err => {
      setTimeout(() => {
        event.target.complete();
      }, 2000);
    })
  }

  createAviso() {
    this.router.navigate(['/createnews'])
  }

  clickAviso(aviso: Aviso) {
    this.router.navigate(['/aviso', aviso.id.toString()])
  }
  
  async clickFilter() {
    const modal = await this.modalController.create({
      component: FiltroModalComponent,
      cssClass: 'my-custom-class'
    });

    modal.onDidDismiss().then((data: OverlayEventDetail<Tema>) => {
      if(data.data) {
        if(data.data.id === 0) {
          return this.avisos = this.avisosTodos
        }

        let tema = data.data

        this.avisos = this.avisosTodos.filter(aviso => {
          return aviso.Tema.id === tema.id
        })
      }

    })

    return await modal.present()
  }
}