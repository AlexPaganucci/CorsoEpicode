import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo';

@Component({
  selector: 'app-list-todo',
  templateUrl: './list-todo.component.html',
  styleUrls: ['./list-todo.component.scss']
})
export class ListTodoComponent implements OnInit {

array:Todo[] = [];

  constructor() {}

  ngOnInit(): void {
    fetch('https://jsonplaceholder.typicode.com/todos').then((res) => {
      return res.json();
    }).then((data:Todo[]) => {
      this.array = data;
    })
  }
}
