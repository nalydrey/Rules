let visibleContent = document.querySelectorAll('.chapter');
console.dir(visibleContent);

visibleContent.forEach(element => {   
    element.addEventListener('click', function(){
        let statusDisplay = getComputedStyle(element.nextElementSibling, null).display
        console.log(getComputedStyle(element.nextElementSibling, null).display);     
        element.nextElementSibling.classList.toggle('hideContent');      
    })
})




