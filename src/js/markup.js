export const marcup = (list, place) => {
    const contentOfGallery = list.map(el => 
        `<li class="gallery__item"><a class="gallery__link"><img class="gallery__image" 
        src="${el.preview}" alt="${el.description}"></a></li>`).join("");

    return place.insertAdjacentHTML('afterbegin', contentOfGallery);
}

