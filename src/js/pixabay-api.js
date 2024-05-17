import axios from 'axios';
const API_KEY = '43796292-928ecbabb016f283abab002e7';
export const PER_PAGE = 15;
axios.defaults.baseURL = 'https://pixabay.com/';

export const fetchPhotoByQuery = (q, queryPage = 1) => {
    const searchParams = {
      key: API_KEY,
      q,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      page: queryPage,
      per_page: PER_PAGE,
    };

  return axios.get('api/', {
    params: {
      ...searchParams,
    },
  });
  };