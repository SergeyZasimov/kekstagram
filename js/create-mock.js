import { getRandomInteger } from './utils.js';

const messages = ['Всё отлично!', 'В целом всё неплохо. Но не всё.', 'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.', 'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.', 'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.', 'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'];

const names = ['Сергей', 'Петр', 'Максим', 'Владимир', 'Алексей', 'Зигмунд'];

const createCommentId = getRandomInteger(0, 100);
const createPhotoId = getRandomInteger(1, 25);
const createPictureNumber = getRandomInteger(1, 25);
const createLikes = getRandomInteger(15, 200, false);
const createAvatarNumber = getRandomInteger(1, 6, false);
const createMessageIndex = getRandomInteger(1, messages.length, false);
const createNameIndex = getRandomInteger(0, 6, false);

const createMockComment = () => ({
  id: createCommentId(),
  avatar: `img/avatar-${ createAvatarNumber() }`,
  message: messages[createMessageIndex()],
  name: names[createNameIndex()]
});

const createComments = () => {
  const createCommentsLength = getRandomInteger(0, 6, false);
  const commentLength = createCommentsLength();
  return Array.from({length: commentLength}, createMockComment);
};

const createMockPhotos = () => ({
  id: createPhotoId(),
  url: `photos/${ createPictureNumber() }`,
  description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aliquid cumque ex, magnam placeat ratione?',
  likes: createLikes(),
  comments: createComments(),
});


export { createMockPhotos };
