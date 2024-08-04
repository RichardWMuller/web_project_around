import { getInitialCards } from "../index.js";
import { api } from "./Api.js";
import { handleOpenImageModal } from "./utils.js";

export default class Card {
  constructor({
    name,
    link,
    likes,
    _id,
    userId,
    api,
    owner,
    popupWithConfirmation,
  }) {
    this._name = name;
    this._link = link;
    this._likes = likes;
    this._id = _id;
    this._userId = userId;
    this._api = api;
    this._owner = owner;
    this._popupWithConfirmation = popupWithConfirmation;
    this._element = this._getTemplate();
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
    this._element.querySelector(".elements__btn-hrt-counter").textContent =
      this._likes.length;
    this._element.querySelector(".elements__btn-hrt").id = this._id;
    const myId = document.querySelector(".profile__avatar").id;
    if (this._owner._id === myId) {
      this._element
        .querySelector(".elements__btn-trh")
        .classList.add("elements__btn-trh-visible");
    }
    const hasLike = this._likes.some((user) => user._id === myId);

    if (hasLike) {
      this._element
        .querySelector(".elements__btn-hrt")
        .classList.add("elements__btn-hrt_actived");
    }

    return this._element;
  }

  async addCardLike() {
    await api.addLike(this._likeButton.id);

    await getInitialCards();
  }

  async removeCardLike() {
    await api.removeLike(this._likeButton.id);
    await getInitialCards();
  }

  _handleLikeButton() {
    this._element
      .querySelector(".elements__btn-hrt")
      .classList.toggle("elements__btn-hrt_actived");

    const myId = document.querySelector(".profile__avatar").id;
    const hasLike = this._likes.some((user) => user._id === myId);
    if (hasLike) {
      return this.removeCardLike();
    }

    this.addCardLike();
  }

  _handleTrashButton() {
    document
      .querySelector(".popup__delete")
      .classList.add("popup__delete-opened");

    document.querySelector(".popup__delete-form").id = this._id;

    // this._element.remove();
  }
}
