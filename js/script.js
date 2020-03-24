// nav
// let topDistance = window.pageYOffset;

document.addEventListener("scroll", function() {
  if (window.pageYOffset >= 300) {
    document.getElementById("nav2").style.display = `flex`;
    document.getElementById("nav2").style.position = `-webkit-sticky`;
    document.getElementById("nav2").style.position = `sticky`;
    document.getElementById("nav2").style.top = `0`;
  } else {
    document.getElementById("nav2").style.display = `none`;
  }
});

// parallax
document.addEventListener("mousemove", parallax);
document.addEventListener("mouseleave", parallaxDefault);
let layers = document.querySelectorAll(".layer");

function parallax(event) {
  layers.forEach(layer => {
    let speed = layer.getAttribute("data-speed");
    layer.style.transition = `all 0s`;
    layer.style.transform = `translate(${(event.clientX * speed) /
      1000}px, ${(event.clientY * speed) / 2000}px)`;
  });
}

function parallaxDefault() {
  layers.forEach(layer => {
    layer.style.transition = `all .5s`;
    layer.style.transform = `translate(0px, 0px)`;
  });
}
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

function smoothScroll(trgt, duration) {
  let target = document.querySelector(trgt);
  let targetPosition = target.getBoundingClientRect().top;
  let startPosition = window.pageYOffset;
  let distance = targetPosition - startPosition;
  let startTime = null;

  function animation(currentTime) {
    if (startTime === null) startTime = currentTime;
    let TimeElapsed = currentTime - startTime;
    let run = ease(TimeElapsed, startPosition, distance, duration);
    window.scrollTo(0, run + 10);
    if (TimeElapsed < duration) requestAnimationFrame(animation);
  }

  function ease(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  }

  requestAnimationFrame(animation);
}

// navigation

let linkHow = document.querySelector(".linkHow");
let linkWho = document.querySelector(".linkWho");
let linkTar = document.querySelector(".linkTar");
let linkOrg = document.querySelector(".linkOrg");
let linkCon = document.querySelector(".linkCon");

let linkHow2 = document.querySelector(".linkHow-2");
let linkWho2 = document.querySelector(".linkWho-2");
let linkTar2 = document.querySelector(".linkTar-2");
let linkOrg2 = document.querySelector(".linkOrg-2");
let linkCon2 = document.querySelector(".linkCon-2");

document.querySelector(".linkHow").addEventListener("click", function() {
  smoothScroll(".how", 1000);
});
linkHow2.addEventListener("click", function() {
  smoothScroll(".how", 1000);
});

linkWho.addEventListener("click", function() {
  smoothScroll(".who", 1000);
});
linkWho2.addEventListener("click", function() {
  smoothScroll(".who", 1000);
});

linkTar.addEventListener("click", function() {
  smoothScroll(".tariffs", 1000);
});
linkTar2.addEventListener("click", function() {
  smoothScroll(".tariffs", 1000);
});

linkOrg.addEventListener("click", function() {
  smoothScroll(".organizers", 1000);
});
linkOrg2.addEventListener("click", function() {
  smoothScroll(".organizers", 1000);
});
