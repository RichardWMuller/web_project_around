export class FormValidator {
  constructor(
    formSelector,
    inputSelector,
    submitButtonSelector,
    inputErrorClass,
    errorClass
  ) {
    this._form = document.querySelector(formSelector);
    this._inputs = Array.from(this._form.querySelectorAll(inputSelector));
    this._submitButton = this._form.querySelector(submitButtonSelector);
    this._inputErrorClass = inputErrorClass;
    this._errorClass = errorClass;
  }

  _addErrorMessage(element) {
    const spanError = element.parentElement.querySelector(this._errorClass);
    spanError.textContent = element.validationMessage;
  }

  _removeErrorMessage(element) {
    const spanError = element.parentElement.querySelector(this._errorClass);
    spanError.textContent = "";
  }

  _addErrorClass(element) {
    element.classList.add(this._inputErrorClass);
  }

  _removeErrorClass(element) {
    element.classList.remove(this._inputErrorClass);
  }

  _toggleAccessSubmitButton() {
    const shouldDisable = this._inputs.some(
      (input) => input.validity.valid === false
    );

    if (shouldDisable) {
      this._submitButton.setAttribute("disabled", true);
      return;
    }

    this._submitButton.removeAttribute("disabled");
  }

  enableValidation() {
    this._inputs.forEach((input) => {
      input.addEventListener("input", (event) => {
        const element = event.target;

        if (!element.validity.valid || element.value === "") {
          this._addErrorClass(element);
          this._addErrorMessage(element);
        } else {
          this._removeErrorClass(element);
          this._removeErrorMessage(element);
        }
        this._toggleAccessSubmitButton();
      });
    });
  }
}

const profileValidator = new FormValidator(
  ".popup__form",
  ".popup__input-box",
  ".popup__save-btn",
  "popup__input_type_error",
  ".popup__error"
);

profileValidator.enableValidation();

const popupAddValidator = new FormValidator(
  ".popupAdd__form",
  ".popupAdd__input-box",
  ".popupAdd__save-btn",
  "popup__input_type_error",
  ".popupAdd__error"
);

popupAddValidator.enableValidation();
