import { galleryItems } from "./gallery-items.js";
// console.log(galleryItems);

const galleryAlbum = document.querySelector(".gallery");
galleryAlbum.addEventListener("click", openGalleryItem);

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

//? Открывает модальное окно с картинкой по клику (большой, оригинальной)
function openGalleryItem(event) {
  const imageItem = document.querySelector(".gallery__image");
  event.preventDefault();
  //   console.log(event.target);
  //   console.log(document.querySelector("[data-source]"));
  console.log(imageItem.dataset.source);
}

//? Створення і рендер розмітки на підставі масиву даних galleryItems і наданого шаблону елемента галереї.
//? Реалізація делегування на div.gallery і отримання url великого зображення.
//? Підключення скрипту і стилів бібліотеки модального вікна basicLightbox. Використовуй CDN сервіс jsdelivr і додай у проект посилання на мініфіковані (.min) файли бібліотеки.
//? Відкриття модального вікна по кліку на елементі галереї. Для цього ознайомся з документацією і прикладами.
//? Заміна значення атрибута src елемента <img> в модальному вікні перед відкриттям. Використовуй готову розмітку модального вікна із зображенням з прикладів бібліотеки basicLightbox.
