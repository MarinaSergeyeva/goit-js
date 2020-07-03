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

const openModal = (event) => {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    console.log("Кликнули не по картинке!");
    return;
  }

  modal.classList.add("is-open");

  //   console.dir(activeImage);
  const activeImage = event.target;

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
  let currentImageSRC = modalImage.getAttribute("src");

  const elementIndex = galleryItems.findIndex(
    (element) => element.original === currentImageSRC
  );

  if (event.key === "ArrowRight") {
    let newElementIndex = elementIndex + 1;
    console.log("newIndex: ", newElementIndex);
    console.log("gallery.length: ", galleryItems.length);
    if (newElementIndex >= galleryItems.length) {
      newElementIndex = 0;
    }
    currentImageSRC = modalImage.setAttribute(
      "src",
      galleryItems[newElementIndex].original
    );
  }

  if (event.key === "ArrowLeft") {
    let newElementIndex = elementIndex - 1;
    console.log("newIndex: ", newElementIndex);
    console.log("gallery.length: ", galleryItems.length);

    if (newElementIndex < 0) {
      newElementIndex = galleryItems.length - 1;
    }
    currentImageSRC = modalImage.setAttribute(
      "src",
      galleryItems[newElementIndex].original
    );
  }
};

createGalleryItem();
gallery.addEventListener("click", openModal);
