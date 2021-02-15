import { printGreeting } from "./greeting.js";
import { printTime } from "./clock.js";
import Todos from "./Todos.js";
import TodoInput from "./TodoInput.js";

export function init(nickname) {
  const $main = document.querySelector(".main");
  $main.classList.remove("hidden");

  printGreeting({
    $greet_message: document.querySelector(".greet-message"),
    nickname,
    hours: parseInt(new Date().getHours()),
  });

  printTime(document.querySelector(".clock"));

  const $Todos = new Todos({
    $todos: document.querySelector(".todos"),
    initialTodos: JSON.parse(localStorage.getItem("todos")) || [],
  });

  function setTodos(newTodo) {
    const newTodos = [...$Todos.todos, newTodo];
    $Todos.setState(newTodos);
    localStorage.setItem("todos", JSON.stringify(newTodos));
  }

  new TodoInput({
    $form_todo: document.querySelector(".form-todo"),
    $input_todo: document.querySelector(".input-todo"),
    setTodos,
  });
}
