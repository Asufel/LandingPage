// Animowana ikona burgera
$('div.burger').on("click", function () {

    const $Nav = $('.navigation');
    $Nav.toggleClass("active");

    const $span1 = $('div.burger span:nth-of-type(1)');
    $span1.toggleClass("move")
    const $span3 = $('div.burger span:nth-of-type(3)');
    $span3.toggleClass("move")

    const $span2 = $('div.burger>span:nth-of-type(2)');
    $span2.toggleClass("dissappear")

    $('div.burger').toggleClass("active");
});

/* Efekt scroll - pojawiające sie elementy kiedy kursor znajdzie się w odpowiednim miejscu
   Zmiana koloru burgera w zależności od tła
*/
$(window).on("scroll", function () {
    /*Pobranie i zapisanie do zmiennych: wysokość okna przeglądarki, aktualzna pozycja skrolla*/
    const windowHeight = $(window).height();
    const scrollValue = $(this).scrollTop();

    const $burger = $('div.burger span');
    const $header = $('header');
    const headerHeight = $header.outerHeight();
    const body = document.body;


    /* Zmiana koloru burgera */
    if ($('div.theme').hasClass("active")) {

        if (scrollValue > headerHeight) {
            $burger.css("background-color", "white")
        } else if (scrollValue < headerHeight) {
            $burger.css("background-color", "black")
        }

    } else {
        if (scrollValue > headerHeight) {
            $burger.css("background-color", "black")
        } else if (scrollValue < headerHeight) {
            $burger.css("background-color", "white")
        }
    }

    /*Pojawienie się sekcji 1 */
    const $section1 = $('section.intro');

    if (scrollValue > headerHeight / 2) {
        $section1.addClass("active");
    } else {
        $section1.removeClass("active");
    }

    const $destination1 = $('.destinations>div.destination:nth-of-type(1)');
    const $destination2 = $('.destinations>div.destination:nth-of-type(2)');
    const $destination3 = $('.destinations>div.destination:nth-of-type(3)');
    const $destination4 = $('.destinations>div.destination:nth-of-type(4)');

    const dests = [$destination1, $destination2, $destination3, $destination4];

    /*Pobranie nagłówka sekcji*/
    const $Opinion = $('.details_h1');
    const OpinionFromTop = $Opinion.offset().top;
    const OpinionHeight = $Opinion.outerHeight();
    const $offer = $('div.offer_intro');

    if (scrollValue > OpinionFromTop + OpinionHeight - windowHeight + 200) {
        $offer.addClass("active");
    }

    /*Pobranie nagłówka sekcji*/
    const $destinations = $('.destinations_h1');
    const DestinationFromTop = $destinations.offset().top;
    const DestinationHeight = $destinations.outerHeight();

    /*Przycisk arrowUp, włączenie animacji */
    const $arrowUp = $('.arrowUp');

    if (scrollValue > 2000) {
        $arrowUp.addClass("active");
    }
    if (scrollValue < 1000) {
        $arrowUp.removeClass("active");
    }

    /* Animowana sekcja - ukazujące się bloki */
    if (scrollValue > DestinationFromTop + DestinationHeight - windowHeight / 3) {

        for (i = 0; i < dests.length; i++) {
            dests[i].addClass("active");
        }
        /*Reset animacji */
    } else if (scrollValue < 100) {
        for (i = 0; i < dests.length; i++) {
            dests[i].removeClass("active");
        }
        $offer.removeClass("active");

    }
});

/* Otwieranie FAQ */

$('.question').on("click", function () {
    if ($('.box', this).text() === "+") {
        $('.name', this).addClass("open");
        $('div.open + article', this).slideDown();
        $('.box', this).text("-");
    } else if ($('.box', this).text() === "-") {
        $('.name', this).removeClass("open");
        $('article', this).slideUp();
        $('.box', this).text("+");
    }
});

/*Efekt skrolla - przeniesienie do odpowiedniej sekcji */
$('.About').on("click", function (e) {
    e.preventDefault();
    $('html').animate({
        scrollTop: $('.intro').offset().top
    }, 1000)
})
$('.Tours').on("click", function (e) {
    e.preventDefault();
    $('html').animate({
        scrollTop: $('.destinations').offset().top
    }, 1250)
})
$('.News').on("click", function (e) {
    e.preventDefault();
    $('html').animate({
        scrollTop: $('.details').offset().top
    }, 1500)
})
$('.Contact').on("click", function (e) {
    e.preventDefault();
    $('html').animate({
        scrollTop: $('.socials').offset().top
    }, 1750)
});
$('.FAQ').on("click", function (e) {
    e.preventDefault();
    $('html').animate({
        scrollTop: $('.faq').offset().top
    }, 2000);
})
$('.arrowUp').on("click", function (e) {
    e.preventDefault();
    $('html').animate({
        scrollTop: $('header').offset().top
    }, 2000)
})

/* Ciemny motyw*/
//Elementy

const ThemeButton = document.querySelector("div.theme");
const introArticle = document.querySelector(".intro_article");
const introH2 = document.querySelector(".intro_h2");
const faqH1 = document.querySelector(".faq_h1");
const DestinationsH1 = document.querySelector(".destinations_h1");
const DetailsH1 = document.querySelector(".details_h1");
const footer = document.querySelector("footer");
const introP = document.querySelector(".intro_p");
const navigation = document.querySelector(".navigation");
const arrowUp = document.querySelector("div.arrowUp");
const faqBorder = [...document.querySelectorAll(".name_h4")];
const burger = [...document.querySelectorAll(".burger span")];
const divBox = [...document.querySelectorAll("div.box")];
const socials = [...document.querySelectorAll(".social")];
const socialI = [...document.querySelectorAll(".social-icon")];
const Elements = [introArticle, introH2, introP, DestinationsH1, DetailsH1];
const BorderElem = [footer, faqH1, DestinationsH1, DetailsH1, navigation];

ThemeButton.addEventListener("click", function () {

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

/*Baner, podmiana src w znaczniku <img> */
const SlideList = [{
    img: "venice.jpg",
}, {
    img: "baner1.jpg",
}, {
    img: "baner2.jpg",
}, {
    img: "baner3.jpg",
}, {
    img: "baner4.jpg"
}];

/*Zdjęcie w którym dokonywana jest podmiana src, kropki[span] zamknięte w tablicy */
const IMG = document.querySelector("header>img");
const Dots = [...document.querySelectorAll(".dots span")];



/*Czas do funkcji setInterval, index active */
const time = 4000;
let active = 0;

/*Funkcja zmiany kropek */
const changeDot = () => {
    const activeDot = Dots.findIndex(dot => dot.classList.contains("active"));
    Dots[activeDot].classList.remove("active");
    Dots[active].classList.add("active");
}

/*Funkcja zmiany zdjęcia*/
const changeSlide = () => {
    active++;
    if (active === SlideList.length) {
        active = 0;
    }
    IMG.src = SlideList[active].img;
    changeDot();
}
let Baner = setInterval(changeSlide, time);

/*Funkcja zmiany kropek za pomocą klawiszy <- i -> */
const keyChange = (e) => {
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
}
window.addEventListener("keydown", keyChange);