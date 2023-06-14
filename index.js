let name = '';
const randomNumber = Math.floor(Math.random() * 100);

let guesses = 0;
let output = document.querySelector('#output');
let prompt = document.querySelector('#prompt');
let input = document.querySelector('#prompt input');

printMassage('Type name: ');
input.focus();
prompt.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
    event.preventDefault();

    processInput(input.value);
    input.value = '';
}

function processInput(input) {
    if(!input) return;
    if(!name) {
        name = input;
        clearOutput();
        printMassage(`${name}, Try to find a number`);
    }

    let guess = Number.parseInt(input);
    checkNumber(guess);
}

function checkNumber(guess) {
    if(isNaN(guess)) return;
    guesses++;

    if(guess > randomNumber) {
        printMassage('Random number is small');
        clearOutput();
    } else if (guess < randomNumber) {
        printMassage('Random number is more')
        clearOutput();
    } else {
        printMassage('Yap. You are win. Random number is ' + randomNumber);
        printMassage('Guesses are ' + guesses);
        printMassage('Game Over');
        prompt.remove();
    }
}

function printMassage(message) {
    let li = document.createElement('li');
    li.textContent = message;
    output.appendChild(li);
}

function clearOutput() {
    for(let i = 0; i < output.children.length; i++) {
        output.removeChild(output.children[i]);
    }
}
