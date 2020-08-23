import { AuthService } from './../../../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { MenuOptions } from 'src/app/classes/menu-options';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {
  options: [MenuOptions]
  usuario: Usuario = this.authService.getUser()
  
  constructor(private authService: AuthService, private router: Router) {}

  createOption(icon: string, title: string, action: Function) {
    return new MenuOptions(icon, title, action)
  }

  //Funções dos cards de opções
  openPortal() {
    window.open('https://www.facebook.com', '_system')
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
    return
  }

  funcSair() {
    this.authService.deleteUser()
    this.router.navigate(['/login'], { replaceUrl: true })
  }

  funcUsuario() {
    return
  }
}
