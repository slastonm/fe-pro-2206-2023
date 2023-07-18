window.onload = function(){
    let mainTitle = document.querySelector('h1');
    let paddingWidth = 100;
    // mainTitle.setAttribute('style', 'color: yellow;background-color: black;padding: 50px;');
    mainTitle.setAttribute('style', `color: yellow;background-color: black;padding: ${paddingWidth}px;`);

    // mainTitle.setAttribute('style','font-size:100px');
    mainTitle.style.cssText +='font-size:100px';
    console.log(mainTitle);

    let subTitle = document.querySelector('h2');
    subTitle.style.color ='red';
    subTitle.style.fontSize = '50px';

    let divEl = document.querySelector('div');
    let divElStyle = getComputedStyle(divEl);
    // console.log(divElStyle);
    divEl.className +=' danger';
    console.log(divEl.className);
    console.log(divEl.classList);
    divEl.classList.add('danger-info', 'test' ,'border-0' ,'mt-3');
    divEl.classList.remove('danger');
    divEl.classList.remove('test' ,'border-0');

    console.log(divEl.classList.contains('mt-3'));
    divEl.classList.replace('mt-3', 'pt-3');

    divEl.onclick = function() {
        divEl.classList.toggle('open');
    };
}