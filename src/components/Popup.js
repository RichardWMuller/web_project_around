export default class Popup {
  constructor(popupSelector, closeButtonSelector, modalOpenSelector) {
    this._popup = document.querySelector(popupSelector);
    this._handleEscClose = this._handleEscClose.bind(this);
    this._closeButtonSelector = closeButtonSelector;
    this._modalOpenSelector = modalOpenSelector;
  }

  open() {
    this._popup.classList.add(this._modalOpenSelector);
    this.setEventListeners();
  }

  close() {
    this._popup.classList.remove(this._modalOpenSelector);
    this.removeEventListeners();
  }

  _handleEscClose(evt) {
    if (evt.key === "Escape") {
      this.close();
    }
  }

  setEventListeners() {
    this._popup
      .querySelector(this._closeButtonSelector)
      .addEventListener("click", () => {
        this.close();
      });

    this._popup.addEventListener("click", (evt) => {
      if (evt.target === this._popup) {
        this.close();
      }
    });

    document.addEventListener("keydown", this._handleEscClose);
  }

  removeEventListeners() {
    this._popup
      .querySelector(this._closeButtonSelector)
      .removeEventListener("click", () => {
        this.close();
      });

    this._popup.removeEventListener("click", (evt) => {
      if (evt.target === this._popup) {
        this.close();
      }
    });

    document.removeEventListener("keydown", this._handleEscClose);
  }
}
