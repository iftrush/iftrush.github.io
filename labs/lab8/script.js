function toggleTheme() {
    document.querySelector("body").classList.toggle("dark-mode");
}

document.getElementById("toggleButton").onclick = toggleTheme;