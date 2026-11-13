import { describe, it, expect } from "vitest";
import {
    addTodo,
    toggleTodo,
    deleteTodo,
    filterTodos,
    countRemaining,
} from "../js/todo-logic.js";

describe("todo-logic", () => {
    it("adds a todo", () => {
        const result = addTodo([], "Buy milk");
        expect(result).toHaveLength(1);
        expect(result[0].text).toBe("Buy milk");
        expect(result[0].completed).toBe(false);
    });

    it("does not add empty text (edge case)", () => {
        const result = addTodo([], "   ");
        expect(result).toHaveLength(0);
    });

    it("toggles completed", () => {
        const todos = [{ id: 1, text: "A", completed: false }];
        const result = toggleTodo(todos, 1);
        expect(result[0].completed).toBe(true);
    });

    it("does nothing for unknown id (edge case)", () => {
        const todos = [{ id: 1, text: "A", completed: false }];
        const result = toggleTodo(todos, 999);
        expect(result).toEqual(todos);
    });

    it("deletes a todo", () => {
        const todos = [
            { id: 1, text: "A", completed: false },
            { id: 2, text: "B", completed: false },
        ];
        expect(deleteTodo(todos, 1)).toHaveLength(1);
    });

    it("filters active and completed", () => {
        const todos = [
            { id: 1, text: "A", completed: false },
            { id: 2, text: "B", completed: true },
        ];
        expect(filterTodos(todos, "active")).toHaveLength(1);
        expect(filterTodos(todos, "completed")).toHaveLength(1);
        expect(countRemaining(todos)).toBe(1);
    });

    it("does not mutate original array", () => {
        const todos = [{ id: 1, text: "A", completed: false }];
        const copy = [...todos];
        addTodo(todos, "B");
        toggleTodo(todos, 1);
        expect(todos).toEqual(copy);
    });
});
