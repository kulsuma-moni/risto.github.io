(function ($) {
    "use strict";
    // Sticky Menu
    // $(window).on('scroll', function () {
    //     if ($(this).scrollTop()>= 100) {
    //         $('#header_area').addClass('menu-shrink animated slideInDown');
    //     } else {
    //         $('#header_area').removeClass('menu-shrink animated slideInUp');
    //     }
    // });
    // $(window).on('scroll', function () {
    //     if ($(this).scrollTop() > 100) {
    //         $('.inner_page_header').addClass('menu-shrink animated slideInDown');
    //     } else {
    //         $('.inner_page_header').removeClass('menu-shrink animated slideInUp');
    //     }
    // });
    // data-background
    $("[data-background]").each(function () {
        $(this).css("background-image", "url(" + $(this).attr("data-background") + ")")
    });
})(jQuery);

const navbarMenu = document.getElementById("menu");
const burgerMenu = document.getElementById("burger");
const bgOverlay = document.querySelector(".overlay");

// Show Menu when Click the Burger
// Hide Menu when Click the Overlay
if (burgerMenu && navbarMenu && bgOverlay) {
    burgerMenu.addEventListener("click", () => {
        navbarMenu.classList.toggle("is-active");
        bgOverlay.classList.toggle("is-active");
    });

    bgOverlay.addEventListener("click", () => {
        navbarMenu.classList.toggle("is-active");
        bgOverlay.classList.toggle("is-active");
    });
}

// Hide Menu when Click the Links
document.querySelectorAll(".menu-link").forEach((link) => {
    link.addEventListener("click", () => {
        navbarMenu.classList.remove("is-active");
        bgOverlay.classList.remove("is-active");
    });
});
function clOp() {
    document.getElementById("menu").classList.remove("is-active");
    document.querySelector(".overlay").classList.remove("is-active");
};
