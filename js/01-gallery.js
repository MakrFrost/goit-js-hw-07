import { galleryItems } from "./gallery-items.js";
// console.log(galleryItems);

const galleryAlbum = document.querySelector(".gallery");
galleryAlbum.addEventListener("click", openGalleryItem);

//? Открывает модальное окно с картинкой по клику (большой, оригинальной)
function openGalleryItem(event) {
  console.log(event.target);
}

//? Добавляет картинки из объекта в разметку
function addItemToGallery() {
  for (const item of galleryItems) {
    galleryAlbum.insertAdjacentHTML(
      "afterbegin",
      `<img src="${item.preview}" alt="${item.description}" >`
    );
  }
}
addItemToGallery();
