const calculatorDisplay = document.getElementById("display");
let numberButtons = document.querySelectorAll('.numericalButton');
let operatorButtons = document.querySelectorAll('.operatorButton');
let equalButton = document.getElementById('equal');
let userInput1 = document.createElement('h3');
let userInput2 = document.createElement('h3');
userInput1.className="calculatorOutput"
calculatorDisplay.appendChild(userInput1);
calculatorDisplay.appendChild(userInput2);
let previousNum;
let secondNum;
let newNum;

let operator;


const populateDisplay = numberButtons.forEach((button) => {
    button.addEventListener('click', function (e) {
       let initialInput = userInput1.textContent += `${e.target.id}`;
       if (initialInput === '=') {
           userInput1.textContent = ''; 
       }
    if (e.target.id === '+' || e.target.id === '-' || e.target.id === '/' || e.target.id === 'x') {
        operator = e.target.id;
        previousNum = userInput1.textContent;
        previousNum = parseFloat(previousNum);
        userInput1.textContent = '';
    }
    if (e.target.id === '=' && (operator === '+' || operator === '-' || operator === 'x' || operator === '/')) {
        secondNum = userInput1.textContent;
        secondNum = parseFloat(secondNum);
        userInput1.textContent = operate(operator, previousNum, secondNum);
    }
    })
});

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
        return previousNum / secondNum; 
}
}

const operate = (operator,previousNum, secondNum) => {
    if (operator === '+') {
        return calculation.addition(previousNum, secondNum);
    } else if (operator === '-') {
        return calculation.subtraction(previousNum, secondNum);
    } else if (operator === '/') {
        return calculation.division(previousNum, secondNum);
    } else if (operator === 'x') {
        return calculation.multiplication(previousNum, secondNum);
    } else {
        return 'ERROR';
    }
}

