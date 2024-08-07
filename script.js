document.getElementById('add-todo').addEventListener('click', addTodo);
document.getElementById('clear').addEventListener('click', clearTodoList);

function addTodo() {
    const todoInput = document.getElementById('todo-input');
    const todoText = todoInput.value.trim();

    if (todoText === '') return;

    const todoList = document.getElementById('todo-list');
    const todoItem = document.createElement('div');
    todoItem.className = 'todo-item';
    todoItem.innerHTML = `
        <input type="checkbox" class="todo-checkbox" onclick="toggleComplete(this)">
        <span>${todoText}</span>
        <button onclick="removeTodoItem(this)">Delete</button>
    `;

    todoList.appendChild(todoItem);
    todoInput.value = '';
}

function removeTodoItem(button) {
    const todoItem = button.parentElement;
    todoItem.remove();
}

function clearTodoList() {
    const todoList = document.getElementById('todo-list');
    todoList.innerHTML = '';
}

function toggleComplete(checkbox) {
    const todoItem = checkbox.parentElement;
    if (checkbox.checked) {
        todoItem.style.textDecoration = 'line-through';
    } else {
        todoItem.style.textDecoration = 'none';
    }
}
