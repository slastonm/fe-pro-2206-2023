const cars = [{model:'F-150', year: 2018, brand:'ford'}, 'Fiat cars model ...', 'BMW cars model ...', 'Toyota cars model ...'];

// old way
// const ford = cars[0];
// const fiat = cars[1];
// const BMW = cars[2];
// const Toyota = cars[3];

const [ford, fiat, BMW, Toyota] = cars;

console.log(ford);
console.log(ford.year);

console.log(fiat);


const hero = {
    heroName:'Batman',
    realName:'Bruce',
    suitColor:'black',
    skills:['run', 'jump', 'swim']
}

const {heroName, realName, suitColor='green', skils} = hero;
console.log(`Hero info ${hero.heroName} and real name ${hero.realName}`);
console.log(`Hero info ${heroName} and real name ${realName} has ${suitColor} suit`);

const heroes = [
    {heroName:'Batman'},
    {heroName:'Joker'}
]

for(let {heroName} of heroes) {
    console.log(heroName);
}

function Person(fName, lName) {
    this.fName = fName;
    this.lName = lName;
}
let stivPerson = new Person('Stiv', 'John');
console.log(stivPerson);

class PersonClass {
    constructor(fName, lName) {
        this.fName = fName;
        this.lName = lName;
    }
    userInfoPublic(){
        console.log(`Person info ${this.fName} ${this.lName}`);
    }
    static myStaticMethods(){
        console.log('Static methods');
    }
}
PersonClass.prototype.anotherPublicMehthod = function(){
    console.log(`New methodPerson info ${this.fName} ${this.lName}`);
};
let Rob = new PersonClass('Rob', 'Robinson');

console.log(Rob);

Rob.userInfoPublic();
Rob.anotherPublicMehthod();
PersonClass.myStaticMethods();

class Animal {
    constructor(name){
        this.name = name;
    }
    speak(){
        console.log(`This is ${this.name} make sound `);
    }
}
class Dog extends Animal {
    constructor(name, tail){
        super(name);
        this.tail= tail;
    }
    // speak(){
    //     console.log(`This is ${this.name} has ${this.tail} make sound gav gav `);
    // }
}

const myDog = new Dog('Rex', 'long');

myDog.speak();
console.log(myDog);

