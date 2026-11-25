# Week 7: To-Do List + Shopping Cart

## Author
- **Name:** Precious Ndegwa
- **GitHub:** [@preciousndegwa48](https://github.com/preciousndegwa48)
- **Date:** November 13, 2026

## Project Description
Week 5 To-Do List, refactored to professional quality. It now survives a page refresh with localStorage, is split into ES Modules, passes ESLint, is formatted with Prettier, and has unit tests with Vitest. Also includes the Lesson 13 Shopping Cart in `cart/` with the same pattern — one state object, actions, save-after-every-change, and undo.

## Technologies Used
- HTML5
- CSS3
- JavaScript (ES Modules)
- localStorage / sessionStorage
- Node.js 22
- ESLint 9
- Prettier
- Vitest

## Features
- Add, toggle, delete todos
- Filter: All / Active / Completed — filter preference is saved
- Todos + completed state persist across refresh
- Clear Completed
- Shopping Cart: add, change quantity, remove, total, count, clear, undo
- Cart survives refresh
- Daily Challenges: Theme persistence, Recent Searches (last 5), Form Auto-Save

## How to Run
1. Clone this repository
2. Open `index.html` in your browser
   OR
   Run `npm install` then `npm start`

## Lessons Learned
- The array is the truth, the page is a picture of it. Load once from localStorage, save after every change, then re-render.
- Pure functions are testable anywhere. That is why `todo-logic.js` has no DOM and no localStorage — only `state.js` and `storage.js` touch them.
- `dataset.id` is a string — I must use `Number(li.dataset.id)` before comparing it with `todo.id`, otherwise toggle and delete silently fail.
- ES Modules need `type="module"` and the `.js` extension on every import, and they only load from a server, not from `file://`.
- Prettier rewrites whole files, so I format once and commit it on its own, so my real changes are easy to review in the PR.
- One state object + actions + save + render is a pattern I can reuse — I used the exact same pattern for the Shopping Cart.

## Challenges Faced
- **CORS error on file://:** Double-clicking `index.html` blocked ES Modules. Fixed by using Live Server instead.
- **ESLint 9 config:** Old `.eslintrc.json` is ignored in ESLint 9. Fixed by using the new flat `eslint.config.js` with `@eslint/js` + `globals`.
- **Bad JSON in storage:** If localStorage was edited or corrupted, `JSON.parse` crashed the app. Fixed by wrapping it in try/catch in `storage.js` so it returns the default state instead.
- **Toggle / delete not working:** `li.dataset.id` was a string but `todo.id` was a number. Fixed with `Number()`.
- **Working on phone:** I could not run `npm install` on my phone. I created `package-lock.json` and `.gitignore` via GitHub web, then I will run `npm install` on a computer to regenerate the real integrity hashes.
- **Partner did not submit work:** My partner puritywanjiku89 did not submit a PR for me to review. 

## Collaboration 
- **Team / partner:** [@puritywanjiku89](https://github.com/puritywanjiku89) — found on the Classroom board
- **Shared repo** (Weeks 0 and 3): Not applicable for Week 7
- **PR I opened:** https://github.com/preciousndegwa48/iyf-s12-week-07-preciousndegwa48/pull/1
- **PR I reviewed:** None — partner did not submit work to review
- **Review I wrote** : None — partner did not submit work to review
- **Merge conflict I resolved** (Weeks 0 and 3): Not applicable for Week 7
- **Nobody turned up?** Yes. My partner puritywanjiku89 did not do the work.

## Screenshots (optional)
![To-Do List](screenshot.png)
![Shopping Cart](cart-screenshot.png)

## Live Demo (if deployed)
[View Live Demo - To-Do List](https://preciousndegwa48.github.io/iyf-s12-week-07-preciousndegwa48/)
[View Live Demo - Shopping Cart](https://preciousndegwa48.github.io/iyf-s12-week-07-preciousndegwa48/cart/)
