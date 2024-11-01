const phrases = ["Web Developer/>", "UI/UX Designer/>", "Programmer/>"];
let phraseIndex = 0;
let charIndex = 0;
const typingSpeed = 75; // milliseconds per character
const erasingSpeed = 75; // milliseconds per character
const delayBetweenPhrases = 1500; // milliseconds before switching phrases
const typingTextElement = document.getElementById("typing-text");

function typePhrase() {
  if (charIndex < phrases[phraseIndex].length) {
    // Typing effect
    typingTextElement.innerHTML += phrases[phraseIndex].charAt(charIndex);
    charIndex++;
    setTimeout(typePhrase, typingSpeed);
  } else {
    // Erasing effect after a delay
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
    // Move to the next phrase after erasing
    phraseIndex = (phraseIndex + 1) % phrases.length;
    setTimeout(typePhrase, typingSpeed);
  }
}

// Start the typing effect
document.addEventListener("DOMContentLoaded", function () {
  typePhrase();
});

function sendEmail() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  // Check if all fields are filled
  if (name && email && message) {
    Email.send({
      SecureToken: "YOUR_SECURE_TOKEN",
      To: "neekunjchaturvedi3@gmail.com",
      From: email,
      Subject: `New message from ${name}`,
      Body: `
          <b>Sender:</b> ${name} (${email})<br><br>
          <b>Message:</b><br>${message}
        `,
    })
      .then((response) => {
        if (response === "OK") {
          alert("Message sent successfully");
        } else {
          alert("Failed to send message: " + response);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("An error occurred while sending the message.");
      });
  } else {
    alert("Please fill in all fields");
  }
}

function toggleNav() {
  const navLinks = document.getElementById("navLinks");
  navLinks.classList.toggle("hidden");
}
function closeNav() {
  const navLinks = document.getElementById("navLinks");
  navLinks.classList.add("hidden");
}
// Close navbar when clicking outside
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
