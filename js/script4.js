document.addEventListener("DOMContentLoaded", function () {
    const sizeSelectors = document.querySelectorAll('.size-selection select');

    sizeSelectors.forEach(selector => {
        selector.addEventListener('change', function (event) {
            const selectedSize = event.target.value;
            console.log('Selected Size:', selectedSize);
            
            // You can add more actions here (e.g., update cart, display price, etc.)
        });
    });
});
