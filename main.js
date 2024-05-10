const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", () => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

// header container
ScrollReveal().reveal(".header__container p", {
  ...scrollRevealOption,
});

ScrollReveal().reveal(".header__container h1", {
  ...scrollRevealOption,
  delay: 500,
});

// about container
ScrollReveal().reveal(".about__image img", {
  ...scrollRevealOption,
  origin: "left",
});

ScrollReveal().reveal(".about__content .section__subheader", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".about__content .section__header", {
  ...scrollRevealOption,
  delay: 1000,
});

ScrollReveal().reveal(".about__content .section__description", {
  ...scrollRevealOption,
  delay: 1500,
});

ScrollReveal().reveal(".about__btn", {
  ...scrollRevealOption,
  delay: 2000,
});

// room container
ScrollReveal().reveal(".room__card", {
  ...scrollRevealOption,
  interval: 500,
});

// service container
ScrollReveal().reveal(".service__list li", {
  ...scrollRevealOption,
  interval: 500,
  origin: "right",
});

ScrollReveal().reveal(".container11 .a", {
  ...scrollRevealOption,
  easing: "ease",
  delay: 500,
  interval: 5000,
  origin: "right",
});
ScrollReveal().reveal(".container11 .b", {
  ...scrollRevealOption,
  easing: "ease",
  delay: 500,
  interval: 5000,
  origin: "right",
});
ScrollReveal().reveal(".container11 .a", {
  ...scrollRevealOption,
  easing: "ease",
  delay: 500,
  interval: 5000,
  origin: "right",
});
ScrollReveal().reveal(".container11 .b", {
  ...scrollRevealOption,
  easing: "ease",
  delay: 500,
  interval: 5000,
  origin: "top",
});
ScrollReveal().reveal(".container11 .c", {
  ...scrollRevealOption,
  easing: "ease",
  delay: 500,
  interval: 5000,
  origin: "top",
});
ScrollReveal().reveal(".container11 .d", {
  ...scrollRevealOption,
  easing: "ease",
  delay: 500,
  interval: 5000,
  origin: "top",
});
ScrollReveal().reveal(".container11 .e", {
  ...scrollRevealOption,
  easing: "ease",
  delay: 500,
  interval: 5000,
  origin: "right",
});
ScrollReveal().reveal(".container11 .f", {
  ...scrollRevealOption,
  easing: "ease",
  delay: 500,
  interval: 5000,
  origin: "right",
});
ScrollReveal().reveal(".container11 .g", {
  ...scrollRevealOption,
  easing: "ease",
  delay: 500,
  interval: 5000,
  origin: "left",
});
ScrollReveal().reveal(".container11 .h", {
  ...scrollRevealOption,
  easing: "ease",
  delay: 500,
  interval: 5000,
  origin: "left",
});
ScrollReveal().reveal(".container11 .i", {
  ...scrollRevealOption,
  easing: "ease",
  delay: 500,
  interval: 5000,
  origin: "bottom",
});
ScrollReveal().reveal(".container11 .j", {
  ...scrollRevealOption,
  easing: "ease",
  delay: 500,
  interval: 5000,
  origin: "bottom",
});
