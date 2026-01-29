import {
  Component,
  ElementRef,
  signal,
  viewChild,
  inject,
} from '@angular/core';
import { Teaser } from '../shared/components/teaser/teaser';
import { MainButton } from '../shared/components/main-button/main-button';
import { TaskService } from '../services/task-service';

@Component({
  selector: 'app-new-task',
  imports: [Teaser, MainButton],
  templateUrl: './new-task.html',
  styleUrl: './new-task.css',
})
export class NewTask {
  taskService = inject(TaskService);
  teaser = signal<string>('Add a New Task');
  newTaskInput = viewChild<ElementRef<HTMLInputElement>>('newTaskInput');

  addNewTask() {
    const taskValue = this.newTaskInput()!.nativeElement.value;
    this.taskService.addNewTask(taskValue);
  }
}
