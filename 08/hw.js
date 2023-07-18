window.onload = function() {
    class Car {
        constructor(year, model, version, sellCount, id) {
            this.year = year;
            this.model = model;
            this.version = version;
            this.sellCount = sellCount;
            
        }
    }
    let cars = [];

    let carA = new Car(1990, 'Ford-1', 'A', 100000);
    cars.push(carA);
    let carB = new Car(1995, 'Ford-2', 'B', 200000);
    cars.push(carB);
    let carC = new Car(1997, 'Ford-3', 'C', 300000);
    cars.push(carC);
    console.log(cars);

    for (const {model, year} of cars) {
        console.log(`This car is ${model} and ${year}`);
    }

    let input = document.querySelector('input');
    console.log(input);
    // input.onchange = function(){
    //     console.log(input.value);
    //     let userCar = new Car(input.value, input.value);
        
    // }
    let autoplay = document.querySelector('[autoplay]');
    let elements = document.querySelectorAll('div, p');
    let listItems = document.querySelectorAll('ul.nav > li');
    let listItem = document.querySelectorAll('li:nth-child(2)');
    let elArr = [autoplay, listItem, listItems, elements];
    console.log(elArr);

    let firstEl = document.querySelector('header a');
    console.log(firstEl);

    let [...linkElements] = document.querySelectorAll('header a');
    console.log(linkElements);
};