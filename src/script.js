"use strict";

import page_data from "./page_data.js";

(function () {
  window.addEventListener("load", init);
})();

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
  let desktop_nav = document.getElementById("nav");
  let desktop_nav_offset = desktop_nav.offsetTop;

  let mobile_nav = document.getElementById("mobile-nav");
  let mobile_nav_offset = mobile_nav.offsetTop;

  window.onscroll = () => {
    if (window.pageYOffset >= desktop_nav_offset) {
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

    if (window.pageYOffset >= mobile_nav_offset) {
      mobile_nav.classList.add("fixed");
      mobile_nav.classList.add("top-0");
      mobile_nav.classList.remove("absolute");
      mobile_nav.classList.remove("bottom-0");
    } else {
      mobile_nav.classList.remove("fixed");
      mobile_nav.classList.remove("top-0");
      mobile_nav.classList.add("absolute");
      mobile_nav.classList.add("bottom-0");
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
  populate_projects(data.projects);
}

/**
 * Populates the jobs section of the resume based on the JSON data passed in jobs
 * @param {JSON} jobs the jobs which will populate the resume portion of the website
 */
function populate_resume_experience(jobs) {
  let exp_cont = document.getElementById("experience");
  let title_h4_class =
    "text-darkAccent3 text-lg md:text-3xl ml-4 md:ml-6 inline mr-0";
  let company_h4_class = "text-white text-lg md:text-3xl ml-4 md:ml-2 inline";
  let date_h4_class =
    "text-white text-sm md:text-2xl float-right inline pt-1.5";
  let ul_class =
    "mt-2 ml-8 md:ml-12 text-sm text-white md:text-xl list-disc list-inside my-4";
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

    let mobile_break = document.createElement("br");
    mobile_break.classList = "md:hidden";

    exp_cont.appendChild(title_h4);
    exp_cont.appendChild(date_h4);
    exp_cont.appendChild(mobile_break);
    exp_cont.appendChild(company_h4);
    exp_cont.appendChild(ul_cont);
  });
}

function populate_projects(projects) {
  let projects_cont = document.getElementById("projects-cont");

  let project_cont_class = "w-13/16 min-h-80 p-4 border-4 mb-8";
  let project_title_class = "text-darkAccent3 text-3xl w-full break-words";
  let project_body_class = "text-white text-lg md:text-xl";
  let github_logo_class = "m-0 float-right inline";

  projects.forEach((project) => {
    let project_cont = document.createElement("div");
    project_cont.className = project_cont_class;

    let project_title = document.createElement("h2");
    project_title.textContent = project.title;
    project_title.className = project_title_class;

    let project_body = document.createElement("p");
    project_body.innerHTML = project.body;
    project_body.className = project_body_class;

    let github_link = document.createElement("a");
    github_link.href = project.githubLink;

    let github_logo = document.createElement("img");
    github_logo.className = github_logo_class;
    github_logo.src = "./src/img/GitHub-Mark-Light-32px.png";
    github_logo.alt = "The Github logo";
    github_link.appendChild(github_logo);

    project_cont.appendChild(github_link);
    project_cont.appendChild(project_title);
    project_cont.appendChild(project_body);
    projects_cont.appendChild(project_cont);
    // project_cont.appendChild(github_link);
  });
}
