window.onload = function(){
    // XMLHttpRequest
    let xhr = new XMLHttpRequest();
    // GET- отримати дані
    // Post - відправити дані або зробити апдейт з відправлени даними
    // Delete - запит на видаленя
    // Path - запит на частину даних і часткову модифікацію
    // PUT - для відправки і апдейту даних
    // https://jsonplaceholder.typicode.com/comments?postId=101
    xhr.open("get", "https://dog.ceo/api/breed/akita/images/random");
    xhr.onreadystatechange = function(){
        console.log(`Status ${xhr}`);
        if(xhr.readyState == 4 && xhr.status == 200){
            let response = xhr.response;
            console.log(response);
            
        }
    }
    xhr.responseType = 'json';
    xhr.send(null);
    let formData = {
        userId: 100,
        id: 100,
        title: "Test title",
        body: "Test"
    }
    // xhr.open('post', 'https://jsonplaceholder.typicode.com/posts');
    // xhr.setRequestHeader('Content-type', 'aplication/json;charset=utf-8');
    // xhr.send(JSON.stringify(formData));
    // xhr.onload = function(){
    //     let responce = xhr.response;
    //     console.log(responce);
    // }
}