document.addEventListener("DOMContentLoaded", () => {
    const appliances = document.querySelectorAll(".appliance");
    appliances.forEach(appliance => {
        appliance.addEventListener("click", (e) => {
            if (!appliance.getAttribute("href")) {
                e.preventDefault();
                alert("Page for this appliance is under construction!");
            }
        });
    });
});


const addToCartButtons = document.querySelectorAll('.add-to-cart');
addToCartButtons.forEach((button) => {
    button.addEventListener('click', () => {
        const blenderName = button.parentElement.querySelector('span').textContent;
        alert($`{blenderName} has been added to your cart!`);
    });
});

const addToCartButton = document.querySelectorAll('.add-to-cart');
addToCartButtons.forEach((button) => {
    button.addEventListener('click', () => {
        const breadName = button.parentElement.querySelector('span').textContent;
        alert($`{breadName} has been added to your cart!`);
    });
});
const addToCartButton1 = document.querySelectorAll('.add-to-cart');
addToCartButtons.forEach((button) => {
    button.addEventListener('click', () => {
        const coffeeName = button.parentElement.querySelector('span').textContent;
        alert($`{coffeeName} has been added to your cart!`);
    });
});
const addToCartButton2 = document.querySelectorAll('.add-to-cart');
addToCartButtons.forEach((button) => {
    button.addEventListener('click', () => {
        const tosterName = button.parentElement.querySelector('span').textContent;
        alert($`{tosterName} has been added to your cart!`);
    });
});