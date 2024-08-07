import { api } from "./Api.js";
import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(
    popupSelector,
    closeButtonSelector,
    modalOpenSelector,
    formSelector,
    inputSelector,
    saveButtonSelector,
    submitCallback
  ) {
    super(popupSelector, closeButtonSelector, modalOpenSelector);
    this._submitCallback = submitCallback;
    this._formElement = this._popup.querySelector(formSelector);
    this._inputList = this._formElement.querySelectorAll(inputSelector);
    this._submitButton = this._formElement.querySelector(saveButtonSelector);
  }

  _getInputValues() {
    const inputValues = {};
    this._inputList.forEach((input) => {
      inputValues[input.name] = input.value;
    });
    return inputValues;
  }

  setEventListeners() {
    super.setEventListeners();
    this._formElement.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._submitCallback(this._getInputValues());
    });
  }

  close() {
    super.close();
    this._formElement.reset();
  }
}
