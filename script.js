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
    newurl.innerHTML = `<div
          class="w-[320px] min-h-[180px] mx-auto rounded-md bg-white my-9 pt-3 px-4 lg:w-[850px] lg:min-h-[60px] lg:flex lg:flex-row lg:justify-between lg:items-center lg:py-4"
        >
          <p class="px-4 py-2 lg:p-0">${url}</p>
          <hr />

          <div class="px-4 py-2 lg:flex lg:flex-row lg:gap-3 lg:items-center lg:p-0">
            <p class="text-Cyan">${data.result.short_link}</p>
            <button
              class="bg-Cyan h-10 w-full text-white font-bold rounded-md mt-4 newUrl-btn lg:m-0 lg:px-8 lg:py-2"
            >
              copy
            </button>
          </div>
        </div>
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
