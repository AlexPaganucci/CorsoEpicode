import { getSafePropertyAccessString } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Posts } from '../models/posts';

const url:string = 'http://localhost:3000/posts'

@Injectable({
  providedIn: 'root'
})
export class PostServiceService {

  constructor() { }

  async getPosts(){
    let res = await fetch(url);
    let posts:Posts[] = await res.json();
    return posts;
  }

  async getPostsFilter(active:boolean){
    (await this.getPosts()).filter((e) => {
      if(e.active == active){
        return true;
      } else {
        return false;
      }
  });
  }
}
