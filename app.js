"use strict";
const switchBtn = document
  .querySelector("#switch")
  .addEventListener("change", (e) => {
    toggle(e);
  });

// 페이지 로드시
window.addEventListener("load", () => {
  const currentTheme = localStorage.getItem("theme");

  if (currentTheme === null) {
    localStorage.setItem("theme", "light");
  } else if (currentTheme === "dark") {
    document.body.classList.add("dark-mode");
    document.querySelector("#switch").checked = true;
  }
});

function toggle(e) {
  let currentTheme = localStorage.getItem("theme");
  const checked = e.target.checked;

  if (!checked && currentTheme == "dark") {
    document.body.classList.remove("dark-mode");
    document.body.classList.add("light-mode");
    localStorage.removeItem("theme");
    localStorage.setItem("theme", "light");
  } else if (checked && currentTheme == "light") {
    document.body.classList.remove("light-mode");
    document.body.classList.add("dark-mode");
    localStorage.removeItem("theme");
    localStorage.setItem("theme", "dark");
  } else if (currentTheme == null) {
    document.body.classList.add("light-mode");
    localStorage.setItem("theme", "light");
  }
}
