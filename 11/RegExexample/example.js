let str = 'scss2';
console.log(`${/^c/.test(str)} is C`);
console.log(`${/ss$/.test(str)} is SS`);

// let time = '15:05';
let time = '115:052';
let timeRegex = /^\d{1,2}:\d{2}$/;
console.log(`${timeRegex.test(time)} is correct`);

let matchStr = 'I know JS! js is JavaScript';
let wordRegex = /\bjs\b/gi;
console.log(`${matchStr.match(wordRegex)}`);

let animals = 'Cats, bats, rats an etc ...';
let animalsRegex = /[cbr]ats/gi;
console.log(`${animals.match(animalsRegex)}`);

// let userData ='21-12-2015';
let userData ='21-12-2015';

let dataRegex = /^\d{1,2}-\d{1,2}-\d{4}$/;
console.log(`${dataRegex.test(userData)} data`);

let userEmail = 'tomson123@companyName.com';
let emailRegex = /\b[a-z0-9._]+@[a-z0-9._]+.[a-z]{2,4}\b/i;
console.log(`${emailRegex.test(userEmail)} email`);

let linkRegex = /\w+.html/;
console.log(`${linkRegex.test('Hello.html')} link`);


