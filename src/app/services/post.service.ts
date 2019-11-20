import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from '../model/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(public http:HttpClient) { }
  private postApi:string = "https://jsonplaceholder.typicode.com/posts?userId="

  get(id:number):Observable<Post[]>{
      return this.http.get<Post[]>(this.postApi + id)
  }
}
