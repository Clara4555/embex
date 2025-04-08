const hero = document.getElementById("hero");
const images = [
  "./src/assets/images/Embex- branded/Embex 00.3425 E.png",  // Replace with your actual image paths
  "./src/assets/images/Embex- branded/img21.jpeg",
  "./src/assets/images/Embex- branded/Embex 00.3425 F.png"
];

let index = 0;

function changeBackground() {
  hero.style.backgroundImage = `url('${images[index]}')`;
  index = (index + 1) % images.length;
}

// Initial load
changeBackground();

// Change image every 5 seconds
setInterval(changeBackground, 5000);
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



  
  let currentTestimonial = 0;
  const testimonials = document.querySelectorAll('.testimonial-card');

  function showTestimonial(index) {
    testimonials.forEach((testimonial, i) => {
      testimonial.classList.toggle('active', i === index);
    });
  }

  function nextTestimonial() {
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    showTestimonial(currentTestimonial);
  }

  function prevTestimonial() {
    currentTestimonial = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
    showTestimonial(currentTestimonial);
  }

  // Auto-slide every 8s
  setInterval(nextTestimonial, 8000);


  
  // Automatically slide every 3 seconds (3000ms)
  const autoSlideInterval = setInterval(autoSlide, 3000);
  
  const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
      const question = item.querySelector('.faq-question');

      question.addEventListener('click', () => {
        const isOpen = item.classList.contains('active');
        faqItems.forEach(i => {
          i.classList.remove('active');
          i.querySelector('.faq-icon').textContent = '+';
        });

        if (!isOpen) {
          item.classList.add('active');
          item.querySelector('.faq-icon').textContent = '−';
        }
      });
    });