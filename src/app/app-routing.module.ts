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
    path: 'createnews',
    component: CreatenewsComponent
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
