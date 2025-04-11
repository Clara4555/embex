document.addEventListener("DOMContentLoaded", function () {
    // Dropdown toggle
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

    // Project title toggle
    const projectTitles = document.querySelectorAll(".project-title");
    projectTitles.forEach(title => {
        title.addEventListener("click", function () {
            const parent = this.parentElement;
            parent.classList.toggle("active");
        });
    });
});

// Nav menu toggle
$('.navTrigger').click(function () {
    $(this).toggleClass('active');
    console.log("Clicked menu");
    $("#mainListDiv").toggleClass("show_list");
    $("#mainListDiv").fadeIn();
});

// Tab switch
function showTab(event, tabId) {
    document.querySelectorAll('.tab').forEach(tab => tab.classList.remove('active'));
    document.querySelectorAll('.tab-pane').forEach(content => content.classList.remove('active'));

    event.currentTarget.classList.add('active');
    document.getElementById(tabId).classList.add('active');
}

// // Gallery slider
// const track = document.querySelector('.gallery-track');
// const prevButton = document.querySelector('.prev-button');
// const nextButton = document.querySelector('.next-button');

// let index = 0;
// const slideWidth = document.querySelector('.gallery-slide').clientWidth;
// const totalSlides = track.children.length;

// function nextSlide() {
//     index = (index < totalSlides - 1) ? index + 1 : 0;
//     track.style.transform = `translateX(-${index * slideWidth}px)`;
// }

// function prevSlide() {
//     index = (index > 0) ? index - 1 : totalSlides - 1;
//     track.style.transform = `translateX(-${index * slideWidth}px)`;
// }

// nextButton.addEventListener('click', nextSlide);
// prevButton.addEventListener('click', prevSlide);

// let autoSlide = setInterval(nextSlide, 3000);
// track.addEventListener('mouseenter', () => clearInterval(autoSlide));
// track.addEventListener('mouseleave', () => autoSlide = setInterval(nextSlide, 3000));

document.addEventListener("DOMContentLoaded", () => {
    const track = document.querySelector(".carousel-track");
    const slides = Array.from(track.children);
    let currentIndex = 0;
  
    function updateSlidePosition() {
      const slideWidth = slides[0].getBoundingClientRect().width;
      track.style.transform = `translateX(-${slideWidth * currentIndex}px)`;
    }
  
    function moveToNextSlide() {
      currentIndex = (currentIndex + 1) % slides.length;
      updateSlidePosition();
    }
  
    // Auto slide every 3 seconds
    setInterval(moveToNextSlide, 3000);
  
    // Handle window resizing
    window.addEventListener("resize", updateSlidePosition);
  
    // Initial setup
    updateSlidePosition();
  });
  