const aboutContainer = document.querySelector("#content");
const aboutButton = document.querySelector(".about-btn");

aboutButton.addEventListener("click", () => {
    aboutPage()
})

export function aboutPage(){
    aboutContainer.innerHTML = ""
    let aboutHTML = `
        <div class="about-us-container">
            <div class="about-heading-and-image">
                <h1>About Us</h1>
                <p>Perfect for those who want to feel wrapped in comfort.</p>
            </div>

            <div class="about-us-passage">
                <h1>About Luxury Hotel</h1>
                <p>
                    At Luxury Hotel, we are more than just a place to eat—we are a destination where food, community, and passion come together. Founded with a deep love for quality ingredients and culinary craftsmanship, our restaurant offers a menu that celebrates the beauty of diverse flavors and fresh, locally sourced produce. We believe that dining is an experience that should engage all of your senses, from the vibrant colors of each dish to the irresistible aromas that fill the air and, of course, the incredible taste that lingers long after the meal is over.

                    Our chefs are not just cooks; they are artists who take great pride in each plate they create, blending traditional techniques with innovative twists to offer something truly special. From the first bite to the last, we aim to surprise and delight, providing a feast that leaves you wanting more. Whether you're indulging in comfort food that feels like home or exploring something new and exciting, our menu is thoughtfully designed to satisfy every craving.

                    Join us, and let us take you on a culinary journey where every meal is made with love, care, and the kind of hospitality that makes you feel like part of the family. We can’t wait to welcome you!
                </p>
            </div>
        </div>
    `;

    aboutContainer.innerHTML = aboutHTML
}