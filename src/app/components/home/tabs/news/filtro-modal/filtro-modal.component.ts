import { Component, OnInit } from '@angular/core';
import { TemasService } from 'src/app/services/http/temas.service';
import { ModalController } from '@ionic/angular';
@Component({
  selector: 'app-filtro-modal',
  templateUrl: './filtro-modal.component.html',
  styleUrls: ['./filtro-modal.component.scss'],
})
export class FiltroModalComponent implements OnInit {

  constructor(private temasService: TemasService,  private modalService: ModalController) { }
  temas: Tema[] = []

  ngOnInit() {
    this.temasService.busca().subscribe(resp => {
      let todos: Tema[] = [{ id: 0, descricao: "Todos"}]
      this.temas = todos.concat(resp)
    })
  }

  clickTema(tema: Tema) {
    this.modalService.dismiss(tema)
  }

  async dismissModal() {
     await this.modalService.dismiss()
  }
}
