window.onload = function() {
    let alertBtn = document.querySelector('.alert');
    let data =[];
    alertBtn.onclick = function() {
        // alert('Hello');
        if(data.length<3){
            let userData = prompt('Enter your data');
            data.push(userData);   
        }
        else{
            return;
        }
    };

    let testBtn = document.querySelector('.event-btn');
    let removeBtn = document.querySelector('.remove');

    function displayAlert(){
        alert('ALERT!!!!');
    }

    testBtn.addEventListener('click', displayAlert);
    removeBtn.addEventListener('click', ()=>{
        testBtn.removeEventListener('click', displayAlert);
        alert('Event was removed');
    });


};