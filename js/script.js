// nav
let nav2 = document.getElementById("nav2");

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
      } else {
        nav2.style.backgroundColor = `#ffd62e`;
      }
    });
  }
}

var g = window.matchMedia("(min-width: 900px)");
navMediaCheck(g);

// mobile nav
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

const plans = document.querySelectorAll(".plan-box");
const features = document.querySelectorAll(".feature");
const planIcons = document.querySelectorAll(".plan__icon");
const planTexts = document.querySelectorAll(".feature__text");
const planRows = document.querySelectorAll(".calc-height");
const iconCheck = document.querySelectorAll(".icon-check");
const iconNot = document.querySelectorAll(".icon-not");

// console.log(iconNot);

const questions = document.querySelectorAll(".question");
const answers = document.querySelectorAll(".answer");
const quizIcons = document.querySelectorAll(".question__icon");
const quizTexts = document.querySelectorAll(".answer__text");
// const quizTextBoxes = document.querySelectorAll(".answer__text-box");

let planHeights = [];
let quizHeights = [];

function calcHeight(arrIn, arrOut) {
  for (let i = 0; i < arrIn.length; i++) {
    arrOut.push(window.getComputedStyle(arrIn[i]).height);
  }
  return arrOut;
}

calcHeight(planRows, planHeights);
calcHeight(quizTexts, quizHeights);

// console.log(planTexts);

function hideIcons(arrIconNot, arrIconChek) {
  for (let i = 0; i < iconCheck.length; i++) {
    iconCheck[i].style.visibility = `hidden`;
  }
  for (let i = 0; i < iconNot.length; i++) {
    iconNot[i].style.visibility = `hidden`;
  }
}

function defaultState(
  animateArr,
  iconsArr,
  num,
  paddingSide,
  arrIn,
  arrOut,
  iconNot,
  iconCheck,
  fnHideIcons
) {
  for (let i = 0; i < animateArr.length; i++) {
    animateArr[i].style.height = `0`;
    animateArr[i].classList.add("closed");
    animateArr[i].style.padding = `0 ${paddingSide}rem`;
    iconsArr[i].style.transform = `rotate(0)`;
  }
  for (let i = 0; i < arrIn.length; i++) {
    arrIn[i].style.color = `#e2ecf5`;
  }
}

function fn(
  animateArr,
  iconsArr,
  num,
  arrIn,
  arrOut,
  paddingSide,
  paddingBottom,
  iconNot,
  iconCheck,
  fnHideIcons
) {
  defaultState(
    animateArr,
    iconsArr,
    num,
    paddingSide,
    arrIn,
    arrOut,
    iconNot,
    iconCheck,
    fnHideIcons
  );

  animateArr[num].classList.remove("closed");
  animateArr[num].style.padding = `3rem ${paddingSide}rem`;
  iconsArr[num].style.transform = `rotate(-180deg)`;

  for (let i = 0; i < arrIn.length; i++) {
    arrIn[i].style.color = `#000000`;
  }
  for (let i = 0; i < 18; i++) {
    iconCheck[i].style.visibility = `visible`;
  }
  for (let i = 0; i < 6; i++) {
    iconNot[i].style.visibility = `visible`;
  }
  // calcHeight(arrIn, arrOut);

  if (arrOut.length > 3) {
    animateArr[num].style.height = `calc(
		${arrOut[0]} + 
		${arrOut[1]} + 
		${arrOut[2]} + 
		${arrOut[3]} + 
		${arrOut[4]} + 
    ${arrOut[5]} + 
    6rem +
    10rem) `;
  } else {
    animateArr[num].style.height = `calc(
		${arrOut[num]} + 
    6rem`;
  }
}

function check(
  listenArr,
  animateArr,
  iconsArr,
  num,
  arrIn,
  arrOut,
  paddingSide,
  paddingBottom,
  fnHideIcons
) {
  listenArr[num].addEventListener("click", function () {
    if (animateArr[num].classList.contains("closed")) {
      fn(
        animateArr,
        iconsArr,
        num,
        arrIn,
        arrOut,
        paddingSide,
        paddingBottom,
        iconNot,
        iconCheck,
        fnHideIcons
      );
    } else {
      defaultState(
        animateArr,
        iconsArr,
        num,
        paddingSide,
        arrIn,
        arrOut,
        iconNot,
        iconCheck,
        fnHideIcons
      );
    }
  });
}

(function () {
  for (let i = 0; i < features.length; i++) {
    defaultState(
      features,
      planIcons,
      i,
      0,
      planTexts,
      planHeights,
      iconNot,
      iconCheck,
      hideIcons(iconNot, iconCheck)
    );
  }
  for (let i = 0; i < answers.length; i++) {
    defaultState(
      answers,
      quizIcons,
      i,
      0,
      quizTexts,
      quizHeights,
      iconNot,
      iconCheck
    );
  }
})();

for (i = 0; i < 4; i++) {
  plans[i].addEventListener(
    "click",
    check(
      plans,
      features,
      planIcons,
      i,
      planTexts,
      planHeights,
      0,
      2,
      hideIcons(iconNot, iconCheck)
    )
  );
}

for (i = 0; i < questions.length; i++) {
  questions[i].addEventListener(
    "click",
    check(questions, answers, quizIcons, i, quizTexts, quizHeights, 0, 0)
  );
}
////////////////////////////////////////////////////////////////////

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
const body = document.querySelector(".body");

popupClose.addEventListener("click", function () {
  popup.style.display = `none`;
  body.classList.toggle("scroll-lock");
});

popupCloseOnBg.addEventListener("click", function () {
  popup.style.display = `none`;
  body.classList.toggle("scroll-lock");
});

for (i = 0; i < popupOpen.length; i++) {
  popupOpen[i].addEventListener("click", function (e) {
    popup.style.display = `flex`;
    body.classList.toggle("scroll-lock");
  });
}

// progress bar animations
const circles = document.querySelectorAll(".progress-bar__circle");
const circleOne = document.querySelector(".progress-bar__circle--1");
const circleTwo = document.querySelector(".progress-bar__circle--2");
const circleThree = document.querySelector(".progress-bar__circle--3");
const circle = document.querySelector(".progress-bar__circle");
const radius = circle.r.baseVal.value;
const circumference = 2 * Math.PI * radius;

circles.forEach((circle) => {
  circle.style.strokeDasharray = `${circumference} ${circumference}`;
  circle.style.strokeDashoffset = circumference;
});

function setProgress(valueOne, valueTwo, valueThree) {
  let offsetOne = circumference - (valueOne / 100) * circumference;
  let offsetTwo = circumference - (valueTwo / 100) * circumference;
  let offsetThree = circumference - (valueThree / 100) * circumference;
  let offsets = [valueOne, valueTwo, valueThree];
  circleOne.style.strokeDashoffset = offsetOne;
  circleTwo.style.strokeDashoffset = offsetTwo;
  circleThree.style.strokeDashoffset = offsetThree;
}

var something = (function () {
  var executed = false;
  return function () {
    if (!executed) {
      executed = true;
      document.addEventListener("scroll", function () {
        setProgress(45, 65, 100);
      });
    }
  };
})();

something();
