import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
//Components
import { LoginComponent} from './components/login/login.component'
import { HomeComponent} from './components/home/home.component'
import { NewsComponent } from './components/home/tabs/news/news.component'
import { CardComponent } from './components/home/tabs/card/card.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', redirectTo: 'home/news', pathMatch: 'full' },
  {
    path: 'login',
    component: LoginComponent
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
