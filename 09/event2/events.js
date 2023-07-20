window.onload = function() {
    let mainTitle = document.querySelector('h1');
    mainTitle.addEventListener('click', function() {
        console.log(this);
        this.innerHTML = 'Hello JS';
    });
    let [...listItem] = document.querySelectorAll('li');
    let ul = document.querySelector('ul');
    console.log(listItem);
    // for(let i=0; i<listItem.length; i++) {

    //     console.log(listItem[i]);
    //     listItem[i].onclick = function() {
    //         this.style.backgroundColor = 'yellow';
    //     };
    // }
    let subTitle = document.querySelector('h2');
    subTitle.onclick = function(event) {
        console.log(event);
    };
    ul.onclick = function(event) {
        console.log(event.target);
        event.target.style.backgroundColor = 'Red';
    }  
    let link = document.querySelector('a');
    link.onclick = function (e){ 
        alert('Click');
        e.preventDefault();
    }
    let submitBtn = document.querySelector('.send-btn');
    let formInput = document.querySelector('.form-control');
    submitBtn.addEventListener('click', function(e){
        console.log(formInput.value);
        if(formInput.value.length == 0){
            alert('Please enter a valid data')
            e.preventDefault();
        }
    });
};