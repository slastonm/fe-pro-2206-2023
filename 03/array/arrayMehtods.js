let firstArr = [1,2,3];
let secondArr = [4,5,6];

let result = firstArr.concat(secondArr, 7, 8); // [1,2,3,4,5,6]

console.log(result);

let moreConcat = result.concat('Test', [1,2,3]);
console.log(moreConcat);

let toStringArray = moreConcat.toString();
console.log(toStringArray);

let changeOrder = result.reverse();
console.log(changeOrder);

// isArray

console.log(`Test value toString ${Array.isArray(toStringArray)}`);
console.log(`Test value changeOrder ${Array.isArray(changeOrder)}`);

// slice повертає копію чи частину мвссива

let sliceArray = [1, 2, 3, 4, 5, 6, 7, 8];

let part = sliceArray.slice(0, 5);
// console.log(sliceArray);
console.log(part);


// splice змінює поточний массив 

let spliceArray = ['a', 'b', 'c', 'd', 'e', 'f'];

let letters = spliceArray.splice(1);
console.log(`original ${spliceArray} letters`);
console.log(`modify ${letters} letters`);


// sort змінює початковий массив

let sortMe = [1,11,13,41, 4,2,3,7];
let sorted = sortMe.sort();
console.log(sorted);

let animals = ['duck','cat', 'dog', 'cow','cat', 'bird'];
let sortedAnimals = animals.sort();
console.log(sortedAnimals);

let todoList = ['cat'];
// todoList[0] = prompt('I like to ...');
// todoList[1] = prompt('I like to ...');
// todoList[2] = prompt('I like to ...');
// for(let i = 0; i < 3; i++){
//     todoList[i] = prompt('I like to ...');
// }


//push додає елемент в кінець масиву
todoList.push('ready');
todoList.push('write');
todoList.push('sleep');

console.log(todoList);

// pop видаляє з кінця масиву
todoList.pop();
todoList.pop();

console.log(todoList);

// unshift  додає значення на початок

todoList.unshift('todo');
todoList.unshift('todo2');
todoList.unshift('todo3');

console.log(todoList);

// shift видаляє значення з початку масиву

todoList.shift();
todoList.shift();

console.log(todoList);

// includes перевіряє чи є дані в масиві

console.log(`is cat in array ${todoList.includes('Cat')}`);


let cats =[];

for (let i = 0; i < animals.length; i++) {
    if(animals[i] === 'cat'){
        cats.push(animals[i]);
    }
}

console.log(cats);


