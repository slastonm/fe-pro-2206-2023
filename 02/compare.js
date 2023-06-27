let a = 'Присвоєне значення';
let b = 'Test';
a=b;


// == Порівнює значення і приводить значення до одного типу

let numberValue = 5;
let stringValue = 'Max';
let anotherStingsValue = "mAx";
let anotherNumberValue = 10;
let booleanValue = true;
let anotherBooleanValue = false;
let nullValue = null;
let undefinedValue = undefined;

let compareResult = numberValue == stringValue // 5 == '5'
console.log(compareResult);

console.log('String1 and String2', stringValue == anotherStingsValue);
console.log('Number and Number2', numberValue == anotherNumberValue);
console.log('Null  and false', nullValue == anotherBooleanValue);
console.log('underfined  and false', undefinedValue == anotherBooleanValue);
console.log('Boolean1 and Boolean2', booleanValue == anotherBooleanValue);

//  === Порівняння з приводом типу данних на ідентичність

console.log('Number === string', numberValue === stringValue);
console.log('sting 1 === string 2', stringValue === anotherStingsValue);


// != не дорівнює

let compareValue = 50;
let compareValueAnother = '50';

console.log('Test не дорівнює Test50', compareValue != compareValueAnother);

// !== не ідентичне

let userAge = 21;
let recomendAge = 21;

let testUserAge = userAge > recomendAge;
console.log('Test userAge = ' +  testUserAge);

let anotherUserTest = userAge < recomendAge;
console.log('User age less than 21', anotherUserTest);

let modifieTest1 = userAge <= recomendAge;
let modifieTest2 = userAge >= recomendAge;
console.log('Modified test 1 , 2 ', modifieTest1, modifieTest2);


// && логічне І 
// true && true => true;
// true && false => false;
// false && false => false;
// flase && true => false;




console.log(userAge>20 && stringValue == 'Max' && compareValue === 50);


// || or -> чи -> или 
// @ -> at 
// true || true => true;
// true || false => true;
// false || false => false;
// flase || true => true;


console.log((userAge>200 || stringValue == 'Max') && compareValue === 50);
















