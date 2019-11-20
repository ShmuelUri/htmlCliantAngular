import { Component, OnInit, Input } from '@angular/core';
import { Album } from '../../model/album';

@Component({
  selector: 'albums-item',
  templateUrl: './albums-item.component.html',
  styleUrls: ['./albums-item.component.css']
})
export class AlbumsItemComponent implements OnInit {
@Input() album : Album
  constructor() { }

  ngOnInit() {
  }

}
