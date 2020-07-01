const images = [
  {
    url:
      "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url:
      "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url:
      "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

// ----------------------------------- ver-1 ----------------------------------- //

// const gallery = document.querySelector("#gallery");
// const fragment = document.createDocumentFragment();

// for (let i = 0; i < images.length; i += 1) {
//   const li = document.createElement("li");
//   const galleryImg = document.createElement("img");

//   galleryImg.setAttribute("src", images[i].url);
//   galleryImg.setAttribute("alt", images[i].alt);
//   galleryImg.classList.add("gallery__img");
//   console.dir(galleryImg);

//   li.appendChild(galleryImg);
//   fragment.appendChild(li);
// }

// gallery.appendChild(fragment);
// gallery.style.display = "flex";
// gallery.classList.add("gallery");

// console.dir(gallery.children);
// console.dir(gallery);

// ----------------------------------- ver-2 ----------------------------------- //

console.table(images);

const gallery = document.querySelector("#gallery");

const createImageCard = (image) => {
  const li = document.createElement("li");
  li.classList.add("image_card");

  const galleryImg = document.createElement("img");
  galleryImg.classList.add("gallery__img");

  galleryImg.setAttribute("src", image.url);
  galleryImg.setAttribute("alt", image.alt);

  li.append(galleryImg);

  return li;
};

const imageCards = images.map((image) => createImageCard(image));
console.log(imageCards);

gallery.append(...imageCards);

gallery.style.display = "flex";
gallery.classList.add("gallery");
