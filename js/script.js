// nav

let nav2 = document.getElementById("nav2");
// document.addEventListener("scroll", function () {
//   if (window.pageYOffset >= 300) {
//     nav2.style.display = `flex`;
//   } else {
//     nav2.style.display = `none`;
//   }
// });

function navMediaCheck(g) {
  if (g.matches) {
    // If media query matches
    document.addEventListener("scroll", function () {
      if (window.pageYOffset >= 300) {
        nav2.style.display = `flex`;
      } else {
        nav2.style.display = `none`;
      }
    });
  } else {
    nav2.style.display = `flex`;
    nav2.style.position = `fixed`;
    nav2.style.top = `0`;

    document.addEventListener("scroll", function () {
      if (window.pageYOffset >= 100) {
        nav2.style.backgroundColor = `#ffffff`;
        console.log("white");
      } else {
        nav2.style.backgroundColor = `#ffd62e`;
        console.log("yellow");
      }
    });
  }
}

var g = window.matchMedia("(min-width: 900px)");
navMediaCheck(g);

// mobile nav
// let listOne = document.getElementById("listOne");
// let listOne = document.getElementById("listTwo");
let navs = document.querySelectorAll(".nav");
let lists = document.querySelectorAll(".nav__list");
let hamburgers = document.querySelectorAll(".hamburger");

function navMenu(num) {
  hamburgers[num].addEventListener("click", function () {
    hamburgers[num].classList.toggle("open");
    navs[num].classList.toggle("open");
    lists[num].classList.toggle("open");
    console.log("ok");
  });
}
for (i = 0; i < hamburgers.length; i++) {
  navMenu(i);
}

// hamburger.addEventListener("click", function () {
//   hamburger.classList.toggle("open");
//   nav2.classList.toggle("open");
//   listOne.classList.toggle("open");
// });

// parallax

let layers = document.querySelectorAll(".layer");

function parallaxDefault() {
  layers.forEach((layer) => {
    layer.style.transition = `all .5s`;
    layer.style.transform = `translate(0px, 0px)`;
  });
}

function parallax(event) {
  layers.forEach((layer) => {
    let speed = layer.getAttribute("data-speed");
    layer.style.transition = `all 0s`;
    layer.style.transform = `translate(${(event.clientX * speed) / 1000}px, ${
      (event.clientY * speed) / 2000
    }px)`;
  });
}

// check to USE parallax or NOT to USE
function parallaxMediaCheck(x) {
  let layers = document.querySelectorAll(".layer");
  if (x.matches) {
    // If media query matches
    document.addEventListener("mousemove", function (event) {
      layers.forEach((layer) => {
        let speed = layer.getAttribute("data-speed");
        layer.style.transition = `all 0s`;
        layer.style.transform = `translate(${
          (event.clientX * speed) / 1000
        }px, ${(event.clientY * speed) / 2000}px)`;
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
  questions[b].addEventListener("click", function () {
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
  speed: 400,
});
var easeOutQuart = new SmoothScroll('[data-easing="linear"]', {
  easing: "linear",
});

// popup
const popupOpen = document.querySelectorAll(".cta-popup");
const popup = document.querySelector(".popup__container");
const popupClose = document.getElementById("close-popup");
const popupCloseOnBg = document.querySelector(".popup__bg-close");

popupClose.addEventListener("click", function () {
  popup.style.display = `none`;
});

popupCloseOnBg.addEventListener("click", function () {
  popup.style.display = `none`;
});

for (i = 0; i < popupOpen.length; i++) {
  popupOpen[i].addEventListener("click", function () {
    popup.style.display = `flex`;
  });
}

// progress bar animations

document.addEventListener("scroll", function () {
  if (window.pageYOffset >= 300 && window.pageYOffset <= 500) {
    $("#pb1").circleProgress({
      value: 0.4,
      size: 100,
      thickness: 4,
      startAngle: -1.5708,
      fill: { color: "#008aff" },
      animation: {
        duration: 600,
      },
    });

    $("#pb2").circleProgress({
      value: 0.6,
      size: 100,
      thickness: 4,
      startAngle: -1.5708,
      fill: { color: "#32B228" },
      animation: {
        duration: 600,
      },
    });

    $("#pb3").circleProgress({
      value: 1,
      size: 100,
      thickness: 4,
      startAngle: -1.5708,
      fill: { color: "#D60505" },
      animation: {
        duration: 600,
      },
    });
  } else {
  }
});
