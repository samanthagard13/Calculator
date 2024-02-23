let currentInput = "";
let currentOperator = "";
let storedValue = "";

function clearResult() {
    currentInput = "";
    currentOperator = "";
    storedValue = "";
    updateResult();
}

function appendNumber(number) {
    currentInput += number;
    updateResult();
}

function appendDecimalPoint() {
    if (!currentInput.includes('.')) {
        currentInput += '.';
        updateResult();
    }
}

function setOperator(operator) {
    if (currentInput !== "") {
        if (currentOperator !== "") {
            calculateResult();
        }
        currentOperator = operator;
        storedValue = currentInput;
        currentInput = "";
        updateResult();
    }
}

function calculateResult() {
    if (currentInput !== "" && currentOperator !== "" && storedValue !== "") {
        switch (currentOperator) {
            case '+':
                currentInput = (parseFloat(storedValue) + parseFloat(currentInput)).toString();
                break;
            case '-':
                currentInput = (parseFloat(storedValue) - parseFloat(currentInput)).toString();
                break;
            case '*':
                currentInput = (parseFloat(storedValue) * parseFloat(currentInput)).toString();
                break;
            case '/':
                if (parseFloat(currentInput) !== 0) {
                    currentInput = (parseFloat(storedValue) / parseFloat(currentInput)).toString();
                } else {
                    currentInput = "Cannot divide by zero";
                }
                break;
            default:
                break;
        }
        currentOperator = "";
        storedValue = "";
        updateResult();
    }
}

function updateResult() {
    document.getElementById('result').value = currentInput;
}

let savedResults = [];

function saveResult() {
    if (currentInput !== "") {
        savedResults.push(currentInput);
        updateSavedResults();
    }
}

function updateSavedResults() {
    const savedResultsContainer = document.getElementById('savedResults');
    savedResultsContainer.innerHTML = ""; 

    savedResults.forEach((result, index) => {
        const resultElement = document.createElement('div');
        resultElement.textContent = `Result ${index + 1}: ${result}`;
        savedResultsContainer.appendChild(resultElement);
    });
}