import { Component, OnInit } from '@angular/core';
import { AssuntosService } from 'src/app/services/assuntos.service';
import { DocumentosService } from 'src/app/services/documentos.service';
import { Location } from '@angular/common';

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
  
  constructor(private assuntosService: AssuntosService, private documentosService: DocumentosService, private location: Location) { }

  ngOnInit() {
    this.assuntosService.busca().subscribe(resp => {
      this.assuntos = resp
    })
  }

  changeListener($event) : void {
    this.arquivo = $event.target.files[0];
  }

  criarDocs() {
    this.documentosService.create(this.documentos, this.arquivo).subscribe(resp => {})
    this.location.back();
  }
}
