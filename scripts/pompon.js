

const currentYear = document.querySelector("#currentyear");

currentYear.textContent = new Date().getFullYear();
 



const lastModified = document.querySelector("#lastModified");

lastModified.textContent = `Last Modification: ${document.lastModified}`;




const menuButton = document.querySelector("#menu");

const navigation = document.querySelector(".navigation");

menuButton.addEventListener("click", () => {

    navigation.classList.toggle("open");

    if (navigation.classList.contains("open")) {

        menuButton.textContent = "✖";

    } else {

        menuButton.textContent = "☰";

    }

});




const favoriteCards = document.querySelector(".favorite-cards");

const favorites = [

    {
        title: "Playing",
        description: "Pompón loves playing with toy mice and little balls."
    },

    {
        title: "Sleeping",
        description: "He enjoys sleeping in warm and sunny places."
    },

    {
        title: "Watching Birds",
        description: "Looking through the window is one of his favorite hobbies."
    },

    {
        title: "Favorite Meals",
        description: "Chicken, wet food and treats make him very happy."
    }

];

favoriteCards.innerHTML = favorites.map(favorite => `

    <article class="card">

        <h3>${favorite.title}</h3>

        <p>${favorite.description}</p>

    </article>

`).join("");

let visits = Number(localStorage.getItem("visits-ls")) || 0;

visits++;

localStorage.setItem("visits-ls", visits);

console.log(`Visits: ${visits}`);