import Card from "./components/Card.js";
import FormValidator from "./components/FormValidator.js";
import { enableValidation, handleModalCloseAdd } from "./components/utils.js";
import Section from "./components/Section.js";
import "./pages/index.css";

function handleProfileFormSubmitAdd(event) {
  event.preventDefault();
}
/* INITIAL CARDS */

const elementsList = document.querySelector(".elements__list");
const formAddPlace = document.querySelector(".popupAdd__form");
const popupClose = document.querySelectorAll(".popupAdd__save-btn");

const initialCards = [
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

// for (const image of initialCards) {
//   const card = new Card(image.name, image.link);
//   elementsList.append(card.generateCard());
// }

// function renderCard(cards) {
//   const createdCard = new Card(items.name, items.link);
//   const cardElement = initialCards.generateCard();
//   cardSelector.setItem(cardElement);
// }

// const listCard = new Section({ items: initialCards, renderer: renderCard }, containerSelector);
// listCard.rendererItems();

const cardSelector = new Section(
  {
    items: initialCards,
    renderer: () => {
      const card = new Card(items.name, items.link);
      const cardElement = card.generateCard();
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

  const addCard = new Card(titleInput.value, linkInput.value);

  elementsList.prepend(addCard.generateCard());

  evt.target.reset();
  handleModalCloseAdd();
}
formAddPlace.addEventListener("submit", handleAddNewPost);
