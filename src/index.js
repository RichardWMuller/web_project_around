import Card, { initialCards } from "./components/Card.js";
import FormValidator from "./components/FormValidator.js";
import { enableValidation, handleModalCloseAdd } from "./components/utils.js";
import PopupWithForm from "./components/PopupWithForm.js";
import PopupWithImage from "./components/PopupWithImage.js";
import Section from "./components/Section.js";
import "./pages/index.css";
import { api } from "./components/Api.js";
import { userInfo } from "./components/UserInfo.js";

function handleProfileFormSubmitAdd(event) {
  event.preventDefault();
}

/* API */

async function getInitialCards() {
  const initialCards = await api.getInitialCards();
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
}

getInitialCards();

async function getUserInfo() {
  const user = await api.getUser();
  console.log(user, "user");
  userInfo.setUserInfo(user);
}
getUserInfo();

/* INITIAL CARDS */

const elementsList = document.querySelector(".elements__list");
const formAddPlace = document.querySelector(".popupAdd__form");
const popupClose = document.querySelectorAll(".popupAdd__save-btn");

async function handleAddNewPost(event) {
  event.preventDefault();
  const createCardPopup = new PopupWithForm(
    ".popupAdd",
    ".popupAdd__form",
    ".popupAdd__input-box",
    ".popupAdd__save-btn",
    async (inputValues) => {
      const { title, link } = inputValues;
      const addCard = {
        name: title,
        link: link,
      };
      try {
        const createCard = await api.createCard(addCard);
        const createdCard = new Card(createCard, elementsList);
        const cardElement = createdCard.generateCard();
        const newCard = new Section(
          {
            items: [cardElement],
            renderer: () => {
              newCard.setItem(cardElement);
            },
          },
          ".elements__list"
        );
        newCard.rendererItems();
        createCardPopup.close();
      } catch (error) {
        console.error("Error creating card", error);
      }
    }
  );
  createCardPopup.setEventListeners();
}

formAddPlace.addEventListener("submit", handleAddNewPost);
