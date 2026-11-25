const btn = document.getElementById("theme-toggle");
const saved = localStorage.getItem("theme") || "light";
document.body.dataset.theme = saved;

btn.addEventListener("click", () => {
    const next = document.body.dataset.theme === "light" ? "dark" : "light";
    document.body.dataset.theme = next;
    localStorage.setItem("theme", next);
});
