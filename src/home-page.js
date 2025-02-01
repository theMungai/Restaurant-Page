import { menuPage } from "./menu.js";

const heroContainer = document.querySelector("#content");
const homeButton = document.querySelector(".home-btn");

homeButton.addEventListener("click", () => {
    homePage()
})

function homePage(){
    let heroHTML = `
        <div class="hero-text">
            <h1>Welcome to Luxury Hotel</h1>
            <p>A luxurious intimate escape where plush interiors and serene ambiance await. Perfect for those who want to feel wrapped in comfort.</p>

            <button class = "hero-menu-btn menu-btn">
                Our Menu 
                <img src="/src/images/arrow-right.png" alt="">
            </button>
        </div>
    `;

    heroContainer.innerHTML = heroHTML
}
homePage()

document.querySelector(".hero-menu-btn").addEventListener("click", () => {
    menuPage()
})