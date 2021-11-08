// code that displays date 

function displayDate() {
    document.getElementById("date").textContent = Date().slice(0,16);
}

displayDate();

// Variables for manipulating the DOM

const calculatorDisplay = document.getElementById('display');
const clearButton = document.getElementById('AC');
const insertDate = document.getElementsByClassName('.date');
const deleteButton = document.getElementById('del');
const numberButtons = document.querySelectorAll('.numericalButton');
const operationButtons = document.querySelectorAll('.operationButton');
const displayValue = document.createElement('h3');
calculatorDisplay.appendChild(displayValue).className="calculatorOutput";

// global variables for control flow 
displayValue.textContent = ''
let previousNum = null;
let currentNum = null;
let operator = 'default'; 
let operatorActive = false;
let decimals = false; 

//calculator object

calculator = {
    operate(operator,previousNum, secondNum) {
        if (operator === '+') {
            return previousNum = displayValue.textContent = calculation.addition(previousNum, secondNum);
        } else if (operator === '-') {
            return previousNum = displayValue.textContent = calculation.subtraction(previousNum, secondNum);
        } else if (operator === '/') {
            return previousNum = displayValue.textContent = calculation.division(previousNum, secondNum);
        } else if (operator === 'x') {
            return previousNum = displayValue.textContent = calculation.multiplication(previousNum, secondNum);
        } else {
            return 'ERROR';
        }
    },
    clear() {
        displayValue.textContent = ''; 
        previousNum = null;
        secondNum = null;
        operator = 'default';
        decimals = false;
    },
    del() {
        displayValue.textContent = displayValue.textContent.slice(0,-1);
       },
    equal() {    
    previousNum = parseFloat(previousNum);
    secondNum = displayValue.textContent;
    if (isNaN(parseFloat(secondNum))){
        secondNum = parseFloat(0);
      } else {
        (secondNum = parseFloat(secondNum));
      }
    calculator.operate(operator, previousNum, secondNum);
    decimals = false, currentNum = null;
    plusButton.style.backgroundColor = "rgb(255,255,255)"
    multiplicationButton.style.backgroundColor = "rgb(255,255,255)"
    minusButton.style.backgroundColor = "rgb(255,255,255)"
    divisionButton.style.backgroundColor = "rgb(255,255,255)"
    }
    }

//Calculation object containing functions for operations
calculation = {
    addition(previousNum, secondNum) {
        return (previousNum + secondNum);
    },
    subtraction(previousNum, secondNum) {
        return (previousNum - secondNum);
    },
    multiplication(previousNum, secondNum) {
        return previousNum * secondNum;
    },
    division(previousNum, secondNum) {
        if (secondNum === 0) {
            return 'Error!';
        } else {
            return previousNum / secondNum;
        } 
}
}

// Event listeners for AC and Del buttons
deleteButton.addEventListener('click', calculator.del);
clearButton.addEventListener('click', calculator.clear);

//functions used to display numbers and control the operator
const displayNumbers = numberButtons.forEach((button) => {
    button.addEventListener('click', function(e) {
    if ((previousNum === null) && (e.target.id === '=') && (operatorActive === true)) {
        return;
    } 
    if ((e.target.id >= 0 && e.target.id <=9)) displayValue.textContent += `${e.target.id}`;
    if ((e.target.id === '.') && (decimals === false)) {
        displayValue.textContent += e.target.id;
        decimals = true;
    }
    if ((e.target.id === '.') && (decimals === true)) {
        return;
    }
    if (operatorActive === true) {
        displayValue.textContent = e.target.id
        operatorActive = false;
    }   
    if ((e.target.id === '=') && (previousNum === null)) {
       return;
    }
    if ((e.target.id === '=') && (previousNum != null) && (operatorActive === false)) {
        console.log('hello');
        calculator.equal();
        operatorActive = true;
        previousNum = null;
        operator = 'default';
    }
    if ((e.target.id === '=') || (e.target.id === '=' && previousNum === null)) {
        return;
    }
    if ((e.target.id === '=') && (previousNum != null) && (operator === 'default')) return;
    })
})

const controlOperator = operationButtons.forEach((button) => {
    button.addEventListener('click', function(e) {
        if ((previousNum === null) && (operator === 'default') && (e.target.id === '-' || e.target.id === '/' || e.target.id === '+' || e.target.id === 'x')) {
            previousNum = displayValue.textContent;
            operator = e.target.id; 
            operatorActive = true;
            decimals = false;
        } else if ((operator != 'default') && (previousNum === null)) {
            operator = e.target.id;
            operatorActive = false;
        }
        if ((previousNum != null) && operatorActive === false) {
            //if (operator === 'default') {
                //return;
             calculator.equal();
             previousNum = displayValue.textContent
             operatorActive = true;
             operator = e.target.id;
        }
    })
})

//Controling color of Operation buttons 

const plusButton = document.getElementById('+');
const minusButton = document.getElementById('-');
const multiplicationButton = document.getElementById('x');
const divisionButton = document.getElementById('/');


const controlColorOfOperator = operationButtons.forEach((button) => {
    button.addEventListener('click', function(e) {
    if((operator === e.target.id) && (e.target.id === '+')) {
        plusButton.style.backgroundColor = "rgb(255,165,0)";
    } else if (operator != '+') {
        plusButton.style.backgroundColor = "rgb(255,255,255)";
    }
    if((operator === e.target.id) && (e.target.id === '-')) {
        minusButton.style.backgroundColor = "rgb(255,165,0)";
    } else if ((operator != 'x') && (e.target.id != 'x')) {
        minusButton.style.backgroundColor = "rgb(255,255,255)";
    }
    if((operator === e.target.id) && (e.target.id === 'x')) {
    multiplicationButton.style.backgroundColor = "rgb(255,165,0)";
    } else if ((operator != 'x') && (e.target.id != 'x')) {
        multiplicationButton.style.backgroundColor = "rgb(255,255,255)";
    }
    if((operator === e.target.id) && (e.target.id === '/')) {
        divisionButton.style.backgroundColor = "rgb(255,165,0)";
    } else if ((operator != '/') && (e.target.id != '/')) {
        divisionButton.style.backgroundColor = "rgb(255,255,255)";
    }
    })
})


