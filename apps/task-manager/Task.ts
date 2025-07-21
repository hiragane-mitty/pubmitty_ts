// Taskクラス：ジェネリクスと型エイリアスを活用
export type TaskStatus = 'todo' | 'doing' | 'done';

export class Task<T = string> {
  constructor(
    public id: number,
    public title: string,
    public detail: T,
    public status: TaskStatus = 'todo'
  ) {}

  updateStatus(newStatus: TaskStatus) {
    this.status = newStatus;
  }
}
