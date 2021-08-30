import { AuthService } from './../../../../services/http/auth.service';
import { Component, OnInit } from '@angular/core';
import { MenuOptions } from 'src/app/classes/menu-options';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {
  options: [MenuOptions]
  usuario: Usuario = this.authService.getUser()
  isAdmin: boolean = this.usuario.NivelAcessoId === 1
  
  constructor(private authService: AuthService, private router: Router, private alertController: AlertController, private iab: InAppBrowser) {}

  createOption(icon: string, title: string, action: Function) {
    return new MenuOptions(icon, title, action)
  }

  //Funções dos cards de opções
  openPortal() {
    this.iab.create('http://portaldoaluno.fmabc.br:7072/web/app/edu/PortalEducacional/login/?redirect=main', '_system')
  }

  async confirmSair() {
    const alert = await this.alertController.create({
      header: 'Sair',
      message: 'Voce realmente deseja <strong>sair</strong>?',
      buttons: [
        {
          text: 'Não',
          role: 'cancel',
        }, {
          text: 'Sim',
          handler: () => {
            this.authService.deleteUser()
            this.router.navigate(['/login'], { replaceUrl: true })
          }
        }
      ]
    });

    await alert.present();
  }

  funcAdm() {
    return this.router.navigate(['/admin'])
  }

  funcBeneficios() { 
    return
  }

  funcGradeHor() {
    return
  }

  funcDocument() {
    return this.router.navigate([`/docs`])
  }

  async funcSair() {
    await this.confirmSair();
  }

  funcFeedBack() {
    this.iab.create('https://forms.gle/RUtXnDmQhEi5D6Ro7', '_system')
  }

  funcUsuario() {
    return this.router.navigate([`/user/${this.usuario.id}`])
  }
}
