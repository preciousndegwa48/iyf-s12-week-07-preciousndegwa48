# Week 7: To-Do App + Shopping Cart

## Author
- **Name:** Precious Ndegwa
- **GitHub:** [@preciousndegwa48](https://github.com/preciousndegwa48)
- **Date:** November 13, 2026

## Project Description
A two-part JavaScript project built with Vite, Vitest, ESLint and Prettier. A To-Do app with add / toggle / delete / filter and localStorage persistence, plus a Shopping Cart with add / quantity update / clear / undo and localStorage persistence. All core logic is pure functions in separate modules so it can be unit-tested.

## Technologies Used
- HTML5
- CSS3
- JavaScript (ES Modules)
- Vite
- Vitest
- ESLint (flat config)
- Prettier
- GitHub Actions

## Features
- To-Do: add, toggle completed, delete, filter All / Active / Completed
- To-Do: remaining count, empty-input edge case handled, no mutation of original array
- To-Do: persists in localStorage after refresh
- Shopping Cart: add products, change quantity, remove, clear cart
- Shopping Cart: undo last change with history stack
- Shopping Cart: total + count update live, persists in localStorage
- Unit tests for all todo logic (7 tests)
- Lint + format checks

## How to Run
1. Clone this repository
2. Run `npm install`
3. Run `npm run dev` and open the link shown
   OR
   Open `index.html` in your browser (for To-Do) / `cart/index.html` (for Cart)
4. Run tests: `npm test`
5. Run lint: `npm run lint`
6. Run format check: `npm run format`

## Lessons Learned
- How to separate pure logic (`js/todo-logic.js`) from DOM code (`js/todo-ui.js`) so logic is easy to test.
- How `localStorage` + `JSON.stringify / JSON.parse` keeps state after refresh.
- How to use Vitest to test edge cases like empty input, unknown id, and no-mutation.
- How ESLint + Prettier keep code consistent in a team project.

## Challenges Faced
- Keeping functions pure and not mutating the original array — solved by using `map`, `filter`, and spread `[...todos]`.
- Cart undo — solved by pushing a deep copy of the cart to a history stack
