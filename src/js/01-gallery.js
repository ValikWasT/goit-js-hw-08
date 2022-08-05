// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

// Описаний в документації
import SimpleLightbox from 'simplelightbox';
// Додатковий імпорт стилів

import 'simplelightbox/dist/simple-lightbox.min.css';

console.log(galleryItems);

const refs = {
  gallery: document.querySelector('.gallery'),
};

const galleryItemsDivs = galleryItems
  .map(({ preview, original, description }) => {
    return `<li class="gallery__item">
        <a class="gallery__link" href="${original}">
        <img
            class="gallery__image"
            src="${preview}"
            alt="${description}"
            />
        </a>
    </li>`;
  })
  .join('');

refs.gallery.innerHTML = galleryItemsDivs;
const lightbox = new SimpleLightbox('.gallery a', {
  captionDelay: 250,
  captionsData: 'alt',
});
