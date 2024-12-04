// Function to toggle dark and light themes
function toggleTheme(): void {
    const body = document.body;
    const currentTheme = body.getAttribute("data-theme");

    if (currentTheme === "dark") {
        body.setAttribute("data-theme", "light");
        alert("Switched to Light Theme");
    } else {
        body.setAttribute("data-theme", "dark");
        alert("Switched to Dark Theme");
    }
}

// Attach event listener to the theme toggle button
const themeToggleButton = document.getElementById("theme-toggle-btn");
if (themeToggleButton) {
    themeToggleButton.addEventListener("click", toggleTheme);
}
