let arrayValue = ['1',2,3,4];
console.log(arrayValue[1]);

let objValue = {
    userName: 'John',
    userAge: 35,
    isUserStudy: true,
    userSkills: ['html', 'js', 'css']
};

let userValue = {
    userName: 'John',
    userAge: 35,
    isUserStudy: true,
    userSkills: ['html', 'js', 'css']  
}

let dog = {};
let cat = new Object(); // {}


dog.nickName = 'John';
dog['dogAge'] = 10;
dog.voice = function(){
    return `John say gav gav`;
}

cat.nickName = 'JohnCat';


console.log(`is dog ${dog.nickName} and ${dog.dogAge} dog voice ${dog.voice()}`);
console.log(`is cat ${cat.nickName}`);

let moreDog = {
    nickName:'Tom',
    parents:{
        dogDad : 'John',
        dogMother:'Amile'
    },
    getData: function(){
        return `This nickName ${this.nickName}`
    }


}
delete moreDog.parents.dogDad;
console.log(moreDog.parents.dogDad);
console.log(moreDog.parents.dogMother);
console.log(moreDog.getData());

const myArray = ['John', 'test'];
myArray.push('new dog');
myArray.shift();
myArray[1] = 11111;
myArray.unshift('new cat');
console.log(myArray);

const newUser = {}
newUser.nickName = 'John';
newUser.userAge = 42;
delete newUser.nickName;
newUser.userAge = 23;
// newUser = 123;
console.log(newUser);







