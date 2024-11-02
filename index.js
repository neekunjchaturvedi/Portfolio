const phrases = ["Web Developer/>", "UI/UX Designer/>", "Programmer/>"];
let phraseIndex = 0;
let charIndex = 0;
const typingSpeed = 75;
const erasingSpeed = 75;
const delayBetweenPhrases = 1500;
const typingTextElement = document.getElementById("typing-text");

function typePhrase() {
  if (charIndex < phrases[phraseIndex].length) {
    typingTextElement.innerHTML += phrases[phraseIndex].charAt(charIndex);
    charIndex++;
    setTimeout(typePhrase, typingSpeed);
  } else {
    setTimeout(erasePhrase, delayBetweenPhrases);
  }
}

function erasePhrase() {
  if (charIndex > 0) {
    typingTextElement.innerHTML = phrases[phraseIndex].substring(
      0,
      charIndex - 1
    );
    charIndex--;
    setTimeout(erasePhrase, erasingSpeed);
  } else {
    phraseIndex = (phraseIndex + 1) % phrases.length;
    setTimeout(typePhrase, typingSpeed);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  typePhrase();
});

function toggleNav() {
  const navLinks = document.getElementById("navLinks");
  navLinks.classList.toggle("hidden");
}
function closeNav() {
  const navLinks = document.getElementById("navLinks");
  navLinks.classList.add("hidden");
}

document.addEventListener("click", function (event) {
  const navLinks = document.getElementById("navLinks");
  const navToggle = document.getElementById("navToggle");

  // Check if the click is outside the navbar and toggle button
  if (!navLinks.contains(event.target) && !navToggle.contains(event.target)) {
    navLinks.classList.add("hidden"); // Close the navbar if open
  }
});
function aboutbtn() {
  const abtsection = document.getElementById("about");
  if (abtsection) {
    abtsection.scrollIntoView({ behavior: "smooth" });
  }
}

function openresume() {
  window.open(
    "https://drive.google.com/file/d/12rYaMtLbAnnbyoFTL0MvaJOf7LzKUUC-/view?usp=sharing",
    "_blank"
  );
}
function topcode() {
  window.open("https://top-code.netlify.app/", "_blank");
}
function topcodegit() {
  window.open("https://github.com/neekunjchaturvedi/Topcode", "_blank");
}

function tictac() {
  window.open(
    "https://github.com/neekunjchaturvedi/jsprojects/tree/main/TICTACTOE",
    "_blank"
  );
}
