"use strict";

import page_data from "./page_data.js";

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

  /**
   * Appends the data stored within page_data.js to the resume and projects section
   * @param {JSON} data the JSON data from page_data.js
   */
  function append_json(data) {
    populate_resume_experience(data.experience);
  }

  /**
   * Populates the jobs section of the resume based on the JSON data passed in jobs
   * @param {JSON} jobs the data for the resume
   */
  function populate_resume_experience(jobs) {
    let exp_cont = document.getElementById("experience");
    let title_h4_class = "text-darkAccent3 text-3xl ml-4 inline";
    let company_h4_class = "text-white text-3xl ml-4 inline";
    let date_h4_class = "text-white text-3xl right-0 absolute inline mr-12";
    let ul_class = "ml-12 list-disc list-inside mb-12";
    jobs.forEach((job) => {
      let title_h4 = document.createElement("h4");
      title_h4.textContent = job.title + ":";
      title_h4.classList = title_h4_class;

      let company_h4 = document.createElement("h4");
      company_h4.textContent = job.company;
      company_h4.classList = company_h4_class;

      let date_h4 = document.createElement("h4");
      date_h4.textContent = job.date;
      date_h4.classList = date_h4_class;

      let ul_cont = document.createElement("ul");
      ul_cont.classList = ul_class;
      job.responsibilites.forEach((responsibility) => {
        let li = document.createElement("li");
        li.textContent = responsibility;
        ul_cont.appendChild(li);
      });
      exp_cont.appendChild(title_h4);
      exp_cont.appendChild(company_h4);
      exp_cont.appendChild(date_h4);
      exp_cont.appendChild(ul_cont);
    });
  }

  function populate_projects(project_data) {
    let project_class = "w-13/16 min-h-80 p-4 border-4 mb-8";
  }
})();
