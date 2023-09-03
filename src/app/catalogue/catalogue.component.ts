import { Component, OnInit } from '@angular/core';

import { Movie } from './movie';
import { TmdbService } from './tmdb.service';

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.css']
})

export class CatalogueComponent implements OnInit {
  //movies2 : Movie[] = [];
  //const movieee: string = '';
  myMovie = new Movie('','',new Date,'','')
  s :string = this.myMovie.title
  no : number = 3;

  movies : any[] = [];

  constructor (private tmdbService : TmdbService) {}

  ngOnInit(): void {
    
    for (let i = 550; i < 555; i++) {
      
      this.tmdbService.getMovies(i).subscribe( 
        data => {
          //console.log(data)
          const newMovie = new Movie(
            data.original_title, 
            data.title, 
            data.release_date, 
            data.overview, 
            data.backdrop_path
          );
        this.myMovie = newMovie;
        this.movies.push(newMovie);
       
        }
      )
      

    }

    this.tmdbService.getPopularMovies().subscribe( 
      data => {
        console.log(data.results.length)
        this.movies = data.results;
        console.log(data.results[0])
      }
    );
      
      
      
    

  }

  
}
