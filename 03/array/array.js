let firstArray = new Array(); // array length = 3;
firstArray[0] ='sugar'; 
firstArray[1] =1111; 
firstArray[2] =true; 
let variabel = 'let value';
console.log(firstArray);
let secondArray = ['Test', 'New value', 333, true, firstArray, variabel];

console.log(secondArray);

let multiArr = [
    ['Bob', 'student', 'html','css', 'scss'],
    ['Bob2', 'student', 'html','css', 'scss', 'js', 'react'],
    ['inner 4', 'inner 5', 'inner 6'],
    ['inner 7', 'inner 8', 'inner 9']
];
for (let i = 0; i <multiArr.length; i++) {
    // console.log(multiArr[i]);
    for (let j=0; j < multiArr[i].length; j++) {
        console.log(`Inner array ${multiArr[i][j]}`);
    }
    console.log('================================');
}

console.log(multiArr);
console.log(multiArr[0][2]);

// create array

let emptyArray = new Array(10); // array length 
console.log(emptyArray);
let emptyArraySecond = [,,,,,,,];
console.log(emptyArraySecond);

console.log('Array length');
console.log(`multiArray length ${multiArr.length}`);
console.log(`emptyArray length ${emptyArray.length}`);

let users =['Tom', 'John', 'Bob'];
if(users.length>0){
    console.log(`First user: ${users[0]}`);
    console.log(`Last user: ${users[users.length - 1]}`);

}



