export default class TodoInput {
  constructor({ $form_todo, $input_todo, setTodos }) {
    this.$form_todo = $form_todo;
    this.$input_todo = $input_todo;
    this.initEvent(setTodos);
  }

  initEvent(setTodos) {
    this.$form_todo.addEventListener("submit", (e) => {
      e.preventDefault();
      if (this.$input_todo.value.length > 0) {
        setTodos(this.$input_todo.value);
        this.$input_todo.value = "";
      }
    });
  }
}
