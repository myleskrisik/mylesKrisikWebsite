"use strict";

(function () {
    window.addEventListener("load", init);
    function init() {
        let navOffset = document.getElementById('nav').offsetTop;

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

        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });
    }
})()