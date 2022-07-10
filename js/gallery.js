export default class Gallery {
  constructor(pictures) {
    this.pictures = pictures;
    this.picturesContainer = document.querySelector('.pictures');
    this.pictureTemplate = document.getElementById('picture').content.querySelector('.picture');
  }

  renderGallery() {
    const pictureFragment = document.createDocumentFragment();
    this.pictures.forEach((photo) => {
      const pictureElement = this.pictureTemplate.cloneNode(true);
      pictureElement.querySelector('.picture__img').src = photo.url;
      pictureElement.querySelector('.picture__comments').textContent = photo.comments.length;
      pictureElement.querySelector('.picture__likes').textContent = photo.likes;
      pictureFragment.appendChild(pictureElement);
    });
    this.picturesContainer.appendChild(pictureFragment);
  }
}
