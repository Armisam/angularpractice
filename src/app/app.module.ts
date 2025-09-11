import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CounterComponent } from './components/counter/counter.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoListService } from './services/todo-list.service';

@NgModule({ declarations: [
        AppComponent,
        CounterComponent,
        TodoListComponent
    ],
    bootstrap: [AppComponent], imports: [BrowserModule], providers: [TodoListService, provideHttpClient(withInterceptorsFromDi())] })
export class AppModule { }
