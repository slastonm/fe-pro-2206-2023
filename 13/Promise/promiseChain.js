let firstP = new Promise(function(resolve){
    resolve('First promise');
});
let secondP = firstP.then(function(value){
    return `${value} and SecondP`;
});
let thirdP = secondP.then(function(value){
    return `${value} and ThirdP`;
})
thirdP.then(function(finalValue){
    console.log(finalValue);
});

let thenPromiseChain = new Promise(resolve=>resolve('First P'))
.then(value=>`${value} and then 2`)
.then(value=>`${value} and then 3`)
.then(finalValue => console.log(finalValue));