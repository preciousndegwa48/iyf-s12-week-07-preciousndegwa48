const input = document.getElementById("search-input");
const list = document.getElementById("history-list");

function getHistory() {
    try {
        return JSON.parse(localStorage.getItem("recentSearches")) || [];
    } catch {
        return [];
    }
}

let history = getHistory();

function render() {
    list.innerHTML = "";
    history.forEach((term) => {
        const li = document.createElement("li");
        li.textContent = term;
        li.addEventListener("click", () => {
            input.value = term;
        });
        list.appendChild(li);
    });
}

document.getElementById("search-form").addEventListener("submit", (e) => {
    e.preventDefault();
    const term = input.value.trim();
    if (!term) return;
    history = [term, ...history.filter((t) => t !== term)].slice(0, 5);
    localStorage.setItem("recentSearches", JSON.stringify(history));
    render();
    input.value = "";
});

render();
