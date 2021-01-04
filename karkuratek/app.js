const defaultResult = 0
let currentResult = defaultResult



// danza faradenza laboca dela coca grande lala imabuaua vi lavi da loca, bierze numer wpisany

function getUserNumberInput(){
    return parseInt(userInput.value);
}

// pisze masne logi z kalkulatora
function createAndWriteOutput(operator, resultBeforeCalc, calcNumber){
    const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
    outputResult(currentResult, calcDescription)
}

// no dodaje odejmuje mnozy i dzieli 
function add(){
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult = currentResult + enteredNumber;
    createAndWriteOutput('+', initialResult, enteredNumber)
}

function subtract(){
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult = currentResult - enteredNumber;
    createAndWriteOutput('-', initialResult, enteredNumber)
}

function multiply(){
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult = currentResult * enteredNumber;
    createAndWriteOutput('*', initialResult, enteredNumber)
}

function divide(){
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult = currentResult / enteredNumber;
    createAndWriteOutput('/', initialResult, enteredNumber)
}

function equals(){
    currentResult = defaultResult
    outputResult(currentResult,``)
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

function notify(){

    Math.random
    let type = false;

    const randomInt = getRandomInt(1, 3);

    if (randomInt === 1){
        type = true 
    } else {
        type = false
    }

    if (type === true) {
        alert('No tak ziomeczku')
    } else {
        alert('Oj nie lece na hotel ze mna twoja baba')
    }
}

notify();


//no i masne przyciski co nie 
addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);
equalsBtn.addEventListener('click', equals);


