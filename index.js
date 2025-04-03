function toggleMenu() {
    var menu = document.getElementById("menu");
    menu.classList.toggle("show");
}

function closeMenu() {
    var menu = document.getElementById("menu");
    menu.classList.remove("show");
}

// Close menu when clicking outside
document.addEventListener("click", function (event) {
    var menu = document.getElementById("menu");
    var toggleButton = document.querySelector(".menu-toggle");

    if (!menu.contains(event.target) && !toggleButton.contains(event.target)) {
        closeMenu();
    }
});