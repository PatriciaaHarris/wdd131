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

        menuButton.setAttribute("aria-label", "Close Navigation");

    } else {

        menuButton.textContent = "☰";

        menuButton.setAttribute("aria-label", "Open Navigation");

    }

});


const favoriteCards = document.querySelector("#favorite-cards");


const favorites = [
    {
        title: "Sleeping",
        description: "Sleeping is one of Pompón's greatest talents. He especially enjoys being comfortable, warm, and covered with a blanket."
    },

    {
        title: "Meat",
        description: "Pompón has a very specific taste in meat. Posta rosada and lomo vetado are among his favorite meats."
    },

    {
        title: "Chicken",
        description: "Chicken breast is another favorite. He also enjoys his regular food, including Bravery and Acana kibble."
    },

    {
        title: "Seafood",
        description: "Pompón enjoys reineta, shrimp, and tuna. Salmon, however, is definitely not on his favorite-food list."
    },

    {
        title: "Talking",
        description: "Pompón likes to participate in conversations. When people talk to him, he often responds as if he is part of the discussion."
    },

    {
        title: "Sharpening His Claws",
        description: "Pompón spends a surprising amount of time sharpening his claws. Sometimes it seems more important to him than exercising!"
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

        favoriteMessage.textContent =
            `Please choose one of Pompón's activities.`;

    } else {

        localStorage.setItem("favorite-choice", choice);

        favoriteMessage.textContent =
            `You chose ${choice} for Pompón! 🐾`;

    }

});


const savedChoice = localStorage.getItem("favorite-choice");


if (savedChoice) {

    favoriteMessage.textContent =
        `Your previous choice was ${savedChoice}. 🐾`;


}