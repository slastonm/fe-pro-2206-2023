// alert(b);

var a = 5;
let b = 5;
// console.log(a);
// console.log(b);

var x = 10;
if(true){
    var x = 1000;
    console.log(x, 'local');
}
console.log(x, 'global');

let y = 10;
if(true){
    let y = 1000;
    console.log(y, 'local');
}
console.log(y, 'global');

for(let i=0; i<5; i++) {
    console.log(i);
}
// console.log(i, 'outside loop');


let firstArray = [1, 2, 3, 4, 5];
let secondArray = [5,6,7];

let newConcat = [...firstArray, ...secondArray];
console.log(newConcat);
let arrData = ['Tom', 'Bob', 'john']; 
let objData = {...arrData};
console.log(objData);

console.log(Math.min(...[1,2,3,4,5]));
console.log(new Date(...[1999, 0, 5]));