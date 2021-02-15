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
        $main.style.transform = "none";
        $greeting.style.transform = "translateY(0px)";
      }
    });

    const $main = document.querySelector(".main");
    const $greeting = document.querySelector(".greet-message");
    const $pencil = document.querySelector(".fa-pencil-alt");

    let rotateZ = getRotateZ();
    this.$input_todo.addEventListener("input", (e) => {
      const textLength = e.target.value.length;
      if (textLength === 0) {
        $main.style.transform = "rotateZ(0deg)";
        $greeting.style.transform = "translateY(0px)";
        $pencil.style.transform =
          "rotateZ(-40deg) translateY(0px) translateX(0px)";
        return;
      }
      let z = rotateZ.next().value;
      if (!z) {
        rotateZ = getRotateZ();
        z = rotateZ.next().value;
      }
      $main.style.transform = `rotateZ(${z}deg)`;
      $greeting.style.transform = "translateY(150px)";
      $pencil.style.transition = ".5s";
      $pencil.style.transform = `rotateZ(-${z}deg) translateY(-30px) translateX(-20px)`;
    });
  }
}

function* getRotateZ() {
  let z = 0;
  while (z <= 10) {
    yield z++;
  }

  while (z >= 0) {
    yield z--;
  }
}
