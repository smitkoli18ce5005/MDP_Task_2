//A farmer is asking you to tell him how many legs can be counted among all his animals. The farmer breeds three species:
//chickens = 2 legs
//cows = 4 legs
//pigs = 4 legs
//The farmer has counted his animals and he gives you a subtotal for each species. You have to implement a function that returns the total number of legs of all the animals

//example : animals(2, 3, 5) ➞ 36 
//          animals(1, 2, 3) ➞ 22

const chickens = 2;
const cows = 4;
const pigs = 4;
let total = 0;

function animals(a,b,c){
    total = (a*chickens) + (b*cows) + (c*pigs);    
    return total;
}

console.log(animals(2,3,5));