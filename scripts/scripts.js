/*POP UPS */

const profileButton = document.querySelector(".profile__btn-title");

profileButton.addEventListener("click", () => {
  const popupElement = document.querySelector(".popup");

  const profileTitle = document.querySelector(".profile__title");
  const profileSubtitle = document.querySelector(".profile__subtitle");

  document.querySelector("#name").value = profileTitle.textContent;
  document.querySelector("#job").value = profileSubtitle.textContent;

  popupElement.classList.add("popup__opened");
});

function handleModalClose() {
  const closePopup = document.querySelector(".popup__opened");
  closePopup = closePopup.classList.remove("popup__opened");
}

const modalCloseButton = document.querySelector(".popup__close-btn-icon");
modalCloseButton.addEventListener("click", handleModalClose);

const editProfileFormElement = document.querySelector(".popup__form");

function handleProfileFormSubmit(event) {
  event.preventDefault();

  const nameInput = document.querySelector("#name");
  const jobInput = document.querySelector("#job");

  document.querySelector(".profile__title").textContent = nameInput.value;
  document.querySelector(".profile__subtitle").textContent = jobInput.value;

  handleModalClose();
}

editProfileFormElement.addEventListener("submit", handleProfileFormSubmit);

/* IMAGE ADD BUTTON */

const imageButtonAdd = document.querySelector(".profile__btn-add");

imageButtonAdd.addEventListener("click", () => {
  const popupElement = document.querySelector(".popupAdd");

  popupElement.classList.add("popupAdd__opened");
});

function handleModalCloseAdd() {
  const closePopupAdd = document.querySelector(".popupAdd__opened");
  closePopupAdd = closePopupAdd.classList.remove("popupAdd__opened");
}
const modalCloseButtonAdd = document.querySelector(".popupAdd__close-btn-icon");
modalCloseButtonAdd.addEventListener("click", handleModalCloseAdd);

const addCardFormElement = document.querySelector(".popupAdd__form");

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
  const cardTemplate = document
    .querySelector("#elements__list")
    .content.querySelector(".elements__list-img");
  const cardElement = cardTemplate.cloneNode(true);
  cardElement.querySelector(".elements__title").textContent = card.name;
  cardElement.querySelector(".elements__item").setAttribute("src", card.link);
  cardElement.querySelector(".elements__item").setAttribute("alt", card.name);
  const elementHrtBtn = cardElement.querySelector(".elements__btn-hrt");
  const elementTrsBtn = cardElement.querySelector(".elements__btn-trh");

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
  const popupImgElement = document.querySelector(".popupImg");
  const popupImgContainer = document.querySelector(".popupImg-container");

  const imgEl = document.querySelector(".popupImg-modal");
  imgEl.setAttribute("src", imageSrc);

  const footerEl = document.querySelector(".popupImg-footer");
  footerEl.textContent = imageTitle;

  popupImgContainer.appendChild(imgEl);
  popupImgContainer.appendChild(footerEl);

  popupImgElement.classList.add("popupImg-opened");
}

elementsList.addEventListener("click", function (event) {
  const target = event.target;
  console.log("teste", target);

  if (target.classList.contains("elements__item")) {
    const clickedCard = target.closest(".elements__list-img");

    const clickedImageTitle =
      clickedCard.querySelector(".elements__title").textContent;
    const clickedElementImg = target;

    const imageSrc = clickedElementImg.getAttribute("src");

    handleOpenImageModal(imageSrc, clickedImageTitle);
  }
});

function handleCloseImageModal() {
  const imgOpened = document.querySelector(".popupImg-opened");
  const popupImgElement = document.querySelector(".popupImg");

  popupImgElement.classList.remove("popupImg-opened");

  imgOpened = imgOpened.classList.remove("popupImg-opened");
}

const popupImageCloseButton = document.querySelector(
  ".popupImg-close-btn-icon"
);
popupImageCloseButton.addEventListener("click", handleCloseImageModal);
