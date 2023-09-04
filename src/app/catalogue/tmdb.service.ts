import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class TmdbService {

  
  // private apiKey = 'YOU52d48651a5c52ca72ab4d544cf817d92';
  // private apiUrl = 'https://api.themoviedb.org/3';
  // private url = `${this.apiUrl}/movie/popular?api_key=${this.apiKey}`;

  constructor(private http: HttpClient) { }

  getMovies(movieNumer: number): Observable<any> {
    const movieNumber = movieNumer.toString();
    const url0 = 'https://api.themoviedb.org/3/movie/'+(movieNumber)+'?api_key=52d48651a5c52ca72ab4d544cf817d92';
  
    return this.http.get(url0);
  }

  getPopularMovies(): Observable<any> {
    const popularUrl = 'https://api.themoviedb.org/3/movie/popular?api_key=52d48651a5c52ca72ab4d544cf817d92'
    return this.http.get(popularUrl);
  }

  discoverMovies():Observable<any>{
    const discoverUrl = 'https://api.themoviedb.org/3/discover/movie?api_key=52d48651a5c52ca72ab4d544cf817d92'
    return this.http.get(discoverUrl);
  }

  
}
