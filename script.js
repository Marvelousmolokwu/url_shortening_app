const menu = document.querySelector(".menu-bar");
const NavBar = document.getElementById("nav");
const form = document.querySelector(".form");
const input = document.getElementById("input");
const shortenBtn = document.querySelector(".shorten-btn");
const label = document.querySelector(".form-label");
const shortenedUrl = document.querySelector(".shorten-url");
const selectElement = (selector) => {
  const element = document.querySelector(selector);
  if (element) return element;
  throw new Error("cannot find element ${selector}");
};
// https://api.shrtco.de/v2/shorten?url";
menu.addEventListener("click", () => {
  NavBar.classList.toggle("hidden");
});
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const url = input.value;
  if (url) {
    label.classList.add("hidden");
  } else {
    label.classList.remove("hidden");
  }
  urlshortening(url);
});

async function urlshortening(url) {
  try {
    const response = await fetch(`https://api.shrtco.de/v2/shorten?url=${url}`);
    const data = await response.json();
    const newurl = document.createElement("div");
    newurl.classList.add("item");
    newurl.innerHTML = `
    `;
    shortenedUrl.prepend(newurl);
    const copyBtn = shortenedUrl.querySelector(".newUrl-btn");
    copyBtn.addEventListener("click", () => {
      navigator.clipboard.writeText(copyBtn.previousElementSibling.textContent);
      copyBtn.textContent = "Copied!";
      copyBtn.style.background = "hsl(255, 11%, 22%)";
    });
    input.value = "";
  } catch (err) {
    console.log(err);
  }
}
