import {
    state,
    addTodoAction,
    toggleTodoAction,
    deleteTodoAction,
    clearCompletedAction,
    setFilterAction,
} from "./state.js";
import { render } from "./ui.js";

const form = document.getElementById("todo-form");
const input = document.getElementById("todo-input");

function refresh() {
    render(state, {
        onToggle: (id) => {
            toggleTodoAction(id);
            refresh();
        },
        onDelete: (id) => {
            deleteTodoAction(id);
            refresh();
        },
    });
}

form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!input.value.trim()) {
        return;
    }
    addTodoAction(input.value);
    input.value = "";
    refresh();
});

document.querySelectorAll(".filter-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
        setFilterAction(btn.dataset.filter);
        refresh();
    });
});

document.getElementById("clear-completed").addEventListener("click", () => {
    clearCompletedAction();
    refresh();
});

refresh();
