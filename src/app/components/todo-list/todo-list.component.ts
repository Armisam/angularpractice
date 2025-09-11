import { Component, inject } from '@angular/core';
import { TodoListService } from '../../services/todo-list.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
  standalone: true,
})

export class TodoListComponent {
  private todoListService = inject(TodoListService);

  todos = this.todoListService.todosResource.value;
}
