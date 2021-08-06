//Create a function that takes voltage and current and returns the calculated power
//example : circuitPower(230, 10) ➞ 2300

let voltage = 230;
let current = 10;

function power(v,c){
    return v*c;
}

console.log(power(voltage,current));