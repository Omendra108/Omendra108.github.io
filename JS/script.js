// Typing animation using Typed.js
document.addEventListener("DOMContentLoaded", () => {
  var typed = new Typed("#typed-text", {
    strings: ["Aspiring Engineer", "Tech Enthusiast", "Problem Solver"],
    typeSpeed: 50,
    backSpeed: 30,
    loop: true,
  });

  // Fade-in on scroll
  const fadeItems = document.querySelectorAll(".fade-in");

  function handleFadeIn() {
    fadeItems.forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
        el.classList.add("visible");
      }
    });
  }

  window.addEventListener("scroll", handleFadeIn);
  handleFadeIn(); // Run on page load
});
