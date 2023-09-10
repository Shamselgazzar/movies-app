import { Component, OnInit, ViewChild } from '@angular/core';
import { Location } from '@angular/common';

import { TmdbService } from './tmdb.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.css']
})

export class CatalogueComponent implements OnInit {
  titleee = 'catalog';

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  //pageSize = 10;
  isLoading = true;
  //loadMore : boolean = false;
  movies : any[] = [];
  filter = 'topRated';
  
  constructor (private tmdbService : TmdbService, private router: Router, private location: Location, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      
      const receivedData = params['category'];
      console.log('category', receivedData);
      this.filter = receivedData;
      this.fetchMovies();
    });

    localStorage.setItem('currentUrl', this.location.path());

    

   


  }

  fetchMovies(){
    this.tmdbService.getMovies(1,this.filter).subscribe( 
      data => {
        console.log(data.results.length)
        this.movies = data.results;
        console.log(data.results)
        // setTimeout(() => {
        //   this.isLoading = false;
        // }, 200);
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
