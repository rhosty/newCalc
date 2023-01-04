let firstOperant = document.getElementById('display-top');
let secondOperant = document.getElementById('display');
let operationSign = document.getElementById('operation');
let firstNumber;



function calculate(){
    if(operationSign.value == " + ") {
        firstOperant.value = Number(firstOperant.value) + Number(secondOperant.value);
        } else if (operationSign.value == " - "){
            firstOperant.value = Number(firstOperant.value) - Number(secondOperant.value);
              } else if (operationSign.value == " * "){
            firstOperant.value = Number(firstOperant.value) * Number(secondOperant.value);
                } else if (operationSign.value == " / "){
                    firstOperant.value = Number(firstOperant.value) / Number(secondOperant.value);
                      }           
};

function clearDisplayAfterOperation(){
    secondOperant.value = "";
    operationSign.value = "";
};
        
function allClear(){
    firstOperant.value = "";
    secondOperant.value = "";
    operationSign.value = "";
};

// created firstNumber in order to remove the last digit of firstOperant. not a good solution i think but kinda works
function removeLastDigit(){
     firstOperant.value = Math.floor(firstNumber / 10);
     firstNumber = firstOperant.value;      
};

//numberpad

let numberButton = document.getElementsByClassName('number');
    for (let i = 0; i < numberButton.length; i++){
        numberButton[i].addEventListener('click', function(){
            if ( operationSign.value == ""){
            firstOperant.value += numberButton[i].value;
            firstNumber = firstOperant.value;
            } else if(operationSign != ""){
                secondOperant.value += numberButton[i].value;
            }})};

// operator button

let operatorButton = document.getElementsByClassName('operator');
    for (let j = 0; j < operatorButton.length; j++){
        operatorButton[j].addEventListener('click', function(){
            operationSign.value += operatorButton[j].value;
            })}

// ac button

let allClearButton = document.getElementById('ac');
    allClearButton.addEventListener('click', Event => {
        allClear();
    });

//clear button

let clearButton = document.getElementById('c');
    clearButton.addEventListener('click', Event => {
        removeLastDigit();
    });

let equalButton = document.getElementById('enter');
    equalButton.addEventListener('click', Event =>{
        calculate();
        clearDisplayAfterOperation()
        
    });  