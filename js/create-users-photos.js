const createUsersPhotos = (photos) => {
  const picturesContainer = document.querySelector('.pictures');
  const pictureTemplate = document.getElementById('picture').content.querySelector('.picture');
  const pictureFragment = document.createDocumentFragment();
  photos.forEach((photo) => {
    const pictureElement = pictureTemplate.cloneNode(true);
    pictureElement.querySelector('.picture__img').src = photo.url;
    pictureElement.querySelector('.picture__comments').textContent = photo.comments.length;
    pictureElement.querySelector('.picture__likes').textContent = photo.likes;
    pictureFragment.appendChild(pictureElement);
  });
  picturesContainer.appendChild(pictureFragment);
};

export { createUsersPhotos };
