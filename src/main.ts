// main.ts
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

import { AppComponent } from './app/app.component';
import { TodoListService } from './app/services/todo-list.service';
import { routes } from './app/app.routes';

bootstrapApplication(AppComponent, {
  providers: [
    TodoListService,
    provideHttpClient(withInterceptorsFromDi()),
    provideRouter(routes),
  ],
}).catch(err => console.error(err));
