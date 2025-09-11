import { Component } from '@angular/core';
import { CounterComponent } from './components/counter/counter.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';

@Component({
    selector: 'app-root',
    imports: [CounterComponent, TodoListComponent],
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent { }
