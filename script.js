const text = document.getElementById("text");
const addTaskButton = document.getElementById("add-task-btn");

const listBox = document.getElementById("listBox");

let todoArray = [];

addTaskButton.addEventListener("click", (e) => {
    e.preventDefault();
    let todo = localStorage.getItem("todo");
    if (todo === null) {
        todoArray = [];
    } else {
        todoArray = JSON.parse(todo);
    }
    todoArray.push(text.value);

    if (text.value === '') {
        return
        alert("You must write something!");
    }
    text.value = "";
    localStorage.setItem("todo", JSON.stringify(todoArray));
    displayTodo();
});

function displayTodo() {
    let todo = localStorage.getItem("todo");
    if (todo === null) {
        todoArray = [];
    } else {
        todoArray = JSON.parse(todo);
    }
    let htmlCode = "";
    todoArray.forEach((list, ind) => {
        htmlCode += `<div class='todo-item'>
      
      <button onclick='deleteTodo(${ind})' class='delete'><p class='txt'>${list}</p></button>
   </div>`;
    });
    listBox.innerHTML = htmlCode;
}


function deleteTodo(ind) {
    let todo = localStorage.getItem("todo");
    todoArray = JSON.parse(todo);
    todoArray.splice(ind, 1);
    localStorage.setItem("todo", JSON.stringify(todoArray));
    displayTodo();
}