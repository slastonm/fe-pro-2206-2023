let firstValue = 1;
let secondValue = 2;

let operationInfo = 'First value: ' + firstValue + ' second value: ' + secondValue + 'middle value: ' +(firstValue + secondValue)/2;

let newOperationInfo = `1111 First value: ${firstValue} second value: ${secondValue} middle value ${(firstValue + secondValue)/2}`; 

let htmlTemplate = `<div class="Test">${firstValue}</div> <div class="Test">${secondValue}</div> <h1>${(firstValue + secondValue)/2}</h1>`;

console.log(operationInfo);
console.log(newOperationInfo);

document.write(htmlTemplate);