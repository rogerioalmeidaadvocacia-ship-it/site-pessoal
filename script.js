const menuButton = document.querySelector(".menu-toggle");
const menu = document.querySelector(".site-nav");
const menuLinks = document.querySelectorAll(".site-nav a");

menuButton.addEventListener("click", () => {
  const isOpen = menu.classList.toggle("is-open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
});

menuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    menu.classList.remove("is-open");
    menuButton.setAttribute("aria-expanded", "false");
  });
});

document.getElementById("year").textContent = new Date().getFullYear();

const revealItems = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 },
  );

  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}
