import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._popupImg = this._popup.querySelector(".popupImg-modal");
    this._popupCaption = this._popup.querySelector(".popupImg-footer");
  }

  open(imageSrc, imageTitle) {
    this._popupImg.src = imageSrc;
    this._popupImg.alt = imageTitle;
    this._popupCaption.textContent = imageTitle;
    super.open();
  }
}
