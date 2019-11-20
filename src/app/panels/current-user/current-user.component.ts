import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../model/user';

@Component({
  selector: 'app-current-user',
  templateUrl: './current-user.component.html',
  styleUrls: ['./current-user.component.css']
})
export class CurrentUserComponent implements OnInit  {
  public user:User;
  constructor(public userSvc : UserService) {
   
   }
  
  ngOnInit() {
    this.user = this.userSvc.currentUser;
  }

}
