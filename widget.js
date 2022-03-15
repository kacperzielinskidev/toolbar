const showBarButton = document.querySelector(".showbar__button");
const closeButton = document.querySelector(".nav__close");
const nav = document.querySelector(".nav");

function hideBar() {
  return (nav.style.display = "none");
}

function showBar() {
  return (nav.style.display = "block");
}

closeButton.addEventListener("click", () => hideBar());
showBarButton.addEventListener("click", () => showBar());
