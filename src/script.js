"use strict";

import page_data from "./page_data.json" assert { type: "json" };

(function () {
  window.addEventListener("load", init);

  /**
   * Runs when the page loads
   */
  function init() {
    enable_sticky_nav();
    add_smooth_scrolling();
    append_json(page_data);
  }

  /**
   * Enables the `sticky` nav bar, that is, a nav bar which upon
   * reaching the top via the user scrolling, will `stick  to the stop
   * of the screen and stay there upon future scrolls
   */
  function enable_sticky_nav() {
    let navOffset = document.getElementById("nav").offsetTop;

    window.onscroll = () => {
      if (window.pageYOffset >= navOffset) {
        nav.classList.add("fixed");
        nav.classList.add("top-0");
        nav.classList.remove("absolute");
        nav.classList.remove("bottom-0");
      } else {
        nav.classList.remove("fixed");
        nav.classList.remove("top-0");
        nav.classList.add("absolute");
        nav.classList.add("bottom-0");
      }
    };
  }

  /**
   * Adds `smooth scrolling` when clicking on any link
   * within the page
   */
  function add_smooth_scrolling() {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
          behavior: "smooth",
        });
      });
    });
  }

  function append_json(data) {
    console.log(data);
    populate_resume(data.resume);
  }

  function populate_resume(resume_data) {
    const container = document.getElementById("resume");

    let languages = document.getElementById("languages");

    let proficient_header = document.createElement("h3");
    proficient_header.innerText = "Proficient";
    let proficient_text = document.createElement("p");
    proficient_text.innerText = resume_data.languages.proficient.reduce(
      (previous_language, curr_language) => previous_language + curr_language,
      ""
    );

    let familiar_header = document.createElement("h3");
    familiar_header.innerText = "Familiar";
    let familiar_text = document.createElement("p");
    familiar_text.innerText = resume_data.languages.familiar.reduce(
      (previous_language, curr_language) => previous_language + curr_language,
      ""
    );

    languages.appendChild(proficient_header);
    languages.appendChild(proficient_text);
    languages.appendChild(familiar_header);
    languages.appendChild(familiar_text);

    resume_data.jobs.forEach((job) => {
      let h3 = document.createElement("h3");
      h3.innerText = job.title;
      let p = document.createElement("p");
      p.innerText = job.responsibilites;
      container.appendChild(h3);
      container.appendChild(p);
    });
  }
})();
