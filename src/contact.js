const contactContainer = document.querySelector("#content");
const contactButton = document.querySelector(".contact-btn");

contactButton.addEventListener("click", () => {
    contactPage()
})

function contactPage(){
    let contactHTML = `
        <div class="contact-us-container">
            <div class="contact-us">
                <h1>Get in Touch</h1>
                <div class="contact-info-send-message-container">
                    <div class="contact-info">
                        <p class="send-us-message-heading">
                            Send Us a Message
                            <i class="fa-solid fa-paper-plane"></i>
                            
                        </p>

                        <p class="feedback-passage">
                            Your feedback is incredibly valuable to us at Luxury Hotel, as it plays a vital role in helping us continually improve and elevate our services. By sharing your thoughts and experiences, you provide us with the insights we need to refine our offerings, ensure we meet your expectations.

                        </p>

                        <div class="our-contacts">
                            <div class="contact-type">
                                <i class="fa-regular fa-envelope"></i>
                                <p>contact@luxuryhotel.info</p>
                            </div>

                            <div class="contact-type">
                                <i class="fa-solid fa-phone-volume"></i>
                                <p>+254 700 000 000</p>
                            </div>

                            <div class="contact-type">
                                <i class="fa-solid fa-location-dot"></i>
                                <p>3554 Cottonwood Lane, Grand Rapids <br>
                                    MI 49503, Michigan, USA</p>
                            </div>
                        </div>
                    </div>

                    <div class="write-a-message">
                        <form id="form" method="post">
                            
                            <input type="hidden" name="access_key" value="85c9b4b0-6e32-4ab7-8c11-58bdf81d9a96">
                            <input type="hidden" name="subject" value="New Submission from Web3Forms">
                            <input type="checkbox" name="botcheck" id="" style="display: none;">

                            <label for="your-email">
                                Your email
                                <input type="email" placeholder="Enter your email" name="email" required id="your-email">
                            </label>

                            <label for="your-name">
                                Your name
                                <input type="text" placeholder="Enter your name" name="name" required id="your-name">
                            </label>

                            <label for="your-phone">
                                Phone number
                                <input type="tel" placeholder="Enter your phone number" name="phone" required id="your-phone">
                            </label>

                            <textarea name="message" id="message" placeholder="Send us a message" required></textarea>

                            <button type="submit" class="submit-button"> 
                                Submit now

                                <img src="/src/images/arrow-right.png" alt="">
                            </button>
                            <div id="result"></div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    `;

    contactContainer.innerHTML = contactHTML


    const form = document.getElementById('form');
    const result = document.getElementById('result');

    form.addEventListener('submit', function(e) {
    e.preventDefault();
    const formData = new FormData(form);
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);
    result.innerHTML = "Please wait..."

        fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: json
            })
            .then(async (response) => {
                let json = await response.json();
                if (response.status == 200) {
                    result.innerHTML = json.message;
                } else {
                    console.log(response);
                    result.innerHTML = json.message;
                }
            })
            .catch(error => {
                console.log(error);
                result.innerHTML = "Something went wrong!";
            })
            .then(function() {
                form.reset();
                setTimeout(() => {
                    result.style.display = "none";
                }, 3000);
            });
    });
}
