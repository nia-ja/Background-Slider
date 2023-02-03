const body = document.body;
const slides = document.querySelectorAll(".slide");
const leftBtn = document.getElementById("left");
const rightBtn = document.getElementById("right");

// Event listeners
leftBtn.addEventListener("click", leftClick);
rightBtn.addEventListener("click", rightClick);

let activeSlide = 0;

// Handles background image
function setBgToBody() {
    body.style.backgroundImage = slides[activeSlide].style.backgroundImage;
}

// Handles visability
function setActiveSlide() {
    slides.forEach(slide => slide.classList.remove("active"));
    slides[activeSlide].classList.add("active");
}

function leftClick() {
    activeSlide--;
    if (activeSlide < 0) {
        activeSlide = slides.length - 1;
    }
    setBgToBody();
    setActiveSlide(); 
}

function rightClick() {
    activeSlide++;
    if(activeSlide > slides.length - 1) {
        activeSlide = 0 ;
    }
    setBgToBody();
    setActiveSlide();
}

// load background image from the start
setBgToBody();