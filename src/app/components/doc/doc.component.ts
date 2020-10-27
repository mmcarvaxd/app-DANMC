import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { DocumentosService } from 'src/app/services/documentos.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-doc',
  templateUrl: './doc.component.html',
  styleUrls: ['./doc.component.scss'],
})
export class DocComponent implements OnInit {
  doc: Documentos = {
    conteudo: '',
    titulo: '',
    Assunto: {
      id: 1,
      descricao: ''
    },
    AssuntosId: 1,
    DataPostagem: new Date(),
    id: 1
  }

  usuario: Usuario
  isAdmin: boolean = false
  constructor(private activeRoute: ActivatedRoute, private authService: AuthService, private documentosService: DocumentosService, private route: Router, private location: Location) { }

  ngOnInit() {
    let id = this.activeRoute.snapshot.paramMap.get('id')
    this.documentosService.buscaById(id).subscribe(resp => {
      this.doc = resp
    })
    this.usuario = this.authService.getUser()
    this.isAdmin = this.usuario.NivelAcessoId === 1;
  }

  deleteDoc() { 
    this.documentosService.delete(this.doc.id).subscribe(resp => {}, err => {})
    this.location.back();
  }

  downloadDoc() {
    this.documentosService.download(this.doc.id).subscribe(resp => {
      this.downLoadFile(resp.body, resp.headers.get('Content-Type'))
    }, err => {})
  }

  downLoadFile(data: any, type: string) {
    let blob = new Blob([data], { type: type });
    let url = window.URL.createObjectURL(blob);
    let pwa = window.open(url);
    if (!pwa || pwa.closed || typeof pwa.closed == 'undefined') {
      alert('Please disable your Pop-up blocker and try again.');
    }
  }
}
