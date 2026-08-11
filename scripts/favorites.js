
const currentYear = document.querySelector("#currentyear");

currentYear.textContent = new Date().getFullYear();

const lastModified = document.querySelector("#lastModified");

lastModified.textContent = `Last Modified: ${document.lastModified}`;

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

const favoriteCards = document.querySelector("#favorite-cards");

const favorites = [
    {
        title: "Playing",
        description: "Pompón loves playing with toys and little balls. He can get very excited during playtime."
    },
    {
        title: "Sleeping",
        description: "Warm and comfortable places are perfect for a long and peaceful nap."
    },
    {
        title: "Watching Birds",
        description: "Pompón enjoys sitting near a window and carefully watching birds outside."
    },
    {
        title: "Favorite Meals",
        description: "Chicken, wet food, and treats are some of the foods that make Pompón happy."
    }
];

function displayFavorites(items) {

    favoriteCards.innerHTML = items.map((favorite) => `
        <article class="favorite-card">
            <h3>${favorite.title}</h3>
            <p>${favorite.description}</p>
        </article>
    `).join("");

}

displayFavorites(favorites);

const favoriteForm = document.querySelector("#favorite-form");

const favoriteChoice = document.querySelector("#favorite-choice");

const favoriteMessage = document.querySelector("#favorite-message");

favoriteForm.addEventListener("submit", (event) => {

    event.preventDefault();

    const choice = favoriteChoice.value;

    if (choice === "") {

        favoriteMessage.textContent = `Please choose one of Pompón's activities.`;

    } else {

        localStorage.setItem("favorite-choice", choice);

        favoriteMessage.textContent =
            `You chose ${choice} as Pompón's favorite! 🐾`;
    }

});

const savedChoice = localStorage.getItem("favorite-choice");

if (savedChoice) {

    favoriteMessage.textContent =
        `Your previous choice was ${savedChoice}. 🐾`;

}

