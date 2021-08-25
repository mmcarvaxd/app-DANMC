import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/http/auth.service';
import { DocumentosService } from 'src/app/services/http/documentos.service';
import { LoadingService } from 'src/app/services/shared/loading.service';

@Component({
  selector: 'app-docs',
  templateUrl: './docs.component.html',
  styleUrls: ['./docs.component.scss'],
})
export class DocsComponent implements OnInit {
  docs: [Documentos]
  usuario: Usuario
  isAdmin: boolean = false

  constructor(private documentosService: DocumentosService, private authService: AuthService, private route: Router, private loadingService: LoadingService) { }

  async ngOnInit() {
    await this.loadingService.presentLoading()
    this.documentosService.busca().subscribe(async resp => {
      this.docs = resp;
      await this.loadingService.dismissLoading()
    })
    this.usuario = this.authService.getUser()
    this.isAdmin = this.usuario.NivelAcessoId === 1;
  }

  getDocs(event?) {
    this.documentosService.busca().subscribe(resp => {
      this.docs = resp;
      if(event) {
        setTimeout(() => {
          event.target.complete();
        }, 2000);
      }
    }, err => {
      if(event) {
        setTimeout(() => {
          event.target.complete();
        }, 2000);
      }
    })
  }

  openDoc(docs: Documentos) {
    this.route.navigate(['docs/'+ docs.id])
  }

  createDocs() {
    this.route.navigate(['createdocs/'])
  }
}
