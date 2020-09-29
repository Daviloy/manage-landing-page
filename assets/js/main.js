const menuBar = document.getElementById("menu-bar");
const navMenu = document.getElementById("nav-menu");
const navOverlay = document.getElementById("nav-overlay");

menuBar.addEventListener("click", (e) => {
    e.preventDefault();

    // Toggle the visibility of the navigation menu
    navMenu.classList.toggle("active");

    // Toggle the visibility of the nav overlay
    navOverlay.classList.toggle("active");

    // Check whether the navigation menu is currently active
    if (
        navMenu.classList.contains("active") ||
        navOverlay.classList.contains("active")
    ) {
        // Active? Disable scrolling in the browser
        document.body.style.overflowY = "hidden";
    } else {
        // Not Active? Enable scrolling in the browser
        document.body.style.overflowY = "scroll";
    }
});
