import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import { fetchPhotoByQuery } from './js/pixabay-api.js';
import { createGalleryMarkup } from './js/render-functions.js';
import { PER_PAGE } from './js/pixabay-api.js'

const galleryEl = document.querySelector('.js-gallery');
const searchFormEl = document.querySelector('.js-search-form');
const loaderEl = document.querySelector('.js-loader');
const loadMoreBtnEl = document.querySelector('.js-load-more');

let searchQuery = '';
let currentPage = 1;
let totalPages = 0;



async function onSearchForm(event) {
    event.preventDefault();
    galleryEl.innerHTML = '';
    loadMoreBtnEl.classList.add('d-none');
    searchQuery = event.target.elements.searchKeyword.value.trim();
    if(searchQuery.trim() === '') {
     galleryEl.innerHTML = '';
     iziToast.show({
        message: 'Input field can not be empty',
        position: 'topCenter',
        timeout: 2000,
        color: 'red',
      });
      event.target.reset();
      return;
    }
  loaderEl.classList.remove('is-hidden');
  try{
     const { data } = await fetchPhotoByQuery(searchQuery, currentPage);
     if (data.total === 0) {
              iziToast.show({
                message: 'Sorry, there are no images matching your search query. Try again!',
                position: 'topCenter',
                timeout: 2000,
                color: 'red',
              });
              return;
            }
            galleryEl.insertAdjacentHTML('beforeend', createGalleryMarkup(data.hits)); 
                const lightbox = new SimpleLightbox('.gallery a', {
                    captionsData: 'alt',
                    captionDelay: 250,
                  });
                  lightbox.refresh();
                  
                  totalPages = Math.ceil(data.totalHits / PER_PAGE);
                  if(totalPages > 1) {
                    loadMoreBtnEl.classList.remove('d-none');
                  }                  
    } catch (error) {
      console.log(error);
      iziToast.error({
        message: 'Search params is not valid',
        position: 'topRight',
        timeout: 2000,
      });
    }
    event.target.reset();
    loaderEl.classList.add('is-hidden');
};

const smoothScrollOnLoadMore = () => {
  const firstPhoto = galleryEl.querySelector('.gallery-container');
  const photoHeight = firstPhoto.getBoundingClientRect().height;
  const scrollHeight = photoHeight * 2;
  window.scrollBy({
    top: scrollHeight,
    left: 0,
    behavior: 'smooth',
  });
}

const onLoadMore = async event => {
  try {
    currentPage += 1;
    const { data } = await fetchPhotoByQuery(searchQuery, currentPage);
    galleryEl.insertAdjacentHTML('beforeend', createGalleryMarkup(data.hits));
    smoothScrollOnLoadMore();
    if(currentPage > totalPages) {
      loadMoreBtnEl.classList.add('d-none');
      loadMoreBtnEl.removeEventListener('click', onLoadMore);
    }
  } catch {
    iziToast.show({
      message: 'Search params is not valid',
      position: 'topCenter',
      timeout: 2000,
      color: 'red',
    });
  }
 
};

searchFormEl.addEventListener('submit', onSearchForm);

loadMoreBtnEl.addEventListener('click', onLoadMore);

   


