"use strict";

(function () {
    window.addEventListener("load", init);
    function init() {
        let nav = document.getElementById('nav');

        let navOffset = nav.offsetTop;

        window.onscroll = () => {
            if (window.pageYOffset >= navOffset) {
                nav.classList.add('fixed');
                nav.classList.add('top-0');
                nav.classList.remove('absolute');
                nav.classList.remove('bottom-0');
            } else {
                nav.classList.remove('fixed');
                nav.classList.remove('top-0');
                nav.classList.add('absolute');
                nav.classList.add('bottom-0');
            }
        }
    }
})()