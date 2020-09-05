const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const filter = document.querySelector('.filter-todo')

todoButton.addEventListener('click', addToDo);
todoList.addEventListener('click', deleteCheck);
filter.addEventListener('click', filterTodo)

function addToDo(event) {
    event.preventDefault();
    // todo div
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo')
    // li
    const newToDo = document.createElement('li');
    newToDo.innerText = todoInput.value;
    newToDo.classList.add('todo-item');
    todoDiv.appendChild(newToDo);
    // check button
    const completed = document.createElement('button');
    completed.innerHTML = '<i class="fas fa-check"></i>';
    completed.classList.add('completed-btn');
    todoDiv.appendChild(completed);
    // trash button
    const trash = document.createElement('button');
    trash.innerHTML = '<i class="fas fa-trash"></i>';
    trash.classList.add('trash-btn');
    todoDiv.appendChild(trash);
    // append to list
    todoList.appendChild(todoDiv);
    // clear input value
    todoInput.value = null;
}

function deleteCheck(e) {
    const item = e.target;
    if (item.classList[0] === 'trash-btn') {
        const todo = item.parentElement;
        todo.classList.add('fall');
        todo.addEventListener('transitionend', function () {
            todo.remove();
        })
    }

    if (item.classList[0] === "completed-btn") {
        const todo = item.parentElement;
        todo.classList.toggle("completed")
    }
}

function filterTodo(e) {
    const todos = todoList.childNodes;
    todos.forEach(function (todo) {
        switch (e.target.value) {
            case "all":
                todo.style.display = 'flex';
                break;
            case "completed":
                if (todo.classList.contains('completed')) {
                    todo.style.display = 'flex';
                } else {
                    todo.style.display = 'none';
                }
                break;
            case "uncompleted":
                if (!todo.classList.contains('completed')) {
                    todo.style.display = 'flex';
                } else {
                    todo.style.display = 'none';
                }
                break;
        }
    })
}