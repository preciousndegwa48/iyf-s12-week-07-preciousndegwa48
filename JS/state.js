import { getFromStorage, saveToStorage } from "./storage.js";
import {
    addTodo as addTodoLogic,
    toggleTodo as toggleLogic,
    deleteTodo as deleteLogic,
    clearCompleted as clearLogic,
} from "./todo-logic.js";

export const STORAGE_KEY = "todos";
export const FILTER_KEY = "filter";

export const state = {
    todos: getFromStorage(STORAGE_KEY, []),
    filter: getFromStorage(FILTER_KEY, "all"),
};

function commit() {
    saveToStorage(STORAGE_KEY, state.todos);
    saveToStorage(FILTER_KEY, state.filter);
}

export function addTodoAction(text) {
    state.todos = addTodoLogic(state.todos, text);
    commit();
}

export function toggleTodoAction(id) {
    state.todos = toggleLogic(state.todos, id);
    commit();
}

export function deleteTodoAction(id) {
    state.todos = deleteLogic(state.todos, id);
    commit();
}

export function clearCompletedAction() {
    state.todos = clearLogic(state.todos);
    commit();
}

export function setFilterAction(filter) {
    state.filter = filter;
    commit();
}
