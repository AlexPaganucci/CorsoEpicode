import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from 'src/app/services/auth.service';
import { Movies } from '../interfaces/movies';
import { User } from '../interfaces/user';
import { take, tap } from 'rxjs/operators';
import { Favorite } from '../interfaces/favorite';



@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  movies:Movies[] = []

  constructor(private http: HttpClient) { }

  getMovies(){
    return this.http.get<Movies[]>('http://localhost:4201/movies-popular').pipe(tap((res)=>{
      this.movies = res
    }))
  }

  getFavMovies(idUser:number){
    return this.http.get<Favorite[]>(`http://localhost:4201/favorites?userId=${idUser}`)
  }

  like(data:Favorite) {
    return this.http.post<Favorite[]>('http://localhost:4201/favorites', data)
  }

  dislike(id:number) {
    return this.http.delete<Favorite>('http://localhost:4201/favorites?userId='+id)
  }
}
