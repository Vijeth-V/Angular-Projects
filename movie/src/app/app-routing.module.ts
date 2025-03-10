import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './components/home/home-page/home-page.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  { path: '', component: HomePageComponent }, 
  { path: 'login', component: LoginComponent },
  { path: 'signup', loadChildren: () => import('./components/sign-up/sign-up.module').then(m => m.SignUpModule) },
  { path: 'movies', loadChildren: () => import('./components/movie-list/movie-list.module').then(m => m.MovieListModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
