import { Component, OnInit } from '@angular/core';
import { AlbumService } from '../../services/album.service';
import { UserService } from '../../services/user.service';
import { Album } from '../../model/album';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {
public albums:Album[] = [];
  constructor(public albumSvc : AlbumService,public userSvc :UserService) { }

  ngOnInit() {
    this.albumSvc.get(this.userSvc.currentUser.id).subscribe(data =>this.albums = data)
  }

}
