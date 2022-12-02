import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ActivePostsComponent } from './active-posts/active-posts.component';
import { InactivePostsComponent } from './inactive-posts/inactive-posts.component';
import { PostCardComponent } from './post-card/post-card.component';
import { DettagliPostComponent } from './dettagli-post/dettagli-post.component';
import { UsersComponent } from './users/users.component';
import { EvidenziaDirective } from './directives/evidenzia.directive';
import { UsersDetailsComponent } from './users-details/users-details.component';
import { PostsDetailsComponent } from './posts-details/posts-details.component';
import { MaiuscoloPipe } from './pipes/maiuscolo.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ActivePostsComponent,
    InactivePostsComponent,
    PostCardComponent,
    DettagliPostComponent,
    UsersComponent,
    EvidenziaDirective,
    UsersDetailsComponent,
    PostsDetailsComponent,
    MaiuscoloPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
