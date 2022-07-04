import { createMockPhotos } from './create-mock.js';

const MOCK_NUMBERS = 25;

const photos = Array.from({ length: MOCK_NUMBERS }, createMockPhotos);

console.log(photos);
