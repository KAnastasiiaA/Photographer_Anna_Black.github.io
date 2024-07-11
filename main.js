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
    'https://thumb.cloud.mail.ru/thumb/xw1/%D0%90%D0%BB%D1%8C%D0%B1%D0%BE%D0%BC%D1%8B/svetlana-gumerova-MK-b0PE3Dx4-unsplash%201.jpg' ,
    'https://ie.wampi.ru/2023/02/23/ani-1.jpg' ,
    'https://ic.wampi.ru/2023/02/23/por-1.jpg'
];

const WORKFLOW_IMAGE_SECONDS = [
    'https://im.wampi.ru/2023/02/15/nat-2.jpg' , 
    'https://ic.wampi.ru/2023/02/23/ani-2.jpg' , 
    'https://ic.wampi.ru/2023/02/23/por-2.jpg'
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
