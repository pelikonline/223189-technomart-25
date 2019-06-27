var link = document.querySelector(".btn-contacts");
var popup = document.querySelector(".modal-feedback");
var close = popup.querySelector(".btn-modal-added");
var form = popup.querySelector(".form-feedback");
var login = popup.querySelector("[name=username]");

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-feedback-show");
  login.focus();
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal-feedback-show");
});

form.addEventListener("submit", function (evt) {
  evt.preventDefault();
});


var mapLink = document.querySelector(".img-click");
var mapPopup = document.querySelector(".modal-map-big");
var mapClose = mapPopup.querySelector(".btn-modal-map");

mapLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.add("modal-map-show");
});

mapClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.remove("modal-map-show");
});


var adLink = document.querySelector(".buy");
var adPopup = document.querySelector(".modal-added");
var adClose = adPopup.querySelector(".btn-modal-added");

adLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  adPopup.classList.add("modal-added-show");
});

adClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  adPopup.classList.remove("modal-added-show");
});
