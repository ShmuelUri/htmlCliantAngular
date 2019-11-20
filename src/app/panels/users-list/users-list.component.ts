import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../model/user';
import { Router } from '@angular/router';

@Component({
  selector: 'users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  public users:User[] = [];
  constructor(public userSvc:UserService ,public router:Router) {
    
   }

  ngOnInit() {
    this.userSvc.get().subscribe(data =>  this.users = data)
  }
  selectUser(userId:number):void{
      this.userSvc.getUser(userId).subscribe(data =>  this.userSvc.currentUser = data)
      setTimeout(()=>{ this.router.navigate(['currentUser'])} ,120)
     
  }
  
}
