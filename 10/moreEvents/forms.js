window.onload = function(){
    let formEl = document.querySelector('form');
    let [...formElements ] = formEl.elements;

    formEl.onsubmit = function(event){
        let isValid = false;
        for(let i = 0; i < formElements.length; i++){
            if(formElements[i].classList.contains('form-control') && formElements[i].value.length >0 ){
                isValid = !isValid;
            }
        }
        if(!isValid){
            event.preventDefault();
            alert('Please enter a valid value');
        }       
    }

}