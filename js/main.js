let sliderImages = document.querySelectorAll(".slide");
let arrowLeft = document.querySelector("#arrow-left");
let arrowRight = document.querySelector("#arrow-right");
let current = 0;

//To hide all images.
function reset() {
    sliderImages.forEach(el => el.style.display = "none");
}