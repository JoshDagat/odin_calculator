/* ########## GLOBAL ######### */
let txtHistory = '',
    txtCurr = '0';
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
  if(operator === '/') return division(num1,num2)
}

const displayHistory = document.querySelector('.display__history'),
      displayCurrent = document.querySelector('.display__current');

const numbers = document.querySelectorAll('.number');
numbers.forEach(btn => btn.addEventListener('click', function(e){
  
  while (txtCurr[0] === '0' && txtCurr[1] !== '.') {
    txtCurr = txtCurr.substring(1)
  }
  
  txtCurr += e.target.value;
  displayCurrent.textContent = txtCurr;
}))

const clear = document.querySelector('.opr-clear');
clear.addEventListener('click', function(e){
  txtHistory = '';
  txtCurr = '0';
  displayHistory.textContent = txtHistory;
  displayCurrent.textContent = txtCurr;
})

const clearEntry = document.querySelector('.opr-clear-entry');
clearEntry.addEventListener('click', function(e){
  txtCurr = '0';
  displayCurrent.textContent = txtCurr;
})

const num0 = document.querySelector('.num0');
num0.addEventListener('click', function(e){
  if(txtCurr.length > 1){
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

const addBtn = document.querySelector('.opr-add');
addBtn.addEventListener('click', function(e){
  txtHistory = txtCurr;
  txtCurr = '0';
  txtHistory += ` ${e.target.value}`;
  displayHistory.textContent = txtHistory;
})

const subBtn = document.querySelector('.opr-sub');
subBtn.addEventListener('click', function(e){
  txtHistory = txtCurr;
  txtCurr = '0';
  txtHistory += ` ${e.target.value}`;
  displayHistory.textContent = txtHistory;
})

const divideBtn = document.querySelector('.opr-divide');
divideBtn.addEventListener('click', function(e){
  txtHistory = txtCurr;
  txtCurr = '0';
  txtHistory += ` ${e.target.value}`;
  displayHistory.textContent = txtHistory;
})

const multiplyBtn = document.querySelector('.opr-multiply');
multiplyBtn.addEventListener('click', function(e){
  txtHistory = txtCurr;
  txtCurr = '0';
  txtHistory += ` ${e.target.value}`;
  displayHistory.textContent = txtHistory;
})