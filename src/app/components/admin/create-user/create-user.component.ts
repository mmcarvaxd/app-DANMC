import { Router } from '@angular/router';
import { UsuarioService } from './../../../services/usuario.service';
import { PerfilService } from './../../../services/perfil.service';
import { TurmaService } from './../../../services/turma.service';
import { NivelAcessoService } from './../../../services/nivel-acesso.service';
import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss'],
})
export class CreateUserComponent implements OnInit {
  usuario: Usuario = {
    NivelAcessoId: 2,
    PerfilId: 1,
    TurmaId: 1,
    login: "",
    nome: "",
    senha: ""
  }

  nivelAcessos: [NivelAcesso]
  turmas: [Turma]
  perfis: [Perfil]
  constructor(private nivelAcessoService: NivelAcessoService, private turmaService: TurmaService,
    private perfilService: PerfilService, private usuarioService: UsuarioService, private router: Router,
    public toastController: ToastController) { }

  ngOnInit() {
    this.nivelAcessoService.busca().subscribe(resp => {
      this.nivelAcessos = resp
    })

    this.turmaService.busca().subscribe(resp => {
      this.turmas = resp
    })

    this.perfilService.busca().subscribe(resp => {
      this.perfis = resp
    })
  }

   createUser() {
    this.usuarioService.create(this.usuario).subscribe(async resp => {
      let alert = await this.toastController.create({
        message: 'Usuário criado com sucesso!',
        duration: 2000
      })

      alert.present()
      this.router.navigate(['/admin'])
    })
  }
}
