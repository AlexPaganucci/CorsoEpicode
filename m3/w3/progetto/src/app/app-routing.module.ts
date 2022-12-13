import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListMovieComponent } from './components/list-movie/list-movie.component';
import { LoginComponent } from './components/login/login.component';
import { MoviesComponent } from './components/movies/movies.component';
import { SignupComponent } from './components/signup/signup.component';
import { UserComponent } from './components/user/user.component';

const routes: Routes = [
  {
    path: "",
    component: LoginComponent
  },
  {
    path: "signup",
    component: SignupComponent
  },
  {
    path: "movies",
    component: MoviesComponent,
    children: [
      {
        path: "",
        component: ListMovieComponent
      },
      {
        path: "user",
        component: UserComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
