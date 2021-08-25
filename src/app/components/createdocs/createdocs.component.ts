import { Component, OnInit } from '@angular/core';
import { AssuntosService } from 'src/app/services/http/assuntos.service';
import { DocumentosService } from 'src/app/services/http/documentos.service';
import { Location } from '@angular/common';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-createdocs',
  templateUrl: './createdocs.component.html',
  styleUrls: ['./createdocs.component.scss'],
})
export class CreatedocsComponent implements OnInit {
  documentos: Documentos = {
    titulo: "",
    conteudo: "",
    AssuntosId: 1
  }

  arquivo

  assuntos: Assunto[]
  
  constructor(private assuntosService: AssuntosService, private documentosService: DocumentosService, private location: Location, private toastController: ToastController) { }

  ngOnInit() {
    this.assuntosService.busca().subscribe(resp => {
      this.assuntos = resp
    })
  }

  changeListener($event) : void {
    this.arquivo = $event.target.files[0];
  }

  criarDocs() {
    this.documentosService.create(this.documentos, this.arquivo).subscribe(async resp => {
      let alert = await this.toastController.create({
        message: 'Documento criado com sucesso!',
        duration: 2000
      })

      alert.present()
      this.location.back();
    })
  }
}
