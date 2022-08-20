import { galleryItems } from "./gallery-items.js";
// Change code below this line
// console.log(galleryItems);

const galleryAlbum = document.querySelector(".gallery");
galleryAlbum.addEventListener("click", openGalleryItem);

// Добавляет картинки из объекта в разметку
function addItemToGallery({ preview, original, description }) {
  return `<a class="gallery__item" href="${original}">
            <img class="gallery__image" 
            src="${preview}"
            alt="${description}" />
        </a>`;
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
}

let lightbox = new SimpleLightbox(".gallery a", {});

let captionType = lightbox.options.captionType;
let captionSelector = lightbox.options.captionSelector;

captionType = "alt";

console.log(lightbox.on("opened.simplelightbox", function () {}));

// console.log(captionType);
// console.log(captionSelector);
// console.log(`${galleryItems.description}`));

//! Створення і рендер розмітки на підставі масиву даних galleryItems і наданого шаблону елемента галереї. Використовуй готовий код з першого завдання.
//! Підключення скрипту і стилів бібліотеки, використовуючи CDN сервіс cdnjs. Необхідно додати посилання на два файли: simple-lightbox.min.js і simple-lightbox.min.css.
//! Ініціалізація бібліотеки після створення і додання елементів галереї у div.gallery. Для цього ознайомся з документацією SimpleLightbox - насамперед секції «Usage» і «Markup».
//TODO Подивися в документації секцію «Options» і додай відображення підписів до зображень з атрибута alt. Нехай підпис буде знизу і з'являється через 250 мілісекунд після відкриття зображення.
