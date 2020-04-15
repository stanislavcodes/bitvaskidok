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
      } else {
        nav2.style.backgroundColor = `#ffd62e`;
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
// const questions = document.querySelectorAll(".question");
// const answers = document.querySelectorAll(".answer");
// const icons = document.querySelectorAll(".question__icon");
// const texts = document.querySelectorAll(".answer__text");

// function defaultState() {
//   for (i = 0; i < questions.length; i++) {
//     answers[i].classList.add("answer--closed");
//     answers[i].style.height = `0`;
//     answers[i].style.padding = `0 3rem`;
//     icons[i].style.transform = `rotate(0)`;
//   }
// }

// function fn(a) {
//   defaultState();
//   answers[a].classList.remove("answer--closed");
//   answers[a].style.padding = `3rem`;
//   texts[a].style.display = `block`;
//   icons[a].style.transform = `rotate(-180deg)`;

//   // calculating height
//   let height = window.getComputedStyle(texts[a]).height;
//   answers[a].style.height = `calc(${height} + 6rem)`;

// }

// function check(b) {
//   questions[b].addEventListener("click", function () {
//     if (answers[b].classList.contains("answer--closed")) {
//       fn(b);
//     } else {
//       defaultState();
//     }
//   });
// }

// questions[0].addEventListener("click", check(0));
// questions[1].addEventListener("click", check(1));
// questions[2].addEventListener("click", check(2));

////////////////////////////////////////////////////////////////////
// const plans = document.querySelectorAll(".plan");
const plans = document.querySelectorAll(".plan-box");
const features = document.querySelectorAll(".feature");
const planIcons = document.querySelectorAll(".plan__icon");
const planTexts = document.querySelectorAll(".feature__text");
const planRows = document.querySelectorAll(".calc-height");

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
console.log(planHeights);
console.log(quizHeights);

function defaultState(animateArr, iconsArr, num, paddingTop, arrIn, arrOut) {
  animateArr[num].style.height = `0`;
  animateArr[num].classList.add("closed");
  animateArr[num].style.padding = `0 ${paddingTop}rem`;
  iconsArr[num].style.transform = `rotate(0)`;

  for (let i = 0; i < animateArr.length; i++) {
    animateArr[i].style.height = `0`;
    animateArr[i].classList.add("closed");
    animateArr[i].style.padding = `0 ${paddingTop}rem`;
    iconsArr[i].style.transform = `rotate(0)`;
  }
}

function fn(
  animateArr,
  iconsArr,
  num,
  arrIn,
  arrOut,
  paddingTop,
  paddingBottom
) {
  defaultState(animateArr, iconsArr, num, paddingTop, arrIn, arrOut);

  animateArr[num].classList.remove("closed");
  animateArr[num].style.padding = `3rem ${paddingTop}rem`;
  iconsArr[num].style.transform = `rotate(-180deg)`;

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
    (${paddingBottom}rem) * 5) `;
  } else {
    // console.log(arrOut[num]);

    animateArr[num].style.height = `calc(
		${arrOut[num]} + 
    6rem +
    (${paddingBottom}rem) * 5) `;

    console.log(
      (animateArr[num].style.height = `calc(
		${arrOut[num]} + 
    6rem +
    (${paddingBottom}rem) * 5) `)
    );
  }
}

function check(
  listenArr,
  animateArr,
  iconsArr,
  num,
  arrIn,
  arrOut,
  paddingTop,
  paddingBottom
) {
  listenArr[num].addEventListener("click", function () {
    if (animateArr[num].classList.contains("closed")) {
      fn(animateArr, iconsArr, num, arrIn, arrOut, paddingTop, paddingBottom);
    } else {
      defaultState(animateArr, iconsArr, num, paddingTop, arrIn, arrOut);
    }
  });
}

(function () {
  for (let i = 0; i < features.length; i++) {
    defaultState(features, planIcons, i, 1, planRows, planHeights);
  }
  for (let i = 0; i < answers.length; i++) {
    defaultState(answers, quizIcons, i, 3, quizTexts, quizHeights);
  }
})();

for (i = 0; i < 4; i++) {
  plans[i].addEventListener(
    "click",
    check(plans, features, planIcons, i, planRows, planHeights, 1, 2)
  );
}

for (i = 0; i < questions.length; i++) {
  questions[i].addEventListener(
    "click",
    check(questions, answers, quizIcons, i, quizTexts, quizHeights, 3, 0)
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

///////////////////////////////////////////
