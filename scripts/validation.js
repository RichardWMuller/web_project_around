const profileInputField = document.querySelector(".popup__input-box-name");

profileInputField.addEventListener("change", enableValidation);

function addErrorMessage(element, errorClass) {
  const spanError = element.parentElement.querySelector(errorClass);
  spanError.textContent = element.validationMessage;
}

function removeErrorMessage(element, errorClass) {
  const spanError = element.parentElement.querySelector(errorClass);
  spanError.textContent = "";
}

function addErrorClass(element, errorClass) {
  element.classList.add(errorClass);
}

function removeErrorClass(element, errorClass) {
  element.classList.remove(errorClass);
}

function toggleAccessSubmitButton(inputs, saveButton) {
  const shouldDisable = inputs.some((input) => input.validity.valid === false);

  if (shouldDisable) {
    saveButton.setAttribute("disabled", true);
    return;
  }

  saveButton.removeAttribute("disabled");
}

function enableValidation(elements) {
  const formElements = document.querySelector(elements.formSelector);
  const inputElements = formElements.querySelectorAll(elements.inputSelector);
  const saveButton = formElements.querySelector(elements.submitButtonSelector);
  const inputs = Array.from(inputElements);

  const { inputErrorClass, errorClass } = elements;

  inputs.forEach((input) => {
    input.addEventListener("input", (event) => {
      const element = event.target;

      if (!element.validity.valid || element.value == "") {
        addErrorClass(element, inputErrorClass);
        addErrorMessage(element, errorClass);
      } else {
        removeErrorClass(element, inputErrorClass);
        removeErrorMessage(element, errorClass);
      }
      toggleAccessSubmitButton(inputs, saveButton);
    });
  });
}

enableValidation({
  formSelector: ".popup__form",
  inputSelector: ".popup__input-box",
  submitButtonSelector: ".popup__save-btn",
  inputErrorClass: "popup__input_type_error",
  errorClass: ".popup__error",
});

enableValidation({
  formSelector: ".popupAdd__form",
  inputSelector: ".popupAdd__input-box",
  submitButtonSelector: ".popupAdd__save-btn",
  inputErrorClass: "popup__input_type_error",
  errorClass: ".popupAdd__error",
});
