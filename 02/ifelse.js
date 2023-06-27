let myValue = 2024;

let result = myValue === 2023;

// if => якщо => если 

if(myValue === 2023){
    alert('if work today is 2023 year');
}


let helloUser = prompt('Hello how are you?'); // Fine fine , good

if(helloUser == 'Fine' || helloUser == 'Fine' || helloUser == 'good'){
    alert('Have a nice day');
}
else{
    alert('Sorry');
}

let userNumber = Number(prompt('Type number from 1 to 10'));

if(userNumber == 0){
    console.log(`Number less than 1 you type ${userNumber}`);
}
else if(userNumber > 0 && userNumber < 10){
    console.log(`Good number you typed: ${userNumber}`);
    if(userNumber % 2 == 0){
        console.log(`user numer is pare value ${userNumber % 2}`);
    }
}
else if(userNumber > 10){
    console.log(`Too much you typed: ${userNumber}`);

}
else{
    console.log(`please type just number you type ${userNumber}`);
}


let firstValue = 10;
let secondValue = 9;
let maxValue;

// if(firstValue>secondValue){
//     maxValue = firstValue;
// }
// else{
//     maxValue = secondValue;
// }

maxValue = firstValue>secondValue ? firstValue : secondValue;
console.log(maxValue);


