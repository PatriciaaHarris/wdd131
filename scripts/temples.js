const currentYear = new Date().getFullYear();

document.getElementById("currentyear").textContent = currentYear;

document.getElementById("lastModified").textContent = document.lastModified;


const menuButton = document.querySelector("#menu-button");
const navigation = document.querySelector("nav ul");
const header = document.querySelector("header");


menuButton.addEventListener("click", () => {

    navigation.classList.toggle("open");
    header.classList.toggle("open");


    if (navigation.classList.contains("open")) {
        menuButton.textContent = "X";
    } else {
        menuButton.textContent = "☰";
    }

});