import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

import { TmdbService } from '../../services/tmdb.service';



@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.css']
})

export class CatalogueComponent implements OnInit {
  title = 'catalogue';
  isLoading = true;
  totalPages : any;
  movies : any[] = [];
  filter : string | undefined;
  
  constructor (
    private tmdbService : TmdbService,
    private location: Location,
    private route: ActivatedRoute,
    public translate : TranslateService
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
    this.tmdbService.counter = 1;
    this.tmdbService.getMovies(1,this.filter).subscribe( 
      data => {
        console.log(data.results.length)
        this.totalPages = data.total_pages;
        this.movies = data.results;
        console.log(data.results);
        this.isLoading = false;
      } 
    );  
  }

  // pagination button fn
  loadMoreMovies(){
    const pageNumber = ++this.tmdbService.counter;
    if(pageNumber <= this.totalPages){

      console.log('loading more movies...')
      console.log('total pages: '+this.totalPages)
      console.log('page number is : '+ pageNumber)

      this.tmdbService.getMovies(pageNumber,this.filter).subscribe( 
        data => {
          const newMovies = this.movies.concat( data.results);
          this.movies= newMovies;
          console.log('the list length: '+this.movies.length);
        });
    }else{
      console.log('No more movies to load...')
    }
    
  }

  // floating scroll buttons fn
  goUp(){
      window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  goDown() {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  }

  
}
