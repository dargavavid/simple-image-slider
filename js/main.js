let sliderImages = document.querySelectorAll(".slide");
let arrowLeft = document.querySelector("#arrow-left");
let arrowRight = document.querySelector("#arrow-right");
let current = 0;

//Hide all images.
function reset() {
    sliderImages.forEach(el => el.style.display = "none");
}

//Initialize slider
function startSlide() {
    reset();
    sliderImages[0].style.display = "block";
}

//Show prev
function slideLeft() {
    reset();
    sliderImages[current - 1].style.display = "block";
    current--; 
}

//Show next
function slideRight() {
    reset();
    sliderImages[current + 1].style.display = "block";
    current++;
}

//Left arrow click
arrowLeft.addEventListener("click", function () {
    if (current === 0) {
        current = sliderImages.length;
    }
    slideLeft();
}, false);

//Right arrow click
arrowRight.addEventListener("click", function () {
    if (current === sliderImages.length - 1) {
        current = -1;
    }
    slideRight();
}, false);

startSlide();