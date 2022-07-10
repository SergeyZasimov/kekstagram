import { isEscKey } from './utils.js';

export default class Modal {
  constructor(picture) {
    this.picture = picture;
    this.modalContainer = document.querySelector('.big-picture');
    this.commentList = this.modalContainer.querySelector('.social__comments');
    this.commentTemplate = this.modalContainer.querySelector('.social__comment');
    this.closeButton = this.modalContainer.querySelector('.big-picture__cancel');

    this.escKeydownHandler = this.escKeydownHandler.bind(this);
    this.close = this.close.bind(this);
  }

  open() {
    this.modalContainer.querySelector('.big-picture__img img').src = this.picture.url;
    this.modalContainer.querySelector('.likes-count').textContent = this.picture.likes;
    this.modalContainer.querySelector('.comments-count').textContent = this.picture.comments.length;

    this.renderComments();

    this.closeButton.addEventListener('click', this.close);
    document.addEventListener('keydown', this.escKeydownHandler);

    this.modalContainer.querySelector('.social__comment-count').classList.add('hidden');
    this.modalContainer.querySelector('.comments-loader').classList.add('hidden');
    this.modalContainer.classList.remove('hidden');
  }

  renderComments() {
    this.commentList.textContent = '';
    this.picture.comments.forEach((item) => {
      const commentElement = this.commentTemplate.cloneNode(true);
      commentElement.querySelector('.social__picture').src = item.avatar;
      commentElement.querySelector('.social__picture').alt = item.name;
      commentElement.querySelector('.social__text').textContent = item.message;
      this.commentList.append(commentElement);
    });
  }

  close() {
    this.modalContainer.classList.add('hidden');
    document.removeEventListener('keydown', this.escKeydownHandler);
  }

  escKeydownHandler(evt) {
    if (isEscKey(evt)) {
      evt.preventDefault();
      this.close();
    }
  }
}
