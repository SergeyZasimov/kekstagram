import { createMockPhotos } from './create-mock.js';
import Gallery from './gallery.js';

const MOCK_NUMBERS = 25;

const pictures = Array.from({ length: MOCK_NUMBERS }, createMockPhotos);

const gallery = new Gallery(pictures);
gallery.renderGallery();
