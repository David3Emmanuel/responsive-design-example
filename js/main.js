/**
 * Main JavaScript file for TechHub website
 * Contains functionality for mobile navigation and other interactive elements
 */

// Mobile menu toggle
document.getElementById("mobile-menu").addEventListener("click", function () {
  document.querySelector(".nav-menu").classList.toggle("active");
});

// Close mobile menu when clicking on a nav link
document.querySelectorAll(".nav-menu a").forEach((link) => {
  link.addEventListener("click", function () {
    document.querySelector(".nav-menu").classList.remove("active");
  });
});
