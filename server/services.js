const fs = require("fs");
const jsdom = require("jsdom");

const getTemplate = (tempId) =>
  fs.readFileSync(`./templates/${tempId}.html`, "utf-8");

function createResume(data) {
  const template = getTemplate(data["template-id"]);
  const JSDOM = new jsdom.JSDOM(template);
  const document = JSDOM.window.document;

  setResumeHeader(
    document,
    data["personal"]["full-name"],
    data["personal"]["description"]
  );

  data["experience"].length != 0 &&
    setExperienceArticles(document, data["experience"]);

  data["education"].length != 0 &&
    setEducationArticles(document, data["education"]);

  data["achievements"].length != 0 &&
    setAchievements(document, data["achievements"]);

  data["projects"].length != 0 && setProjects(document, data["projects"]);

  setContacts(document, data["contact"]);

  data["skills"].length != 0 && setSkills(document, data["skills"], "Skills");

  data["software"].length != 0 &&
    setSkills(document, data["software"], "Software");

  data["courses"].length != 0 && setCourses(document, data["courses"]);

  data["certification"].length != 0 &&
    setCertifications(document, data["certification"]);

  data["languages"].length != 0 && setLanguages(document, data["languages"]);

  setResumeHeaderColor(document, { r: "50", g: "70", b: "255" });

  return document.documentElement.innerHTML;
}

function setResumeHeaderColor(document, color) {
  const header = document.querySelector("header");
  header.style.backgroundColor = `rgb(${color.r},${color.g},${color.b})`;
}

function appendH3Title(document, element, title) {
  const heading = document.createElement("h1");
  heading.textContent = title;
  element.appendChild(heading);
}

function appendUl(document, element, list, title) {
  const ul = document.createElement("ul");
  list.map((obj) => {
    const li = document.createElement("li");
    const p = document.createElement("p");
    p.textContent = obj[title];
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

    const li = document.createElement("li");
    const p = document.createElement("p");
    p.textContent = work["description"];

    li.appendChild(p);
    ul.appendChild(li);

    article.appendChild(h3);
    article.appendChild(div);
    article.appendChild(ul);

    main.appendChild(article);
  }
}

function setProjects(document, data) {
  const main = document.querySelector(".main");
  appendH3Title(document, main, "Projects");

  const article = document.createElement("article");
  const ul = document.createElement("ul");

  data.map((project) => {
    const li = document.createElement("li");
    const h5 = document.createElement("h6");
    h5.textContent = project.title;
    const a = document.createElement("a");
    if (project.link != "") {
      a.textContent = "demo";
      a.setAttribute("href", project.link);
    }
    const p = document.createElement("p");
    p.textContent = project.description;
    li.appendChild(h5);
    li.appendChild(a);
    li.appendChild(p);
    ul.appendChild(li);
  });

  article.appendChild(ul);
  main.appendChild(article);
}

function setAchievements(document, data) {
  const main = document.querySelector(".main");
  appendH3Title(document, main, "Achievements");

  const article = document.createElement("article");
  const ul = document.createElement("ul");

  data.map((achivement) => {
    const li = document.createElement("li");
    const p = document.createElement("p");
    p.textContent = achivement["achievement"];
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
    star.innerHTML = "&#9733;";
    p.appendChild(star);
  }
  return p;
}

function setSkills(document, data, title) {
  const main = document.querySelector(".main");
  appendH3Title(document, main, title);
  const section = document.createElement("section");
  main.appendChild(section);
  const ul = document.createElement("ul");
  section.appendChild(ul);

  data.map((skill) => {
    const li = document.createElement("li");
    const p = document.createElement("p");
    p.textContent = skill["skill"];
    const stars = getStars(document, parseInt(skill["proficiency"]));
    p.textContent += ` ${stars.textContent}`;
    li.appendChild(p);
    ul.appendChild(li);
  });

  main.appendChild(section);
}

function setContacts(document, data) {
  const main = document.querySelector(".main");
  appendH3Title(document, main, "Contact");
  const section = document.createElement("section");
  main.appendChild(section);
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
  const main = document.querySelector(".main");
  const section = document.createElement("section");
  main.appendChild(section);
  appendH3Title(document, section, "Languages");
  appendUl(document, section, data, "language");
}

function setCourses(document, data) {
  const main = document.querySelector(".main");
  const section = document.createElement("section");
  main.appendChild(section);
  appendH3Title(document, section, "Courses");
  appendUl(document, section, data, "course");
}

function setCertifications(document, data) {
  const main = document.querySelector(".main");
  const section = document.createElement("section");
  main.appendChild(section);
  appendH3Title(document, section, "Certifications");
  appendUl(document, section, data, "certification");
}

module.exports = {
  createResume: createResume,
};
