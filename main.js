const inputDisplay = document.querySelector(".inputDisplay");
const allButtons = document.querySelectorAll(".buttons"
);
const clearAllButton = document.querySelector("#clearAll");
const deleteButton = document.querySelector("#deleteOne");
const equalButton = document.querySelector("#equalButton");

//Target the event. Pull the text from event. Display the text from event into the input field

allButtons.forEach(buttons => {
  buttons.addEventListener("click", (event) => {
    const pressedButton = event.target;
    const buttonValue = pressedButton.textContent;
    inputDisplay.innerHTML = buttonValue

    })
})