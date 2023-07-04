
testFunction('Function 2');


function testFunction(argument){
    document.write(`<div>${argument}</div>`);
}

let myFunction = function(argument){
    document.write(`<div> My function ${argument}</div>`);
};

myFunction('Function 1');


let userName = '';
let seconName = '';

function getData(){
    userName = prompt('Enter your name');
    seconName = prompt('Enter your second name');
}

function readWriteData(){
    document.write(`<div>${userName} and ${seconName}</div>`);
}

// getData();
// readWriteData();

function summ(a,b){
    alert(`${a+b}`);
}
function divide(firstNumber, secondNumber){
    if(secondNumber == 0){
        alert(`Error second number is ${secondNumber}`);
    }
    else{
        alert(`Result ${firstNumber/secondNumber}`);
    }
}

// summ(3, 4);
// summ(0, 14);
// summ(100, 104);

// divide(1, 2);
// divide(2, 0);
// divide(20, 100);

function checkAge(age){
    let userAge = age > 18 ? true : false;
    return userAge;
}

// if(checkAge(20)){
//     alert(`access allowed ${checkAge(20)}`);
// }

// console.log(checkAge(17));
// console.log(checkAge(19));

let prices = [40, 50, 100];
let newPrice = [];
function getSalePrice(price, saleSize){
    let percent = price / 100; 
    let totalPrice = price - (percent * saleSize);
    return totalPrice;
}

for(let i = 0; i < prices.length; i++){
    newPrice.push(getSalePrice(prices[i],5));
}

console.log(`New price: ${newPrice}`);


function argsFn(arg){
    console.log(`arg ${arg}`);
    console.log(arguments);
    console.log(`all arg from function ${arguments.length}`);

}

argsFn(5, 4);

// with rest operatro
function arrayArgsFn(...functioArgs){
    console.log(functioArgs);
    console.log(`all arg from function ${functioArgs.length}`);
}

arrayArgsFn(5, 5, true, 'test');


let i=0; // global

function dobleValue(petro){
    let i = petro*2; // local
    // console.log(`New i local value is ${i}`);
    return i;
}

function tripleValue(value){
    return value*3;
}
function testLocalGlobal(){
    let i = 5; // local
    dobleValue(15);
}

testLocalGlobal();

console.log(`Global value is ${i}`);

function createBigPrice(priceArray, callBackFn){
    let newPrice = [];
    for(let i=0; i<priceArray.length; i++){
        newPrice.push(callBackFn(priceArray[i]));
    }
    return newPrice;
}
let regularPrice = [1,2,3,4,5];
console.log(`Double price values ${createBigPrice(regularPrice, dobleValue)}`);
console.log(`Triple price values ${createBigPrice([10,20,30,40,50], tripleValue)}`);


function getUserList(itemsCount){
    let userList = [];
    for(let i=0; i<itemsCount; i++){
        let item = prompt('Data for list');
        userList.push(item);
    }
    return userList;
}
function writeUserList(list){
    for(let i=0; i<list.length; i++){
        document.write(`<div>User want ${list[i]}</div>`);
    }
};


function buttonClick(todoAmount, getDataCallback, writeDataCallback){
    writeDataCallback(getDataCallback(todoAmount));
}


let btn = document.querySelector('button');
btn.addEventListener('click', function(){
    buttonClick(3, getUserList, writeUserList);
});



// function tripleValue(value){
//     return value*3;
// }

let shorTripleFn = (value) => {
    return value*3
};

console.log(`Test arrow function ${shorTripleFn(3)}`);


function sayHello(userSay = 'Default value'){
    console.log(`User say hello ${userSay}`);
}

sayHello('User');
sayHello();
// function mathOperation (firstValue, secondValue){
//     console.log(`Math operation ${firstValue + secondValue}`);
// };


function mathOperation (firstValue = 0, secondValue = 0){
    console.log(`Math operation ${firstValue + secondValue}`);
};


mathOperation(4,3);
mathOperation();
mathOperation(6, 4, 5);
