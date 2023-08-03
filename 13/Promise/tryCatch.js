// function someWork(){
//     return 'Strin data';
// }
let tryCatchPromise = new Promise(function(resolve, reject){
    try{
        console.log('Promise');
        someWork();
        resolve('All work fine');
    }
    catch(err){
        reject(`Error information ${err}`);
    }
});

tryCatchPromise.then(function(value){
    console.log(value);
}).catch(function(err){
    console.log(err);
});