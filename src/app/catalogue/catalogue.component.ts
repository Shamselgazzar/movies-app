import { Component, OnInit } from '@angular/core';

import { Movie } from './movie';
import { TmdbService } from './tmdb.service';

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.css']
})

export class CatalogueComponent implements OnInit {
  
  
  //loadMore : boolean = false;
  movies : any[] = [];

  constructor (private tmdbService : TmdbService) {}

  ngOnInit(): void {

    localStorage.setItem('apiKey', 'your-api-key');
const apiKeyyy = localStorage.getItem('apiKey');
console.log(apiKeyyy);

    this.tmdbService.getTopRatedMovies().subscribe( 
      data => {
        console.log(data.results.length)
        this.movies = data.results;
        console.log(data.results[0])
      } 
    );
  }

  loadMoreMovies(){
    
    const pageNumber = ++this.tmdbService.counter;
    console.log('page number is : '+ pageNumber)
    this.tmdbService.getTopRatedMovies(pageNumber).subscribe( 
      data => {
        const newMovies = this.movies.concat( data.results);
        this.movies= newMovies;
        console.log('the list length: '+this.movies.length);
        
      } 
    );
  }
  
  goUp(){
      window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  goDown() {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  }

  
}
