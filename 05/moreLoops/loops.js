const product = {
    producName: 'TV',
    price: '120$',
    discount: false,
    colors:['black', 'white', 'green'],
    productInfo: function (){
        console.log(this.producName);
    }
}

// for (const key in object) {
//     const element = object[key];
// }

for (const property in product){
    console.log(`Property ${property} in product ${product[property]}`);
}

const numbers = [100, 200, 123, 124, 321];

for (let index in numbers){
    console.log(`index ${index} in number ${numbers[index]}`);
}


// for (const iterator of object) {
        // Для данних в яких є послідовні індекси
// }

for( let number of numbers){
    console.log(`${number}`);
}

