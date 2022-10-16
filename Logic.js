let visibleContent = document.querySelectorAll('.chapter');
console.dir(visibleContent);

visibleContent.forEach(element => {   
    element.addEventListener('click', function(){
        let statusDisplay = getComputedStyle(element.nextElementSibling, null).display
        console.log(getComputedStyle(element.nextElementSibling, null).display)
        if (statusDisplay === 'none')
        {
            element.nextElementSibling.style.display = 'block';
        }
        else {element.nextElementSibling.removeAttribute('style')}
    })
})




