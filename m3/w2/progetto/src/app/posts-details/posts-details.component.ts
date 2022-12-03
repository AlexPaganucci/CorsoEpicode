import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from '../post';
import { PostService } from '../post.service';

@Component({
  selector: 'app-posts-details',
  templateUrl: './posts-details.component.html',
  styleUrls: ['./posts-details.component.scss'],
})
export class PostsDetailsComponent implements OnInit {
  post: Post | undefined;

  constructor(private postSrv: PostService, private ar: ActivatedRoute) {}

  ngOnInit(): void {
    let p = this.ar.snapshot.params['id'];
    this.postSrv.addPostById(p).then((res) => {
      this.post = res;
    });
  }
}
