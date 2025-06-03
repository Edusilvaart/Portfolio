const navMenuBtn = document.querySelector('.nav__menu__btn');
const navLinks = document.querySelector('.nav__links');
// Adicione esta linha para selecionar o ícone do botão do menu
const menuBtnIcon = document.querySelector('.nav__menu__btn i'); // Supondo que o ícone esteja dentro de um <i> no botão .nav__menu__btn

navMenuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    const isOpen = navLinks.classList.contains("open");
    // Agora 'menuBtnIcon' estará definido e a classe será alterada corretamente
    menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
    // Apenas remova a classe "open" se o clique não for dentro dos próprios links para evitar fechamento indesejado
    // ou se você quiser que qualquer clique fora do menu feche-o.
    // Para simplificar, vou manter como estava, mas com a correção do ícone.
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class", "ri-menu-line"); // Define o ícone de volta para o menu
});

const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
};


ScrollReveal().reveal(".header__image img", {
    ...scrollRevealOption,
    origin: "right",
});
ScrollReveal().reveal(".header__content h2", {
    ...scrollRevealOption,
    delay: 250,
});
ScrollReveal().reveal(".header__content h1", {
    ...scrollRevealOption,
    delay: 500,
});
ScrollReveal().reveal(".header__content h3", {
    ...scrollRevealOption,
    delay: 1000,
});
ScrollReveal().reveal(".header__content p", {
    ...scrollRevealOption,
    delay: 1000,
});
ScrollReveal().reveal(".header__btns", {
    ...scrollRevealOption,
    delay: 2000,
});

ScrollReveal().reveal(".intro__image", {
    ...scrollRevealOption,
    origin: "left",
});
ScrollReveal().reveal(".intro__content .section__subheader", {
    ...scrollRevealOption,
    delay: 250,
});
ScrollReveal().reveal(".intro__content .section__header", {
    ...scrollRevealOption,
    delay: 500,
});
ScrollReveal().reveal(".intro__description", {
    ...scrollRevealOption,
    delay: 500,
});
ScrollReveal().reveal(".intro__grid", {
    ...scrollRevealOption,
    delay: 500,
});
ScrollReveal().reveal(".intro__content h4", {
    ...scrollRevealOption,
    delay: 1000,
});
ScrollReveal().reveal(".intro__flex div", {
    ...scrollRevealOption,
    delay: 2000,
    interval: 200,
});

ScrollReveal().reveal(".journey__grid > div > div", {
    ...scrollRevealOption,
    interval: 250,
});

const mixer = mixitup(".portfolio__grid");

ScrollReveal().reveal(".banner__content .section__header", {
    ...scrollRevealOption,
});
ScrollReveal().reveal(".banner__content p", {
    ...scrollRevealOption,
    delay: 500,
});
ScrollReveal().reveal(".banner__btn", {
    ...scrollRevealOption,
    delay: 1000,
});

const swiper = new Swiper(".swiper", {
    slidesPerView: 2,
    spaceBetween: 50,
    loop: true,

    pagination: {
        el: ".swiper-pagination",
    },
});

ScrollReveal().reveal(".blog__card", {
    ...scrollRevealOption,
    interval: 500,
});

///////////letras dinâmicas/////////

let words = document.querySelectorAll(".word");
words.forEach((word)=>{
    let letters = word.textContent.split("");
    word.textContent="";
    letters.forEach((letter)=>{
        let span = document.createElement("span");
        span.textContent = letter;
        span.className = "letter";
        word.append(span);
    })
});

let currentWordIndex = 0;
let maxWordIndex = words.length - 1;
words[currentWordIndex].style.opacity = 1;

let changeText = () => {
    let currentWord = words[currentWordIndex];
    let nextWord = words[currentWordIndex === maxWordIndex ? 0 : currentWordIndex + 1];

    Array.from(currentWord.children).forEach((letter,i)=> {
        setTimeout(() => {
            letter.className = "letter out";
        }, i * 80);
    });
    nextWord.style.opacity="1";
    Array.from(nextWord.children).forEach((letter,i)=>{
        letter.className = "letter behind";
        setTimeout(()=>{
            letter.className = "letter in";
        },340 + i * 80);
    });
    currentWordIndex = currentWordIndex === maxWordIndex ? 0 : currentWordIndex + 1;
};

changeText();
setInterval(changeText, 3000);

////////////////////////// contato //////////////////////////////

// Simple scroll 

document.addEventListener("DOMContentLoaded", function () {
  // Configure animation properties
  const animationConfig = {
    distance: "50px",
    origin: "bottom",
    duration: 300,
    delay: 100,
    easing: "ease-in-out",
    reset: true,
  };

  // Animate elements sequentially with proper selectors
  const elements = [
    ".contact-header",
    ".contact-cards .contact-card:nth-child(1)",
    ".contact-cards .contact-card:nth-child(2)",
    ".contact-cards .contact-card:nth-child(3)",
    ".contact-cards .contact-card:nth-child(4)",
    ".whatsapp-card",
  ];

  elements.forEach((selector, index) => {
    const element = document.querySelector(selector);
    if (element) {
      element.style.opacity = "0";
      element.style.transform = `translateY(${animationConfig.distance})`;
      element.style.transition = `
        opacity ${animationConfig.duration}ms ${animationConfig.easing} ${
        animationConfig.delay + index * 100
      }ms,
        transform ${animationConfig.duration}ms ${animationConfig.easing} ${
        animationConfig.delay + index * 100
      }ms
      `;
    }
  });

  // Check scroll position and animate
  function checkScroll() {
    elements.forEach(selector => {
      const element = document.querySelector(selector);
      if (element && isElementInViewport(element)) {
        element.style.opacity = "1";
        element.style.transform = "translateY(0)";
      }
    });
  }

  // Helper function to check if element is in viewport
  function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top <=
      (window.innerHeight || document.documentElement.clientHeight) * 0.75
    );
  }

  // Initial check
  checkScroll();

  // Listen for scroll events
  window.addEventListener("scroll", checkScroll);
});

////////////////// scrool to top button //////////////////////

const scrollToTopButton = document.getElementById('js-top');

const scrollFunc = () => {

    let y = window.scrollY;

    if (y > 0) {
        scrollToTopButton.className = "top-link show";
    } else {
        scrollToTopButton.className = "top-link hide";
    }
};

window.addEventListener("scroll", scrollFunc);

const scrollToTop = () => {

    const c = document.documentElement.scrollTop || document.body.scrollTop;

    if (c > 0) {
        window.requestAnimationFrame(scrollToTop);
        window.scrollTo(0, c - c / 1);
    }
};

scrollToTopButton.onclick = function (e) {
    e.preventDefault();
    scrollToTop();
}