// A list of simple DevOps tips
const tips = [
  "Commit small and commit often. Small changes are easier to review and undo.",
  "Automate anything you do more than twice.",
  "If it works on your machine, put it in a Docker container so it works everywhere.",
  "Never store passwords or secret keys in Git.",
  "A CI/CD pipeline catches mistakes before your users do.",
  "Write down what you learn. Your future self will thank you.",
  "Learn the Linux command line first. Every other DevOps tool builds on it."
];

const button = document.getElementById("tip-button");
const tipText = document.getElementById("tip-text");
let lastIndex = -1;

// When the button is clicked, show a random tip (never the same one twice in a row)
button.addEventListener("click", function () {
  let index;
  do {
    index = Math.floor(Math.random() * tips.length);
  } while (index === lastIndex);

  lastIndex = index;
  tipText.textContent = tips[index];
  button.textContent = "Show another tip";
});

// Put the current year in the footer
document.getElementById("year").textContent = new Date().getFullYear();
