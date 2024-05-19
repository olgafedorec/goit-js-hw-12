import{a as y,i as d,S as P}from"./assets/vendor-eded45c0.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&c(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function c(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const S="43796292-928ecbabb016f283abab002e7",p=15;y.defaults.baseURL="https://pixabay.com/";const f=(s,t=1)=>{const o={key:S,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:p};return y.get("api/",{params:{...o}})},L=s=>s.map(({webformatURL:t,largeImageURL:o,tags:c,likes:e,views:r,comments:a,downloads:v})=>`
        <div class ="gallery-container">
         <a href="${o}" class="gallery-link">
          <img src="${t}" alt="${c}" class="gallery-img" />
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
              <p class="gallery-item-title">${v}</p>
            </li>
          </ul>
          </div>
        </div>
`).join(""),l=document.querySelector(".js-gallery"),w=document.querySelector(".js-search-form"),g=document.querySelector(".js-loader"),n=document.querySelector(".js-load-more");let m="",i=1,h=0,u;async function E(s){if(s.preventDefault(),l.innerHTML="",n.classList.add("d-none"),m=s.target.elements.searchKeyword.value.trim(),i=1,m.trim()===""){l.innerHTML="",d.show({message:"Input field can not be empty",position:"topCenter",timeout:2e3,color:"red"}),s.target.reset();return}g.classList.remove("is-hidden");try{const{data:t}=await f(m,i);if(t.total===0){d.show({message:"Sorry, there are no images matching your search query. Try again!",position:"topCenter",timeout:2e3,color:"red"}),g.classList.add("is-hidden");return}l.insertAdjacentHTML("beforeend",L(t.hits)),u=new P(".gallery a",{captionsData:"alt",captionDelay:250}),u.refresh(),h=Math.ceil(t.totalHits/p),h>1&&n.classList.remove("d-none")}catch(t){console.log(t),d.error({message:"Search params are not valid",position:"topRight",timeout:2e3})}s.target.reset(),g.classList.add("is-hidden")}const M=()=>{const o=l.querySelector(".gallery-container").getBoundingClientRect().height*2;window.scrollBy({top:o,left:0,behavior:"smooth"})},b=async s=>{try{i+=1;const{data:t}=await f(m,i);l.insertAdjacentHTML("beforeend",L(t.hits)),u.refresh(),M(),i>=h&&(n.classList.add("d-none"),n.removeEventListener("click",b))}catch{d.show({message:"Search params are not valid",position:"topCenter",timeout:2e3,color:"red"})}};w.addEventListener("submit",E);n.addEventListener("click",b);
//# sourceMappingURL=commonHelpers.js.map
