import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


//import * as usersData from 'assets/users.json';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  private usersUrl = 'assets/users.json'
  users : any[] | undefined;

  constructor(private http: HttpClient) {}


  async authenticate(email: string, password: string): Promise<boolean> {
    try {
      this.users= await this.getUsers();
      const user = this.users?.find((u) => u.email === email && u.password === password);
      return !!user;
    } catch (error) {
      console.error('myError authenticating user:', error);
      return false;
    }
  }


  private async getUsers(): Promise<any[] | undefined> {
    return this.http.get<any[]>(this.usersUrl).toPromise();
  }


}
