import iziToast from "izitoast";
import axios from 'axios';
import "izitoast/dist/css/iziToast.min.css";

export async function fetchPhotos(query, page, per_page) {
  try {
    const response = await axios.get('https://pixabay.com/api/', {
      params: {
        key: "45999766-9f9a6b82db6e56573d0cf5f49",
        q: query,
        image_type: "photo",
        orientation: "horizontal",
        safesearch: true,
        per_page: per_page,
        page: page,
      }
    });
    const data = response.data;
    if (data.hits.length <= 0) {
      iziToast.error({
        title: 'Error',
        message: 'Sorry, there are no images matching your search query. Please try again!',
        position: 'topRight',
      });
      return [];
    }
    return data.hits;
  } catch (error) {
    iziToast.error({
      title: 'Error',
      message: 'An error occurred while fetching the images. Please try again later.',
      position: 'topRight',
    });
    console.error(error);
  }
}