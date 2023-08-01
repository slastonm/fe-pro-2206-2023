window.onload = function(){
    let canvas = document.querySelector('canvas');
    // let gl = canvas.getContext('webgl');
    let contex = canvas.getContext('2d');
    function drawLine(){
        contex.beginPath();

        contex.moveTo(0,0);
        contex.lineTo(800, 1400);


        contex.moveTo(200 ,200);
        contex.lineTo(500, 400);
        contex.stroke();
    }
    function printText(value){
        // contex.clearRect(0, 0, canvas.width, canvas.height);
        // contex.moveTo(250, 200);
        contex.font = "30px Arial";
        contex.strokeText(value, 200, 200);
    }
    
    drawLine();
    printText('Hello');

};