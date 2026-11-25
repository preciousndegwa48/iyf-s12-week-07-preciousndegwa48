import { state, actions } from "./state.js";
import { render } from "./ui.js";

const form = document.getElementById("todo-form");
const input = document.getElementById("todo-input");
const listEl = document.getElementById("todo-list");
const filtersEl = document.getElementById("filters");
const clearBtn = document.getElementById("clear-completed");

function redraw() {
    render(state.todos, state.filter);
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    actions.add(input.value);
    input.value = "";
    redraw();
});

listEl.addEventListener("click", (e) => {
    const li = e.target.closest("li");
    if (!li) return;
    const id = Number(li.dataset.id);
    if (e.target.classList.contains("toggle")) actions.toggle(id);
    if (e.target.classList.contains("delete")) actions.remove(id);
    redraw();
});

filtersEl.addEventListener("click", (e) => {
    if (!e.target.dataset.filter) return;
    actions.setFilter(e.target.dataset.filter);
    redraw();
});

clearBtn.addEventListener("click", () => {
    actions.clearCompleted();
    redraw();
});

redraw();
