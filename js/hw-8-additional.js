const images = [
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg',
    description: 'Hokkaido Flower',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
    description: 'Container Haulage Freight',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
    description: 'Aerial Beach View',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
    description: 'Flower Blooms',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
    description: 'Alpine Mountains',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
    description: 'Mountain Lake Sailing',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
    description: 'Alpine Spring Meadows',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
    description: 'Nature Landscape',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
    description: 'Lighthouse Coast Sea',
  },
];

const galleryList = document.querySelector('.js-gallery');
const lightbox = document.querySelector('.js-lightbox');
const lightbox__overlay = document.querySelector('.lightbox__overlay');
const lightbox__image = document.querySelector('.lightbox__image');
const lightbox__button = document.querySelector('.lightbox__button');

//=========Add and create Gallery List==========

const addGallery = images.map((elem) => {

    const itemElement = document.createElement('li');
    itemElement.classList.add('gallery__item');
    
    const linkElement = document.createElement('a');
    linkElement.classList.add('gallery__link');
    linkElement.setAttribute('href', elem.original);
   
    const imageElement = document.createElement('img');
    imageElement.classList.add('gallery__image');
    imageElement.setAttribute('src', elem.preview);
    imageElement.setAttribute('alt', elem.description);
    imageElement.setAttribute('data-source', elem.original);


    itemElement.appendChild(linkElement);
    linkElement.appendChild(imageElement);
    
    return itemElement;
 })
galleryList.append(...addGallery);

// ==========Open and Close the Modal Window==========

galleryList.addEventListener("click", clickOnImage);
 function clickOnImage (event)  {
  event.preventDefault();
   if (event.target.nodeName !== "IMG") {
     console.log('enter')
     return
  }
   setUrl(event);
   openModal();
}

function setUrl(url) {
  lightbox__image.src = url.target.dataset.source;
  lightbox__image.alt = url.target.alt;
}

function openModal() {
 lightbox.classList.add('is-open');
}

function closeModal() {
  lightbox.classList.remove('is-open')
  lightbox__image.src = "";
    lightbox__image.alt = "";
};

lightbox__button.addEventListener('click', closeModal);

// ==========Close the Modal Window by clicking the backdrop============

function clickOnBackdrop(event) {
  if (event.target === lightbox__overlay ) { closeModal()
  }
};

lightbox__overlay.addEventListener('click', clickOnBackdrop);