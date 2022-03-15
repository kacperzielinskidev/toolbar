const nav = document.querySelector(".nav");
const closeButton = document.querySelector(".nav__close");
const showBarButton = document.querySelector(".showbar__button");
const getWidgetsButton = document.querySelector(".nav__button");

function hideBar() {
  return (nav.style.display = "none");
}

function showBar() {
  return (nav.style.display = "block");
}

function showAlertMessage(message) {
  alert(message);
}

closeButton.addEventListener("click", () => hideBar());
showBarButton.addEventListener("click", () => showBar());
getWidgetsButton.addEventListener("click", () =>
  showAlertMessage("Hello, world!")
);
