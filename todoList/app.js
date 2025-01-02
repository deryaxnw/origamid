const form = document.querySelector("#todo-form");
const taskTitleInput = document.querySelector("#task-title-input");
const todoListUL = document.querySelector("#todo-list");

let task = [];

function RenderTaskHTML(taskTitle, done = false) {
  //add nova tarefa
  const li = document.createElement("li");

  const input = document.createElement("input");
  input.setAttribute("type", "checkbox");

  input.addEventListener("change", (e) => {
    const liToToggle = e.target.parentElement;

    const spanToToggle = liToToggle.querySelector("span");

    const done = e.target.checked;
    if (done) {
      spanToToggle.style.textDecoration = "line-through";
    } else {
      spanToToggle.style.textDecoration = "none";
    }

    task = task.map((tarefa) => {
      if (tarefa.title === spanToToggle.textContent) {
        return {
          title: tarefa.title,
          done: !tarefa.done,
        };
      }
      return tarefa;
    });

    localStorage.setItem("task", JSON.stringify(task));
  });
  input.checked = done;

  const span = document.createElement("span");
  span.textContent = taskTitle;

  if (done) {
    span.style.textDecoration = "line-through";
  }

  const button = document.createElement("button");
  button.textContent = "Remover";

  button.addEventListener("click", (e) => {
    // console.log(e.target.parentElement)

    const liToremove = e.target.parentElement;

    const titleToremove = liToremove.querySelector("span").textContent;

    task = task.filter((tarefa) => tarefa.title !== titleToremove);

    todoListUL.removeChild(liToremove);
    localStorage.setItem("task", JSON.stringify(task));
  });

  li.appendChild(input);
  li.appendChild(span);
  li.appendChild(button);

  todoListUL.appendChild(li);
}

window.onload = () => {
  const TasklocalStorage = localStorage.getItem("task");
  if (!TasklocalStorage) return;

  task = JSON.parse(TasklocalStorage);

  task.forEach((task) => {
    RenderTaskHTML(task.title, task.done);
  });
};

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const taskTitle = taskTitleInput.value;

  if (taskTitle.length < 3) {
    alert("escreve mais porra");
    return;
  }

  // add a nova tarefa no array
  task.push({
    title: taskTitle,
    done: false,
  });
  // console.log(task)

  localStorage.setItem("task", JSON.stringify(task));

  //add uma nova tarefa no html
  RenderTaskHTML(taskTitle);

  //limpar input
  taskTitleInput.value = "";
});
