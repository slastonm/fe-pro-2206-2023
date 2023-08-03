// fetch('url',{option})
// fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => response.json())
//       .then(json => console.log(json));
fetch('https://dog.ceo/api/breeds/list/all')
      .then(response => response.json())
      .then(json => console.log(json));

fetch('https://jsonplaceholder.typicode.com/posts',{
    method: 'POST',
    body: JSON.stringify({
        userId: 100,
        id: 100,
        title: "Test title",
        body: "Test"
    }),
    headers:{
        'Content-type-test': 'application/json; charset=UTF-8',
    }
}).then(response => response.json()).then((data)=>console.log(data));

fetch('https://jsonplaceholder.typicode.com/posts/1',{
    method: 'DELETE'
}).then(response => response.json()).then((data)=>console.log(data));

fetch('https://swapi.dev/api/')
.then(response=>response.json())
.then(function(data){let starWarsData = data;
    console.log(starWarsData.planets);
    fetch(starWarsData.planets).then(response => response.json()).then((data)=>console.log(data));
});