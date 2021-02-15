export default class Todos {
  constructor($todos, initialTodos = []) {
    this.$target = $todos;
    this.todos = initialTodos;
    this.createTodo = this.createTodo.bind(this);
    this.initEvent();
    this.render();
  }

  initEvent() {
    this.$target.addEventListener("click", (e) => {
      const { index } = e.target.dataset;
      if (index !== undefined) {
        this.setState([
          ...this.todos.slice(0, parseInt(index)),
          ...this.todos.slice(parseInt(index) + 1),
        ]);
      }
    });
  }

  createTodo({ index, content }) {
    return `<li id=${index} class="aTodo">
        <div class="front">${content}</div>
        <div class="back">
          <button class="btn-delete" data-index=${index}>X</button>
        </div>
      </li>`;
  }

  setState(newTodos) {
    this.todos = newTodos;
    this.render();
  }

  render() {
    this.$target.innerHTML = this.todos
      .map((content, index) => this.createTodo({ index, content }))
      .join("");
  }
}
