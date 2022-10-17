let visibleContent = document.querySelectorAll('.chapter');
console.dir(visibleContent);
let menuButt = document.querySelector('.mobile');
let menu = document.querySelector('.menu');
let timesButt = document.querySelector('.timesButt');

visibleContent.forEach(element => {   
    element.addEventListener('click', ShowNextElement);
})

function ShowNextElement(){   
    let nextElem = this.nextElementSibling
    nextElem.classList.toggle('hideContent'); 
}

menuButt.addEventListener('click', showMeny);

function showMeny(){
    menu.classList.toggle('show')
}






