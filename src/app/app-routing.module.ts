import { AvisoComponent } from './components/aviso/aviso.component';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
//Components
import { LoginComponent} from './components/login/login.component'
import { HomeComponent} from './components/home/home.component'
import { NewsComponent } from './components/home/tabs/news/news.component'
import { CardComponent } from './components/home/tabs/card/card.component';
import { MenuComponent } from './components/home/tabs/menu/menu.component';
import { CreatenewsComponent } from './components/createnews/createnews.component';
import { CreateUserComponent } from './components/admin/create-user/create-user.component';
import { AdminComponent } from './components/admin/admin.component';
import { UserComponent } from './components/user/user.component';
import { CreatedocsComponent } from './components/createdocs/createdocs.component';
import { DocsComponent } from './components/docs/docs.component';
import { DocComponent } from './components/doc/doc.component';
import { SocioOrgaoComponent } from './components/admin/socio-orgao/socio-orgao.component';
import { UpdateSocioOrgaoComponent } from './components/admin/socio-orgao/update-socio-orgao/update-socio-orgao.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', redirectTo: 'home/news', pathMatch: 'full' },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'admin',
    component: AdminComponent
  },
  {
    path: 'createuser',
    component: CreateUserComponent
  },
  {
    path: 'socioorgao',
    component: SocioOrgaoComponent
  },
  {
    path: 'socioorgao/manage/:id',
    component: UpdateSocioOrgaoComponent
  },
  {
    path: 'createnews',
    component: CreatenewsComponent
  },
  {
    path: 'createdocs',
    component: CreatedocsComponent
  },
  {
    path: 'docs',
    component: DocsComponent
  },
  {
    path: 'docs/:id',
    component: DocComponent
  },
  {
    path: 'user/:id',
    component: UserComponent
  },
  {
    path: 'aviso/:id',
    component: AvisoComponent
  },
  {
    path: 'home',
    component: HomeComponent,
    children: [
      {
        path: 'news',
        component: NewsComponent
      },
      {
        path: 'card',
        component: CardComponent
      },
      {
        path: 'menu',
        component: MenuComponent
      },
    ]
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
