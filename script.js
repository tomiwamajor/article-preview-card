"strict";

const share = document.querySelector(".share");
const hidden = document.querySelector(".hidden");
share.addEventListener("click", function () {
  hidden.classList.toggle("hidden");
  document.querySelector(".container").style.marginTop = "2rem";
});
