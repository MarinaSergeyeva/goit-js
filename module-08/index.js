import { default as galleryItems } from "./gallery-items.js";

const gallery = document.querySelector(".js-gallery");
const modal = document.querySelector(".js-lightbox");
const modalImage = document.querySelector(".lightbox__image");
const modalBg = document.querySelector(".lightbox__overlay");

const createGalleryItem = () => {
  let markup = ``;
  for (let i = 0; i < galleryItems.length; i += 1) {
    markup += `
        <li class="gallery__item">
  <a
    class="gallery__link"
    href="#"
    // href="${galleryItems[i].original}"
  >
    <img
      class="gallery__image"
      src="${galleryItems[i].preview}"
      data-source="${galleryItems[i].original}"
      alt="${galleryItems[i].description}"
    />
  </a>
</li>
        `;
  }
  gallery.innerHTML = markup;
};

const openModal = () => {
  if (event.target.nodeName !== "IMG") {
    console.log("Кликнули не по картинке!");
    return;
  }

  modal.classList.add("is-open");

  const activeImage = event.target;

  //   console.dir(activeImage);

  const activeImageLargeURL = activeImage.dataset.source;
  const activeImageLargeALT = activeImage.alt;

  modalImage.src = activeImageLargeURL;
  modalImage.alt = activeImageLargeALT;

  modal.addEventListener("click", closeModal);
  document.addEventListener("keydown", closeModal);
  document.addEventListener("keydown", clickImage);
};

function closeModal(event) {
  //   console.log(event.currentTarget);
  //   console.log(event.target);
  // console.log(event.target.nodeName);
  //   console.log(event);

  if (
    event.key === "Escape" ||
    event.target === modalBg ||
    event.target.dataset.action === "close-lightbox"
  ) {
    modal.classList.remove("is-open");

    modalImage.src = " ";
    modalImage.alt = " ";
    modal.removeEventListener("click", closeModal);
  }
}

const clickImage = (event) => {
  if (event.key === "ArrowRight") {
    console.log("нажата стрелка вправо");

    for (let i = 0; i < galleryItems.length; i += 1) {
      let index = galleryItems.indexOf(galleryItems[i]);
      if (modalImage.alt === galleryItems[i].description) {
        modalImage.src = galleryItems[index + 1].original;
        modalImage.alt = galleryItems[index + 1].description;
      }
    }
    return console.log("Конец галереи");
  }
  if (event.key === "ArrowLeft") {
    console.log("нажата стрелка влево");

    for (let i = 0; i < galleryItems.length; i += 1) {
      if (modalImage.alt === galleryItems[i].description) {
        let index = galleryItems.indexOf(galleryItems[i]);

        console.dir(modalImage);
        console.dir(galleryItems[i]);

        modalImage.src = galleryItems[index - 1].original;
        modalImage.alt = galleryItems[index - 1].description;
      }
    }
  }
};

createGalleryItem();
gallery.addEventListener("click", openModal);
