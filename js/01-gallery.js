import { galleryItems } from "./gallery-items.js";
// console.log(galleryItems);

const galleryAlbum = document.querySelector(".gallery");
galleryAlbum.addEventListener("click", openGalleryItem);

//? Открывает модальное окно с картинкой по клику (большой, оригинальной)
function openGalleryItem(event) {
  event.preventDefault();
  console.log(event.target);
}

//? Добавляет картинки из объекта в разметку
function addItemToGallery() {
  for (const item of galleryItems) {
    galleryAlbum.insertAdjacentHTML(
      "afterbegin",
      `<div class="gallery__item">
        <a class="gallery__link" href="${item.original}">
            <img
                class="gallery__image"
                src="${item.preview}"
                data-source="${item.original}"
                alt="${item.description}"/>
        </a>
    </div>`
    );
  }
}
addItemToGallery();
