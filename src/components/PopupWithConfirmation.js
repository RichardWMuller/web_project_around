import Popup from "./Popup.js";

export default class PopupWithConfirmation extends Popup {
  constructor(
    popupSelector,
    closeButtonSelector,
    modalOpenSelector,
    formSelector,
    submitButtonSelector,
    submitCallback
  ) {
    super(
      popupSelector,
      closeButtonSelector,
      modalOpenSelector,
      formSelector,
      submitButtonSelector
    );
    this._submitCallback = submitCallback;
    this._formElement = this._popup.querySelector(formSelector);
    this._submitButton = this._formElement.querySelector(submitButtonSelector);
  }

  setEventListeners() {
    // super.setEventListeners();
    this._formElement.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._submitCallback(this._formElement.id);
    });
  }
  close() {
    super.close();
    this._formElement.reset();
  }
}
