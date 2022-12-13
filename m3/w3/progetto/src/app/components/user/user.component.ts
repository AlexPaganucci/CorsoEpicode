import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  user: any

  constructor() { }

  ngOnInit(): void {
    let utente:any = localStorage.getItem('user');
    this.user = JSON.parse(utente)
  }


}
