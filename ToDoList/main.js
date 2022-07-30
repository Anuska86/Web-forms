const todos = [];

window.onload = () => {
  const form = document.getElementById("todoForm");
  form.onsubmit = (e) => {
    e.preventDefault();
    const todo = document.getElementById("todo");
    const todoText = todo.value;
    todo.value = "";
    todos.push(todoText);
    const toDoList = document.getElementById("todoList");
    const todosTemplate = todos.map((t) => "<li>" + t + "</li>");
    toDoList.innerHTML = todosTemplate.join("");
    const elements = document.querySelectorAll("#todoList li");
    elements.forEach((element1, i) => {
      console.log(element1, i);
    });
  };
};
