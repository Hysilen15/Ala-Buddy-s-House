
// Mobile Navbar Toggle
const menuToggle = document.getElementById("mobile-menu");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Slider
let index = 0;
const slides = document.querySelector(".slides");
const totalSlides = document.querySelectorAll(".slide").length;

function moveSlide(step) {
  index += step;
  if (index < 0) index = totalSlides - 1;
  if (index >= totalSlides) index = 0;
  slides.style.transform = `translateX(-${index * 100}%)`;
}

// Scroll Animation
const animatedElements = document.querySelectorAll(".animate");
function showOnScroll() {
  const triggerBottom = window.innerHeight * 0.85;
  animatedElements.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < triggerBottom) {
      el.classList.add("visible");
    }
  });
}
window.addEventListener("scroll", showOnScroll);
showOnScroll();
