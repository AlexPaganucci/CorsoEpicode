import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  constructor(private userSrv:UserService) { }

  users:User[]=[]

  ngOnInit(): void {
    this.userSrv.addUser().then((res) => {
    this.users = res
    })
  }
}
