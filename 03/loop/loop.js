let i = 0;
let text ="";

while (i < 100){
    if(i == 25){
        break;
    }
    text = `i value ${i}`;
    document.write(`<div>${text}</div>`);
    i++;
}

// do ... while

let counter = 0;

do{
    console.log(counter);
    counter++;
}
while(counter < 5);

// for(ініціалізація циклу; умова виконня; крок виконня){

// }

for(let i = 0; i < 9; i++){
    console.log(`For loop ${i}`);
}
// i= i + 2;
console.log(22222);
for(let i = 0; i < 19; i+=2){
    console.log(`For loop 2 ${i}`);
}
console.log(3333);
for(i = 3; i >0; i--){
    console.log(`negative loop ${i}`);
}

console.log(444);

for(let i = 0; i < 4; i++){
    console.log('First loop works');
    for(let c = 0; c < 4; c++){
        console.log('Second loop works');
    }
    console.log('====================');
}


let test ='Test continue';

for(let i = 0; i < 10; i++){
    if(i === 5){
        continue;
    }
    if(i === 7){
        continue;
    }
    test += i;
}

console.log(test);