import { Component, OnInit } from '@angular/core';
import { Post } from '../post';
import { PostServiceService } from '../post-service.service';

@Component({
  selector: 'app-inactive-posts',
  templateUrl: './inactive-posts.component.html',
  styleUrls: ['./inactive-posts.component.scss']
})
export class InactivePostsComponent implements OnInit {

  posts:Post[]=[]

  constructor(private postSrv:PostServiceService) { }

  ngOnInit(): void {
    this.posts = this.postSrv.ottieniPostFiltrati(false);
  }

  attivaPost(id:number){
    this.posts = this.posts.filter((e) => {
      return !(e.id == id)
    })
  }

}
