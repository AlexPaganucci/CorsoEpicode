import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';
import { SignupUser } from '../interfaces/signup-user';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { BehaviorSubject, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { MoviesService } from './movies.service';



@Injectable({
  providedIn: 'root'
})
export class AuthService {
  jwtHelper = new JwtHelperService();

  url = "http://localhost:4201";
  private authSubject = new BehaviorSubject<null | User>(null);
  u$ = this.authSubject.asObservable();
  user$ = this.u$.pipe(map(u=>!!u));

  autologoutTimer:any;
  userId:number|null = null


  constructor(private http: HttpClient, private router:Router) {
    this.restoreUser();
  }

  login(data: { email: string; password: string }) {
    return this.http.post<User>(`${this.url}/login`, data).pipe(
      tap((val) => {
        console.log(val);
      }),
      tap((data) => {
        this.authSubject.next(data);
        localStorage.setItem('user',JSON.stringify(data))
        this.userId = data.user.id;
        const expirationDate = this.jwtHelper.getTokenExpirationDate(data.accessToken) as Date
        this.autoLogout(expirationDate)
      }),
      catchError(this.errors)
    );
  }

  getUserId(){
    return this.userId;
  }

  restoreUser(){
    const userJson = localStorage.getItem('user')
    if (!userJson){
      return
    }
    const user:User = JSON.parse(userJson)
    if(this.jwtHelper.isTokenExpired(user.accessToken)){
      return
    }
    this.authSubject.next(user)
    const expirationDate = this.jwtHelper.getTokenExpirationDate(user.accessToken) as Date
    this.autoLogout(expirationDate);
  }

  signup(data:SignupUser){
    return this.http
    .post(`${this.url}/register`, data)
    .pipe(catchError(this.errors));
  }

  logout(){
    this.authSubject.next(null)
    this.router.navigate(["/"])
    localStorage.removeItem('user')
    if (this.autologoutTimer) {
      clearTimeout(this.autologoutTimer)
    }
  }

  autoLogout(expirationDate:Date){
    const expMs = expirationDate.getTime() - new Date().getTime()
   this.autologoutTimer = setTimeout(() => {
      this.logout()
    }, expMs);
  }

  private errors(err: any) {
    console.log(err)
    switch (err.error) {
      case "Email and password are required":
        return throwError("Email e password sono obbligatorie");
        break;
      case "Email already exists":
        return throwError("Utente gia registrato");
        break;
      case "Email format is invalid":
        return throwError("Email scritta male");
        break;
      case "Cannot find user":
        return throwError("Utente non esiste");
        break;

      default:
        return throwError("Errore nella chiamata");
        break;
    }
  }
}

