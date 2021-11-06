// code that displays date 

function displayDate() {
    document.getElementById("date").textContent = Date().slice(0,16);
}

displayDate();

// Variables and objects relating to calculator

const calculatorDisplay = document.getElementById('display');
const clearButton = document.getElementById('AC');
const allButtons = document.querySelectorAll('button');
const insertDate = document.getElementsByClassName('.date');
const deleteButton = document.getElementById('del');
const numberButtons = document.querySelectorAll('.numericalButton');
const operationButtons = document.querySelectorAll('.operationButton');
const operateButton = document.getElementById('=');
const userInput1 = document.createElement('h3');
const previousCalculation = document.createElement('h4');
calculatorDisplay.appendChild(userInput1).className="calculatorOutput";
calculatorDisplay.appendChild(previousCalculation).className="previousCalcOutput"

displayValue = userInput1.textContent = ''
let previousNum = null;
let currentNum = null;
let operator = 'default'; 
let operatorActive = false;
let decimals = false; 

calculator = {
    operate(operator,previousNum, secondNum) {
        if (operator === '+') {
            return previousNum = userInput1.textContent = calculation.addition(previousNum, secondNum);
        } else if (operator === '-') {
            return previousNum = userInput1.textContent = calculation.subtraction(previousNum, secondNum);
        } else if (operator === '/') {
            return previousNum = userInput1.textContent = calculation.division(previousNum, secondNum);
        } else if (operator === 'x') {
            return previousNum = userInput1.textContent = calculation.multiplication(previousNum, secondNum);
        } else {
            return 'ERROR';
        }
    },
    clear() {
        userInput1.textContent = ''; 
        previousNum = null;
        secondNum = null;
        operator = 'default';
        decimals = false;
    },
    del() {
        userInput1.textContent = userInput1.textContent.slice(0,-1);
       },
    equal() {    
    console.log(previousNum = parseFloat(previousNum));
    console.log(secondNum = userInput1.textContent);
        //if (secondNum === '') {
          //  secondNum.slice(0-1);
            //return secondNum = userInput1.textContent;
        secondNum = parseFloat(secondNum);
        calculator.operate(operator, previousNum, secondNum);
        decimals = false;
        currentNum = null;
        }
    }


deleteButton.addEventListener('click', calculator.del);
clearButton.addEventListener('click', calculator.clear);

//function used to display numbers on the screen

const displayNumbers = numberButtons.forEach((button) => {
    button.addEventListener('click', function(e) {
    if ((e.target.id >= 0 && e.target.id <=9)) userInput1.textContent += `${e.target.id}`;
    if ((e.target.id === '.') && (decimals === false)) {
        userInput1.textContent += `${e.target.id}`;
        decimals = true;
    }
    if ((e.target.id === '.') && (decimals == true)) {
        return;
    }
    if (operatorActive === true) {
        userInput1.textContent = e.target.id
        operatorActive = false;
    }   
    })
})

const controlOperator = operationButtons.forEach((button) => {
    button.addEventListener('click', function(e) {
        if ((previousNum === null) && (operator === 'default') && (e.target.id === '-' || e.target.id === '/' || e.target.id === '+' || e.target.id === 'x')) {
            previousNum = userInput1.textContent;
            operator = e.target.id; 
            operatorActive = true;
            decimals = false;
        } else if ((operator != 'default') && (previousNum === null)) {
            operator = e.target.id;
            operatorActive = false;
        }
        if ((previousNum != null) && operatorActive === false) {
            if (operator === 'default') {
                //operator = e.target.id;
                return;
            } else {
             calculator.equal();
             previousNum = userInput1.textContent
             operatorActive = true;
             operator = e.target.id;
            }
        }
    })
})


operateButton.addEventListener('click', calculator.equal);


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

 //Functions for keyboard functionality 
 


// code for keyboard functionality

function keyboardHandler(e) {
    key = e.key;
    if (key === 'Backspace') calculator.del();
    if (key === 'Delete') calculator.clear();
    if (decimals === true && key === '.') return;
    if (key === '.' && decimals === false) decimals = true;
    if (key >= 0 && key <= 9) {
        let initialInput = userInput1.textContent += `${e.key}`;
        e
    } 
    if (key === '=' || key === 'Enter') calculator.equal(operator, previousNum, currentNum);
    if (operator != 'default') return;
    if (key === '+' || key === '/' || key === '-' || key === 'x') {
        operator = key;
        previousNum = userInput1.textContent;
        userInput1.textContent = '';
        decimals = false;
    } 
}

document.addEventListener('keydown', keyboardHandler);