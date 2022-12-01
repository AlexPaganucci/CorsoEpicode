import { Injectable } from '@angular/core';
import { Post } from './post';

@Injectable({
  providedIn: 'root'
})
export class PostServiceService {

  posts:Post[] = [];

  constructor() { }


  getPosts(){
    let f = fetch("http://localhost:3000/posts")
    let r = f.then((res):Promise<Post[]>=>{
      if(res.ok){
        return res.json()
      }
      throw new Error("Lettura fallita")
    })

    r.then((res)=>{
      this.posts=res
    })

    r.catch((err)=>{
      console.log("Errore", err.getMessage());
    })
  }

  ottieniPost(){
    return this.posts;
  }

  ottieniPostFiltrati(a:boolean){
    let arrFiltrato = this.posts.filter((e) => {
      if(e.active == a){
        return true;
      } else {
        return false;
      }
    })
    return arrFiltrato;
  }

  attivaPost(id:number){
    let indexPostDaAttivare = this.posts.findIndex((e) => {
      return e.id == id;
    })
    if(!indexPostDaAttivare){
      throw new Error('post non trovato')
    }
    this.posts[indexPostDaAttivare].active = true;
    fetch('http://localhost:3000/posts'+id, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.posts[indexPostDaAttivare])
    })
  }

  disattivaPost(id:number){
    let indexPostDaAttivare = this.posts.findIndex((e) => {
      return e.id == id;
    })
    if(indexPostDaAttivare == undefined){
      throw new Error('post non trovato')
    }
    this.posts[indexPostDaAttivare].active = false;
    fetch('http://localhost:3000/posts'+id, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.posts[indexPostDaAttivare])
    })
  }
}
