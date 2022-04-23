const brandsItems = document.querySelectorAll(".brands__item");
const showMoreButton = document.querySelector(".show-more-button");
const showMoreButtonText = document.querySelector(".show-more-button__text");
const showMoreButtonArrow = document.querySelector(".show-more-button__arrow");
const buttonInitialText = showMoreButtonText.textContent;
const windowSize = window.innerWidth;
let brandDefaultAmount = 6;

/*if (windowSize > 1120) {
  brandDefaultAmount = 8;
}*/

showMoreButton.addEventListener("click", showMoreItems);
showMoreButton.addEventListener("click", changeButton);

function showMoreItems() {
  for (let i = brandDefaultAmount; i < brandsItems.length; i++) {
    brandsItems[i].classList.toggle("brands__item--visibility--hidden");
  }
}

function changeButton() {
  if (showMoreButtonText.textContent === buttonInitialText) {
    showMoreButtonText.textContent = "Скрыть";
    showMoreButtonArrow.style.transform = "rotate(180deg)";
  } else {
    showMoreButtonText.textContent = buttonInitialText;
    showMoreButtonArrow.style.transform = "rotate(0deg)";
  }
}
