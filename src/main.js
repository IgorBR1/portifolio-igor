import './style.css'
import javascriptLogo from './assets/javascript.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import { setupCounter } from './counter.js'


document.addEventListener("DOMContentLoaded", () => {

    const carousel = document.getElementById("projectsCarousel");
    const nextButton = document.getElementById("nextProject");
    const prevButton = document.getElementById("prevProject");

    if (!carousel || !nextButton || !prevButton) {
        console.error("Carousel não encontrado.");
        return;
    }

    nextButton.addEventListener("click", () => {

        const maxScroll = carousel.scrollWidth - carousel.clientWidth;

        if (carousel.scrollLeft >= maxScroll - 10) {

            carousel.scrollTo({
                left: 0,
                behavior: "smooth"
            });

        } else {

            carousel.scrollBy({
                left: carousel.clientWidth,
                behavior: "smooth"
            });

        }

    });

    prevButton.addEventListener("click", () => {

        if (carousel.scrollLeft <= 10) {

            carousel.scrollTo({
                left: carousel.scrollWidth,
                behavior: "smooth"
            });

        } else {

            carousel.scrollBy({
                left: -carousel.clientWidth,
                behavior: "smooth"
            });

        }

    });

});

document.querySelector('#app').innerHTML = `
<section id="center">
  <div class="hero">
    <img src="${heroImg}" class="base" width="170" height="179">
    <img src="${javascriptLogo}" class="framework" alt="JavaScript logo"/>
    <img src="${viteLogo}" class="vite" alt="Vite logo" />
  </div>
  <div>
    <h1>Get started</h1>
    <p>Edit <code>src/main.js</code> and save to test <code>HMR</code></p>
  </div>
  <button id="counter" type="button" class="counter"></button>
</section>

<div class="ticks"></div>

<section id="next-steps">
  ...
</section>

<div class="ticks"></div>
<section id="spacer"></section>
`

setupCounter(document.querySelector('#counter'))