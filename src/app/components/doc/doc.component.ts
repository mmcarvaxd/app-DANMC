import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { File } from '@ionic-native/file/ngx';
import { AuthService } from 'src/app/services/auth.service';
import { DocumentosService } from 'src/app/services/documentos.service';
import { Location } from '@angular/common';
import { environment } from 'src/environments/environment';
import { FileTransfer, FileTransferObject } from '@ionic-native/file-transfer/ngx';
import { FileOpener } from '@ionic-native/file-opener/ngx';
import { ToastController } from '@ionic/angular';

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
  isDown: boolean = false
  constructor(private activeRoute: ActivatedRoute, private authService: AuthService, private documentosService: DocumentosService, private location: Location, private transfer: FileTransfer, private file: File, private fileOpener: FileOpener,
    public toastController: ToastController) { }

  ngOnInit() {
    let id = this.activeRoute.snapshot.paramMap.get('id')
    this.documentosService.buscaById(id).subscribe(resp => {
      this.doc = resp
    })
    this.usuario = this.authService.getUser()
    this.isAdmin = this.usuario.NivelAcessoId === 1;
  }

  deleteDoc() {
    this.documentosService.delete(this.doc.id).subscribe(resp => { }, err => { })
    this.location.back();
  }

  async downloadDoc() {
    let url = environment.api_url + '/documentos/download/' + this.doc.id
    const fileTransfer: FileTransferObject = this.transfer.create();
    this.isDown = true
    let alert = await this.toastController.create({
      message: 'Baixando Arquivo!',
      duration: 2000
    })

    alert.present()

    this.documentosService.download(this.doc.id).subscribe(respteste => {
      console.log(respteste.headers.get('Content-Type'))
      console.log(this.doc.pathArquivo)
      fileTransfer.download(url, this.file.dataDirectory + this.doc.pathArquivo)
        .then(resp => {
          this.isDown = false
          this.fileOpener.open(resp.toURL(), respteste.headers.get('Content-Type')).then(resp => { })
        })
    }, err => {
      this.isDown = false
    })

  }
}
