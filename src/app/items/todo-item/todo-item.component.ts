import { Component, OnInit, Input } from '@angular/core';
import { Todo } from '../../model/todo';


@Component({
  selector: 'todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  constructor() { }
  @Input() todo:Todo;
  ngOnInit() {
  }

}
