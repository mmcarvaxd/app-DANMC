import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy, IonTabs } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
//components
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { NewsComponent } from './components/home/tabs/news/news.component'
import { CardComponent } from './components/home/tabs/card/card.component'
import { AppRoutingModule } from './app-routing.module';
import { ItemDropdownComponent } from './components/widgets/item-dropdown/item-dropdown.component';

@NgModule({
  declarations: [AppComponent, LoginComponent, HomeComponent, NewsComponent, CardComponent, ItemDropdownComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  exports: [ItemDropdownComponent],
  providers: [
    StatusBar,
    SplashScreen,
    IonTabs,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
