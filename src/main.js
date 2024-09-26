import iziToast from "izitoast";
import axios from 'axios';
import "izitoast/dist/css/iziToast.min.css";

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const formNew = document.querySelector(".formImg");
const photoList = document.querySelector(".list-img");
const loading = document.querySelector(".loader");
const fetchPhotosBtn = document.querySelector(".fetchPhotos");

const inputSearch = document.getElementById("search-img");
import { renderUsers } from './js/render-functions.js';
import { fetchPhotos } from './js/pixabay-api.js';

let page = 1;
let per_page = 15;
let query = '';
let totalHits = 0;

formNew.addEventListener("submit", async (event) => { 
    event.preventDefault(); 
    photoList.innerHTML = "";
    loading.classList.remove("visually-hidden");
    fetchPhotosBtn.classList.add("visually-hidden"); 
    page = 1; 
    query = inputSearch.value.trim(); 

    if (query !== "") { 
        try {
            const { hits, totalHits: total } = await fetchPhotos(query, page, per_page); 
            totalHits = total; 
            renderUsers(hits, photoList);

            if (hits.length >= per_page && page * per_page < totalHits) {
                fetchPhotosBtn.classList.remove("visually-hidden");
            } else {
                fetchPhotosBtn.classList.add("visually-hidden");
                if (hits.length === 0) {
                    iziToast.info({
                        title: 'End of Results',
                        message: "We're sorry, but you've reached the end of search results.",
                        position: 'topRight',
                        timeout: 5000
                    });
                }
            }
            loading.classList.add("visually-hidden");
        } catch (error) {
            console.log(error);
            fetchPhotosBtn.classList.add("visually-hidden");
            loading.classList.add("visually-hidden");
            iziToast.error({
                title: 'Error',
                message: 'Sorry, there are no images matching your search query. Please try again!',
                position: 'topRight'
            });
        }
    } else {
        loading.classList.add("visually-hidden");
        iziToast.error({
            title: 'Error',
            message: 'Sorry, there are no images matching your search query. Please try again!',
            position: 'topRight'
        });
    }
});

fetchPhotosBtn.addEventListener("click", async () => {
    try {
        fetchPhotosBtn.classList.add("visually-hidden");
        loading.classList.remove("visually-hidden");
        page += 1; 
        const { hits, totalHits: total } = await fetchPhotos(query, page, per_page); 
        totalHits = total; 
        renderUsers(hits, photoList);

       setTimeout(() => {
            const listItems = document.querySelectorAll(".list-img"); 
            if (listItems.length > 0) {
                const itemHeight = listItems[0].getBoundingClientRect().height;
                window.scrollBy({
                    top: itemHeight * 2,
                    behavior: 'smooth'
                });
            }
        }, 100);

        if (hits.length >= per_page && page * per_page < totalHits) {
            fetchPhotosBtn.classList.remove("visually-hidden");
        } else {
            fetchPhotosBtn.classList.add("visually-hidden");
            if (page * per_page >= totalHits) {
                iziToast.info({
                    title: 'End of Results',
                    message: "We're sorry, but you've reached the end of search results.",
                    position: 'topRight',
                    timeout: 5000
                });
            }
        }
        loading.classList.add("visually-hidden");
    } catch (error) {
        console.log(error);
        iziToast.error({
            title: 'Error',
            message: 'Sorry, there are no images matching your search query. Please try again!',
            position: 'topRight'
        });
        fetchPhotosBtn.classList.add("visually-hidden");
        loading.classList.add("visually-hidden");
    }
});