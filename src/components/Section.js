export default class Section {
  constructor({ items, renderer }, containerSelector) {
    this._items = items;
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }

  setItem(element) {
    this._container.prepend(element);
  }

  clear() {
    this._container.innerHTML = "";
  }

  renderItems() {
    this.clear();
  }

  rendererItems() {
    this.clear();
    this._items.forEach((card) => {
      this._renderer(card);
    });
  }
}
