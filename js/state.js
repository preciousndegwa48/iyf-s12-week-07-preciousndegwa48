import { getFromStorage, saveToStorage } from "./storage.js";
import { addTodo, toggleTodo, deleteTodo, clearCompleted } from "./todo-logic.js";

export const state = {
    todos: getFromStorage("todos", []),
    filter: getFromStorage("filter", "all"),
};

export function commit() {
    saveToStorage("todos", state.todos);
    saveToStorage("filter", state.filter);
}

export const actions = {
    add(text) {
        state.todos = addTodo(state.todos, text);
        commit();
    },
    toggle(id) {
        state.todos = toggleTodo(state.todos, id);
        commit();
    },
    remove(id) {
        state.todos = deleteTodo(state.todos, id);
        commit();
    },
    setFilter(filter) {
        state.filter = filter;
        commit();
    },
    clearCompleted() {
        state.todos = clearCompleted(state.todos);
        commit();
    },
};
