import { galleryItems } from "./gallery-items.js";
//* console.log(galleryItems);

const galleryAlbum = document.querySelector(".gallery");
galleryAlbum.addEventListener("click", openGalleryItem);

// Добавляет картинки из объекта в разметку
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

// Делаем один бойльшой файл разметки
let addNewImage = galleryItems.map(addItemToGallery).join("");
//* console.log(addNewImage);

// Вставляет в разметку разметку картинки
galleryAlbum.insertAdjacentHTML("afterbegin", addNewImage);
//* console.log(galleryAlbum);

// Открывает модальное окно с картинкой по клику (большой, оригинальной)

function openGalleryItem(event) {
  // Запрещает все стандартные события
  event.preventDefault();
  // Достукиваемся до дата-атрибута по клику
  const imageSrc = event.target.dataset.source;
  //* console.log(imageSrc);
  //* console.log(event.target);
  // Приплетаем сторонюю библиотеку
  const instance = basicLightbox.create(`
		<img src="${imageSrc}">
	`);

  instance.show();

  window.addEventListener("keydown", escapeFromImage);
  function escapeFromImage(e) {
    if (e.code !== "Escape") {
      return;
    }
    instance.close();
  }
}
