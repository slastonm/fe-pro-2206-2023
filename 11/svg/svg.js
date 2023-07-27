window.onload = function() {
    let container = document.querySelector('.container');
    function createRectangle(width, height, fill) {
        let svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        svg.setAttribute("width", width);
        svg.setAttribute("height", height);
        let rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
        rect.setAttribute("width", width);
        rect.setAttribute("height", height);
        rect.setAttribute("fill", fill);
        rect.setAttribute("stroke", "black");
        rect.setAttribute("stroke-width", 4);
        svg.appendChild(rect);
        return svg;
    }
    
    container.appendChild(createRectangle(200, 200, 'yellow'));
};