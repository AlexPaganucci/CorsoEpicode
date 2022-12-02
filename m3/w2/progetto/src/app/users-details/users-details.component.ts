import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';

@Component({
  selector: 'app-users-details',
  templateUrl: './users-details.component.html',
  styleUrls: ['./users-details.component.scss'],
})
export class UsersDetailsComponent implements OnInit {
  user!: User;
  id!: number;
  constructor(private userSrv: UserService) {}

  ngOnInit(): void {
    //leggere id dall'url - nel sservice creare una fetch
    //this.user = this.userSrv.recuper utenteID;
  }
}
