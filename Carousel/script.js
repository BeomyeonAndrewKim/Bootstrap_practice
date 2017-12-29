let prev = document.querySelector('.previous');
let next = document.querySelector('.next');
let page = 1;
prev.addEventListener('click', e => {

        if (page === 1) {
            document.querySelector('.slide-2').classList.add('slidein', 'show');
            page += 1;
            console.log(page);
        } else if (page === 2) {
            document.querySelector('.slide-3').classList.add('slidein', 'show');
            document.querySelector('.slide-1').classList.remove('show');
            page += 1;
            console.log(page);
        }
        if (page === 3) {
            document.querySelector('.slide-1').classList.add('slidein');
            document.querySelector('.slide-2').classList.remove('show');
            page = 1;
            console.log(page);
        }
    })
    // next.addEventListener('click', e => {
    // })