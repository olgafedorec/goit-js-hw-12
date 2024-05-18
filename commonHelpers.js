import{a as y,i as n,S as v}from"./assets/vendor-eded45c0.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}})();const E="43796292-928ecbabb016f283abab002e7",p=15;y.defaults.baseURL="https://pixabay.com/";const h=(s,t=1)=>{const a={key:E,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:p};return y.get("api/",{params:{...a}})},f=s=>s.map(({webformatURL:t,largeImageURL:a,tags:i,likes:e,views:r,comments:o,downloads:b})=>`
        <div class ="gallery-container">
         <a href="${a}" class="gallery-link">
          <img src="${t}" alt="${i}" class="gallery-img" />
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
              <p class="gallery-item-title">${o}</p>
            </li>
            <li class="gallery-tags">
              <h3 class="gallery-item-title">Downloads</h3>
              <p class="gallery-item-title">${b}</p>
            </li>
          </ul>
          </div>
        </div>
`).join(""),c=document.querySelector(".js-gallery"),P=document.querySelector(".js-search-form"),g=document.querySelector(".js-loader"),l=document.querySelector(".js-load-more");let d="",m=1,u=0;async function S(s){if(s.preventDefault(),c.innerHTML="",l.classList.add("d-none"),d=s.target.elements.searchKeyword.value.trim(),d.trim()===""){c.innerHTML="",n.show({message:"Input field can not be empty",position:"topCenter",timeout:2e3,color:"red"}),s.target.reset();return}g.classList.remove("is-hidden");try{const{data:t}=await h(d,m);if(t.total===0){n.show({message:"Sorry, there are no images matching your search query. Try again!",position:"topCenter",timeout:2e3,color:"red"});return}c.insertAdjacentHTML("beforeend",f(t.hits)),new v(".gallery a",{captionsData:"alt",captionDelay:250}).refresh(),u=Math.ceil(t.totalHits/p),u>1&&l.classList.remove("d-none")}catch(t){console.log(t),n.error({message:"Search params is not valid",position:"topRight",timeout:2e3})}s.target.reset(),g.classList.add("is-hidden")}const L=async s=>{try{m+=1;const{data:t}=await h(d,m);c.insertAdjacentHTML("beforeend",f(t.hits)),m>u&&(l.classList.add("d-none"),l.removeEventListener("click",L))}catch{n.show({message:"Search params is not valid",position:"topCenter",timeout:2e3,color:"red"})}};P.addEventListener("submit",S);l.addEventListener("click",L);
//# sourceMappingURL=commonHelpers.js.map
