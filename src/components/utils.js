import { api } from "./Api";

const elementsList = document.querySelector(".elements__list");
const formAddPlace = document.querySelector(".popupAdd__form");
const popupClose = document.querySelectorAll(".popupAdd__save-btn");

const profileButton = document.querySelector(".profile__btn-title");

profileButton.addEventListener("click", () => {
  const popupElement = document.querySelector(".popup");

  const profileTitle = document.querySelector(".profile__title");
  const profileSubtitle = document.querySelector(".profile__subtitle");

  const saveButton = document.querySelector(".popup__save-btn");

  document.querySelector("#name").value = profileTitle.textContent;
  document.querySelector("#job").value = profileSubtitle.textContent;

  popupElement.classList.add("popup__opened");
  saveButton.setAttribute("disabled", true);
});

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
  imgOpened.classList.remove("popupImg-opened");
}

const popupImageCloseButton = document.querySelector(
  ".popupImg-close-btn-icon"
);
popupImageCloseButton.addEventListener("click", handleCloseImageModal);

function closePopupImgWithKey(evt) {
  const closePopupImg = document.querySelector(".popupImg-opened");
  const hasPopupImg = !!closePopupImg;
  if (hasPopupImg && evt.key == "Escape") {
    closePopupImg.classList.remove("popupImg-opened");
  }
}

document.addEventListener("keydown", closePopupImgWithKey);

function closePopupImgClickOut(evt) {
  const closePopupImg = document.querySelector(".popupImg");
  if (evt.target == closePopupImg) {
    closePopupImg.classList.remove("popupImg-opened");
  }
}

document.addEventListener("click", closePopupImgClickOut);

function cleanValidations(inputSelector) {
  const popupInputs = document.querySelectorAll(inputSelector);

  const inputs = Array.from(popupInputs);

  inputs.forEach((input) => {
    const spanError = input.parentElement.querySelector(".popup__error");

    spanError.textContent = "";

    input.classList.remove("popup__input_type_error");
  });
}

function cleanValidationAdd(inputSelector) {
  const popupInputs = document.querySelectorAll(inputSelector);

  const inputs = Array.from(popupInputs);

  inputs.forEach((input) => {
    const spanError = input.parentElement.querySelector(".popupAdd__error");

    spanError.textContent = "";

    input.classList.remove("popup__input_type_error");
  });
}

function handleModalClose() {
  const closePopup = document.querySelector(".popup__opened");
  cleanValidations(".popup__input-box");
  closePopup.classList.remove("popup__opened");
}

const modalCloseButton = document.querySelector(".popup__close-btn-icon");
modalCloseButton.addEventListener("click", handleModalClose);

function closePopupWithKey(evt) {
  const closePopup = document.querySelector(".popup__opened");
  const hasPopup = !!closePopup;
  if (hasPopup && evt.key === "Escape") {
    handleModalClose();
  }
}

function closePopupClickOut(evt) {
  const closePopup = document.querySelector(".popup");
  if (evt.target == closePopup) {
    handleModalClose();
  }
}

document.addEventListener("click", closePopupClickOut);

document.addEventListener("keydown", closePopupWithKey);

const editProfileFormElement = document.querySelector(".popup__form");

async function handleProfileFormSubmit(event) {
  event.preventDefault();

  const nameInput = document.querySelector("#name");
  const jobInput = document.querySelector("#job");

  const updatedUser = await api.updateUser(nameInput.value, jobInput.value);
  document.querySelector(".profile__title").textContent = updatedUser.name;
  document.querySelector(".profile__subtitle").textContent = updatedUser.about;
  handleModalClose();
}

editProfileFormElement.addEventListener("submit", handleProfileFormSubmit);

/* IMAGE ADD BUTTON */

const imageButtonAdd = document.querySelector(".profile__btn-add");

imageButtonAdd.addEventListener("click", () => {
  const popupElement = document.querySelector(".popupAdd");
  const saveButton = document.querySelector(".popupAdd__save-btn");
  popupElement.classList.add("popupAdd__opened");
  saveButton.setAttribute("disabled", true);
});

function resetNewLocalForm() {
  const titleInput = document.querySelector(".popupAdd__input-box-title");
  const linkInput = document.querySelector(".popupAdd__input-box-link");

  titleInput.value = "";
  linkInput.value = "";
}

function handleModalCloseAdd() {
  const closePopupAdd = document.querySelector(".popupAdd__opened");
  cleanValidationAdd(".popupAdd__input-box");
  resetNewLocalForm();
  closePopupAdd.classList.remove("popupAdd__opened");
}

const modalCloseButtonAdd = document.querySelector(".popupAdd__close-btn-icon");
modalCloseButtonAdd.addEventListener("click", handleModalCloseAdd);

function closePopupAddWithKey(evt) {
  const closePopupAdd = document.querySelector(".popupAdd__opened");
  const hasPopupAdd = !!closePopupAdd;
  if (hasPopupAdd && evt.key == "Escape") {
    handleModalCloseAdd();
  }
}

document.addEventListener("keydown", closePopupAddWithKey);

function closePopupAddClickOut(evt) {
  const closePopupAdd = document.querySelector(".popupAdd");
  if (evt.target == closePopupAdd) {
    handleModalCloseAdd();
  }
}

document.addEventListener("click", closePopupAddClickOut);

const addCardFormElement = document.querySelector(".popupAdd__form");

const enableValidation = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input-box",
  submitButtonSelector: ".popup__save-btn",
  inputErrorClass: "popup__input_type_error",
  errorClass: ".popup__error",
  formSelector: ".popupAdd__form",
  inputSelector: ".popupAdd__input-box",
  submitButtonSelector: ".popupAdd__save-btn",
  inputErrorClass: "popup__input_type_error",
  errorClass: ".popupAdd__error",
};

export { handleOpenImageModal, enableValidation, handleModalCloseAdd };
