const slides = document.getElementById("imageSlides");
const circles = document.querySelectorAll(".nav-circle");
const totalSlides = circles.length;

const topBar = document.getElementById("topBar");
const isHomePage = window.location.pathname.endsWith("index.html") || window.location.pathname === "/";

let currentSlide = 0;

function updateCarousel() {
  slides.style.transform = `translateX(-${currentSlide * 27.3}%)`;
  circles.forEach((c, i) => {
    c.classList.toggle("active", i === currentSlide);
  });
}

document.getElementById("nextBtn").onclick = () => {
  currentSlide = (currentSlide + 1) % totalSlides;
  updateCarousel();
};

document.getElementById("prevBtn").onclick = () => {
  currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
  updateCarousel();
};

circles.forEach((circle, idx) => {
  circle.addEventListener("click", () => {
    currentSlide = idx;
    updateCarousel();
  });
});


if (!isHomePage) {
  topBar.classList.add("shrink");
} else {
  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      topBar.classList.add("shrink");
    } else {
      topBar.classList.remove("shrink");
    }
  });
}
  