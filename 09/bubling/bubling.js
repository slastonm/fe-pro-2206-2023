window.onload=function() {
    let first = document.querySelector('#first');
    let second = document.querySelector('#second');
    let third = document.querySelector('#third');

    let isTunnel = false;

    first.addEventListener('click', function(e){
        alert(1);
        this.style.backgroundColor = 'green';
    }, isTunnel);
    second.addEventListener('click', function(e){
        alert(2);
        this.style.backgroundColor = 'yellow';
    }, isTunnel);
    third.addEventListener('click', function(e){
        alert(3);
        this.style.backgroundColor = 'red';
        e.stopPropagation();
    }, isTunnel);
};