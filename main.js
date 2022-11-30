const inputDisplay = document.querySelector(".inputDisplay");
const allButtons = document.querySelectorAll(".buttons"
);
const clearAllButton = document.querySelector("#clearAll");
const equalButton = document.querySelector("#equalButton");
const operatorButton = document.querySelector(".operator");

//Target the event. Pull the text from event. Display the text from event into the input field

allButtons.forEach(buttons => {
  buttons.addEventListener("click", event => {
    // if (!event.target.closest("button")) { 
    const pressedButton = event.target;
    const buttonValue = pressedButton.textContent;
    const displayValue = inputDisplay.textContent

    if(displayValue === "0"){
    inputDisplay.textContent = buttonValue}
    else {inputDisplay.textContent = displayValue + buttonValue}
    // Number Concatination Works

})})