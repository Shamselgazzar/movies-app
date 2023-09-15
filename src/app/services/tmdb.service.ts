import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class TmdbService {


  private pageNumber  = 1;
  public counter = 1;
  private apiKey = environment.apiKey;


  constructor(private http: HttpClient) { }


  getMovieDetails(movieId: string): Observable<any> {
    const url0 = 'https://api.themoviedb.org/3/movie/'+(movieId)+'?api_key='+this.apiKey;
  
    return this.http.get(url0);
  }

  getMovies(pageNumber: number = this.pageNumber, movieType = environment.movieType): Observable<any> {
    let apiUrl: string;
    switch (movieType) {
      case 'popular':
        apiUrl = 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=' + pageNumber + '&api_key=' + this.apiKey;
        break;
      case 'discover':
        apiUrl = 'https://api.themoviedb.org/3/discover/movie?language=en-US&page=' + pageNumber + '&api_key=' + this.apiKey;
        break;
      case 'topRated':
        apiUrl = 'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=' + pageNumber + '&api_key=' + this.apiKey;
        break;
      default:
        throw new Error('Invalid movie type');
    }
  
    return this.http.get(apiUrl);
  }


}
