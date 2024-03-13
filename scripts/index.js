import Card from "./Card.js";
import { FormValidator } from "./FormValidator.js";
import { enableValidation, handleModalCloseAdd } from "./utils.js";

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
    link: "./images/albufeira-portugal-praia-arrifes.jpg",
  },
  {
    name: "Albufeira",
    link: "./images/praia_do_camilo.jpg",
  },
  {
    name: "Lagos",
    link: "./images/praia_dona_ana.jpg",
  },
  {
    name: "Carvoeiro",
    link: "./images/praia-da-marinha-algarve.png",
  },
  {
    name: "Albufeira",
    link: "./images/acessopraiadafalesia.jpg",
  },
  {
    name: "Albufeira",
    link: "./images/View-over-Praia-da-Oura.jpg",
  },
];

for (const image of initialCards) {
  const card = new Card(image.name, image.link);
  elementsList.append(card.generateCard());
}

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
