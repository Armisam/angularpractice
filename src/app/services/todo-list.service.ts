import { inject, Injectable } from '@angular/core';
import { HttpClient, httpResource } from '@angular/common/http';

@Injectable()
export class TodoListService {
  private httpClient = inject(HttpClient);

  todosResource = httpResource<any[]>(() => ({
    url: 'https://jsonplaceholder.typicode.com/todos?_limit=5',
    method: 'GET',
    client: this.httpClient
  }));
}
