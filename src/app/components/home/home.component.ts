import { Component } from '@angular/core';
import { IonTabs, MenuController } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})

export class HomeComponent{
  title: string = '';
  tabs = {
    news: "Noticias",
    card: "Cartão",
    calendar: "Eventos"
  }
  constructor(private menu: MenuController) { 

  }

  openMenu() {
    this.menu.toggle('first');
  }

  openPortal() {
    window.open('https://www.facebook.com/')
  }

  tabChanged(tab: IonTabs) {
    this.title = this.tabs[tab.getSelected()];
  }
}

