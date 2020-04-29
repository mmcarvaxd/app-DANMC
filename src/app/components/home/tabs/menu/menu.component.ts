import { Component, OnInit } from '@angular/core';
import { MenuOptions } from 'src/app/classes/menu-options';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {
  options: [MenuOptions]
  constructor() {
    this.options = this.createOptions()
  }

  createOption(icon: string, title: string, action: Function) {
    return new MenuOptions(icon, title, action)
  }

  createOptions() {
    let options: [MenuOptions] = [this.createOption("link", "Portal", this.openPortal)]
    options.push(this.createOption("document", "Documentos", this.funcDocument))
    options.push(this.createOption("list-box", "Benefícios", this.funcBeneficios))
    options.push(this.createOption("git-merge", "Colig", this.funcBeneficios))
    options.push(this.createOption("grid", "Grade Horária", this.funcGradeHor))
    options.push(this.createOption("chatboxes", "Fale Conosco", this.funcGradeHor))
    return options
  }

  //Funções dos cards de opções
  openPortal() {
    window.open('https://www.facebook.com', '_system')
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
}
