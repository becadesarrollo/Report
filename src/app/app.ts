import { Component, signal } from '@angular/core';

@Component({
  selector: 'my-app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Report');
}
