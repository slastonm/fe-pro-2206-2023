let str = new String();
console.log(str.length);

let replaceText = 'Html and css and css';
let newText = replaceText.replace('css', 'js');
console.log(newText);

// Trim
let userData = "       John          ";
console.log(userData);

let trimValue = userData.trim();

console.log(trimValue);
let trimStarting = userData.trimStart();
console.log(trimStarting);
let trimEnding = userData.trimEnd();
console.log(trimEnding);


let dataStrin = '01-05-2000';
let convertedData = dataStrin.split('-');
console.log(convertedData);

console.log(convertedData.toString());

let dayInfo = "вІвторок"

console.log(dayInfo.toLowerCase());
console.log(dayInfo.toUpperCase());

let dataString = 'Data';
console.log(dataString.substring(0, 2));
console.log(dataString.substring(2));



