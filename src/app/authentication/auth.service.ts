import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, lastValueFrom } from 'rxjs';



@Injectable({
  providedIn: 'root'
})

export class AuthService {
  private usersUrl = 'assets/users.json'

  
  user!:any;
  users : any[] | undefined;

  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);
  
  

  constructor(private http: HttpClient) {}


  async authenticate(email: string, password: string): Promise<boolean> {
    try {
      this.users  = await this.getUsers();
      const user = this.users.find((u) => u.email === email && u.password === password);
      
      this.isAuthenticatedSubject.next(!!user);
      this.user = user;
      localStorage.setItem('isLoggedIn', 'true');
      console.log('AuthService says this user is authenticated = '+!!user)
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

  logout(){
    this.isAuthenticatedSubject.next(false);
    localStorage.removeItem('isLoggedIn');
  }

  isAuthenticatedCheck(){
    return this.isAuthenticatedSubject;
  }

  setLoggedIn(value: boolean): void {
    this.isAuthenticatedSubject.next(value);
  }



}
