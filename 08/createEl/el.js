window.onload = function(){
    let newElement = document.createElement('div');
    newElement.innerHTML = 'Hello html!'; // { 'innerHTML': 'Hello html'}
    document.body.appendChild(newElement);
    let containerEl = document.querySelector('.container');

    let menu = [
        {
            menuType:'Brackfast',
            imgPicture: 'img/menu.png'
        },
        {
            menuType:'Brackfast',
            imgPicture: 'img/menu.png'
        }
    ]
    let titleEl = document.createElement('h1');
    titleEl.innerHTML = 'Js content title';
    titleEl.className = 'js-title';
    titleEl.id = 'main-title';

    containerEl.appendChild(titleEl);

    function createMenuItem(menuText){
        let li = document.createElement('li');
        li.textContent = menuText;
        return li;
    }

    let menuEl = document.querySelector('.menu');
    menuEl.appendChild(createMenuItem('Breakfast Menu'));
    menuEl.appendChild(createMenuItem('Lunch Menu'));
    menuEl.appendChild(createMenuItem('Diner Menu'));

    let liRemove = document.querySelector('.menu li');

    // menuEl.removeChild(liRemove); 
    // menuEl.removeChild(document.querySelector('.menu li')); 

    function removeLastChild() {
        let menuEl = document.querySelector('.menu');
        let lastItem = menuEl.lastChild;
        if(lastItem != null){
            menuEl.removeChild(lastItem);
        }
    }
    removeLastChild();
    removeLastChild();
    removeLastChild();
    removeLastChild();


    let addLink = document.querySelector('#attr');
    let removeHref = document.querySelector('#remove-href');
    let readHref = document.querySelector('#read-me');

    addLink.setAttribute('href', 'https://prog.kiev.ua/');
    addLink.setAttribute('target', '_blank');

    removeHref.removeAttribute('href');

    console.log(readHref.getAttribute('href'));



};