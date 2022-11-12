import axios from 'axios';
const API_KEY = '28499360-c7f5e1b7bc9940d556e6926b7';

axios.defaults.baseURL = 'https://pixabay.com/api/';

export const FechCSerchImages = async (value, page, perPage) => {
  const response = await axios.get(
    `?q=${value}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_pere=${perPage}`
  );
  const responseData = await response.data;
  if (!responseData.total) {
    return Promise.reject(new Error(`No image with name ${value}`));
  }
  return responseData;
};