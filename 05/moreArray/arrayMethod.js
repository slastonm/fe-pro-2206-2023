let numbers = [1,4,5,6,7,8];
console.log(numbers);
// map повертає новий массив
function addLetter(item){
    return item + 'a';
}
let newNumberString = numbers.map((number) =>number.toString());
let newNumberDouble = numbers.map((x)=>{
   return x*2
});
let newNumberPlusLetter = numbers.map(addLetter);
console.log(newNumberString);
console.log(newNumberDouble);
console.log(newNumberPlusLetter);


let numberPoints = [1, 22, 11, 23, 3, 33];
// let sortNumber = numberPoints.sort();
// let sortNumber = numberPoints.sort((a,b)=>a-b);
let sortNumber = numberPoints.sort((a,b)=>b-a);


console.log(sortNumber);
function filterNumber(number) {
    return number>20;
}
// let filterArray = numberPoints.filter((item)=>item<20);
let customFilter = numberPoints.filter(filterNumber);
// console.log(filterArray);
console.log(customFilter, 11);


let arrayChanged = [1, 2, 123, 400];
// let arrayChanged = {user:'TestUser', score:2000};
console.log({user:'TestUser', score:2000});


function forEachNumber(item, index, arr){
    arr[index] = `${item} in forEach function`;
}
// arrayChanged.forEach(forEachNumber);
arrayChanged.forEach((item)=>{
    console.log(`object ${item*10}`);
});

console.log(arrayChanged);