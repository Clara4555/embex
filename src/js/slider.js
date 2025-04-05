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
