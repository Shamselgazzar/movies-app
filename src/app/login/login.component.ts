import { Component, OnInit } from '@angular/core';

import * as usersData from './users.json';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  email: string = '';
  password: string = '';
  //users: [] = usersData a;

  ngOnInit(): void {
    const users = usersData as any[];
    console.log(users[0]);
  }
  
  authenticate(email: string, password: string): boolean {
    
    const users = usersData as any[];

    const user = users.find((u) => u.email === email && u.password === password);
    return !!user;
  }
  
  onSubmit(){
    //console.log(usersData);
  }
  
}
