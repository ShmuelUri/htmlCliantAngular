import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { UsersListComponent } from './panels/users-list/users-list.component';
import { CurrentUserComponent } from './panels/current-user/current-user.component';
import { TodosComponent } from './panels/todos/todos.component';
import { AlbumsComponent } from './panels/albums/albums.component';
import { PostsComponent } from './panels/posts/posts.component';
import { HomePegeComponent } from './panels/home-pege/home-pege.component';
import { TodoItemComponent } from './items/todo-item/todo-item.component';
import { PostItemComponent } from './items/post-item/post-item.component';
import { AlbumsItemComponent } from './items/albums-item/albums-item.component'

@NgModule({
  declarations: [
    AppComponent,
    UsersListComponent,
    CurrentUserComponent,
    TodosComponent,
    AlbumsComponent,
    PostsComponent,
    HomePegeComponent,
    TodoItemComponent,
    PostItemComponent,
    AlbumsItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  
  providers: [],
  bootstrap: [AppComponent]

})
export class AppModule { }
