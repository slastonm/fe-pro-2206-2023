let firstPromise = new Promise(function(resolve, reject){
    console.log('Promise work');
});

const x = 2;
const y = 2;

let myPromise = new Promise( function(resolve, reject){
    if(y == 0){
        reject(alert('0 is bad value'));
    }
    else{
        const res = x/y;
        resolve(alert(res));
    }
})