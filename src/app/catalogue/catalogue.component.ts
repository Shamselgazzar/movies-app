import { Component, OnInit } from '@angular/core';

import { Movie } from './movie';
import { TmdbService } from './tmdb.service';

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.css']
})

export class CatalogueComponent implements OnInit {
  movies : Movie[] = [];
  //const movieee: string = '';

  constructor (private tmdbService : TmdbService) {}

  ngOnInit(): void {
    this.tmdbService.getPopularMovies().subscribe( 
      data => {
        this.movies = data;
        console.log(data);
        
        //this.movies.push(new Movie(data.))
      }
    )
  }

   

  
}
