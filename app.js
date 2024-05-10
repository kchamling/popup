const openBtn = document.querySelector(".container button");
const closeBtn = document.querySelector(".popup-details button");
const popupBox = document.querySelector(".popup");

function showPopup() {
  popupBox.classList.add("show-popup");
}
function closePopup() {
  popupBox.classList.remove("show-popup");
}

openBtn.addEventListener("click", () => {
  showPopup();
});
closeBtn.addEventListener("click", () => {
  closePopup();
});
