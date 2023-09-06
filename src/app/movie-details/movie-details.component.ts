import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { TmdbService } from '../catalogue/tmdb.service';
import { Movie } from './movie';


@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit{
  movieId !: string;
  movie !: Movie;
 
  constructor(private route: ActivatedRoute, private movieService: TmdbService){}

  ngOnInit(): void {
    const movieId = this.route.snapshot.params['id'];
    this.movieId = movieId;
      if (movieId) {
        this.movieService.getMovieDetails(movieId).subscribe(
          data => {
            this.movie  = data;
            console.log(this.movie)             
        });
      }
  }

  getGenres(): string {
    return this.movie.genres.map(genre => genre.name).join(', ');
  }

  getProductionCompanies(): string {
    return this.movie.production_companies.map(company => company.name).join(', ');
  }

  getSpokenLanguages(): string {
    return this.movie.spoken_languages.map(language => language.name).join(', ');
  }
  
}


