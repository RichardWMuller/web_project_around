/*POP UPS */

let profileButton = document.querySelector(".profile__btn-title");

profileButton.addEventListener("click", () => {
  let popupElement = document.querySelector(".popup");

  let profileTitle = document.querySelector(".profile__title");
  let profileSubtitle = document.querySelector(".profile__subtitle");

  document.querySelector("#name").value = profileTitle.textContent;
  document.querySelector("#job").value = profileSubtitle.textContent;

  popupElement.classList.add("popup__opened");
});

function handleModalClose() {
  let closePopup = document.querySelector(".popup__opened");
  closePopup = closePopup.classList.remove("popup__opened");
}

let modalCloseButton = document.querySelector(".popup__close-btn-icon");
modalCloseButton.addEventListener("click", handleModalClose);

let formElement = document.querySelector(".popup__form");

function handleProfileFormSubmit(event) {
  event.preventDefault();

  let nameInput = document.querySelector("#name");
  let jobInput = document.querySelector("#job");

  document.querySelector(".profile__title").textContent = nameInput.value;
  document.querySelector(".profile__subtitle").textContent = jobInput.value;

  handleModalClose();
}

formElement.addEventListener("submit", handleProfileFormSubmit);

/* IMAGE ADD BUTTON */

let imageButtonAdd = document.querySelector(".profile__btn-add");

imageButtonAdd.addEventListener("click", () => {
  let popupElement = document.querySelector(".popup2");

  popupElement.classList.add("popup2__opened");
});

function handleModalClose2() {
  let closePopup2 = document.querySelector(".popup2__opened");
  closePopup2 = closePopup2.classList.remove("popup2__opened");
}
let modalCloseButton2 = document.querySelector(".popup2__close-btn-icon");
modalCloseButton2.addEventListener("click", handleModalClose2);

let formElement2 = document.querySelector(".popup2__form");

function handleProfileFormSubmit2(event) {
  event.preventDefault();
}
/* INITIAL CARDS */

const elementsList = document.querySelector(".elements__list");
const formAddPlace = document.querySelector(".popup2__form");
const popupClose = document.querySelectorAll(".popup2__save-btn");

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

function addCard(card) {
  let cardTemplate = document
    .querySelector("#elements__list")
    .content.querySelector(".elements__list-img");
  let cardElement = cardTemplate.cloneNode(true);
  cardElement.querySelector(".elements__title").textContent = card.name;
  cardElement.querySelector(".elements__item").setAttribute("src", card.link);
  cardElement.querySelector(".elements__item").setAttribute("alt", card.link);
  cardElement.setAttribute("id", Math.random());
  let elementHrtBtn = cardElement.querySelector(".elements__btn-hrt");
  let elementTrsBtn = cardElement.querySelector(".elements__btn-trh");

  elementHrtBtn.addEventListener("click", (evt) => {
    evt.target.classList.toggle("elements__btn-hrt_actived");
  });

  elementTrsBtn.addEventListener("click", () => {
    cardElement.remove();
  });

  return cardElement;
}

let itemListArray = document.querySelectorAll(".elements__list");
console.log(itemListArray);
// itemListArray.forEach((item) => {
//   item.addEventListener("click", (evt) => {
//     console.log("item", item);
//     console.log("evt", evt);
//   });
// });

function handleAddNewPost(evt) {
  evt.preventDefault();
  const titleInput = evt.target.querySelector(".popup2__input-box-title");
  const linkInput = evt.target.querySelector(".popup2__input-box-link");

  const post = addCard({
    name: titleInput.value,
    link: linkInput.value,
  });

  elementsList.prepend(post);

  evt.target.reset();
  handleModalClose2();
}

formAddPlace.addEventListener("submit", handleAddNewPost);
function setInitialCards() {
  initialCards.map((card) => {
    elementsList.append(addCard(card));
  });
}
setInitialCards();
