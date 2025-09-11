import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent {
  count = signal(0);

  increment() {
    this.count.update(v => v + 1);
  }

  decrement() {
    this.count.update(v => v - 1);
  }
}
