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