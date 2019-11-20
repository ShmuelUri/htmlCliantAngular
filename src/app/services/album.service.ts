import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Album } from '../model/album';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  constructor(public http:HttpClient) { }
  private albumApi:string = "http://jsonplaceholder.typicode.com/albums?userId="

  get(id:number):Observable<Album[]>{
      return this.http.get<Album[]>(this.albumApi+id)
  }
}
