// ==========================
// LOADER
// ==========================

window.addEventListener("load", () => {

    const loader = document.querySelector(".loader");

    setTimeout(() => {

        loader.style.display = "none";

    }, 2500);

});




// ==========================
// MOBILE MENU
// ==========================

const menuBtn = document.getElementById("menuBtn");

const navLinks = document.querySelector(".nav-links");

if(menuBtn){

    menuBtn.addEventListener("click", () => {

        navLinks.classList.toggle("active");

    });

}




// ==========================
// SEARCH FILTER
// ==========================

const searchInput = document.getElementById("searchInput");

if(searchInput){

    searchInput.addEventListener("keyup", () => {

        const searchValue =
        searchInput.value.toLowerCase();

        const productCards =
        document.querySelectorAll(".product-card");

        productCards.forEach((card) => {

            const productName =
            card.querySelector("h3")
            .innerText
            .toLowerCase();

            if(productName.includes(searchValue)){

                card.style.display = "block";

            }
            else{

                card.style.display = "none";

            }

        });

    });

}




// ==========================
// WISHLIST SYSTEM
// ==========================

const wishlistButtons =
document.querySelectorAll(".wishlist-btn");

wishlistButtons.forEach((button) => {

    button.addEventListener("click", () => {

        button.innerHTML = "❤️ Added";

        button.style.background = "#ff3f6c";

        button.style.color = "white";

        alert("Product Added To Wishlist ❤️");

    });

});




// ==========================
// ADD TO CART
// ==========================

const cartButtons =
document.querySelectorAll(".cart-btn");

cartButtons.forEach((button) => {

    button.addEventListener("click", () => {

        button.innerHTML = "✅ Added";

        button.style.background = "green";

        alert("Product Added To Cart 🛒");

    });

});




// ==========================
// LOGIN VALIDATION
// ==========================

const signupForm =
document.getElementById("signupForm");

if(signupForm){

    signupForm.addEventListener("submit", (e) => {

        e.preventDefault();

        const username =
        document.getElementById("username").value;

        const email =
        document.getElementById("email").value;

        const password =
        document.getElementById("password").value;

        const message =
        document.getElementById("message");



        if(username.length < 3){

            message.innerHTML =
            "Username must be at least 3 characters";

            message.style.color = "yellow";

            return;

        }



        if(password.length < 6){

            message.innerHTML =
            "Password must be at least 6 characters";

            message.style.color = "yellow";

            return;

        }



        localStorage.setItem("urbanUser", username);

        message.innerHTML =
        "Account Created Successfully 🔥";

        message.style.color = "lightgreen";

        signupForm.reset();

    });

}




// ==========================
// DARK MODE
// ==========================

const darkModeBtn =
document.createElement("button");

darkModeBtn.innerHTML = "🌙";

darkModeBtn.classList.add("dark-mode-btn");

document.body.appendChild(darkModeBtn);



darkModeBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark-mode");



    if(document.body.classList.contains("dark-mode")){

        localStorage.setItem(
            "darkMode",
            "enabled"
        );

    }
    else{

        localStorage.setItem(
            "darkMode",
            "disabled"
        );

    }

});




// ==========================
// LOAD DARK MODE
// ==========================

if(localStorage.getItem("darkMode")
=== "enabled"){

    document.body.classList.add("dark-mode");

}




// ==========================
// BUTTON ANIMATION
// ==========================

const buttons =
document.querySelectorAll("button");

buttons.forEach((button) => {

    button.addEventListener("mouseenter", () => {

        button.style.transform =
        "scale(1.05)";

    });




    button.addEventListener("mouseleave", () => {

        button.style.transform =
        "scale(1)";

    });

});




// ==========================
// SCROLL NAVBAR EFFECT
// ==========================

window.addEventListener("scroll", () => {

    const navbar =
    document.querySelector(".navbar");

    if(window.scrollY > 50){

        navbar.style.background =
        "rgba(255,255,255,0.95)";

        navbar.style.boxShadow =
        "0 5px 20px rgba(0,0,0,0.15)";

    }
    else{

        navbar.style.background =
        "rgba(255,255,255,0.85)";

        navbar.style.boxShadow =
        "0 5px 20px rgba(0,0,0,0.08)";

    }

});




// ==========================
// PRODUCT QUICK POPUP
// ==========================

const productCards =
document.querySelectorAll(".product-card");

productCards.forEach((card) => {

    card.addEventListener("click", () => {

        const productName =
        card.querySelector("h3").innerText;

        const productPrice =
        card.querySelector("p").innerText;

        alert(
            `${productName}\nPrice: ${productPrice}`
        );

    });

});




// ==========================
// FAKE BUY NOW
// ==========================

const buyButtons =
document.querySelectorAll(".buy-btn");

buyButtons.forEach((button) => {

    button.addEventListener("click", () => {

        alert(
            "Redirecting To Secure Checkout 🔥"
        );

    });

});




// ==========================
// AUTO IMAGE SLIDER
// ==========================

const heroImages = [

"https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=1000&auto=format&fit=crop",

"https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=1000&auto=format&fit=crop",

"https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1000&auto=format&fit=crop"

];



let currentImage = 0;

const heroImage =
document.querySelector(".hero-right img");



if(heroImage){

    setInterval(() => {

        currentImage++;

        if(currentImage >= heroImages.length){

            currentImage = 0;

        }

        heroImage.src =
        heroImages[currentImage];

    }, 3000);

}




// ==========================
// FLOATING EFFECT
// ==========================

if(heroImage){

    setInterval(() => {

        heroImage.style.transform =
        "translateY(-10px)";



        setTimeout(() => {

            heroImage.style.transform =
            "translateY(0px)";

        }, 1000);

    }, 2000);

}