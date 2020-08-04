import { residentialMarkup } from './resgallery';
import { retailMarkup } from './retailgallery';
import { kioskMarkup } from './kioskgallery';

  //UI elements
const gallery1 = document.querySelector('.gallery');
const modalOuter = document.querySelector('.modal-outer');
const modalInner = document.querySelector('.modal-inner');
const modalTitle = modalOuter.querySelector('.modal-inner__text');
const sliderUI = document.querySelector('.slider');
const nextButton = document.querySelector('.goToNext');
const prevButton = document.querySelector('.goToPrev');
const loader = document.querySelector('.loader');
const thumbs = gallery1.querySelector('.gallery__img');


function Gallery(gallery) {

    //Phone media query
    let phoneMedia = window.matchMedia("(min-width: 571px)");
  
  let sliderHTML;
  let current;
  let prev;
  let next;

  //Pick the corresponding gallery markup 
  if(gallery.classList.contains ('g1')) { //g1 residential
      sliderHTML = residentialMarkup;
      
    } else if(gallery.classList.contains('g2')) { //g1 retail
      sliderHTML = retailMarkup;

    } else if(gallery.classList.contains('g3')) { //g1 retail
      sliderHTML = kioskMarkup;
    }

  function showImage(el) {
    if (!el || !phoneMedia.matches) {
      console.info('no image to show');
      return;
   }
   console.log(el);
    //Insert the corresponding image menu to the modal slider
    sliderUI.insertAdjacentHTML('afterbegin', sliderHTML);
   console.log(sliderUI);
    //Grab the image to the correspoding thumb and make it current 
    current = sliderUI.querySelector(`img[title="${el.title}"]`);

    //Open the Modal
    openModal();

    current.addEventListener('load', function() {   //when image loads
      modalOuter.querySelector('.modal-loader').style.opacity ='0'; //hide loader
      setTimeout(() => {
        current.classList.remove('hidden'); //make image visible
      }, 300);
    })

    //Add the title to the image
    modalTitle.textContent = current.title;

    //Asign the values of the previos and next elements
      prev = current.previousElementSibling || sliderUI.lastElementChild;
      next = current.nextElementSibling || sliderUI.firstElementChild;
  }


  function openModal() {
    modalOuter.classList.remove('hidden');
    gallery.classList.add('hidden');
    gallery.classList.remove('show');

  // Event listeners to be bound when we open the modal:
   window.addEventListener('keyup', handleKeyUp);
   nextButton.addEventListener('click', showNextImage);
   prevButton.addEventListener('click', showPrevImage);
  }
  
  
  
  function closeModal() {
    gallery.classList.remove('hidden');
    modalOuter.classList.add('hidden');

    setTimeout(() => {
      modalOuter.querySelector('.modal-loader').style.opacity ='1';
    }, 1600);

    //Remove image menu
    sliderUI.innerHTML = '';
    
    //Remove event listeners
    window.removeEventListener('keyup', handleKeyUp);
    nextButton.removeEventListener('click', showNextImage);
    prevButton.removeEventListener('click', showPrevImage);
  }


  function showNextImage() {
    current.classList.add('hidden');

    [prev, current, next] = [
      current,
      next,
      // get the next slide, or if it's at the end, loop around and grab the first slide
      next.nextElementSibling || sliderUI.firstElementChild,
    ];
    
    current.classList.remove('hidden');
    modalTitle.textContent = current.title;
   }
  

  function showPrevImage() {
      current.classList.add('hidden');
      // make an new array of the new values, and destructure them over and into the prev, current and next variables
      [prev, current, next] = [
        // get the prev slide, if there is none, get the last slide from the entire slider for wrapping
        prev.previousElementSibling || sliderUI.lastElementChild,
        prev,
        current,
      ];
    current.classList.remove('hidden');
    modalTitle.textContent = current.title;
  }

  function handleKeyUp(event) {
    if (event.key === 'Escape') return closeModal();
    if (event.key === 'ArrowRight') return showNextImage();
    if (event.key === 'ArrowLeft') return showPrevImage();
  }

  //Event Listeners
  //Modal Evenlistener
  modalOuter.addEventListener('click', (e) => {
    if(!e.target.closest('.modal-inner') && !e.target.closest('.modal-outer__icon')) { closeModal() }
  });

  //Open gallery when clickin thumb event listener
  const galleryImg = gallery.querySelectorAll('img');
  galleryImg.forEach(photo => photo.addEventListener('click', e => showImage(e.currentTarget)));
  }

Gallery(gallery1);



//load images with loader
function imagesLoaded() {
  loader.classList.add('hidden');
  setTimeout(() => {
    gallery1.classList.add('show'); //make it visible
  }, 300);
}


window.addEventListener('load', imagesLoaded);

