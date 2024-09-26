import axios from 'axios';

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
                page: page
            }
        });
        const { hits, totalHits } = response.data;

        if (hits.length === 0) {
            iziToast.error({
                title: 'Error',
                message: 'Sorry, there are no images matching your search query. Please try again!',
                position: 'topRight'
            });
        }

        return { hits, totalHits }; 
    } catch (error) {
        iziToast.error({
            title: 'Error',
            message: 'An error occurred while fetching the images. Please try again later.',
            position: 'topRight'
        });
        console.error(error);
        return { hits: [], totalHits: 0 }; 
    }
}