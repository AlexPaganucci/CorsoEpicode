import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users:User[] = []

  constructor() { }

  addUsers() {
    return fetch("http://localhost:3000/Users").then(res=>res.json()).then(res=>{
      this.users = res;
      return this.users
    })
  }

  addUserById(id:number){
    return fetch("http://localhost:3000/Users").then(res=>res.json()).then(res=>{
      this.users =res;
      return this.users.find(user=>user.id==id);
    })
  }

}
