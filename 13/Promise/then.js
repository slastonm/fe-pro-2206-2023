let a = 2;
let thenPromise = new Promise(function(resolve, reject){
    if(a>2){
        resolve('a>2');
    }
    else{
        reject('a<2');
        // throw "Small number error"
    }
});
thenPromise.then(function(value){
    console.log(`Then promise value ${value}`);
}).catch(function(error){
    console.log(`Error in promise ${error}`);
})