import { handleOpenImageModal } from "./utils.js";

export const initialCards = [
  {
    name: "Albufeira",
    link: "https://i.redd.it/l2wzk4kzoija1.jpg",
  },
  {
    name: "Albufeira",
    link: "https://dicasdelisboa.com.br/wp-content/uploads/2016/11/acessopraiadafalesia.jpg",
  },
  {
    name: "Lagos",
    link: "https://images.unsplash.com/photo-1627632984837-fb8fa3cd4792?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Carvoeiro",
    link: "https://seafaris.net/wp-content/uploads/2022/04/benagil-fora-.jpg",
  },
  {
    name: "Lagoa",
    link: "https://praia.info/wp-content/uploads/2022/04/praia-da-marinha-algarve.png",
  },
  {
    name: "Albufeira",
    link: "https://images.turismoenportugal.org/Praia-da-Oura-Albufeira.jpg",
  },
];

export default class Card {
  constructor({ name, link }, templateSelector) {
    this._name = name;
    this._link = link;
    this._templateSelector = templateSelector;
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
