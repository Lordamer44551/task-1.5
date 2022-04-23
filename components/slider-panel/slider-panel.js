const brandsList = document.querySelector(".brands__list");
const sliderSwitchers = document.querySelectorAll(".switcher__input");

window.addEventListener("resize", resetSliderProperties);

for (let i = 0; i < sliderSwitchers.length; i++) {
  sliderSwitchers[i].addEventListener("click", function () {
    brandsList.style.marginLeft = `${i * -256}px`;
  });
}

// margin-left: -256px;

function resetSliderProperties() {
  if (window.innerWidth >= 768) {
    brandsList.style.marginLeft = "0px";
    for (let i = 0; i < sliderSwitchers.length; i++) {
      sliderSwitchers[i].checked = false;
    }
  }
}
