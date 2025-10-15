const themeToggleBtn = document.getElementById("theme-toggle-btn");
themeToggleBtn.addEventListener("click", function() {
    document.body.classList.toggle("dark");
    if (document.body.classList.contains("dark")) {
        themeToggleBtn.innerText = "Light Mode";
    } else {
        //si el body no tiene la clase "dark" se cambia el texto del boton  a "Dark Mode"
        themeToggleBtn.innerText = "Dark Mode";
    }
}) ;
