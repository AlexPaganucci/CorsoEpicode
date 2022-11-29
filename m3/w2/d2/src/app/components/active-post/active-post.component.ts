
import { Component, OnInit } from '@angular/core';
import { Posts } from 'src/app/models/posts';
import { PostServiceService } from 'src/app/service/post-service.service';

@Component({
  selector: 'app-active-post',
  templateUrl: './active-post.component.html',
  styleUrls: ['./active-post.component.scss'],
  providers: [PostServiceService]
})
export class ActivePostComponent implements OnInit {

  posts:Posts[] = [];

  constructor(private postSrv:PostServiceService) { }

  ngOnInit(): void {
    this.postSrv.getPostsFilter(true);
  }
}
