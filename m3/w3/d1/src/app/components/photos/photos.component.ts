import { Component, Input, OnInit } from '@angular/core';
import { Photos } from 'src/app/interfaces/photos';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent implements OnInit {

  @Input() photo:Photos|undefined;

  constructor() { }

  ngOnInit(): void {
  }

  elimina(){}
}
