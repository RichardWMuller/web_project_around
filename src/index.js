import Card, { initialCards } from "./components/Card.js";
import FormValidator from "./components/FormValidator.js";
import { enableValidation, handleModalCloseAdd } from "./components/utils.js";
import PopupWithForm from "./components/PopupWithForm.js";
import PopupWithImage from "./components/PopupWithImage.js";
import Section from "./components/Section.js";
import "./pages/index.css";
import { api } from "./components/Api.js";
import { userInfo } from "./components/UserInfo.js";

/* API */
const elementsList = document.querySelector(".elements__list");

export async function getInitialCards() {
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

export async function getUserInfo() {
  const user = await api.getUser();
  console.log(user, "user");
  userInfo.setUserInfo(user);
}
getUserInfo();

/* INITIAL CARDS */
