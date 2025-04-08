document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".dropdown-toggle").forEach(function (toggle) {
        toggle.addEventListener("click", function (event) {
            event.preventDefault();
            let parent = this.closest(".dropdown");

            // Toggle the 'active' class on the clicked dropdown
            parent.classList.toggle("active");

            // Close other open dropdowns
            document.querySelectorAll(".dropdown").forEach(function (drop) {
                if (drop !== parent) {
                    drop.classList.remove("active");
                }
            });
        });
    });
});



$('.navTrigger').click(function () {
    $(this).toggleClass('active');
    console.log("Clicked menu");
    $("#mainListDiv").toggleClass("show_list");
    $("#mainListDiv").fadeIn();

});


function showTab(event, tabId) {
    // Remove active class from all tabs
    document.querySelectorAll('.tab').forEach(tab => tab.classList.remove('active'));
    document.querySelectorAll('.tab-pane').forEach(content => content.classList.remove('active'));

    // Add active class to the clicked tab and corresponding content
    event.currentTarget.classList.add('active');
    document.getElementById(tabId).classList.add('active');
}


document.addEventListener("DOMContentLoaded", function () {
    const projectTitles = document.querySelectorAll(".project-title");

    projectTitles.forEach(title => {
        title.addEventListener("click", function () {
            const parent = this.parentElement;
            parent.classList.toggle("active");
        });
    });
});


const track = document.querySelector('.gallery-track');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');

let index = 0;
const slideWidth = document.querySelector('.gallery-slide').clientWidth;
const totalSlides = track.children.length;

// Function to move to next slide
function nextSlide() {
    if (index < totalSlides - 1) {
        index++;
    } else {
        index = 0; // Loop back to first slide
    }
    track.style.transform = `translateX(-${index * slideWidth}px)`;
}

// Function to move to previous slide
function prevSlide() {
    if (index > 0) {
        index--;
    } else {
        index = totalSlides - 1; // Loop back to last slide
    }
    track.style.transform = `translateX(-${index * slideWidth}px)`;
}

// Add event listeners for buttons
nextButton.addEventListener('click', nextSlide);
prevButton.addEventListener('click', prevSlide);

// Auto-slide every 3 seconds
let autoSlide = setInterval(nextSlide, 3000);

// Pause auto-slide when hovering over the gallery
track.addEventListener('mouseenter', () => clearInterval(autoSlide));
track.addEventListener('mouseleave', () => autoSlide = setInterval(nextSlide, 3000));

document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".dropdown-toggle").forEach(function (toggle) {
        toggle.addEventListener("click", function (event) {
            event.preventDefault();
            let parent = this.closest(".dropdown");

            // Toggle the 'active' class on the clicked dropdown
            parent.classList.toggle("active");

            // Close other open dropdowns
            document.querySelectorAll(".dropdown").forEach(function (drop) {
                if (drop !== parent) {
                    drop.classList.remove("active");
                }
            });
        });
    });
});