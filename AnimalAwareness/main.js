const container = document.querySelector('.container');
const main = document.querySelector('.main');


function init(){
    setTimeout(() =>{
        container.style.opacity =0;
        container.style.display = 'none';

        main.style.display = 'block';
        setTimeout(() => main.style.opacity = 1, 50);

    // this the duration
    }, 5000);
}

init();