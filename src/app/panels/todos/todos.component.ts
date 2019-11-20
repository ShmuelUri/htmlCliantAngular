import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { UserService } from '../../services/user.service';
import { Todo } from '../../model/todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  public todos : Todo[] = []
  constructor(public todoSvc : TodoService , public userSvc : UserService ) { }

  ngOnInit() {
    this.todoSvc.get(this.userSvc.currentUser.id).subscribe(data =>{ this.todos = data})
  }

}
