// main.js
// Mobile menu animation + smooth scroll to sections

const menuBtn = document.querySelector(".menu-btn");
const content = document.querySelector(".content");
const boxPopup = document.querySelector(".box__popup");

let menuOpen = false;

function toggleMenu(forceState) {
  if (!menuBtn || !content || !boxPopup) return;

  const shouldOpen = typeof forceState === "boolean" ? forceState : !menuOpen;

  menuBtn.classList.toggle("open", shouldOpen);
  boxPopup.classList.toggle("activate", shouldOpen);
  content.classList.toggle("pop", shouldOpen);
  document.body.classList.toggle("blur", shouldOpen);

  menuOpen = shouldOpen;
}

// Click on burger
if (menuBtn) {
  menuBtn.addEventListener("click", () => toggleMenu());
  // Basic keyboard support
  menuBtn.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggleMenu();
    }
  });
}

// Smooth scroll for all nav links that declare data-scroll
const navLinks = document.querySelectorAll("a[data-scroll]");

navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    const href = link.getAttribute("href");
    if (!href || !href.startsWith("#")) return;

    const target = document.querySelector(href);
    if (!target) return;

    e.preventDefault();

    // Close mobile menu if it is open
    if (menuOpen) toggleMenu(false);

    target.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
});

// Close menu when tapping the overlay (outside panel) on mobile
if (boxPopup) {
  boxPopup.addEventListener("click", (e) => {
    const panel = boxPopup.querySelector(".box__popup-menu");
    if (!panel) return;

    if (menuOpen && !panel.contains(e.target)) {
      toggleMenu(false);
    }
  });
}
