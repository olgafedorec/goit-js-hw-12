export const createGalleryMarkup = (images) => {
    return images.map(
        ({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => `
        <div class ="gallery-container">
         <a href="${largeImageURL}" class="gallery-link">
          <img src="${webformatURL}" alt="${tags}" class="gallery-img" />
         </a>
         <div class="tags-container">
          <ul class="gallery-item-list">
            <li class="gallery-tags">
              <h3 class="gallery-item-title">Likes</h3>
              <p class="gallery-item-title">${likes}</p>
            </li>
            <li class="gallery-tags">
              <h3 class="gallery-item-title">Views</h3>
              <p class="gallery-item-title">${views}</p>
            </li>
            <li class="gallery-tags">
              <h3 class="gallery-item-title">Comments</h3>
              <p class="gallery-item-title">${comments}</p>
            </li>
            <li class="gallery-tags">
              <h3 class="gallery-item-title">Downloads</h3>
              <p class="gallery-item-title">${downloads}</p>
            </li>
          </ul>
          </div>
        </div>
`
      ).join('');
}

