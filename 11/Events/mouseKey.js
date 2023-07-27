window.onload = function() {
    let hoverEl = document.querySelector('.hover');
    hoverEl.onmouseover = function() {
        this.style.backgroundColor = 'red';
    };
    hoverEl.onmouseout = function() {
        this.style.backgroundColor = 'yellow';
    };
    let mouseEventEl = document.querySelector('.mouseEvent');

    // mouseEventEl.onmousemove
    // mouseEventEl.onmousedown
    mouseEventEl.onmouseup = function(e){
        this.innerHTML = ` cordinates client ${e.clientX} ${e.clientY}  Ofset: ${e.offsetX} ${e.offsetY} `
    }

    let body = document.querySelector('body');
    body.addEventListener('keydown',function(e){
        console.log(e);
        hoverEl.innerHTML = `${e.key} `;
        if(e.ctrlKey == true && e.key == 'a'){
            alert('All text selected');
        }
    })
};