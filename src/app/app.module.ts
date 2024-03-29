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
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { CreatenewsComponent } from './components/createnews/createnews.component';
import { UserComponent } from './components/user/user.component';
import { CreatedocsComponent } from './components/createdocs/createdocs.component';
import { DocsComponent } from './components/docs/docs.component';
import { DocComponent } from './components/doc/doc.component';
import { FileTransfer, FileTransferObject } from '@ionic-native/file-transfer/ngx';
import { File } from '@ionic-native/file/ngx';
import { FileOpener } from '@ionic-native/file-opener/ngx';
import { FiltroModalComponent } from './components/home/tabs/news/filtro-modal/filtro-modal.component';
import { TokenInterceptor } from './services/interceptors/token-interceptor';
import { SocioOrgaoComponent } from './components/admin/socio-orgao/socio-orgao.component';
import { UpdateSocioOrgaoComponent } from './components/admin/socio-orgao/update-socio-orgao/update-socio-orgao.component';


import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
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
    UserComponent,
    CreatedocsComponent,
    DocsComponent,
    DocComponent, 
    FiltroModalComponent,
    SocioOrgaoComponent,
    UpdateSocioOrgaoComponent
  ],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, FormsModule, HttpClientModule],
  exports: [ItemDropdownComponent],
  providers: [
    StatusBar,
    SplashScreen,
    IonTabs,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    FileTransfer,FileOpener,
    File,
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
    InAppBrowser
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
