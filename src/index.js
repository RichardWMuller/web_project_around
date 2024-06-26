import Card, { initialCards } from "./components/Card.js";
import FormValidator from "./components/FormValidator.js";
import { enableValidation, handleModalCloseAdd } from "./components/utils.js";
import PopupWithForm from "./components/PopupWithForm.js";
import PopupWithImage from "./components/PopupWithImage.js";
import Section from "./components/Section.js";
import "./pages/index.css";

function handleProfileFormSubmitAdd(event) {
  event.preventDefault();
}
/* INITIAL CARDS */

const elementsList = document.querySelector(".elements__list");
const formAddPlace = document.querySelector(".popupAdd__form");
const popupClose = document.querySelectorAll(".popupAdd__save-btn");

const cardSelector = new Section(
  {
    items: initialCards,
    renderer: (item) => {
      const createdCard = new Card(item, elementsList);
      const cardElement = createdCard.generateCard();
      cardSelector.setItem(cardElement);
    },
  },
  ".elements__list"
);
cardSelector.rendererItems();

function handleAddNewPost(evt) {
  evt.preventDefault();
  const titleInput = evt.target.querySelector(".popupAdd__input-box-title");
  const linkInput = evt.target.querySelector(".popupAdd__input-box-link");

  const addCard = { name: titleInput.value, link: linkInput.value };
  const createdCard = new Card(addCard, elementsList);
  const cardElement = createdCard.generateCard();
  const newCard = new Section(
    {
      items: [cardElement],
      renderer: (item) => {
        newCard.setItem(cardElement);
      },
    },
    ".elements__list"
  );
  newCard.rendererItems();

  evt.target.reset();
  handleModalCloseAdd();
}
formAddPlace.addEventListener("submit", handleAddNewPost);
