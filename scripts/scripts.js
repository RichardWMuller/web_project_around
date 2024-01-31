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
  let popupElement = document.querySelector(".popupAdd");

  popupElement.classList.add("popupAdd__opened");
});

function handleModalCloseAdd() {
  let closePopupAdd = document.querySelector(".popupAdd__opened");
  closePopupAdd = closePopupAdd.classList.remove("popupAdd__opened");
}
let modalCloseButtonAdd = document.querySelector(".popupAdd__close-btn-icon");
modalCloseButtonAdd.addEventListener("click", handleModalCloseAdd);

let formElementAdd = document.querySelector(".popupAdd__form");

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

function addCard(card) {
  let cardTemplate = document
    .querySelector("#elements__list")
    .content.querySelector(".elements__list-img");
  let cardElement = cardTemplate.cloneNode(true);
  cardElement.querySelector(".elements__title").textContent = card.name;
  cardElement.querySelector(".elements__item").setAttribute("src", card.link);
  cardElement.querySelector(".elements__item").setAttribute("alt", card.link);
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

function handleAddNewPost(evt) {
  evt.preventDefault();
  const titleInput = evt.target.querySelector(".popupAdd__input-box-title");
  const linkInput = evt.target.querySelector(".popupAdd__input-box-link");

  const post = addCard({
    name: titleInput.value,
    link: linkInput.value,
  });

  elementsList.prepend(post);

  evt.target.reset();
  handleModalCloseAdd();
}

formAddPlace.addEventListener("submit", handleAddNewPost);

function setInitialCards() {
  initialCards.map((card) => {
    elementsList.append(addCard(card));
  });
}
setInitialCards();

function handleOpenImageModal(imageSrc, imageTitle) {
  let popupImgElement = document.querySelector(".popup__img");
  let popupImgContainer = document.querySelector(".popup__img-container");

  let imgEl = document.querySelector(".popup__img-modal");
  imgEl.setAttribute("src", imageSrc);

  let footerEl = document.querySelector(".popup__img-footer");
  footerEl.textContent = imageTitle;

  popupImgContainer.appendChild(imgEl);
  popupImgContainer.appendChild(footerEl);

  popupImgElement.classList.add("popup__img-opened");
}
document.addEventListener("DOMContentLoaded", function () {
  let itemListArray = document.getElementsByTagName("li");
  Array.from(itemListArray).forEach((item) => {
    const imgElContainer = item.querySelector(".elements__list-img-wrapper");

    imgElContainer.addEventListener("click", () => {
      const clickedElementImg = imgElContainer.getElementsByTagName("img");

      const clickedImageTitle =
        item.querySelector(".elements__title").textContent;

      const imageSrc = clickedElementImg[0].attributes.alt.value;
      console.log("teste", imageSrc);
      handleOpenImageModal(imageSrc, clickedImageTitle);
    });
  });
});

function handleCloseImageModal() {
  let imgOpened = document.querySelector(".popup__img-opened");
  let popupImgElement = document.querySelector(".popup__img");

  popupImgElement.classList.remove("popup__img-opened");

  imgOpened = imgOpened.classList.remove("popup__img-opened");
}

let popupImageCloseButton = document.querySelector(
  ".popup__img-close-btn-icon"
);
popupImageCloseButton.addEventListener("click", handleCloseImageModal);
