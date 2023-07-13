window.onload = function() {
    let jsDiv = document.getElementById('js-selector');
    let paragraphs = document.getElementsByName('p');
    let classEl = document.getElementsByClassName('test');

    console.log(jsDiv);
    console.log(paragraphs);
    console.log(classEl);
    let links = ['Sale', 'News']
    let headerTitle = document.querySelector('header h3');
    console.log(headerTitle);
    let [...headerLinks] = document.querySelectorAll('header a');
    // let elements = Array.from(headerLinks);
    // console.log(elements);
    console.log(headerLinks);
    // headerLinks.forEach(item=>{
    //     item.innerHTML = `<span>JS !!!</span>`
    // });
    for(let i=0; i<headerLinks.length; i++){
        headerLinks[i].innerHTML = `${links[i]}`;
    }
    let menuEl = document.querySelector('.menu');
    console.log(menuEl);
    let first = menuEl.firstElementChild;
    let last = menuEl.lastElementChild;
    first.innerHTML = 'JS first';
    last.innerHTML = 'JS last';
    let [...liElements] = menuEl.children;
    console.log(liElements);

    let activeEl = document.querySelector('.active');
    console.log(activeEl.nextElementSibling);
    console.log(activeEl.previousElementSibling);

    let parentEl = first.parentElement;
    console.log(parentEl.parentElement);


    let idElement = document.querySelector('#js-selector');
    console.log(idElement);

    let liQuery = document.querySelectorAll('.menu li');
    console.log(liQuery);
};