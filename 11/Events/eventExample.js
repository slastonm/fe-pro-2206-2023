window.onload = function() {
    let div = document.querySelector('div');
    function divMove(element, event){
        let startX = event.clientX;
        let startY = event.clientY;

        let originX = element.offsetLeft;
        let originY = element.offsetTop;

        let deltaX = originX - startX;
        let deltaY = originY - startY;

        function moveHandler(event){
            element.style.left = `${event.clientX - deltaX}px`;
            element.style.top = `${event.clientY - deltaY}px`;
        }

        function upHendler(){
            document.removeEventListener('mouseup', upHendler);
            document.removeEventListener('mousemove', moveHandler);
        }

        document.addEventListener('mousemove', moveHandler);
        document.addEventListener('mouseup', upHendler);
    }
    div.onmousedown = function(e){
        divMove(this, e);
    }
};