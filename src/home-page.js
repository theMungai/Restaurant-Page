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
        </div>
    `;

    heroContainer.innerHTML = heroHTML
}
homePage()