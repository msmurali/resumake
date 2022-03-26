const fs = require("fs");
const jsdom = require("jsdom");
const { format } = require("path/posix");

/* DEV */
const data = require("./sample_data.json");

const getTemplate = (tempId) =>
  fs.readFileSync(`./templates/${tempId}.html`, "utf-8");

function createResume(data) {
  const template = getTemplate("template_001");
  const JSDOM = new jsdom.JSDOM(template);
  const document = JSDOM.window.document;

  setResumeHeader(
    document,
    data["personal-info"]["full-name"],
    data["description"]
  );

  setExperienceArticles(document, data["experience"]);

  setEducationArticles(document, data["education"]);

  setAchievements(document, data["achivements"]);

  setContacts(document, data["contact"]);

  setSkills(document, data["skills"], "Skills");

  setSkills(document, data["software"], "Software");

  setCourses(document, data["courses"]);

  setCertifications(document, data["certification"]);

  setLanguages(document, data["languages"]);

  console.log(document.documentElement.innerHTML);
}

function appendH3Title(document, element, title) {
  const heading = document.createElement("h1");
  heading.textContent = title;
  element.appendChild(heading);
}

function appendUl(document, element, list) {
  const ul = document.createElement("ul");
  list.map((txt) => {
    const li = document.createElement("li");
    const p = document.createElement("p");
    p.textContent = txt;
    li.appendChild(p);
    ul.appendChild(li);
  });
  element.appendChild(ul);
}

function setResumeHeader(document, title, description) {
  document.querySelector(".fullname").textContent = title;
  document.querySelector(".description").textContent = description;
}

function setEducationArticles(document, data) {
  const main = document.querySelector(".main");
  appendH3Title(document, main, "Education");

  for (let indx = 0; indx < data.length; indx++) {
    const edu = data[indx];

    const article = document.createElement("article");

    const h3 = document.createElement("h3");
    h3.textContent = edu["instituition"];

    const div = document.createElement("div");
    const p1 = document.createElement("p");
    p1.textContent = `${edu["course"]} | ${edu["grade"]}`;
    const p2 = document.createElement("p");
    p2.textContent = edu["location"];

    div.appendChild(p1);
    div.appendChild(p2);

    article.appendChild(h3);
    article.appendChild(div);

    main.appendChild(article);
  }
}

function setExperienceArticles(document, data) {
  const main = document.querySelector(".main");
  appendH3Title(document, main, "Experience");

  for (let indx = 0; indx < data.length; indx++) {
    const work = data[indx];

    const article = document.createElement("article");

    const span = document.createElement("span");
    span.textContent = `${work["start-year"]} - ${work["end-year"]}`;

    const h3 = document.createElement("h3");
    h3.textContent = work["designation"];
    h3.appendChild(span);

    const div = document.createElement("div");
    const p1 = document.createElement("p");
    p1.textContent = work["organization"];
    const p2 = document.createElement("p");
    p2.textContent = work["location"];

    div.appendChild(p1);
    div.appendChild(p2);

    const ul = document.createElement("ul");

    work["description"].map((desp) => {
      const li = document.createElement("li");
      const p = document.createElement("p");
      p.textContent = desp;

      li.appendChild(p);
      ul.appendChild(li);
    });

    article.appendChild(h3);
    article.appendChild(div);
    article.appendChild(ul);

    main.appendChild(article);
  }
}

function setAchievements(document, data) {
  const main = document.querySelector(".main");
  appendH3Title(document, main, "Achievements");

  const article = document.createElement("article");
  const ul = document.createElement("ul");

  data.map((achivement) => {
    const li = document.createElement("li");
    const p = document.createElement("p");
    p.textContent = achivement;
    li.appendChild(p);
    ul.appendChild(li);
  });

  article.appendChild(ul);

  main.appendChild(article);
}

function getStars(document, starCount) {
  const p = document.createElement("p");
  for (let i = 0; i < starCount; i++) {
    const star = document.createElement("span");
    star.textContent = "&#9733;";
    p.appendChild(star);
  }
  return p;
}

function setSkills(document, data, title) {
  const sidebar = document.querySelector(".side");
  appendH3Title(document, sidebar, title);
  const section = document.createElement("section");
  sidebar.appendChild(section);
  const ul = document.createElement("ul");
  section.appendChild(ul);

  data.map((skill) => {
    const li = document.createElement("li");
    const p1 = document.createElement("p");
    p1.textContent = skill["skill"];
    const p2 = getStars(document, parseInt(skill["proficiency"]));
    li.appendChild(p1);
    li.appendChild(document.createElement("br"));
    li.appendChild(p2);
    ul.appendChild(li);
  });

  sidebar.appendChild(section);
}

function setContacts(document, data) {
  const sidebar = document.querySelector(".side");
  appendH3Title(document, sidebar, "Contact");
  const section = document.createElement("section");
  sidebar.appendChild(section);
  const ul = document.createElement("ul");
  section.appendChild(ul);

  if (data["mobile"] != null) {
    const mobile = document.createElement("li");
    const p = document.createElement("p");
    p.textContent = `Mobile : ${data["mobile"]}`;
    mobile.appendChild(p);
    ul.appendChild(mobile);
  }
  if (data["telephone"] != null) {
    const telephone = document.createElement("li");
    const p = document.createElement("p");
    p.textContent = `Telephone : ${data["telephone"]}`;
    telephone.appendChild(p);
    ul.appendChild(telephone);
  }
  if (data["facebook"] != null) {
    const facebook = document.createElement("li");
    const p = document.createElement("p");
    p.textContent = `Facebook : ${data["facebook"]}`;
    facebook.appendChild(p);
    ul.appendChild(facebook);
  }
  if (data["linked-in"] != null) {
    const linkedin = document.createElement("li");
    const p = document.createElement("p");
    p.textContent = `Linked-in : ${data["linked-in"]}`;
    linkedin.appendChild(p);
    ul.appendChild(linkedin);
  }
  if (data["email"] != null) {
    const email = document.createElement("li");
    const p = document.createElement("p");
    p.textContent = `Email : ${data["email"]}`;
    email.appendChild(p);
    ul.appendChild(email);
  }
}

function setLanguages(document, data) {
  const sidebar = document.querySelector(".side");
  const section = document.createElement("section");
  sidebar.appendChild(section);
  appendH3Title(document, section, "Languages");
  appendUl(document, section, data);
}

function setCourses(document, data) {
  const sidebar = document.querySelector(".side");
  const section = document.createElement("section");
  sidebar.appendChild(section);
  appendH3Title(document, section, "Courses");
  appendUl(document, section, data);
}

function setCertifications(document, data) {
  const sidebar = document.querySelector(".side");
  const section = document.createElement("section");
  sidebar.appendChild(section);
  appendH3Title(document, section, "Certifications");
  appendUl(document, section, data);
}

createResume(data);
