import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { Filter } from './filter/filter';
import { NewTask } from './new-task/new-task';
import { TaskList } from './task-list/task-list';

@Component({
  selector: 'app-root',
  imports: [Header, Filter, NewTask, TaskList],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('todoApp');
}
