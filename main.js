// Burger with jQuery
$(".header__burger").on("click", function() {
  const $Nav = $(".header__navigation");
  $Nav.toggleClass("active");

  const $span1 = $(".burger__span:nth-of-type(1)");
  $span1.toggleClass("move");
  const $span3 = $(".burger__span:nth-of-type(3)");
  $span3.toggleClass("move");
  const $span2 = $(".burger__span:nth-of-type(2)");
  $span2.toggleClass("dissappear");

  $(".header__burger").toggleClass("active");
});
// Add pics to section with JS
const PICSHolders = [...document.querySelectorAll(".destination__pic")];
const PICS = [
  { img: "./img/cuba.jpg" },
  { img: "./img/norway.jpg" },
  { img: "./img/usa.jpg" },
  { img: "./img/india.jpg" }
];
for (let i = 0; i < PICSHolders.length; i++) {
  PICSHolders[i].style.backgroundImage = `url(${PICS[i].img})`;
}

// Scroll with jQuery
$(window).on("scroll", function() {
  const windowHeight = $(window).height();
  const scrollValue = $(this).scrollTop();

  const $burger = $(".burger__span");
  const $header = $(".header");
  const headerHeight = $header.outerHeight();

  // change burger color
  if ($(".header__theme").hasClass("active")) {
    if (scrollValue > headerHeight) {
      $burger.css("background-color", "white");
    } else if (scrollValue < headerHeight) {
      $burger.css("background-color", "black");
    }
  } else {
    if (scrollValue > headerHeight) {
      $burger.css("background-color", "black");
    } else if (scrollValue < headerHeight) {
      $burger.css("background-color", "white");
    }
  }

  /* Section 1 show */
  const $section1 = $("section.intro");

  if (scrollValue > headerHeight / 2) {
    $section1.addClass("active");
  } else {
    $section1.removeClass("active");
  }

  const $Opinion = $(".details__h1");
  const OpinionFromTop = $Opinion.offset().top;
  const OpinionHeight = $Opinion.outerHeight();
  const $offer = $(".details__intro");

  if (scrollValue > OpinionFromTop + OpinionHeight - windowHeight + 200) {
    $offer.addClass("active");
  }

  const $destinations = $(".destinations__h1");
  const DestinationFromTop = $destinations.offset().top;
  const DestinationHeight = $destinations.outerHeight();

  const $arrowUp = $(".header__arrowUp");

  if (scrollValue > 2000) {
    $arrowUp.addClass("active");
  }
  if (scrollValue < 1000) {
    $arrowUp.removeClass("active");
  }

  const $destination1 = $(".destinations__destination:nth-of-type(1)");
  const $destination2 = $(".destinations__destination:nth-of-type(2)");
  const $destination3 = $(".destinations__destination:nth-of-type(3)");
  const $destination4 = $(".destinations__destination:nth-of-type(4)");

  const dests = [$destination1, $destination2, $destination3, $destination4];

  /* Animated section */
  if (scrollValue > DestinationFromTop + DestinationHeight - windowHeight / 3) {
    for (i = 0; i < dests.length; i++) {
      dests[i].addClass("active");
    }
    /*Reset animation */
  } else if (scrollValue < 100) {
    for (i = 0; i < dests.length; i++) {
      dests[i].removeClass("active");
    }
    $offer.removeClass("active");
  }
});

/* FAQ with jQuery */

$(".faq__question").on("click", function() {
  if ($(".name__box", this).text() === "+") {
    $(".name__box", this).addClass("open");
    $("article", this).slideDown();
    $(".name__box", this).text("-");
  } else if ($(".name__box", this).text() === "-") {
    $(".name__box", this).removeClass("open");
    $("article", this).slideUp();
    $(".name__box", this).text("+");
  }
});

/* Scroll buttons with jQuery*/

$(".About").on("click", function(e) {
  e.preventDefault();
  $("html").animate(
    {
      scrollTop: $(".intro").offset().top
    },
    1000
  );
});
$(".header__button").on("click", function(e) {
  e.preventDefault();
  $("html").animate(
    {
      scrollTop: $(".details").offset().top
    },
    1000
  );
});

$(".Tours").on("click", function(e) {
  e.preventDefault();
  $("html").animate(
    {
      scrollTop: $(".destinations").offset().top
    },
    1250
  );
});
$(".News").on("click", function(e) {
  e.preventDefault();
  $("html").animate(
    {
      scrollTop: $(".details").offset().top
    },
    1500
  );
});
$(".Contact").on("click", function(e) {
  e.preventDefault();
  $("html").animate(
    {
      scrollTop: $(".location__socials").offset().top
    },
    1750
  );
});
$(".FAQ").on("click", function(e) {
  e.preventDefault();
  $("html").animate(
    {
      scrollTop: $(".faq").offset().top
    },
    2000
  );
});
$(".header__arrowUp").on("click", function(e) {
  e.preventDefault();
  $("html").animate(
    {
      scrollTop: $(".header").offset().top
    },
    2000
  );
});

/* Dark theme */

const ThemeButton = document.querySelector(".header__theme");
const introArticle = document.querySelector(".intro__article");
const introH2 = document.querySelector(".article__h2");
const faqH1 = document.querySelector(".faq__h1");
const DestinationsH1 = document.querySelector(".destinations__h1");
const DetailsH1 = document.querySelector(".details__h1");
const footer = document.querySelector(".footer");
const introP = document.querySelector(".article__p");
const navigation = document.querySelector(".header__navigation");
const arrowUp = document.querySelector(".header__arrowUp");
const faqBorder = [...document.querySelectorAll(".name_h4")];
const burger = [...document.querySelectorAll(".burger__span")];
const divBox = [...document.querySelectorAll(".name__box")];
const socials = [...document.querySelectorAll(".obj__social")];
const socialI = [...document.querySelectorAll(".social-icon")];
const Elements = [introArticle, introH2, introP, DestinationsH1, DetailsH1];
const BorderElem = [footer, faqH1, DestinationsH1, DetailsH1, navigation];

ThemeButton.addEventListener("click", function() {
  ThemeButton.classList.toggle("active");
  document.body.classList.toggle("black");
  arrowUp.classList.toggle("border");
  faqBorder.forEach(element => element.classList.toggle("border"));
  Elements.forEach(element => element.classList.toggle("black"));
  BorderElem.forEach(element => element.classList.toggle("border"));
  divBox.forEach(box => box.classList.toggle("black"));
  socials.forEach(social => social.classList.toggle("black"));
  socialI.forEach(social => social.classList.toggle("black"));
});

/* Baner with JS */
const SlideList = [
  {
    img: "./img/venice.jpg"
  },
  {
    img: "./img/baner1.jpg"
  },
  {
    img: "./img/baner2.jpg"
  },
  {
    img: "./img/baner3.jpg"
  },
  {
    img: "./img/baner4.jpg"
  }
];

const IMG = document.querySelector(".header__img");
const Dots = [...document.querySelectorAll(".dots__span")];

const time = 4000;
let active = 0;

const changeDot = () => {
  const activeDot = Dots.findIndex(dot => dot.classList.contains("active"));
  Dots[activeDot].classList.remove("active");
  Dots[active].classList.add("active");
};

const changeSlide = () => {
  active++;
  if (active === SlideList.length) {
    active = 0;
  }
  IMG.src = SlideList[active].img;
  changeDot();
};
let Baner = setInterval(changeSlide, time);

const keyChange = e => {
  clearInterval(Baner);
  if (e.keyCode === 37 || e.keyCode === 39) {
    e.keyCode === 37 ? active-- : active++;
    if (active >= SlideList.length) {
      active = 0;
    }
    if (active < 0) {
      active = SlideList.length - 1;
    }
    IMG.src = SlideList[active].img;
    changeDot();
  }
  Baner = setInterval(changeSlide, time);
};
window.addEventListener("keydown", keyChange);
