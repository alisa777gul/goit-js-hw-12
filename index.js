import{S as p,a as v,i as d}from"./assets/vendor-DjDxajEQ.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const i of e)if(i.type==="childList")for(const g of i.addedNodes)g.tagName==="LINK"&&g.rel==="modulepreload"&&t(g)}).observe(document,{childList:!0,subtree:!0});function o(e){const i={};return e.integrity&&(i.integrity=e.integrity),e.referrerPolicy&&(i.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?i.credentials="include":e.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function t(e){if(e.ep)return;e.ep=!0;const i=o(e);fetch(e.href,i)}})();const L=new p(".list-img a");async function y(r,s){const o=r.map(t=>`<li class="imgAdded">
                <a href="${t.largeImageURL}"> 
                    <img src="${t.webformatURL}" alt="${t.tags}" width="360" height="152">
                </a>
                <div class="descr">
                    <p><b>Likes</b> ${t.likes}</p>
                    <p><b>Views</b> ${t.views}</p>
                    <p><b>Comments</b> ${t.comments}</p>
                    <p><b>Downloads</b> ${t.downloads}</p>
                </div>
            </li>`).join("");s.insertAdjacentHTML("beforeend",o),L.refresh()}async function f(r,s,o){try{const t=await v.get("https://pixabay.com/api/",{params:{key:"45999766-9f9a6b82db6e56573d0cf5f49",q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:o,page:s}}),{hits:e,totalHits:i}=t.data;return e.length===0&&iziToast.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),{hits:e,totalHits:i}}catch(t){return iziToast.error({title:"Error",message:"An error occurred while fetching the images. Please try again later.",position:"topRight"}),console.error(t),{hits:[],totalHits:0}}}const b=document.querySelector(".formImg"),m=document.querySelector(".list-img"),l=document.querySelector(".loader"),a=document.querySelector(".fetchPhotos"),w=document.getElementById("search-img");let n=1,c=15,h="",u=0;b.addEventListener("submit",async r=>{if(r.preventDefault(),m.innerHTML="",l.classList.remove("visually-hidden"),a.classList.add("visually-hidden"),n=1,h=w.value.trim(),h!=="")try{const{hits:s,totalHits:o}=await f(h,n,c);u=o,y(s,m),s.length>=c&&n*c<u?a.classList.remove("visually-hidden"):(a.classList.add("visually-hidden"),s.length===0&&d.info({title:"End of Results",message:"We're sorry, but you've reached the end of search results.",position:"topRight",timeout:5e3})),l.classList.add("visually-hidden")}catch(s){console.log(s),a.classList.add("visually-hidden"),l.classList.add("visually-hidden"),d.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"})}else l.classList.add("visually-hidden"),d.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"})});a.addEventListener("click",async()=>{try{a.classList.add("visually-hidden"),l.classList.remove("visually-hidden"),n+=1;const{hits:r,totalHits:s}=await f(h,n,c);u=s,y(r,m),setTimeout(()=>{const o=document.querySelectorAll(".list-img");if(o.length>0){const t=o[0].getBoundingClientRect().height;window.scrollBy({top:t*2,behavior:"smooth"})}},100),r.length>=c&&n*c<u?a.classList.remove("visually-hidden"):(a.classList.add("visually-hidden"),n*c>=u&&d.info({title:"End of Results",message:"We're sorry, but you've reached the end of search results.",position:"topRight",timeout:5e3})),l.classList.add("visually-hidden")}catch(r){console.log(r),d.error({title:"Error",message:"An error occurred while fetching images. Please try again later.",position:"topRight"}),a.classList.add("visually-hidden"),l.classList.add("visually-hidden")}});
//# sourceMappingURL=index.js.map
