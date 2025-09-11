import { Injectable } from '@angular/core';
import { httpResource } from '@angular/common/http';

@Injectable()
export class TodoListService {
  todosResource = httpResource<any[]>(() => ({
    url: 'https://jsonplaceholder.typicode.com/todos?_limit=5',
  }));
}
