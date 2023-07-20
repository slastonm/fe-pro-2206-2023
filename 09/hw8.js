window.onload = function() {
    let menuBtn = document.querySelector('.menu-control');
    let menu = document.querySelector('.menu');

    // menuBtn.addEventListener('click', function() {

    // });
    menuBtn.onclick = function() {
        // console.log(menu.classList.contains('hide'));
        // if (menu.classList.contains('hide')) {
        //     menu.classList.remove('hide');
        // }
        // else{
        //     menu.classList.add('hide');
        // }
        menuBtn.classList.toggle('close-menu');
        menu.classList.toggle('hide');
    };

    let btnGrow = document.querySelector('.grow');
    btnGrow.onclick = function(){
        let btnStyel = getComputedStyle(btnGrow);
        // console.log(btnStyel.fontSize);
        // let fontSize = parseFloat(btnStyel.fontSize);
        let value = btnStyel.fontSize;
        let [valueNumber] = value.split('px');

        console.log(valueNumber);
        let fontSize = Number(valueNumber);

        // let fontSize = Number(value.replace('px',''));
        console.log(fontSize);
        let newSize = fontSize + 10;

        btnGrow.style.fontSize = `${newSize}px`;
    }
};