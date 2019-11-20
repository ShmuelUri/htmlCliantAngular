import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';
import { Post } from '../../model/post';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  public posts :Post[];
  constructor(public postSvc:PostService,public userSvc:UserService) { }

  ngOnInit() {
    this.postSvc.get(this.userSvc.currentUser.id).subscribe(data =>{this.posts = data})
  }

}
