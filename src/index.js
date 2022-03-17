import "./styles.css";
import { Todo, TodoList } from "./classes";
import { apendTodo } from "./js";

export const todoList = new TodoList();

//only works with 1 parameter
todoList.toDoList.forEach(/*(element) =>*/apendTodo/*(element)*/);	

console.log(todoList.toDoList);
