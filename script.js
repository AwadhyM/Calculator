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
    },
    del() {
        userInput1.textContent = userInput1.textContent.slice(0,-1);
       },
    equal() {
        previousNum = parseFloat(previousNum);
        secondNum = userInput1.textContent;
        secondNum = parseFloat(secondNum);
        calculator.operate(operator, previousNum, secondNum);
        operator = 'default';
   }
}

deleteButton.addEventListener('click', calculator.del);
clearButton.addEventListener('click', calculator.clear);

const populateDisplay = numberButtons.forEach((button) => {
    button.addEventListener('click', function(e) {
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


