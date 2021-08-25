import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { AuthService } from 'src/app/services/http/auth.service';
import { UsuarioService } from 'src/app/services/http/usuario.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  usuario: Usuario = this.authService.getUser()

  constructor(private authService: AuthService, private usuarioService: UsuarioService, private router: Router, private toastController: ToastController, private alertController: AlertController) { }

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

  async updatePassword(oldPassword, newPassword, newRepeatedPassword) {

    const alertSenha = await this.alertController.create({
      header: 'Alterar senha',
      inputs: [
        {
          name: 'oldPassword',
          type: 'password',
          placeholder: 'Senha antiga',
          value: oldPassword ? oldPassword : ''
        },
        {
          name: 'newPassword',
          type: 'password',
          placeholder: 'Nova senha',
          value: newPassword ? newPassword : ''
        },
        {
          name: 'newRepeatedPassword',
          type: 'password',
          placeholder: 'Digite novamente a nova senha',
          value: newRepeatedPassword ? newRepeatedPassword : ''
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary'
        }, {
          text: 'Alterar',
          handler: async (resp) => {
            let newPassword = resp['newPassword']
            let newRepeatedPassword = resp['newRepeatedPassword']
            let oldPassword = resp['oldPassword']

            if (newPassword !== newRepeatedPassword) {

              let alert = await this.toastController.create({
                message: 'As senhas não são iguais!',
                duration: 2000
              })

              alert.present()
              return this.updatePassword(oldPassword, newPassword, newRepeatedPassword)
            } else if (newPassword && newPassword.length < 6) {
              let alert = await this.toastController.create({
                message: 'Nova senha muito curta!',
                duration: 2000
              })

              alert.present()
              return this.updatePassword(oldPassword, newPassword, newRepeatedPassword)
            } else {
              this.usuario.senha = newPassword
              this.usuarioService.savePassword(this.usuario, oldPassword)
                .subscribe(async () => {
                  let alert = await this.toastController.create({
                    message: 'Senha alterada com sucesso!',
                    duration: 2000
                  })

                  alert.present()
                  this.router.navigate(['/home'])
                }, async () => {
                  let alert = await this.toastController.create({
                    message: 'Senha antiga inválida!',
                    duration: 2000
                  })

                  alert.present()
                  return this.updatePassword(oldPassword, newPassword, newRepeatedPassword)
                })
            }

            return close
          }
        }
      ]
    });

    await alertSenha.present();
  }
}
