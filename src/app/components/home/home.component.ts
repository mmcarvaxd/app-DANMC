import { Component, OnInit } from '@angular/core';
import { IonTabs, MenuController } from '@ionic/angular';
import { AuthService } from 'src/app/services/http/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})

export class HomeComponent implements OnInit {
  title: string = '';
  tabs = {
    news: "Noticias",
    card: "Cartão",
    calendar: "Eventos"
  }

  constructor(private menu: MenuController, private authService: AuthService, private router: Router) {

  }
  ngOnInit(): void {
    if (!this.authService.getUser()) {
      this.router.navigate(['/login'])
    }
  }

  tabChanged(tab: IonTabs) {
    this.title = this.tabs[tab.getSelected()];
  }
}

