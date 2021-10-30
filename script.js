const calculatorDisplay = document.getElementById('display');
const clearButton = document.getElementById('AC');
let deleteButton = document.getElementById('del');
let numberButtons = document.querySelectorAll('.numericalButton');
let userInput1 = document.createElement('h3');
userInput1.className="calculatorOutput";
calculatorDisplay.appendChild(userInput1);

deleteButton.addEventListener('click', calculator.del);
clearButton.addEventListener('click', calculator.clear);

let previousNum;
let secondNum;
let operator;

calculator = {
    operate(operator,previousNum, secondNum) {
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
    },
    clear() {
        userInput1.textContent = ''; 
        previousNum = 0;
        secondNum = 0;
    },
    del() {
        userInput1.textContent = userInput1.textContent.slice(0,-1);
       }
}

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
        userInput1.textContent = calculator.operate(operator, previousNum, secondNum);
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
        if (secondNum === 0) {
            return 'Error!';
        } else {
            return previousNum / secondNum;
        } 
}
}
