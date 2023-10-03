/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add (number1, number2){
    let numberA = parseInt(number1)
    let numberB = parseInt(number2)
    let sum = (numberA + numberB);
    return sum
}
function addNumbers(){
    let addNumber1 = document.querySelector('#add1').value;
    let addNumber2 = document.querySelector('#add2').value;
    let sum = add(addNumber1, addNumber2);
    document.querySelector("#sum").value = sum;
}
document.querySelector("#addNumbers").addEventListener('click', addNumbers);


/* Function Expression - Subtract Numbers */
function subtract (number1, number2){
    let numberA = parseInt(number1)
    let numberB = parseInt(number2)
    let sub = (numberA - numberB);
    return sub
}
function subtractNumbers(){
    let addNumber1 = document.querySelector("#subtract1").value;
    let addNumber2 = document.querySelector("#subtract2").value;
    let sub = subtract(addNumber1, addNumber2);
    document.querySelector("#difference").value = sub;
}
document.querySelector("#subtractNumbers").addEventListener('click', subtractNumbers);

/* Arrow Function - Multiply Numbers */
const multiply  = (number1, number2)=>{
    let numberA = parseInt(number1)
    let numberB = parseInt(number2)
    let mult = (numberA * numberB);
    return mult
}
const multiplyNumbers = ()=>{
    let addNumber1 = document.querySelector("#factor1").value;
    let addNumber2 = document.querySelector("#factor2").value;
    let mult = multiply(addNumber1, addNumber2);
    document.querySelector("#product").value = mult;
}
document.querySelector("#multiplyNumbers").addEventListener('click', multiplyNumbers);

/* Open Function Use - Divide Numbers */

const divide  = function(number1, number2){
    let numberA = parseInt(number1)
    let numberB = parseInt(number2)
    let div = (numberA / numberB);
    return div
}
const  divideNumbers = function(){
    let addNumber1 = document.querySelector("#dividend").value;
    let addNumber2 = document.querySelector("#divisor").value;
    let div = divide(addNumber1, addNumber2);
    document.querySelector("#quotient").value = div;
}
document.querySelector("#divideNumbers").addEventListener('click', divideNumbers);

/* Decision Structure */

let currentDate = new Date();
let currentYear = currentDate.getFullYear();
document.getElementById("year").textContent = currentYear;

/* ARRAY METHODS - Functional Programming */
/* Output Source Array */

const numbersArray = [1,2,3,4,5,6,7,8,9,10,11,12,13];
const arrayElement = document.getElementById('array');
arrayElement.innerHTML = `${numbersArray}`;

/* Output Odds Only Array */

const odds = numbersArray.filter(value => value % 2 !== 0);
const arrayElementOdds = document.getElementById("odds");
arrayElementOdds.innerHTML = `${odds}`;

/* Output Evens Only Array */

const evens = numbersArray.filter(value => value % 2 === 0);
const arrayElementEvens = document.getElementById("evens");
arrayElementEvens.innerHTML = `${evens}`;

/* Output Sum of Org. Array */

let sumOfArray = numbersArray.reduce((sum, number) => sum + number);
const arrayElementSumOfArray = document.getElementById("sumOfArray");
arrayElementSumOfArray.innerHTML = `${sumOfArray}`;

/* Output Multiplied by 2 Array */

const multiplied = numbersArray.map(number => number * 2);
const arrayElementMultiplied = document.getElementById("multiplied");
arrayElementMultiplied.innerHTML = `${multiplied}`;

/* Output Sum of Multiplied by 2 Array */

const sumAndMult = multiplied.reduce((sum, number) => sum + number);
const arrayElementSumAndMult = document.getElementById("sumOfMultiplied");
arrayElementSumAndMult.innerHTML = `${sumAndMult}`;
