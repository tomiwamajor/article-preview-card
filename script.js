"strict";

const share = document.querySelector(".share");
const hidden = document.querySelector(".hidden");
share.addEventListener("click", function () {
  console.log("You clicked");

  share.style.backgroundColor = "hsl(217, 19%, 35%)";
  // document.querySelector(".share").classList.toggle("hidden");
  share.classList.toggle("color");
  hidden.classList.toggle("hidden");
});
