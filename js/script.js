// nav
// document.addEventListener("scroll", function() {
//   if (window.pageYOffset >= 300) {
//     document.getElementById("nav2").style.display = `flex`;
//     document.getElementById("nav2").style.position = `-webkit-sticky`;
//     document.getElementById("nav2").style.position = `sticky`;
//     document.getElementById("nav2").style.top = `0`;
//   } else {
//     document.getElementById("nav2").style.display = `none`;
//   }
// });
let nav2 = document.getElementById("nav2");

function navMediaCheck(g) {
  if (g.matches) {
    // If media query matches
    document.addEventListener("scroll", function() {
      if (window.pageYOffset >= 300) {
        nav2.style.display = `flex`;
        nav2.style.position = `-webkit-sticky`;
        nav2.style.position = `sticky`;
        nav2.style.top = `0`;
      } else {
        nav2.style.display = `none`;
      }
    });
  } else {
    nav2.style.display = `flex`;
    nav2.style.position = `-webkit-sticky`;
    nav2.style.position = `sticky`;
    nav2.style.top = `0`;
  }
}

var g = window.matchMedia("(min-width: 700px)");
navMediaCheck(g);

// mobile nav
let hamburger = document.querySelector(".hamburger");
hamburger.addEventListener("click", function() {
  hamburger.classList.toggle("open");
  nav2.classList.toggle("open");
});

let listOne = document.getElementById("listOne");
let currentState = "closed";

hamburger.addEventListener("click", function() {
  if (currentState === "closed") {
    listOne.style.display = `flex`;
    console.log("opened");
    currentState = "opened";
    return currentState;
  } else {
    listOne.style.display = `none`;
    console.log("closed");
    currentState = "closed";
    return currentState;
  }
});

// parallax

let layers = document.querySelectorAll(".layer");

function parallaxDefault() {
  layers.forEach(layer => {
    layer.style.transition = `all .5s`;
    layer.style.transform = `translate(0px, 0px)`;
  });
}

function parallax(event) {
  layers.forEach(layer => {
    let speed = layer.getAttribute("data-speed");
    layer.style.transition = `all 0s`;
    layer.style.transform = `translate(${(event.clientX * speed) /
      1000}px, ${(event.clientY * speed) / 2000}px)`;
  });
}

// check to USE parallax or NOT to USE
function parallaxMediaCheck(x) {
  let layers = document.querySelectorAll(".layer");
  if (x.matches) {
    // If media query matches
    document.addEventListener("mousemove", function(event) {
      layers.forEach(layer => {
        let speed = layer.getAttribute("data-speed");
        layer.style.transition = `all 0s`;
        layer.style.transform = `translate(${(event.clientX * speed) /
          1000}px, ${(event.clientY * speed) / 2000}px)`;
      });
    });
  } else {
    for (i = 0; i < layers.length; i++) {
      layers[i].style.transform = `none`;
    }
  }
}

var x = window.matchMedia("(min-width: 1029px)");
parallaxMediaCheck(x);

// creating our arrays
const questions = document.querySelectorAll(".question");
const answers = document.querySelectorAll(".answer");
const icons = document.querySelectorAll(".question__icon");
const texts = document.querySelectorAll(".answer__text");

function defaultState() {
  for (i = 0; i < questions.length; i++) {
    answers[i].classList.add("answer--closed");
    answers[i].style.height = `0`;
    answers[i].style.padding = `0`;
    texts[i].style.display = `none`;
    icons[i].style.transform = `rotate(0)`;
  }
}

function fn(a) {
  defaultState();
  answers[a].classList.remove("answer--closed");
  answers[a].style.padding = `3rem`;
  texts[a].style.display = `block`;

  // calculating height
  let height = window.getComputedStyle(texts[a]).height;
  answers[a].style.height = `calc(${height} + 6rem)`;

  icons[a].style.transform = `rotate(-180deg)`;
}

function check(b) {
  questions[b].addEventListener("click", function() {
    if (answers[b].classList.contains("answer--closed")) {
      fn(b);
    } else {
      defaultState();
    }
  });
}

questions[0].addEventListener("click", check(0));
questions[1].addEventListener("click", check(1));
questions[2].addEventListener("click", check(2));

// smooth scrolling
var scroll = new SmoothScroll('.nav a[href*="#"]', {
  speed: 400
});
var easeOutQuart = new SmoothScroll('[data-easing="linear"]', {
  easing: "linear"
});

// popup
const popupOpen = document.querySelectorAll(".cta-popup");
const popup = document.querySelector(".popup__container");
const popupClose = document.getElementById("close-popup");

popupClose.addEventListener("click", function() {
  popup.style.display = `none`;
});

for (i = 0; i < popupOpen.length; i++) {
  popupOpen[i].addEventListener("click", function() {
    popup.style.display = `flex`;
  });
}
