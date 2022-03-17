import "../css/components.css";
import { Todo } from "../classes";
import { todoList } from "../index";

//HTML Declarations
const divTodoList = document.querySelector(".todo-list");
const inputTodo = document.querySelector(".new-todo");
const btnDeteleteAllDone = document.querySelector(".clear-completed");
const ulFilters = document.querySelector(".filters");
const anchorFilters = document.querySelectorAll(".filtro");

//Create a new todo
export const apendTodo = (todo) => {
  const htmlTodo = `
    <li class="${todo.done ? "completed" : ""}" data-id="${todo.id}">
        <div class="view">
             <input class="toggle" type="checkbox" ${
               todo.done ? "checked" : ""
             }>
            <label>${todo.task}</label>
             <button class="destroy"></button>
        </div>
         <input class="edit" value="Create a TodoMVC template">
    </li>`;
  //   const div = document.createElement("div");
  //   div.innerHTML = htmlTodo;
  //   divTodoList.append(htmlTodo);
  //   return div;
  divTodoList.innerHTML += htmlTodo;
  return htmlTodo;
};

//Envents
inputTodo.addEventListener("keyup", (event) => {
  if (event.keyCode === 13 && inputTodo.value.length > 0) {
    const newTodo = new Todo(inputTodo.value);
    todoList.addTodo(newTodo);
    apendTodo(newTodo);
    inputTodo.value = "";
  }
});

divTodoList.addEventListener("click", (event) => {
  const itemName = event.target.localName;
  const todoItem = event.target.parentElement.parentElement;
  const todoId = todoItem.getAttribute("data-id");
  switch (itemName) {
    case "input":
      //change value of done
      todoList.toggleTodo(todoId);
      //add class completed
      todoItem.classList.toggle("completed");
      break;
    case "button":
      //delete todo
      todoList.deleteTodo(todoId);
      divTodoList.removeChild(todoItem);
      break;
    default:
      break;
  }
});

btnDeteleteAllDone.addEventListener("click", () => {
  todoList.deleteAllDone();
  //inverse for
  for (let i = divTodoList.children.length - 1; i >= 0; i--) {
    const todoItem = divTodoList.children[i];
    console.log(todoItem);
    // const div = todoItem.children[0];
    if (todoItem.classList.contains("completed")) {
      divTodoList.removeChild(todoItem);
    }
  }
});

ulFilters.addEventListener("click", (event) => {
  const filter = event.target.text;
  if (!filter) {
    return;
  }

  anchorFilters.forEach((element) => {
    element.classList.remove("selected");
  });
  event.target.classList.add("selected");
  for (const element of divTodoList.children) {
    element.classList.remove("hidden");
    // const div = element.children[0];

    const done = element.classList.contains("completed");
    // console.log(done, "done");
    // console.log(!done, "done");
    switch (filter) {
      case "Pendientes":
        if (done) {
          element.classList.add("hidden");
          console.log("entro a pendientes");
        }
        break;
      case "Comppletados":
        if (!done) {
          element.classList.add("hidden");
          console.log("entro a coimpletado");
        }
        break;

      default:
        break;
    }
  }
});
