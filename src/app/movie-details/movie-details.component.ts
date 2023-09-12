import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { TmdbService } from '../catalogue/tmdb.service';
import { Movie } from './movie';


@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit{

  movieId : any;
  movie !: Movie;
 
  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private movieService: TmdbService
      ){}

  ngOnInit(): void {

    this.route.paramMap.subscribe(params=>{
      this.movieId=params.get('id');
    })

    this.getMovie()
    
    localStorage.setItem('currentUrl', this.location.path());
      
  }

  getMovie(){
    if (this.movieId) {
      this.movieService.getMovieDetails(this.movieId).subscribe(
        data => {
          this.movie  = data;
          console.log(this.movie);            
      });
    }
  }

  // Movie object in object data handling
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


