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


formNew.addEventListener("submit", async (event) => { 
    event.preventDefault(); 
    photoList.innerHTML = "";
    loading.classList.remove("visually-hidden");
    fetchPhotosBtn.classList.add("visually-hidden"); 
    page = 1; 
    query = inputSearch.value.trim(); 

    if (query !== "") { 
        try {
            const photos = await fetchPhotos(query, page, per_page); 
            renderUsers(photos, photoList);

            
            if (photos.length >= per_page) {
                fetchPhotosBtn.classList.remove("visually-hidden");
            } else {
                fetchPhotosBtn.classList.add("visually-hidden");
            }
            loading.classList.add("visually-hidden");
        } catch (error) {
            console.log(error);
            fetchPhotosBtn.classList.add("visually-hidden");
            loading.classList.add("visually-hidden");
        }
    } else {
        loading.classList.add("visually-hidden");
        iziToast.error({
            title: 'Error',
            message: 'Please enter a valid search query!',
            position: 'topRight'
        });
    }
});


fetchPhotosBtn.addEventListener("click", async () => {
    try {
        fetchPhotosBtn.classList.add("visually-hidden");
        loading.classList.remove("visually-hidden");
        page += 1; 
        const photos = await fetchPhotos(query, page, per_page); 
        renderUsers(photos, photoList);

    
        if (photos.length >= per_page) {
            fetchPhotosBtn.classList.remove("visually-hidden");
        } else {
            fetchPhotosBtn.classList.add("visually-hidden");
        }
        loading.classList.add("visually-hidden");
    } catch (error) {
        console.log(error);
        fetchPhotosBtn.classList.add("visually-hidden");
        loading.classList.add("visually-hidden");
    }
});