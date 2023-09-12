import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

import { TmdbService } from './tmdb.service';



@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.css']
})

export class CatalogueComponent implements OnInit {

  isLoading = true;
  movies : any[] = [];
  filter = 'topRated';
  
  constructor (
    private tmdbService : TmdbService,
    private location: Location,
    private route: ActivatedRoute
    ) {}

  ngOnInit(): void {
    
    this.checkCategoryAndFetchMovies();

    localStorage.setItem('currentUrl', this.location.path());
  }

  checkCategoryAndFetchMovies(){

    this.route.queryParams.subscribe(params => {
      
      const receivedData = params['category'];
      console.log('category: ', receivedData);
      
      this.filter = receivedData;

      this.fetchMovies();
      
    });
  }

  fetchMovies(){
    this.tmdbService.getMovies(1,this.filter).subscribe( 
      data => {
        console.log(data.results.length)
        this.movies = data.results;
        console.log(data.results)
        this.isLoading = false;
      } 
    );  
  }

  loadMoreMovies(){
    const pageNumber = ++this.tmdbService.counter;
    console.log('page number is : '+ pageNumber)
    this.tmdbService.getMovies(pageNumber,this.filter).subscribe( 
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
