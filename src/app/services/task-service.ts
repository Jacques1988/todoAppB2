import { Injectable, signal } from '@angular/core';
import { todos } from '../data/todos';
import { Task } from '../shared/models/task';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  tasks = signal<Task[]>(todos);

  getAllTasks() {
    return this.tasks;
  }
}
