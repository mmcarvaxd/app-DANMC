import { AvisoService } from './../../services/aviso.service';
import { TemasService } from './../../services/temas.service';
import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-createnews',
  templateUrl: './createnews.component.html',
  styleUrls: ['./createnews.component.scss'],
})
export class CreatenewsComponent implements OnInit {
  aviso: Aviso = {
    temaId: 1,
    conteudo: "",
    titulo: ""
  }

  temas: [Tema]

  constructor(private temasService: TemasService, private avisoService: AvisoService,
    public toastController: ToastController, private router: Router) { }

  ngOnInit() {
    this.temasService.busca().subscribe(resp => {
      this.temas = resp
    })
  }

  criarAviso() {
    this.avisoService.create(this.aviso).subscribe(async resp => {
      let alert = await this.toastController.create({
        message: 'Aviso criado com sucesso!',
        duration: 2000
      })

      alert.present()
      this.router.navigate(['/home', 'news'])
    })
  }
}
