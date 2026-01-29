import { Injectable, signal } from '@angular/core';
import { todos } from '../data/todos';
import { Task } from '../shared/models/task';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  todoList = todos;
  tasks = signal<Task[]>(this.todoList);

  getAllTasks() {
    return this.tasks;
  }

  addNewTask(taskName: string) {
    const newTask = {
      id: this.todoList.length + 1,
      task: taskName,
      status: 'incomplete',
      checked: false,
    };
    this.todoList.push(newTask);
  }
}
