const aboutCard = document.getElementById("about-card");
const socialIcons = document.getElementById("social-icons");
const chk = document.getElementById("toggle-mode");

let darkMode = localStorage.getItem("darkMode") || "false";
if (darkMode === "true") {
  chk.checked = true;
  addDark();
}

document.body.classList.remove("d-none");


chk.addEventListener("change", toggleMode);

function toggleMode() {
  if (chk.checked === true) {
    addDark();
    localStorage.setItem("darkMode", "true");
    darkMode = "true";
  } else {
    removeDark();
    localStorage.setItem("darkMode", "false");
  }
}

function addDark() {
  document.body.classList.remove("bg-light");
  document.body.classList.add("dark");

  aboutCard.classList.remove("bg-white");
  aboutCard.classList.add("bg-dark");

  socialIcons.classList.remove("text-dark");
  socialIcons.classList.add("text-light");
}

function removeDark() {
  document.body.classList.add("bg-light");
  document.body.classList.remove("dark");

  aboutCard.classList.add("bg-white");
  aboutCard.classList.remove("bg-dark");

  socialIcons.classList.add("text-dark");
  socialIcons.classList.remove("text-light");
}

