const calculatorDisplay = document.getElementById('display');
const clearButton = document.getElementById('AC');
const deleteButton = document.getElementById('del');
const numberButtons = document.querySelectorAll('.numericalButton');
const operationButtons = document.querySelectorAll('.operationButton');
const operateButton = document.getElementById('=');
const userInput1 = document.createElement('h3');
calculatorDisplay.appendChild(userInput1).className="calculatorOutput";

let previousNum;
let secondNum;
let operator = 'default'; 
let decimals = false; 

calculator = {
    operate(operator,previousNum, secondNum) {
        if (operator === '+') {
            return userInput1.textContent = calculation.addition(previousNum, secondNum);
        } else if (operator === '-') {
            return userInput1.textContent = calculation.subtraction(previousNum, secondNum);
        } else if (operator === '/') {
            return userInput1.textContent = calculation.division(previousNum, secondNum);
        } else if (operator === 'x') {
            return userInput1.textContent = calculation.multiplication(previousNum, secondNum);
        } else {
            return 'ERROR';
        }
    },
    clear() {
        userInput1.textContent = ''; 
        previousNum = 0;
        secondNum = 0;
        operator = 'default';
        decimals = false;
    },
    del() {
        userInput1.textContent = userInput1.textContent.slice(0,-1);
       },
    equal() {
        if (operator === 'default') {
            return;
        } else {
        previousNum = parseFloat(previousNum);
        secondNum = userInput1.textContent;
        if (secondNum === '') {
            secondNum.slice(0-1);
            return secondNum = userInput1.textContent;
        }
        secondNum = parseFloat(secondNum);
        calculator.operate(operator, previousNum, secondNum);
        operator = 'default';
        decimals = false;
        }
    }
}

deleteButton.addEventListener('click', calculator.del);
clearButton.addEventListener('click', calculator.clear);

const populateDisplayEventListeners = numberButtons.forEach((button) => {
    button.addEventListener('click', function(e) {
        if (decimals === true && e.target.id === '.') {
            return;
        } else if (e.target.id === '.' && decimals === false) {
            decimals = true;
        } 
        let initialInput = userInput1.textContent += `${e.target.id}`;
    })
})


const operationButton = operationButtons.forEach((button) => {
    button.addEventListener('click', function(e) {
    if (operator != 'default') {
        return;
    } else {
        previousNum = userInput1.textContent;
        userInput1.textContent = '';
        decimals = false;
    }
    operator = e.target.id;
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
 
 /**document.addEventListener('keydown', function(e) {
    if (decimals === true && e.key === '.') {
        return;
    } else if (e.key === '.' && decimals === false) {
        decimals = true;
    } 
    if (e.key >= 0 && e.key <= 9) {
        let initialInput = userInput1.textContent += `${e.key}`;
    }
}) 

operationButtons.forEach((button) => document.addEventListener('keydown', function(e) {   
        if (operator != 'default') {
            return;
        } else if (e.key === '+' || e.key === '/' || e.key === '-' || e.key === 'x') {
            console.log(operator = e.key);
            previousNum = userInput1.textContent;
            console.log(previousNum);
            userInput1.textContent = '';
            decimals = false;
        }
    })
)

document.addEventListener('keydown', function(e) {
if (e.key === '=' || e.key === 'Enter') {
    calculator.equal(operator, previousNum, secondNum);
}
})
*/
