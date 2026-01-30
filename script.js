document.querySelectorAll(".sizes button").forEach(btn => {
    btn.addEventListener("click", () => {
        alert("Size selected: " + btn.textContent);
    });
});