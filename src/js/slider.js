let index = 0;

function showSlides() {
    let slides = document.querySelectorAll('.slide');
    slides.forEach(slide => slide.classList.remove('active'));
    
    slides[index].classList.add('active');
    index = (index + 1) % slides.length;
}

setInterval(showSlides, 3000); // Change slide every 3 seconds

// Trigger service cards animation when they enter viewport
document.addEventListener("DOMContentLoaded", () => {
    const services = document.querySelectorAll('.service');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = "translateY(0)";
            }
        });
    }, { threshold: 0.3 });

    services.forEach(service => {
        observer.observe(service);
    });
});



  const logoTrack = document.querySelector('.logo-track');
  
  // This will make the logos move one step at a time
  let currentIndex = 0;
  
  setInterval(() => {
    if (currentIndex === 5) { // Loop back to the start
      currentIndex = 0;
    } else {
      currentIndex++;
    }
    
    logoTrack.style.transform = `translateX(-${currentIndex * 100}%)`; // Move the logos
  }, 3000); // Change slides every 3 seconds



  const track = document.getElementById('sliderTrack');
  const dots = document.querySelectorAll('.dot');
  const prev = document.querySelector('.prev-btn');
  const next = document.querySelector('.next-btn');
  
  let count = 0; // Corrected variable name from 'inde' to 'index'
  
  // Update the slider position and the active dot
  function updateSlider() {
    track.style.transform = `translateX(-${count * 100}%)`;
    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === count);
    });
  }
  
  // Go to the previous slide
  prev.addEventListener('click', () => {
    count = (count - 1 + dots.length) % dots.length; // Wrap around when reaching the first slide
    updateSlider();
  });
  
  // Go to the next slide
  next.addEventListener('click', () => {
    count = (count + 1) % dots.length; // Wrap around when reaching the last slide
    updateSlider();
  });
  
  // Optionally, add functionality to make dots clickable
  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
      count = i;
      updateSlider();
    });
  });
  
  // Set up auto-slide functionality
  function autoSlide() {
    count = (count + 1) % dots.length; // Move to the next slide and wrap around
    updateSlider();
  }
  
  // Automatically slide every 3 seconds (3000ms)
  const autoSlideInterval = setInterval(autoSlide, 3000);
  
  