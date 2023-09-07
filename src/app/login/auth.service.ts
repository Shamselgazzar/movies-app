import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';


//import * as usersData from 'assets/users.json';


@Injectable({
  providedIn: 'root'
})

export class AuthService {
  private isAuthenticated : boolean = false;

  private usersUrl = 'assets/users.json'
  users : any[] | undefined;

  constructor(private http: HttpClient) {}

  isAuthenticatedCheck(){
    return this.isAuthenticated
  }

  async authenticate(email: string, password: string): Promise<boolean> {
    try {
      this.users  = await this.getUsers();
      const user = this.users.find((u) => u.email === email && u.password === password);
      this.isAuthenticated = !!user;
      console.log('AuthService says this user is authenticated = '+this.isAuthenticated)
      return !!user;
    } catch (error) {
      console.error('myError authenticating user:', error);
      return false;
    }
  }


  private async getUsers() {
    const source =  this.http.get<any[]>(this.usersUrl);
    const users = await lastValueFrom(source);
    return users;
  }


}
