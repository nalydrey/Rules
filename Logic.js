let first = true
let visibleContent = document.querySelectorAll('.chapter');
let menuButt = document.querySelector('.mobile');
let menu = document.querySelector('.menu');
let subMenu = document.querySelector('.sub_menu')
// let timesButt = document.querySelector('.timesButt');
let articleSect = document.querySelector('#articles');
let timesSect = document.querySelector('#times');
let collapse = document.querySelector('.collapse');
let currentTime = document.querySelector('.curentTime');
let timeButton = document.querySelector('#timeButton');


let section = 'times';
console.log(section);
let time = 'Simple';
let PaFuPr = 'Present';

changeSection();

let sectionButt = document.querySelectorAll('[data-section]');
console.dir(sectionButt);
let timesButt = document.querySelectorAll('[data-chose]');
console.dir(timesButt);
let timeButt = document.querySelectorAll('[data-time]')
console.dir(timeButt);

sectionButt.forEach(elem => {
    elem.addEventListener('click', () => {section = elem.dataset.section; changeSection();})
})

timesButt.forEach(elem => {
    elem.addEventListener('click', () => {section = 'times'; time = elem.dataset.chose; changeSection(); })
    
})
timeButt.forEach(elem => {
    elem.addEventListener('click', () => {PaFuPr = elem.dataset.time;changeSection() })
})

collapse.addEventListener('click', collapseAllContent)

function collapseAllContent(){
    let allCont = document.querySelectorAll('.display .content');
    console.dir(allCont);
    allCont.forEach(elem => {
        if(first)
        {
            elem.classList.remove('hideContent');            
        }
        else 
        {
            elem.classList.add('hideContent');            
        }
    })
    if(first)
    first = false;
    else first = true;
}

function showInfo(){
    currentTime.innerHTML = `${PaFuPr} ${time}`;
}




// -----------------------------------------------------------------Показать / Скрыть контентную часть главы
visibleContent.forEach(element => {   
    element.addEventListener('click', ShowNextElement);
})

function ShowNextElement(){   
    let nextElem = this.nextElementSibling
    nextElem.classList.toggle('hideContent'); 
}
//--------------------------------------------------------------------Конец показать / Скрыть контентную часть главы
menuButt.addEventListener('click', showMenu);

function showMenu(){
    menu.classList.toggle('show');
    if( menu.classList.contains('show')) document.body.classList.add('over');
    else document.body.classList.remove('over');
    
}

//-------------------------------------------------------------------- Выбор секции в зависимости от кнопки меню

function changeSection(){
    showInfo();
   let sectionName = section;
   let sections = document.querySelectorAll('section')
   console.dir(sections)
   sections.forEach(element => {
            element.classList.remove('show');            
            if(sectionName === element.id) 
            {
                element.classList.add('show');
                let display = element.querySelectorAll('[data-display]');
                display.forEach(elem => {
                    elem.classList.remove('show'); 
                    if(elem.dataset.display === PaFuPr + time)
                    elem.classList.add('show');
                })
            }
   })
}
// ----------------------------------------------------------------------Конец выбор секции в зависимости от кнопки меню

// --------------------------------------------------------------------- Закрытие / открытие подменю

timeButton.addEventListener('click', ShowSubMenu)

function ShowSubMenu(){    
    subMenu.classList.toggle('show_sub_menu');   
}
// ---------------------------------------------------------------------Конец  Закрытие / открытие подменю





