'use strict';

var adLink = document.querySelectorAll(".buy");
var adPopup = document.querySelector(".modal-added");
var adClose = adPopup.querySelector(".btn-modal-added");

function openPopup () {
  adPopup.classList.add("modal-added-show");
}

adLink.forEach(function (elem) {
  if (elem.getAttribute('href')) {
    elem.removeAttribute('href');
    elem.setAttribute('onclick', 'openPopup()');
  }
});

adClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  adPopup.classList.remove("modal-added-show");
});
