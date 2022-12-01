import { Component, OnInit } from '@angular/core';
import { PostServiceService } from '../post-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private postSrv:PostServiceService) { }
//Non è il modo corretto per eseguirlo all'avvio
  ngOnInit(): void {
    this.postSrv.getPosts();
  }

}
