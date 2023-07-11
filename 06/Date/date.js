const dateConstructor = new Date();
console.log(dateConstructor);
// new Date(year, month, day, hour, minute, second, millisecond);

// const customDate = new Date(2023, 4, 4, 10, 30, 0, 0);
const customDate = new Date(2021, 1);

console.log(customDate);

console.log(`${dateConstructor.toISOString()} ISO`);
console.log(`${dateConstructor.toDateString()} DateString`);
console.log(`${dateConstructor.toUTCString()} UTC String`);


let todayObj = new Date();
console.log(`Today day ${todayObj.getDay()}`);
console.log(`Today month ${todayObj.getMonth()}`);
console.log(`Today year ${todayObj.getFullYear()}`);
console.log(`Today hours ${todayObj.getHours()}`);
console.log(`Today minutes ${todayObj.getMinutes()}`);




