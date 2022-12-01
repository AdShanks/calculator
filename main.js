const calculator = document.querySelector(".calculator")
const inputDisplay = document.querySelector(".inputDisplay");
const allButtons = document.querySelectorAll(".buttons");
const clearAllButton = document.querySelector("#clearAll");
const equalButton = document.querySelector("#equalButton");
const operatorButton = document.querySelector(".operator");



allButtons.forEach(buttons => {
  buttons.addEventListener("click", event => {
   
    const pressedButton = event.target;
    const buttonValue = pressedButton.textContent;
    const displayValue = inputDisplay.textContent
    const {previousKeyType} = calculator.dataset

    // When Number Button is Pressed
   if(pressedButton.classList.contains("number"))
    {
      if(displayValue === "0")
      {
    inputDisplay.textContent = buttonValue}
      else if(previousKeyType === "operator")
     {
       inputDisplay.textContent = buttonValue
     }
      else {inputDisplay.textContent = displayValue + buttonValue
    }
  }
  calculator.dataset.previousKeyType = "number"

     // When Operator Button is Pressed
if(pressedButton.classList.contains("operator")) {
  
   calculator.dataset.previousKeyType = "operator"
  calculator.dataset.firstNumber = displayValue;
  calculator.dataset.operator = pressedButton.dataset.key
  
};
    //Calculate
 if(pressedButton.classList.contains("equal"))
 {
   const firstNumber = parseInt(calculator.dataset.firstNumber);
   const operator = calculator.dataset.operator;
   const secondNumber = parseInt(displayValue);
      
      let result = ""
   if(operator === "add") {result = firstNumber + secondNumber};
   if(operator ==="subtract") {result = firstNumber - secondNumber};
   if(operator ==="multiply") {result = firstNumber * secondNumber};
   if(operator === "divide") {result = firstNumber / secondNumber};
   
   inputDisplay.textContent = result
   calculator.dataset.previousKeyType = pressedButton.dataset
 }
 
 })

  })

