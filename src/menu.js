const menuContainer = document.querySelector("#content");
const menuButton = document.querySelector(".menu-btn");

menuButton.addEventListener("click", () => {
    menuPage()
})

export function menuPage(){
    menuContainer.innerHTML = ""

    let menuHTML = `
        <div class="menu-container">
            <div class="menu-header menu-sub-section">
                <h1>MENU</h1>
            </div>

            <div class="menu-items menu-sub-section">
                <h1 class="hotel-menu-header">Luxury Hotel Menu</h1>
                <div class="menu-meals breakfast">
                    <div class="meal-details">
                        <div class="meals-information">
                            <h1>Breakfast</h1>
                            <div class="meal-details-section">
                                <p class="name-of-the-meal">Sunrise Scramble</p>
                            <p class="about-the-meal">A fluffy scrambled egg dish served with crispy bacon, sautéed spinach, and diced tomatoes, all nestled on a warm, toasted English muffin.</p>
                            </div>
                            
                            <div class="meal-details-section">
                                <p class="name-of-the-meal">Classic Continental Breakfast</p>
                            <p class="about-the-meal">A selection of freshly baked croissants, pastries, and assorted bread rolls, served with butter, jam, and honey.</p>
                            </div>
                            
                        </div>
                        <div class="meals-price">
                            <p>$ 9.99</p>
                        </div>
                    </div>

                    <div class="image container">
                        <img src="/src/images/Breakfast.jpeg" alt="">
                    </div>
                </div>

                <div class="menu-meals lunch">
                    <div class="meal-details">
                        <div class="meals-information">
                            <h1>Lunch</h1>
                            <div class="meal-details-section">
                                <p class="name-of-the-meal">
                                    Mediterranean Quinoa Salad</p>
                                <p class="about-the-meal">A vibrant mix of quinoa, cucumber, cherry tomatoes, Kalamata olives, and red onion, tossed in a tangy lemon-oregano vinaigrette.</p>
                            </div>
                            
                            <div class="meal-details-section">
                                <p class="name-of-the-meal">Turkey and Avocado Wrap</p>
                            <p class="about-the-meal">Sliced turkey breast, creamy avocado, crisp lettuce, and juicy tomatoes, all wrapped in a soft whole wheat tortilla</p>
                            </div>
                            
                        </div>
                        <div class="meals-price">
                            <p>$ 59.99</p>
                        </div>
                    </div>

                    <div class="image container">
                        <img src="/src/images/Lunch.jpeg" alt="">
                    </div>
                </div>

                <div class="menu-meals dinner">
                    <div class="meal-details">
                        <div class="meals-information">
                            <h1>Dinner</h1>
                            <div class="meal-details-section">
                                <p class="name-of-the-meal">Pan-Seared Salmon </p>
                            <p class="about-the-meal">A perfectly cooked salmon fillet, seared to a golden crisp, and served with a rich lemon butter sauce</p>
                            </div>
                            
                            <div class="meal-details-section">
                                <p class="name-of-the-meal">
                                    Grilled Herb-Infused Chicken Breast
                                </p>
                                <p class="about-the-meal">A tender, juicy chicken breast marinated in a blend of fresh herbs and spices, grilled to perfection.</p>
                            </div>
                            
                        </div>
                        <div class="meals-price">
                            <p>$ 89.99</p>
                        </div>
                    </div>

                    <div class="image container">
                        <img src="/src/images/Dinner.jpeg" alt="">
                    </div>
                </div>
            </div>
        </div>
    `;

    menuContainer.innerHTML = menuHTML
}