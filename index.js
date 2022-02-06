const $9bcc7611be2c838a$export$f795133be3c5eb8c = [
    {
        preview: 'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg',
        original: 'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg',
        description: 'Hokkaido Flower'
    },
    {
        preview: 'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
        original: 'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
        description: 'Container Haulage Freight'
    },
    {
        preview: 'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
        original: 'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
        description: 'Aerial Beach View'
    },
    {
        preview: 'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
        original: 'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
        description: 'Flower Blooms'
    },
    {
        preview: 'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
        original: 'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
        description: 'Alpine Mountains'
    },
    {
        preview: 'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
        original: 'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
        description: 'Mountain Lake Sailing'
    },
    {
        preview: 'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
        original: 'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
        description: 'Alpine Spring Meadows'
    },
    {
        preview: 'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
        original: 'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
        description: 'Nature Landscape'
    },
    {
        preview: 'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
        original: 'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
        description: 'Lighthouse Coast Sea'
    }, 
];


const $4612747b8b9c88f9$export$2d2f9cd18e6e338e = (list, place)=>{
    const contentOfGallery = list.map((el)=>`<li class="gallery__item"><a class="gallery__link"><img class="gallery__image" 
        src="${el.preview}" alt="${el.description}"></a></li>`
    ).join("");
    return place.insertAdjacentHTML('afterbegin', contentOfGallery);
};


const $8362d08c2922b526$export$b21c1b4271bdbe93 = document.querySelector('.js-gallery');
const $8362d08c2922b526$export$c2b330519424b9e8 = document.querySelector('.js-lightbox');
const $8362d08c2922b526$export$be5e521141e391a7 = document.querySelector('.lightbox__image');
const $8362d08c2922b526$export$3fd62292884be8b2 = document.querySelector('button[data-action="close-lightbox"]');
const $8362d08c2922b526$export$29dd17c7f3c81c36 = document.querySelector('.lightbox__overlay');




const $a729b813b35f8475$export$4a0bb73dbd08bd78 = ()=>{
    $8362d08c2922b526$export$c2b330519424b9e8.classList.toggle('is-open');
};


const $16d96d9c9aa43d29$export$3c795cd334c6c0d4 = (object)=>{
    $8362d08c2922b526$export$be5e521141e391a7.setAttribute('src', object.original);
    $8362d08c2922b526$export$be5e521141e391a7.setAttribute('alt', object.description);
    $a729b813b35f8475$export$4a0bb73dbd08bd78();
};



const $6bb5ecdfda858b71$export$7b12e7cdde3e579d = (event)=>{
    event.preventDefault();
    const target = event.target;
    if (target.nodeName !== 'IMG') return;
    const urlOfSmallPicture = target.getAttribute('src');
    const pictureForModal = $9bcc7611be2c838a$export$f795133be3c5eb8c.find((el)=>urlOfSmallPicture === el.preview
    );
    $16d96d9c9aa43d29$export$3c795cd334c6c0d4(pictureForModal);
};




const $d3b2da3ad957f69f$export$6245e5966734f783 = ()=>{
    $a729b813b35f8475$export$4a0bb73dbd08bd78();
    $8362d08c2922b526$export$be5e521141e391a7.setAttribute('src', '');
    $8362d08c2922b526$export$be5e521141e391a7.setAttribute('alt', '');
};



const $64bd2c8ae3cb2c54$export$57dcc891462d7135 = (e)=>{
    if (e.key === "Escape") $d3b2da3ad957f69f$export$6245e5966734f783();
};





const $c973d53f14d952d0$export$dcb6667da4bcdd93 = ()=>{
    const currentElement = $9bcc7611be2c838a$export$f795133be3c5eb8c.find((el)=>$8362d08c2922b526$export$be5e521141e391a7.getAttribute('src') === el.original
    );
    return $9bcc7611be2c838a$export$f795133be3c5eb8c.indexOf(currentElement);
};




const $09e9ad1bdcce8f1a$export$f2f9ab8f9da32c6d = (el)=>{
    $8362d08c2922b526$export$be5e521141e391a7.setAttribute('src', $9bcc7611be2c838a$export$f795133be3c5eb8c[el - 1].original);
    $8362d08c2922b526$export$be5e521141e391a7.setAttribute('alt', $9bcc7611be2c838a$export$f795133be3c5eb8c[el - 1].description);
};




const $8bfad9a6f3664fad$export$f784113ff512095d = (el)=>{
    $8362d08c2922b526$export$be5e521141e391a7.setAttribute('src', $9bcc7611be2c838a$export$f795133be3c5eb8c[el + 1].original);
    $8362d08c2922b526$export$be5e521141e391a7.setAttribute('alt', $9bcc7611be2c838a$export$f795133be3c5eb8c[el + 1].description);
};


const $a5b25b7b616d2794$export$6c6e09cea975dc85 = (event)=>{
    const currentElementIndex = $c973d53f14d952d0$export$dcb6667da4bcdd93();
    if (event.key === "ArrowLeft" && currentElementIndex > 0) $09e9ad1bdcce8f1a$export$f2f9ab8f9da32c6d(currentElementIndex);
    else if (event.key === "ArrowRight" && currentElementIndex < $9bcc7611be2c838a$export$f795133be3c5eb8c.length - 1) $8bfad9a6f3664fad$export$f784113ff512095d(currentElementIndex);
};


$4612747b8b9c88f9$export$2d2f9cd18e6e338e($9bcc7611be2c838a$export$f795133be3c5eb8c, $8362d08c2922b526$export$b21c1b4271bdbe93);
$8362d08c2922b526$export$b21c1b4271bdbe93.addEventListener('click', $6bb5ecdfda858b71$export$7b12e7cdde3e579d);
$8362d08c2922b526$export$3fd62292884be8b2.addEventListener('click', $d3b2da3ad957f69f$export$6245e5966734f783);
$8362d08c2922b526$export$29dd17c7f3c81c36.addEventListener('click', $d3b2da3ad957f69f$export$6245e5966734f783);
window.addEventListener('keydown', $64bd2c8ae3cb2c54$export$57dcc891462d7135);
window.addEventListener('keydown', $a5b25b7b616d2794$export$6c6e09cea975dc85);


//# sourceMappingURL=index.js.map
