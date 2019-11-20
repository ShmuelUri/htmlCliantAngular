import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../../model/post';

@Component({
  selector: 'post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.css']
})
export class PostItemComponent implements OnInit {
@Input() post:Post;
public plag =false
  constructor() { }

  ngOnInit() {
  }
  change(){
    this.plag = !this.plag
  }

}
