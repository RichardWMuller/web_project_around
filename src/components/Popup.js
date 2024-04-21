export default class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
    this._handleEscClose = this._handleEscClose.bind(this);
  }

  open() {
    this._popup.classList.add("popup__opened");
    this.setEventListeners();
  }

  close() {
    this._popup.classList.remove("popup__opened");
    this.removeEventListeners();
  }

  _handleEscClose(evt) {
    if (evt.key === "Escape") {
      this.close();
    }
  }

  setEventListeners() {
    this._popup
      .querySelector(".popup__close-btn-icon")
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
      .querySelector(".popup__close-btn-icon")
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
