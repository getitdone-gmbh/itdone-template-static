// Small, dependency-free enhancements. Keep this file light: this template
// is plain HTML/CSS first — JavaScript only adds polish, nothing here is
// required for the content to work.

// Mobile navigation toggle
const toggle = document.querySelector(".nav-toggle");
const menu = document.querySelector(".nav-menu");
if (toggle && menu) {
  toggle.addEventListener("click", () => {
    const open = menu.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(open));
  });
  // Close the menu when a link inside it is used
  menu.addEventListener("click", (e) => {
    if (e.target.closest("a")) {
      menu.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    }
  });
}

// Scroll reveal: .reveal elements fade in once when they enter the viewport
const revealables = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      }
    },
    { threshold: 0.15 },
  );
  revealables.forEach((el) => observer.observe(el));
} else {
  revealables.forEach((el) => el.classList.add("visible"));
}

// Current year in the footer
const year = document.getElementById("year");
if (year) year.textContent = String(new Date().getFullYear());
