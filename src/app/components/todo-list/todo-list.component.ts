import { Component, inject, linkedSignal } from '@angular/core';
import { TodoListService } from '../../services/todo-list.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})

export class TodoListComponent {
  private todoListService = inject(TodoListService);

  readonly todos = linkedSignal(() => this.todoListService.todosResource.value);
}
