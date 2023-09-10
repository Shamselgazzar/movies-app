import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class TmdbService {
  filter = new BehaviorSubject<string>('topRated');

  private pageNumber  = 1;
  public counter = 1;
  private apiKey = '52d48651a5c52ca72ab4d544cf817d92';
  // private apiUrl = 'https://api.themoviedb.org/3';
  // private url = `${this.apiUrl}/movie/popular?api_key=${this.apiKey}`;

  constructor(private http: HttpClient) { }

  getMovieDetails(movieId: string): Observable<any> {
    const url0 = 'https://api.themoviedb.org/3/movie/'+(movieId)+'?api_key='+this.apiKey;
  
    return this.http.get(url0);
  }

  getMovies(pageNumber: number = this.pageNumber, movieType: string = 'topRated'): Observable<any> {
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
  

  getPopularMovies(pageNumber:number = this.pageNumber): Observable<any> {
    const popularUrl = 'https://api.themoviedb.org/3/movie/popular?language=en-US&page='+pageNumber+'&api_key='+this.apiKey;
    console.log(popularUrl)
    return this.http.get(popularUrl);
  }

  discoverMovies(pageNumber:number = this.pageNumber):Observable<any>{
    const discoverUrl = 'https://api.themoviedb.org/3/discover/movie?language=en-US&page='+pageNumber+'&api_key='+this.apiKey;
    return this.http.get(discoverUrl);
  }

  getTopRatedMovies(pageNumber:number = this.pageNumber): Observable<any>{
    const topRatedUrl = 'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page='+pageNumber+'&api_key='+this.apiKey;
    return this.http.get(topRatedUrl);
  
  }


}
