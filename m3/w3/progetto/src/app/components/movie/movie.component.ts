import { Component, OnInit, Input } from '@angular/core';
import { throwError } from 'rxjs/internal/observable/throwError';
import { catchError } from 'rxjs/internal/operators/catchError';
import { Favorite } from 'src/app/interfaces/favorite';
import { Movies } from 'src/app/interfaces/movies';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {

  @Input() film!:Movies
  liked = false;
  favorite:any = [];
  user:any = []
  filmFav:any;

  constructor(private movieSrv:MoviesService) { }

  ngOnInit(): void {
    let utente:any = localStorage.getItem('user')
    this.user = JSON.parse(utente)
    this.getFavorite(this.user.user.id)
  }

  buttonLike(id:number){
    if(this.liked == false){
      let favData:Favorite = {
        movieId: id,
        userId: this.user.user.id
      }
      this.movieSrv.like(favData).pipe(catchError(err => {
        throw err
      })).subscribe((res) => {
        this.liked = true
        console.log(this.liked)
      })
    } else {
      this.movieSrv.dislike(this.filmFav).subscribe((res) => {
        this.liked = false
      })
    }
  }

  getFavorite(id:number){
  this.movieSrv.getFavMovies(id).subscribe((res) => {
    this.favorite = res;
    console.log(this.favorite)
    // var film = this.favorite.find((element:any) => element.movieId == this.film.id)
    // if(film){
    //   this.liked = true
    //   this.filmFav = film.id
    // } else {
    //   this.liked = false
    // }
  })
}
}
