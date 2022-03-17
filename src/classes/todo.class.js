export class Todo {
  
  static fromJson({ task, id, done, created }) {
    const tempTodo = new Todo(task);
    tempTodo.id = id;
    tempTodo.done = done;
    tempTodo.created = created;
    return tempTodo;
  }

  constructor(task) {
    this.task = task;
    this.id = new Date().getTime();
    this.done = false;
    this.created = new Date();
  }
}
