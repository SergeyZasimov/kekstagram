import { createMockPhotos } from './create-mock.js';
import { createUsersPhotos } from './create-users-photos.js';

const MOCK_NUMBERS = 25;

const photos = Array.from({ length: MOCK_NUMBERS }, createMockPhotos);

createUsersPhotos(photos);
