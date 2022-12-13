import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { MoviesComponent } from './components/movies/movies.component';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import { TokenInterceptor } from './interceptors/token.interceptor';
import { UserComponent } from './components/user/user.component';
import { MovieComponent } from './components/movie/movie.component';
import { ListMovieComponent } from './components/list-movie/list-movie.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    MoviesComponent,
    UserComponent,
    MovieComponent,
    ListMovieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    {
      provide:HTTP_INTERCEPTORS,
      useClass:TokenInterceptor,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
