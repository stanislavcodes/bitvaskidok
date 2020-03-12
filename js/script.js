document.addEventListener("mousemove", parallax);
document.addEventListener("mouseleave", parallaxDefault);
let layers = document.querySelectorAll('.layer');

function parallax(event) {
  //console.log(event.clientX);
  
  layers.forEach(layer => {
    let speed = layer.getAttribute('data-speed');
    layer.style.transition = `all 0s`;
    layer.style.transform = `translate(${event.clientX*speed/1000}px, ${event.clientY*speed/2000}px)`;
  });
}

function parallaxDefault() {
  layers.forEach(layer => {
    layer.style.transition = `all .5s`;
    layer.style.transform = `translate(0px, 0px)`;
  });
}