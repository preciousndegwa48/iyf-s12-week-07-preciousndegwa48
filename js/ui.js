import { filterTodos, countRemaining } from "./todo-logic.js";

const listEl = document.getElementById("todo-list");
const countEl = document.getElementById("todo-count");

export function render(todos, filter) {
    const visible = filterTodos(todos, filter);
    listEl.innerHTML = "";
    visible.forEach((todo) => {
        const li = document.createElement("li");
        li.dataset.id = todo.id;
        li.className = todo.completed ? "completed" : "";
        li.innerHTML = `
            <input type="checkbox" class="toggle" ${todo.completed ? "checked" : ""} />
            <span>${todo.text}</span>
            <button class="delete">Delete</button>
        `;
        listEl.appendChild(li);
    });
    countEl.textContent = `${countRemaining(todos)} remaining`;
}
