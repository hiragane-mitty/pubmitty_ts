// TaskServiceクラス：インターフェースとユーティリティ型を活用
import { Task, TaskStatus } from './Task';

export interface ITaskService {
  addTask(title: string, detail: string): Task;
  getTasks(): Task[];
  updateTaskStatus(id: number, status: TaskStatus): void;
}

export class TaskService implements ITaskService {
  private tasks: Task[] = [];
  private nextId = 1;

  addTask(title: string, detail: string): Task {
    const task = new Task(this.nextId++, title, detail);
    this.tasks.push(task);
    return task;
  }

  getTasks(): Task[] {
    return [...this.tasks];
  }

  updateTaskStatus(id: number, status: TaskStatus): void {
    const task = this.tasks.find(t => t.id === id);
    if (task) task.updateStatus(status);
  }
}
