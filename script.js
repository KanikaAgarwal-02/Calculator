let currentInput = "";
function getValue(value) {
    currentInput += value;
    updateDisplay();
}
function getOperator(operator) {
    if(currentInput !== "" && !currentInput.includes(operator)){
        currentInput += operator;
        updateDisplay();
    }
    console.log(currentInput)
}
function calculate(){
    try {
        currentInput = eval(currentInput).toString();
        updateDisplay();
    }
    catch(e) {
        currentInput = "Invalid Input!"
        updateDisplay();
    }
}

// setTimeout(autoClear, 5000); // Executes after 5 seconds

function autoClear() {
    currentInput = "";
    updateDisplay();
}
function updateDisplay() {
    document.getElementById('display').value = currentInput
}


// SECOND CODE...

// let string = "";
// let buttons = document.querySelectorAll('.button');
// Array.from(buttons).forEach((button)=>{
//     button.addEventListener('click', (e)=>{
//         if(e.target.innerHTML == '='){
//             string = eval(string);
//             document.querySelector('input').value = string;
//         }
//         else if(e.target.innerHTML == 'AC'){
//             string = "";
//             document.querySelector('input').value = string;
//         }
//         else{
//             console.log(e.target)
//             string = string + e.target.innerHTML;
//             document.querySelector('input').value = string;
//         }
        
//     })
// })