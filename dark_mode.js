// JavaScript to toggle the dark mode class
document.getElementById("theme-toggle").addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");

    // Save the preference in localStorage
    const isDarkMode = document.body.classList.contains("dark-mode");
    localStorage.setItem("darkMode", isDarkMode ? "enabled" : "disabled");
});

// Check and apply the saved theme on page load
window.addEventListener("load", function () {
    const darkModeSetting = localStorage.getItem("darkMode");
    if (darkModeSetting === "enabled") {
        document.body.classList.add("dark-mode");
    }
});
