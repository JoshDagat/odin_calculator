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



