let prev = document.querySelector('.previous');
let next = document.querySelector('.next');
let page = 0;
let slide1 = document.querySelector('.slide-1');
let slide2 = document.querySelector('.slide-2');
let slide3 = document.querySelector('.slide-3');
// prev.addEventListener('click', e => {

//     if (page === 0) {
//         slide2.classList.replace('slideoutL', 'slideinL');
//         slide1.classList.add('slideoutL');
//         page += 1;
//         console.log(page);
//     } else if (page === 1) {
//         slide3.classList.replace('slideoutL', 'slideinL');
//         slide2.classList.replace('slideinL', 'slideoutL');
//         page += 1;
//         console.log(page);
//     } else if (page === 2) {
//         slide1.classList.replace('slideoutL', 'slideinL');
//         slide3.classList.replace('slideinL', 'slideoutL');
//         page += 1;
//         console.log(page);
//     } else if (page === 3) {
//         slide2.classList.replace('slideoutL', 'slideinL');
//         slide1.classList.replace('slideinL', 'slideoutL')
//         page = 1;
//         console.log(page);
//     }
// })
// next.addEventListener('click', e => {
//     if (page === 0) {
//         slide3.classList.replace('slideoutL', 'slideinR');
//         slide1.classList.add('slideoutR');
//         page += 1;
//         console.log(page);
//     }
//     if (page === 1) {
//         slide3.classList.replace('slideinR', 'slideoutR');
//         slide2.classList.replace('slideoutL', 'slideinR');
//     }
// })