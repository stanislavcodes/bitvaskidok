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

// make values default
function defaultState() {
  for (i = 0; i < questions.length; i++) {
    answers[i].classList.add("answer--closed");
    answers[i].style.transition = `height .5s ease-in-out`;
    icons[i].style.transition = `all .3s`;
    icons[i].style.transform = `rotate(0)`;
  }
}
// shows our answer
function fn(a) {
  defaultState();
  answers[a].classList.remove("answer--closed");
  icons[a].style.transform = `rotate(-180deg)`;
}
// checks what we wanna do: open or close answer
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
