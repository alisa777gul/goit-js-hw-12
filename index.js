import{S as p,a as v,i as d}from"./assets/vendor-DjDxajEQ.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const m of r.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&t(m)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function t(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const L=new p(".list-img a");async function y(i,s){const o=i.map(t=>`<li class="imgAdded">
                <a href="${t.largeImageURL}"> 
                    <img src="${t.webformatURL}" alt="${t.tags}" width="360" height="152">
                </a>
                <div class="descr">
                    <p><b>Likes</b> ${t.likes}</p>
                    <p><b>Views</b> ${t.views}</p>
                    <p><b>Comments</b> ${t.comments}</p>
                    <p><b>Downloads</b> ${t.downloads}</p>
                </div>
            </li>`).join("");s.insertAdjacentHTML("beforeend",o),L.refresh()}async function f(i,s,o){try{const t=await v.get("https://pixabay.com/api/",{params:{key:"45999766-9f9a6b82db6e56573d0cf5f49",q:i,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:o,page:s}}),{hits:e,totalHits:r}=t.data;return e.length===0&&iziToast.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),{hits:e,totalHits:r}}catch(t){return iziToast.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),console.error(t),{hits:[],totalHits:0}}}const b=document.querySelector(".formImg"),g=document.querySelector(".list-img"),n=document.querySelector(".loader"),a=document.querySelector(".fetchPhotos"),w=document.getElementById("search-img");let l=1,c=15,h="",u=0;b.addEventListener("submit",async i=>{if(i.preventDefault(),g.innerHTML="",n.classList.remove("visually-hidden"),a.classList.add("visually-hidden"),l=1,h=w.value.trim(),h!=="")try{const{hits:s,totalHits:o}=await f(h,l,c);u=o,y(s,g),s.length>=c&&l*c<u?a.classList.remove("visually-hidden"):(a.classList.add("visually-hidden"),s.length===0&&d.info({title:"End of Results",message:"We're sorry, but you've reached the end of search results.",position:"topRight",timeout:5e3})),n.classList.add("visually-hidden")}catch(s){console.log(s),a.classList.add("visually-hidden"),n.classList.add("visually-hidden"),d.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"})}else n.classList.add("visually-hidden"),d.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"})});a.addEventListener("click",async()=>{try{a.classList.add("visually-hidden"),n.classList.remove("visually-hidden"),l+=1;const{hits:i,totalHits:s}=await f(h,l,c);u=s,y(i,g),setTimeout(()=>{const o=document.querySelectorAll(".list-img");if(o.length>0){const t=o[0].getBoundingClientRect().height;window.scrollBy({top:t*2,behavior:"smooth"})}},100),i.length>=c&&l*c<u?a.classList.remove("visually-hidden"):(a.classList.add("visually-hidden"),l*c>=u&&d.info({title:"End of Results",message:"We're sorry, but you've reached the end of search results.",position:"topRight",timeout:5e3})),n.classList.add("visually-hidden")}catch(i){console.log(i),d.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),a.classList.add("visually-hidden"),n.classList.add("visually-hidden")}});
//# sourceMappingURL=index.js.map
