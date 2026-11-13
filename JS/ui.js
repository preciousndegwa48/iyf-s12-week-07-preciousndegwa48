import { filterTodos, countRemaining } from "./todo-logic.js";

export function render(state, callbacks) {
    const list = document.getElementById("todo-list");
    const countEl = document.getElementById("todo-count");
    list.innerHTML = "";

    const visible = filterTodos(state.todos, state.filter);

    visible.forEach((todo) => {
        const li = document.createElement("li");
        if (todo.completed) {
            li.classList.add("completed");
        }

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = todo.completed;
        checkbox.addEventListener("change", () => callbacks.onToggle(todo.id));

        const span = document.createElement("span");
        span.textContent = todo.text;

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.classList.add("delete-btn");
        deleteBtn.addEventListener("click", () => callbacks.onDelete(todo.id));

        li.append(checkbox, span, deleteBtn);
        list.appendChild(li);
    });

    countEl.textContent = `${countRemaining(state.todos)} task(s) remaining`;

    document.querySelectorAll(".filter-btn").forEach((btn) => {
        btn.classList.toggle("active", btn.dataset.filter === state.filter);
    });
}
