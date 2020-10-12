import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  usuario: Usuario = this.authService.getUser()

  constructor(private authService: AuthService, private usuarioService: UsuarioService, private router: Router, private toastController: ToastController) { }

  ngOnInit() { }

  saveUser() {
    this.usuarioService.saveUser(this.usuario)
      .subscribe(async () => {
        let alert = await this.toastController.create({
          message: 'Usuário alterado com sucesso!',
          duration: 2000
        })

        localStorage.setItem("usuario", JSON.stringify(this.usuario))

        alert.present()
        this.router.navigate(['/home'])
      }, async () => {
        let alert = await this.toastController.create({
          message: 'Ocorreu um erro ao salvar o usuário!',
          duration: 2000
        })

        alert.present()
      })
  }
}
