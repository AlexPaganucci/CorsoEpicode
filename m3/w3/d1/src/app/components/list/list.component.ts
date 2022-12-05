import { Component, OnInit } from '@angular/core';
import { Photos } from 'src/app/interfaces/photos';
import { PhotoService } from 'src/app/services/photo.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  photos:Photos[] = [];

  constructor(private photoSrv:PhotoService) { }

  ngOnInit(): void {
    this.photoSrv.recuperaPhotos().subscribe(res => {
      this.photos = res;
    })
  }

}
