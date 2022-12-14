const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

const navLink = document.querySelectorAll(".nav__link");

const linkAction = () => {
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show-menu");
};
navLink.forEach((n) => n.addEventListener("click", linkAction));

const scrollHeader = () => {
  const header = document.getElementById("header");
  this.scrollY >= 50
    ? header.classList.add("scroll-header")
    : header.classList.remove("scroll-header");
};
window.addEventListener("scroll", scrollHeader);

const sections = document.querySelectorAll("section[id]");

const scrollActive = () => {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute("id"),
      sectionsClass = document.querySelector(
        ".nav__menu a[href*=" + sectionId + "]"
      );

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      sectionsClass.classList.add("active-link");
    } else {
      sectionsClass.classList.remove("active-link");
    }
  });
};
window.addEventListener("scroll", scrollActive);

const scrollUp = () => {
  const scrollUp = document.getElementById("scroll-up");
  this.scrollY >= 350
    ? scrollUp.classList.add("show-scroll")
    : scrollUp.classList.remove("show-scroll");
};
window.addEventListener("scroll", scrollUp);

const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2200,
  delay: 400,
});

sr.reveal(`.home__data .footer__container, .`);
sr.reveal(`.home__img`, { delay: 700, origin: "bottom" });
sr.reveal(`.Logos__img, .program__card, .pricing__card`, { interval: 100 });
sr.reveal(`.choose__img`, { origin: "left" });
sr.reveal(`.choose__content`, { origin: "right" });

//API
const api_url = "http://numbersapi.com/1/30/date?json";

async function getapi(url) {
  const response = await fetch(url);
  var data = await response.json();
  console.log(data);
  show(data);
}
getapi(api_url);

function show(data) {
  let tab = `<p>${data.text}</p>`;

  document.getElementById("getText").innerHTML = tab;
}


