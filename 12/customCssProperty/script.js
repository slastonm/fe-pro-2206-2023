window.onload = function(){
    let btn = document.querySelector('button');
    let root = document.documentElement;
    btn.onclick = function(){
        root.style.setProperty('--custom-bg', 'red');
        root.style.setProperty('--fontsize-base','40px' );

    }

};