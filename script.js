const lightMode = document.getElementById("lightMode");
const body = document.body;

lightMode.addEventListener("click", () => {
    body.classList.toggle("darkMode");

    if (body.classList.contains("darkMode")) {
        lightMode.textContent = "Light Mode";
    } else {
        lightMode.textContent = "Dark Mode";
    }
});
