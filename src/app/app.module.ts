import { AvisoComponent } from './components/aviso/aviso.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy, IonTabs } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
//components
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { AdminComponent } from './components/admin/admin.component';
import { CreateUserComponent } from './components/admin/create-user/create-user.component';
import { HomeComponent } from './components/home/home.component';
import { NewsComponent } from './components/home/tabs/news/news.component'
import { CardComponent } from './components/home/tabs/card/card.component'
import { AppRoutingModule } from './app-routing.module';
import { ItemDropdownComponent } from './components/widgets/item-dropdown/item-dropdown.component';
import { MenuComponent } from './components/home/tabs/menu/menu.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { CreatenewsComponent } from './components/createnews/createnews.component';
import { UserComponent } from './components/user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    NewsComponent,
    CardComponent,
    ItemDropdownComponent,
    MenuComponent,
    AdminComponent,
    CreateUserComponent,
    CreatenewsComponent,
    AvisoComponent,
    UserComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, FormsModule, HttpClientModule],
  exports: [ItemDropdownComponent],
  providers: [
    StatusBar,
    SplashScreen,
    IonTabs,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
