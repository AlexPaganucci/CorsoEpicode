import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivePostsComponent } from './active-posts/active-posts.component';
import { HomeComponent } from './home/home.component';
import { InactivePostsComponent } from './inactive-posts/inactive-posts.component';
import { PostsDetailsComponent } from './posts-details/posts-details.component';
import { UsersDetailsComponent } from './users-details/users-details.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "active",
    component: ActivePostsComponent,
  },
  {
    path: "active/false",
    component: InactivePostsComponent,
  },
  {
    path: "active/:id",
    component: PostsDetailsComponent,
  },
  {
    path: "active/false/:id",
    component: PostsDetailsComponent,
  },
  {
    path: "users",
    component: UsersComponent,
    children:[
      {
        path:":id",
        component: UsersDetailsComponent
      }
    ]
  },
  {
    path:"**",
    redirectTo:""
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
