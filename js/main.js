
const toggle = document.querySelector(".nav__toggle");
const links = document.querySelector(".nav__links");

if (toggle && links) {
  toggle.addEventListener("click", () => {
    links.classList.toggle("open");
  });
  links.querySelectorAll("a").forEach(a => {
    a.addEventListener("click", () => links.classList.remove("open"));
  });
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("is-visible");
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));
