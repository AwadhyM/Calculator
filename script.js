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
    if (operator === 'addition') {
        return calculation.addition(previousNum, secondNum);
    } else if (operator === 'subtraction') {
        return calculation.subtraction(previousNum, secondNum);
    } else if (operator === 'division') {
        return calculation.division(previousNum, secondNum);
    } else if (operator === 'multiplication') {
        return calculation.multiplication(previousNum, secondNum);
    }
}

//let operator = 'multiplication';
//let previousNum = 12;
//let secondNum = 12;

//console.log(operate(operator, previousNum, secondNum));