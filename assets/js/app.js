/* ########## GLOBAL ######### */
let txtHistory = '',
    txtCurr = '0';

let operable = {
  firstNum : '',
  operation : '',
  secondNum : '',
  percentage : '', 
}
/* ########## END OF GLOBAL ########*/
function addition (num1, num2) {
  return num1 + num2
} 

function subtraction (num1, num2){
  return num1 - num2
}

function multiplication (num1, num2){ 
  return num1 * num2
}

function division(num1, num2){
  return num1 / num2
}

function operate(operator, num1, num2){
  if(operator === '+') return addition(num1, num2);
  if(operator === '-') return subtraction(num1, num2);
  if(operator === '*') return multiplication(num1, num2);
  if(operator === '/') return division(num1, num2)
}

const displayHistory = document.querySelector('.display__history'),
      displayCurrent = document.querySelector('.display__current');

const numbers = document.querySelectorAll('.number');
numbers.forEach(btn => btn.addEventListener('click', function(e){
  
  // prevents adding '0' padding 0 when there is no decimal place
  while (txtCurr[0] === '0' && txtCurr[1] !== '.') {
    txtCurr = txtCurr.substring(1)
  }
  
  txtCurr += e.target.value;
  displayCurrent.textContent = txtCurr;
}))

// Clears everyhting from the operable object.
const clear = document.querySelector('.opr-clear');
clear.addEventListener('click', function clear(){
  txtHistory = '';
  txtCurr = '0';
  displayHistory.textContent = txtHistory;
  displayCurrent.textContent = txtCurr;
  txtCurr = '';
  operable.firstNum = '';
  operable.operation = '';
  operable.secondNum = '';
})

// Clears the current entry a.k.a secondNum
const clearEntry = document.querySelector('.opr-clear-entry');
clearEntry.addEventListener('click', function clearEntry(){
  txtCurr = '0';
  displayCurrent.textContent = txtCurr;
  operable.secondNum = '';
})

const num0 = document.querySelector('.num0');
num0.addEventListener('click', function(e){
  if(txtCurr.length >= 1){
    txtCurr += e.target.value;
    displayCurrent.textContent = txtCurr;
  }
})

const numDot = document.querySelector('.num-dot');
numDot.addEventListener('click', function(e){
  if(!txtCurr.includes('.')){
    txtCurr += e.target.value;
    displayCurrent.textContent = txtCurr;
  }
})

const mainOperations = document.querySelectorAll('.main');
mainOperations.forEach(operation => operation.addEventListener('click', function(e){
  operable.operation = e.target.value;

  if (operable.firstNum === ''){
    operable.firstNum = txtCurr;
    txtCurr = '';
  } else {

    operable.secondNum = txtCurr;
    operable.firstNum = operate(operable.operation, parseFloat(operable.firstNum), parseFloat(operable.secondNum));
    operable.secondNum = '';

  }
  txtHistory = `${operable.firstNum} ${operable.operation}`
  txtCurr = '';
  displayHistory.textContent = txtHistory;
  displayCurrent.textContent = `${operable.firstNum}`
}));


const percentage = document.querySelector('.opr-percent');
percentage.addEventListener('click', function getPercentage(){
  let percentOne = operable.firstNum ** 2 / 100,
      percentTwo = operable.firstNum / 100;

  if (operable.firstNum === '' && operable.operation === ''){
    txtCurr = '0';
    displayCurrent.textContent = txtCurr;
    displayHistory.textContent = txtCurr;

  } else if (txtCurr === '' || txtCurr == percentOne || txtCurr == percentTwo) {
    operable.percentage = txtCurr || parseInt(operable.firstNum)
      
    if(operable.operation === '+' || operable.operation === '-'){
      txtCurr = (operable.percentage ** 2) / 100;
      operable.percentage = txtCurr
    } else {
      txtCurr = operable.percentage / 100
      operable.percentage = txtCurr
    }

    displayCurrent.textContent = txtCurr

  }

})