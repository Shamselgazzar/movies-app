import { Component, OnInit } from '@angular/core';

import { Movie } from './movie';
import { TmdbService } from './tmdb.service';

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.css']
})

export class CatalogueComponent implements OnInit {
  movies : any[] = [];
  //const movieee: string = '';
  myMovie = new Movie('','',new Date,'','')
  no : number = 3;

  constructor (private tmdbService : TmdbService) {}

  ngOnInit(): void {
    this.tmdbService.getPopularMovies().subscribe( 
      data => {
        this.movies = data;
        //console.log(data);
        const newMovie = new Movie(
          data.original_title, 
          data.title, 
          data.release_date, 
          data.overview, 
          data.backdrop_path
        );
        
      //this.movies.push(newMovie);
        

      }
    )
  }

   

  
}
