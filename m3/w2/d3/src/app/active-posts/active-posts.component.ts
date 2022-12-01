import { Component, OnInit } from '@angular/core';
import { Post } from '../post';
import { PostServiceService} from '../post-service.service';

@Component({
  selector: 'app-active-posts',
  templateUrl: './active-posts.component.html',
  styleUrls: ['./active-posts.component.scss']
})
export class ActivePostsComponent implements OnInit {

  posts:Post[] = []

  constructor(private postSrv:PostServiceService) { }

  ngOnInit(): void {
    this.posts = this.postSrv.ottieniPostFiltrati(true);
  }
  disattivaPost(id:number){
    this.posts = this.posts.filter((e) => {
      return !(e.id == id)
    })
  }

}
