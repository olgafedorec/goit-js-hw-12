import{a as u,i as c,S as v}from"./assets/vendor-eded45c0.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const P="43796292-928ecbabb016f283abab002e7",y=15;u.defaults.baseURL="https://pixabay.com/";const p=(s,t=1)=>{const o={key:P,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:y};return u.get("api/",{params:{...o}})},f=s=>s.map(({webformatURL:t,largeImageURL:o,tags:n,likes:e,views:r,comments:a,downloads:b})=>`
        <div class ="gallery-container">
         <a href="${o}" class="gallery-link">
          <img src="${t}" alt="${n}" class="gallery-img" />
         </a>
         <div class="tags-container">
          <ul class="gallery-item-list">
            <li class="gallery-tags">
              <h3 class="gallery-item-title">Likes</h3>
              <p class="gallery-item-title">${e}</p>
            </li>
            <li class="gallery-tags">
              <h3 class="gallery-item-title">Views</h3>
              <p class="gallery-item-title">${r}</p>
            </li>
            <li class="gallery-tags">
              <h3 class="gallery-item-title">Comments</h3>
              <p class="gallery-item-title">${a}</p>
            </li>
            <li class="gallery-tags">
              <h3 class="gallery-item-title">Downloads</h3>
              <p class="gallery-item-title">${b}</p>
            </li>
          </ul>
          </div>
        </div>
`).join(""),l=document.querySelector(".js-gallery"),S=document.querySelector(".js-search-form"),h=document.querySelector(".js-loader"),i=document.querySelector(".js-load-more");let d="",m=1,g=0;async function w(s){if(s.preventDefault(),l.innerHTML="",i.classList.add("d-none"),d=s.target.elements.searchKeyword.value.trim(),d.trim()===""){l.innerHTML="",c.show({message:"Input field can not be empty",position:"topCenter",timeout:2e3,color:"red"}),s.target.reset();return}h.classList.remove("is-hidden");try{const{data:t}=await p(d,m);if(t.total===0){c.show({message:"Sorry, there are no images matching your search query. Try again!",position:"topCenter",timeout:2e3,color:"red"});return}l.insertAdjacentHTML("beforeend",f(t.hits)),new v(".gallery a",{captionsData:"alt",captionDelay:250}).refresh(),g=Math.ceil(t.totalHits/y),g>1&&i.classList.remove("d-none")}catch(t){console.log(t),c.error({message:"Search params is not valid",position:"topRight",timeout:2e3})}s.target.reset(),h.classList.add("is-hidden")}const E=()=>{const o=l.querySelector(".gallery-container").getBoundingClientRect().height*2;window.scrollBy({top:o,left:0,behavior:"smooth"})},L=async s=>{try{m+=1;const{data:t}=await p(d,m);l.insertAdjacentHTML("beforeend",f(t.hits)),E(),m>g&&(i.classList.add("d-none"),i.removeEventListener("click",L))}catch{c.show({message:"Search params is not valid",position:"topCenter",timeout:2e3,color:"red"})}};S.addEventListener("submit",w);i.addEventListener("click",L);
//# sourceMappingURL=commonHelpers.js.map
