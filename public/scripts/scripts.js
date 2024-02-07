const slidingBox = document.querySelector(".sliding-box");
const icon = document.querySelector(".icon");

icon.addEventListener("click", slide);

function slide() {
  slidingBox.classList.toggle("show");
}
