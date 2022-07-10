import Modal from './modal.js';

export default class Gallery {
  constructor(pictures) {
    this.pictures = pictures;
    this.picturesContainer = document.querySelector('.pictures');
    this.pictureTemplate = document.getElementById('picture').content.querySelector('.picture');
    this.setPictureClickHandler();
  }

  renderGallery() {
    const pictureFragment = document.createDocumentFragment();
    this.pictures.forEach((item) => {
      const pictureElement = this.pictureTemplate.cloneNode(true);
      pictureElement.setAttribute('data-id', item.id);
      pictureElement.querySelector('.picture__img').src = item.url;
      pictureElement.querySelector('.picture__comments').textContent = item.comments.length;
      pictureElement.querySelector('.picture__likes').textContent = item.likes;
      pictureFragment.appendChild(pictureElement);
    });
    this.picturesContainer.appendChild(pictureFragment);
  }

  setPictureClickHandler() {
    this.picturesContainer.addEventListener('click', this.openModal.bind(this));
  }

  openModal(evt) {
    if (evt.target.classList.contains('picture__img')) {
      const id = evt.target.offsetParent.dataset.id;
      const picture = this.pictures.find((item) => item.id === +id);
      const modal = new Modal(picture);
      modal.open();
    }
  }
}
