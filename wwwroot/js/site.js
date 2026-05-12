let cart = 0;
let wish = 0;

function addToCart() {
    cart++;
    document.getElementById("cart-count").innerText = cart;
}

function addWishlist() {
    wish++;
    document.getElementById("wish-count").innerText = wish;
}

// Search
document.getElementById("search").addEventListener("keyup", function () {

    let value = this.value.toLowerCase();

    let cards = document.querySelectorAll(".card");

    cards.forEach(card => {

        let title = card.querySelector("h3").innerText.toLowerCase();

        if (title.includes(value)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }

    });

});

// Dark Mode
function toggleDark() {
    document.body.classList.toggle("dark");
}

// Modal
function openModal(title, price, desc, img) {

    document.getElementById("modal").style.display = "flex";

    document.getElementById("modal-title").innerText = title;

    document.getElementById("modal-price").innerText = price;

    document.getElementById("modal-desc").innerText = desc;

    document.getElementById("modal-img").src = img;
}

function closeModal() {
    document.getElementById("modal").style.display = "none";
}