import { Injectable } from '@angular/core';
import { Todo } from '../model/todo';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(public http:HttpClient) { }
  private todoApi:string = "http://jsonplaceholder.typicode.com/todos?userId="

  get(id:number):Observable<Todo[]>{
      return this.http.get<Todo[]>(this.todoApi+id)
  }
}
