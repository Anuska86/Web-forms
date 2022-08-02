const todos = JSON.parse(localStorage.getItem("todos")) || [];
const render = () => {
  const toDoList = document.getElementById("todoList");
  const todosTemplate = todos.map((t) => "<li>" + t + "</li>");
  toDoList.innerHTML = todosTemplate.join("");
  const elements = document.querySelectorAll("#todoList li");
  elements.forEach((element1, i) => {
    element1.addEventListener("click", () => {
      element1.parentNode.removeChild(element1);
      todos.splice(i, 1);
      updateTodos(todos);
      render();
    });
  });
};

const updateTodos = () => {
  const todoStrings = JSON.stringify(todos);
  localStorage.setItem("todos", todoStrings);
};
window.onload = () => {
  render();
  const form = document.getElementById("todoForm");
  form.onsubmit = (e) => {
    e.preventDefault();
    const todo = document.getElementById("todo");
    const todoText = todo.value;
    todo.value = "";
    todos.push(todoText);
    updateTodos(todos);
  };
};
