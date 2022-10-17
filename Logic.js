let visibleContent = document.querySelectorAll('.chapter');
console.dir(visibleContent);

visibleContent.forEach(element => {   
    element.addEventListener('click', ShowNextElement);
})

function ShowNextElement(){   
    let nextElem = this.nextElementSibling
    nextElem.classList.toggle('hideContent'); 
    

}


