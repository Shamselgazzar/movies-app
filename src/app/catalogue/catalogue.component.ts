import { Component, OnInit, ViewChild } from '@angular/core';


import { TmdbService } from './tmdb.service';
import { Router } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.css']
})

export class CatalogueComponent implements OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  pageSize = 10;
  isLoading = true;
  //loadMore : boolean = false;
  movies : any[] = [];

  constructor (private tmdbService : TmdbService, private router: Router) {}

  ngOnInit(): void {
    
    //this.paginator.pageSize = this.pageSize;
    
    // localStorage.setItem('apiKey', 'your-api-key');
    // const apiKeyyy = localStorage.getItem('apiKey');
    // console.log(apiKeyyy);

    this.tmdbService.getTopRatedMovies().subscribe( 
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
    this.tmdbService.getTopRatedMovies(pageNumber).subscribe( 
      data => {
        const newMovies = this.movies.concat( data.results);
        this.movies= newMovies;
        console.log('the list length: '+this.movies.length);
        
      } 
    );
  }

  onPageChange(event: any){
    console.log(event.pageIndex);
  }
  
  goUp(){
      window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  goDown() {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  }

  
}
