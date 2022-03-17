import { Todo } from "./todo.class";

export class TodoList {
  constructor() {
    this.restoreLocalStorage();
  }

  addTodo(todo) {
    this.toDoList.push(todo);
    this.saveLocalStorage();
  }

  deleteTodo(id) {
    this.toDoList = this.toDoList.filter((todo) => todo.id.toString() !== id);
    this.saveLocalStorage();
  }
  deleteAllDone() {
    this.toDoList = this.toDoList.filter((todo) => !todo.done);
    this.saveLocalStorage();
  }

  deleteAll() {
    this.toDoList = [];
    this.saveLocalStorage();
  }

  toggleTodo(id) {
    console.log("entro al toggle");
    for (const todo of this.toDoList) {
      if (todo.id.toString() === id) {
        todo.done = !todo.done;
        this.saveLocalStorage();
        break;
      }
    }
  }
  saveLocalStorage() {
    localStorage.setItem("todoList", JSON.stringify(this.toDoList));
  }
  restoreLocalStorage() {
    this.toDoList = localStorage.getItem("todoList")
      ? JSON.parse(localStorage.getItem("todoList"))
      : [];
    //only works with 1 parameter
    this.toDoList = this.toDoList.map(/*(todo) =>*/ Todo.fromJson /*(todo)*/);
  }
}
