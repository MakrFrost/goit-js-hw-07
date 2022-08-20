import { galleryItems } from "./gallery-items.js";
// console.log(galleryItems);

const galleryAlbum = document.querySelector(".gallery");
galleryAlbum.addEventListener("click", openGalleryItem);

//? Добавляет картинки из объекта в разметку
function addItemToGallery({ preview, original, description }) {
  return `<div class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"/>
        </a>
    </div>`;
}

let addNewImage = galleryItems.map(addItemToGallery).join("");
// console.log(addNewImage);

galleryAlbum.insertAdjacentHTML("afterbegin", addNewImage);
// console.log(galleryAlbum);

//? Открывает модальное окно с картинкой по клику (большой, оригинальной)
function openGalleryItem(event) {
  event.preventDefault();
  const imageSrc = event.target.dataset.source;
  console.log(imageSrc);
  // console.log(event.target);
}

//! Створення і рендер розмітки на підставі масиву даних galleryItems і наданого шаблону елемента галереї.
//! Реалізація делегування на div.gallery і отримання url великого зображення.
//? Підключення скрипту і стилів бібліотеки модального вікна basicLightbox. Використовуй CDN сервіс jsdelivr і додай у проект посилання на мініфіковані (.min) файли бібліотеки.
//? Відкриття модального вікна по кліку на елементі галереї. Для цього ознайомся з документацією і прикладами.
//? Заміна значення атрибута src елемента <img> в модальному вікні перед відкриттям. Використовуй готову розмітку модального вікна із зображенням з прикладів бібліотеки basicLightbox.
