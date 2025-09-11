import { Component, OnInit } from '@angular/core';
import { TodoListService } from '../../services/todo-list.service';

@Component({
    selector: 'app-todo-list',
    templateUrl: './todo-list.component.html',
    styleUrls: ['./todo-list.component.scss'],
    standalone: false
})

export class TodoListComponent implements OnInit {
  todos: any[] = [];

  constructor(private TodoListService: TodoListService) { }

  ngOnInit() {
    this.TodoListService.getTodos().subscribe(data => {
      this.todos = data;
    });
  }
}
