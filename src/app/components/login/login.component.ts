import { LoginService } from './../../services/login.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})

export class LoginComponent implements OnInit {
  login = ""
  senha = ""

  constructor(private loginService: LoginService, private router: Router, private authService: AuthService) { }

  ngOnInit() {
    if(this.authService.getUser()) {
      this.router.navigate(['/home'])
    }
  }

  logar() {
    this.loginService.login(this.login, this.senha)
      .subscribe(usuario => {
        localStorage.setItem("usuario", JSON.stringify(usuario))
        this.router.navigate(['/home'])
      })
  }
}
