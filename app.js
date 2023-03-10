// Selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector(".filter-todo");

// Event Listeners
todoButton.addEventListener("click", addToDo);
todoList.addEventListener("click", deleteCheck);
filterOption.addEventListener("click", filterTodo)

// Functions
function addToDo(event) {
    //Prevent form from submitting
    event.preventDefault();
    //Todo Div
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    //Create LI
    const newTodo = document.createElement("li");
    newTodo.innerText = todoInput.value;
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);
    //Check Mark Button
    const completedButton = document.createElement("button");
    completedButton.innerHTML = '<i class = "fas fa-check"></i>';
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);

    //Check Trash Button
    const trashButton = document.createElement("button");
    trashButton.innerHTML = '<i class = "fas fa-trash"></i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);

    //Append to list
    todoList.appendChild(todoDiv);
    //Clear to do input value
    todoInput.value = "";
}

function deleteCheck(e) {
    const item = e.target;
    //Delete toDo
    if (item.classList[0] === "trash-btn") {
        const todo = item.parentElement;
        //Animation
        todo.classList.add("fall");
        todo.addEventListener("transitionend", function () {
            todo.remove();
        });
    }

    //Check Mark
    if (item.classList[0] === "complete-btn") {
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    }
}

function filterTodo(e) {
    const todos = todoList.childNodes;
    todos.forEach(function (todo) {
        switch (e.target.value) {
            case "all":
                todo.style.display = "flex";
                break;
            case "completed":
                if (todo.classList.contains("completed")) {
                    todo.style.display = "flex";
                } else {
                    todo.style.display = "none";
                }
                break;
            case "uncompleted":
                if (!todo.classList.contains("completed")) {
                    todo.style.display = "flex";
                } else {
                    todo.style.display = "none";
                }
                break;
        }
    });
}

// Going to add local storange in next project with react, not in this

// //Local Storage for the ToDo List
// function saveLocalTodos(todo) {
//     /* If adding a new item it will check,if we dont have it just create an empty array, If we do have todo, we gonna be left with any array, If we have an array it just push it on to toDo and get it back to local storage.
//     */
//     let todo;
//     if (localStorage.getItem("todos") === null) {
//         todos = [];
//     } else {
//         todos = JSON.parse(localStorage.getItem("todos"));
//     }
//     todos.push(todo);
//     localStorage.setItem("todos", JSON.stringify(todos));
// }
