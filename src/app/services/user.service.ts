import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, observable } from 'rxjs';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public http:HttpClient) { }
  private userApi:string = "http://jsonplaceholder.typicode.com/users"
   public currentUser : User ;

  get():Observable<User[]>{
      return this.http.get<User[]>(this.userApi)
  }

  getUser(id:number):Observable<User>{
    return this.http.get<User>(this.userApi + "/" + id)
}
}
