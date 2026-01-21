import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { Filter } from './filter/filter';

@Component({
  selector: 'app-root',
  imports: [Header, Filter],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('todoApp');
}
