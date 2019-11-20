import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomePegeComponent} from '../app/panels/home-pege/home-pege.component'
import { CurrentUserComponent } from './panels/current-user/current-user.component';
import { PostsComponent } from './panels/posts/posts.component';
import { AlbumsComponent } from './panels/albums/albums.component';
import { TodosComponent } from './panels/todos/todos.component';


const routes: Routes = [{path:'',component :HomePegeComponent},{path:'currentUser',component :CurrentUserComponent},
                        {path:'posts',component:PostsComponent},{path :'albums',component:AlbumsComponent},
                        {path:'todos',component:TodosComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
