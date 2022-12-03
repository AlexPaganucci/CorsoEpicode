import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-users-details',
  templateUrl: './users-details.component.html',
  styleUrls: ['./users-details.component.scss'],
})
export class UsersDetailsComponent implements OnInit {
  user: User | undefined;
  constructor(private userSrv: UserService, private ar: ActivatedRoute) {}

  ngOnInit(): void {
    let p = this.ar.snapshot.params['id'];
    this.userSrv.addUserById(p).then((res) => {
      this.user = res;
    });
  }
}
