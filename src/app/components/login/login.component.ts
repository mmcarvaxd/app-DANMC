import { LoginService } from './../../services/http/login.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/http/auth.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})

export class LoginComponent implements OnInit {
  login = ""
  senha = ""
  isLogging = false;

  constructor(private loginService: LoginService, private router: Router, private authService: AuthService, public toastController: ToastController) { }

  ngOnInit() {
    if(this.authService.getUser()) {
      this.router.navigate(['/home'])
    }
  }

  async logar() {
    this.isLogging = true;
    this.loginService.login(this.login, this.senha)
      .subscribe(usuario => {
        localStorage.setItem("usuario", JSON.stringify(usuario))
        this.router.navigate(['/home'])
        this.isLogging = false;
    }, async err => {
        let alert = await this.toastController.create({
          message: 'Usuário e/ou senha incorretos!',
          duration: 2000
        })

        alert.present()
        this.isLogging = false;
    })
  }
}
