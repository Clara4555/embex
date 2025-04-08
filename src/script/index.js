
$(window).scroll(function() {
    if ($(document).scrollTop() > 50) {
        $('.nav').addClass('affix');
        console.log("OK");
    } else {
        $('.nav').removeClass('affix');
    }
});



document.addEventListener("DOMContentLoaded", function () {
const section = document.querySelector(".logistics-overview");

function handleScroll() {
const sectionTop = section.getBoundingClientRect().top;
const windowHeight = window.innerHeight;

if (sectionTop < windowHeight - 50) {
    section.classList.add("show");
}
}

window.addEventListener("scroll", handleScroll);
handleScroll(); // Run on page load in case already in view
});

let currentSlide = 0;
const slides = document.querySelectorAll(".growth-slide");
const dots = document.querySelectorAll(".dot");

function showSlide(index) {
slides.forEach((slide, i) => {
slide.classList.toggle("active", i === index);
dots[i].classList.toggle("active", i === index);
});
currentSlide = index;
}

function nextSlide() {
currentSlide = (currentSlide + 1) % slides.length;
showSlide(currentSlide);
}

// Auto-slide every 4 seconds
setInterval(nextSlide, 4000);

// Manual Click Control
function changeSlide(index) {
showSlide(index);
}

document.addEventListener("DOMContentLoaded", () => {
const elements = document.querySelectorAll("p, h2");
elements.forEach(el => el.classList.add("show"));
});




let customCurrentSlide = 0;
const customSlides = document.querySelectorAll('.custom-slide');

function moveCustomSlide(direction) {
customSlides[customCurrentSlide].classList.remove('active');
customCurrentSlide = (customCurrentSlide + direction + customSlides.length) % customSlides.length;
customSlides[customCurrentSlide].classList.add('active');
}

// Auto-slide every 5 seconds
setInterval(() => moveCustomSlide(1), 5000);



function showTab(event, tabId) {
// Remove active class from all tabs
document.querySelectorAll('.tab').forEach(tab => tab.classList.remove('active'));
document.querySelectorAll('.tab-pane').forEach(content => content.classList.remove('active'));

// Add active class to the clicked tab and corresponding content
event.currentTarget.classList.add('active');
document.getElementById(tabId).classList.add('active');
}


