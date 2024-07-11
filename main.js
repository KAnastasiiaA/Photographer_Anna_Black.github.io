//______MENU______

const MENU_LINKS = document.querySelectorAll('.header__menu-link');

MENU_LINKS.forEach(link => link.addEventListener('click', event =>{
    event.preventDefault();

    document.querySelector(event.target.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
    });
}));



//______WORKFLOW______

const WORKFLOW_NAVS = document.querySelectorAll('.workflow__nav');
const WORKFLOW_IMAGE_ONE = document.querySelector('.hero__image_one');
const WORKFLOW_IMAGE_SECOND = document.querySelector('.hero__image_second');

const WORKFLOW_IMAGE_ONES = [
    'https://i.ibb.co/vkyDY22/image-15.jpg' ,
    'https://i.ibb.co/C7BvW6x/satyabratasm-u-k-MWN-BWy-U-unsplash-1.jpg' ,
    'https://i.ibb.co/VpJznRD/refargotohp-ob-ds36-FMd-Y-unsplash-1.jpg'
];

const WORKFLOW_IMAGE_SECONDS = [
    'https://i.ibb.co/SQXgLfQ/svetlana-gumerova-MK-b0-PE3-Dx4-unsplash-1.jpg' , 
    'https://i.ibb.co/xqnTvQP/image-14.jpg' , 
    'https://i.ibb.co/TtVxLmJ/ayo-ogunseinde-6-W4-F62s-N-y-I-unsplash-1.jpg'
];

WORKFLOW_NAVS.forEach(link => link.addEventListener('click', event =>{
    event.preventDefault();

    document.querySelector(event.target.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
    });
}));

WORKFLOW_NAVS.forEach((dot, index) => dot.addEventListener('click', event => {
    WORKFLOW_NAVS.forEach(el => {
        el.classList.remove('active');
    });

    dot.classList.add('active');

    WORKFLOW_IMAGE_ONE.src = WORKFLOW_IMAGE_ONES[index];  //меняем картинку
    WORKFLOW_IMAGE_SECOND.src = WORKFLOW_IMAGE_SECONDS[index];  //меняем картинку
}));