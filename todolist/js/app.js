function createElement(tag, props, ...children) {
    const element = document.createElement(tag);

    Object.keys(props).forEach(key => element[key] = props[key]);

    children.forEach(child => {
        if (typeof child == 'string') child = document.createTextNode(child);

        element.appendChild(child)
    });

    return element;
}

function createTodoItem(title) {
    const checkbox = createElement('input', { type: 'checkbox', className: 'checkbox'});
    const label = createElement('label', { className: 'title'}, title);
    const editInput = createElement('input', { type: 'text', className: 'textfield'});
    const editButton = createElement('button', {className: 'edit'}, 'Изменить');
    const deleteButton = createElement('button', {className: 'delete'}, 'Удалить');

    const listItem = createElement('li', { className: 'todo-item'}, checkbox, label, editInput, editButton, deleteButton);

    bindEvents(listItem);

    return listItem;
}
function bindEvents(todoItem) {
    const checkbox = todoItem.querySelector('.checkbox');
    const editButton = todoItem.querySelector('button.edit');
    const deleteButton = todoItem.querySelector('button.delete');

    checkbox.addEventListener('change', toggleTodoItem);
    editButton.addEventListener('click', editTodoItem);
    deleteButton.addEventListener('click', deleteTodoItem);
}

function addTodoItem(event) {
    event.preventDefault();

    if (addInput.value === '') return alert('Введите название задачи');

    const todoItem = createTodoItem(addInput.value);
    todoList.appendChild(todoItem);

    addInput.value = '';
}

function toggleTodoItem() {
    const todoItem = this.parentNode;
    todoItem.classList.toggle('completed');
}

function editTodoItem() {
    const todoItem = this.parentNode;
    const title = todoItem.querySelector('.title')
    const editInput = todoItem.querySelector('.textfield');
    const isEditing = todoItem.classList.contains('editing');

    if (isEditing) {
        title.innerText = editInput.value
        this.innerText = 'Изменить';
    } else {
        editInput.value = title.innerText;
        this.innerText = 'Сохранить';
    }
    todoItem.classList.toggle('editing');
}

function deleteTodoItem() {
    const todoItem = this.parentNode;
    todoList.removeChild(todoItem);

}

const todoForm = document.getElementById("todo-form");
const addInput = document.getElementById("add-input");
const todoList = document.getElementById("todo-list");
const todoItems = document.querySelectorAll(".todo-item");

function main() {
    todoForm.addEventListener('submit', addTodoItem);
    todoItems.forEach(item => bindEvents(item));
}
main();