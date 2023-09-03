import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class TmdbService {

  private fUrl = 'https://api.themoviedb.org/3/movie/550?api_key=52d48651a5c52ca72ab4d544cf817d92';

  private apiKey = 'YOU52d48651a5c52ca72ab4d544cf817d92';
  private apiUrl = 'https://api.themoviedb.org/3';

  constructor(private http: HttpClient) { }

  getPopularMovies(): Observable<any> {
    //const url = `${this.apiUrl}/movie/popular?api_key=${this.apiKey}`;
    const url = this.fUrl
    return this.http.get(url);
  }
}
