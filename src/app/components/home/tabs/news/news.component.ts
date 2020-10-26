import { AvisoService } from './../../../../services/aviso.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
})
export class NewsComponent implements OnInit {
  avisos: [Aviso]
  usuario: Usuario
  isAdmin: boolean = false

  constructor(private router: Router, private avisoService: AvisoService, private authService: AuthService) {}

  ngOnInit() {
    this.getAvisos()
    this.usuario = this.authService.getUser()
    this.isAdmin = this.usuario.NivelAcessoId === 1;
  }

  getAvisos(event?) {
    this.avisoService.busca().subscribe(resp => {
      this.avisos = resp
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
}