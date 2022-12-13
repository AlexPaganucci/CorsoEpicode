import { Component, OnInit } from '@angular/core';
import { Movies } from 'src/app/interfaces/movies';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-list-movie',
  templateUrl: './list-movie.component.html',
  styleUrls: ['./list-movie.component.scss']
})
export class ListMovieComponent implements OnInit {

  movies:Movies[] = [];

  constructor(private movieSrv:MoviesService) { }

  ngOnInit(): void {
    this.movieSrv.getMovies().subscribe((res) =>{
      this.movies = res;
    })
  }

}
