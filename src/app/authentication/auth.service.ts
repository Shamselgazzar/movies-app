import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, lastValueFrom } from 'rxjs';
//import * as userss from '../../assets/users.json';
//import * as fs from'fs';

@Injectable({providedIn: 'root'})

export class AuthService {
  private usersUrl = 'assets/users.json'

  
  user!:any;
  users : any[] | undefined;
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(!!localStorage.getItem('isLoggedIn'));

  constructor(private http: HttpClient) {}


  async authenticate(email: string, password: string): Promise<boolean> {
    try {
      
      this.users  = await this.getAllUsers();
      const user = this.users.find((u) => u.email === email && u.password === password);
      
      this.isAuthenticatedSubject.next(!!user);
      this.user = user;
      
      localStorage.setItem('isLoggedIn', (!!user).toString());
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

  async getAllUsers(){
    var allUsers :any[];
    var storageUsers:any[];
    const currentUsers  = await this.getUsers();
    const storageUsersJSON = localStorage.getItem('users');

    if (storageUsersJSON !== null) {
      storageUsers = JSON.parse(storageUsersJSON);
      allUsers = currentUsers.concat(storageUsers);
    } else {
      allUsers = currentUsers;
      storageUsers = [];
    }
    return allUsers;
  }

  async signUp(email: string, password: string) : Promise <string>{
    
    var allUsers :any[];
    var storageUsers:any[];
    const currentUsers  = await this.getUsers();
    const storageUsersJSON = localStorage.getItem('users');

    if (storageUsersJSON !== null) {
      storageUsers = JSON.parse(storageUsersJSON);
      allUsers = currentUsers.concat(storageUsers);
    } else {
      allUsers = currentUsers;
      storageUsers = [];
    }
    const user = allUsers.find((u) => u.email === email);
    if(user){
      return 'this user is already registered.. login instead'
    }else{
      console.log(allUsers)
      storageUsers.push({"email": email, "password": password });
      console.log(allUsers)
      localStorage.setItem('users',  JSON.stringify(storageUsers))
      //fs.writeFileSync('../../assets/data.json', currentUsers, 'utf-8');
      //await this.http.put<any[]>('../../assets/users.json', currentUsers).toPromise;
      return 'you are now successfully registered.. go to login'
    }
  }



}
