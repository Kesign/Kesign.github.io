//Sobre mi
const animations = (elementId) => {
  let animationEffect = document.getElementById(elementId);
  let scrollPosition = animationEffect.getBoundingClientRect().top;
  let screenSize = window.innerHeight;

  if (scrollPosition < screenSize - 100) {
    animationEffect.style.animation = "showAnimation 1s none";
    animationEffect.style.opacity = 1;
  } else {
    animationEffect.style.transition = "all .3s ease";
    animationEffect.style.opacity = 0;
    animationEffect.style.animation = "";
  }
};
window.addEventListener("scroll", () => animations("animation"));
window.addEventListener("scroll", () => animations("about-me-footer"));

//Habilidades
const animationFour = (elementId) => {
  let animationEffect = document.getElementById(elementId);
  let scrollPosition = animationEffect.getBoundingClientRect().top;
  let screenSize = window.innerHeight;

  if (scrollPosition < screenSize - 100) {
    animationEffect.style.animation = "animation4 1s none";
    animationEffect.style.opacity = 1;
  } else {
    animationEffect.style.transition = "all .3s ease";
    animationEffect.style.opacity = 0;
    animationEffect.style.animation = "";
  }
};
window.addEventListener("scroll", () => animationFour("skills-text"));
window.addEventListener("scroll", () => animationTwo("languages"));

//Proyectos
const animationTwo = (elementId) => {
  let animationEffect = document.getElementById(elementId);
  let scrollPosition = animationEffect.getBoundingClientRect().top;
  let screenSize = window.innerHeight;

  if (scrollPosition < screenSize - 100) {
    animationEffect.style.animation = "animation2 1s none";
    animationEffect.style.opacity = 1;
  } else {
    animationEffect.style.transition = "all .3s ease";
    animationEffect.style.opacity = 0;
    animationEffect.style.animation = "";
  }
};

const animationThree = (elementId) => {
  let animationEffect = document.getElementById(elementId);
  let scrollPosition = animationEffect.getBoundingClientRect().top;
  let screenSize = window.innerHeight;

  if (scrollPosition < screenSize - 100) {
    animationEffect.style.animation = "animation3 1s .6s none";
    animationEffect.style.animationFillMode = "both";
    animationEffect.style.opacity = 1;
  } else {
    animationEffect.style.transition = "all .3s ease";
    animationEffect.style.opacity = 0;
    animationEffect.style.animation = "";
  }
};
window.addEventListener("scroll", () => animationTwo("projects-text"));
window.addEventListener("scroll", () => animationThree("projects-list"));

// MENU ICON TOGGLE
window.onscroll = () => {
  let scroll = document.documentElement.scrollTop;
  if (scroll > 400) {
    document.getElementById("show-nav").style.transform = "scale(1)";
  } else {
    document.getElementById("show-nav").style.transform = "scale(0)";
    document.getElementById("span").classList.remove("menu-visible");
    document.querySelector(".menu-icon").classList.remove("spin-menu");
  }
};

// ANIMATION MENU
document.querySelector(".show-menu").addEventListener("click", () => {
  document.getElementById("span").classList.toggle("menu-visible");
  document.querySelector(".menu-icon").classList.toggle("spin-menu");
});

window.onload = () => {
  // SHOW MENU
  document.getElementById("show-nav").style.transform = "scale(0)";

  //LOADER ANIMATION
  document.getElementById("loading").style.opacity = "0";
  document.getElementById("loading").style.visibility = "hidden";
  document.body.style.overflowY = "auto";
  window.scrollTo(0, 0);
};