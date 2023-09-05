import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { TmdbService } from '../catalogue/tmdb.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit{
  movieId : string = '';
  movie : any = {};
  
  constructor(private route: ActivatedRoute, private movieService: TmdbService){}

  ngOnInit(): void {
    
    // console.log(this.movieId);
    // this.route.params.subscribe(
    //   (params:Params)=>{
    //     this.movieId = params['id'];
    //   }      
    // );

    this.movieId = this.route.snapshot.params['id'];
    
    this.movie = this.movieService.getMovieDetails(this.movieId);
    console.log('this is a movie object'+this.movie);
    console.log(this.movie);
    //console.log(this.movieService.counter);
    debugger
  }
}
