import { handleOpenImageModal } from "./utils.js";
export default class Card {
  constructor({ name, link }, templateSelector) {
    this._templateSelector = templateSelector;
    this._name = name;
    this._link = link;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector("#elements__list")
      .content.querySelector(".elements__list-img")
      .cloneNode(true);
    return cardElement;
  }

  _setButtons() {
    this._likeButton = this._element.querySelector(".elements__btn-hrt");
    this._trashButton = this._element.querySelector(".elements__btn-trh");
    this._cardImage = this._element.querySelector(".elements__item");
  }

  _setEventListeners() {
    this._likeButton.addEventListener("click", () => {
      this._handleLikeButton();
    });

    this._trashButton.addEventListener("click", () => {
      this._handleTrashButton();
    });

    this._cardImage.addEventListener("click", () => {
      this._handlePopupOpen();
    });
  }

  _handlePopupOpen() {
    const popup = document.querySelector(".popupImg");
    const imageTitle = popup.querySelector(".popupImg-footer");
    const image = popup.querySelector(".popupImg-modal");
    imageTitle.textContent = this._name;
    image.src = this._link;
    image.alt = this._name;
    handleOpenImageModal(popup);
  }

  generateCard() {
    this._element = this._getTemplate();
    this._setButtons();
    this._setEventListeners();

    this._element.querySelector(".elements__title").textContent = this._name;
    this._element.querySelector(".elements__item").src = this._link;
    this._element.querySelector(".elements__item").alt = this._name;

    return this._element;
  }

  _handleLikeButton() {
    this._element
      .querySelector(".elements__btn-hrt")
      .classList.toggle("elements__btn-hrt_actived");
  }

  _handleTrashButton() {
    this._element.remove();
  }
}
