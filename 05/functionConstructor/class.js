const userObj = new Object; // {}

function ProductConstructor(name, price){
    this.name = name;
    this.price = price;
    this.info = function(){
        console.log(`This product name ${this.name} with price ${this.price}`);
    }
}

const tvProduct = new ProductConstructor('TvBrand', 1000);

console.log(tvProduct);

tvProduct.info();

function UserGoalConstructor(goal, color, endDate){
    this.goal = goal;
    this.color = color;
    this.endDate = endDate;
    // this.timeCalulator = function(){
    //     let nowTime = '06.07.20223';
    //     let timeLeft = this.endDate - nowTime; // це для прикладу не працює
    //     return timeLeft;
    // }
}

UserGoalConstructor.prototype.timeCalulator =  function(){
        let nowTime = '06.07.20223';
        let timeLeft = `${this.endDate} - nowTime`; // це для прикладу не працює
        return timeLeft;
    }

let userGoals = [];
const userFirstGoal = new UserGoalConstructor('buy tv', 'green', '07.07.20223');
userGoals.push(userFirstGoal);
const userSecondtGoal = new UserGoalConstructor('buy laptop', 'red', '08.07.20223');
userGoals.push(userSecondtGoal);
console.log(userGoals);
document.write('<ul>')
for(let i = 0; i <userGoals.length; i++){
    document.write(`<li>User goal: ${userGoals[i].goal} color selected ${userGoals[i].color} time left ${userGoals[i].timeCalulator()}</li>`);
}
document.write('</ul>');


let myArray = ['Test'];
console.log(myArray);