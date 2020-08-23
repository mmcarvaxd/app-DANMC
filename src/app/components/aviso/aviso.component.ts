import { AvisoService } from './../../services/aviso.service';
import { Component, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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

  constructor(private activeRoute: ActivatedRoute, private avisoService: AvisoService) { }

  ngAfterViewInit(): void {
    let id = this.activeRoute.snapshot.paramMap.get('id')
    this.avisoService.buscaId(id).subscribe(resp => {
      this.aviso = resp
    })
  }

}
