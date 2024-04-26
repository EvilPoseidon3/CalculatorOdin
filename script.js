let clear = document.querySelector('#clearButton');
let display = document.querySelector('#display');

let one = document.querySelector('#numberOne');
let two = document.querySelector('#numberTwo');
let three = document.querySelector('#numberThree');
let four = document.querySelector('#numberFour');
let five = document.querySelector('#numberFive');
let six = document.querySelector('#numberSix');
let seven = document.querySelector('#numberSeven');
let eight = document.querySelector('#numberEight');
let nine = document.querySelector('#numberNine');

let plus = document.querySelector('#plusButton');
let minus = document.querySelector('#minusButton');
let divid = document.querySelector('#dividButton');
let multiply = document.querySelector('#multiplyButton');
let equal = document.querySelector('#equalButton');

let historyDisplay = document.querySelector('#historyDisplay');

one.addEventListener('click', (event) => {
    addNumDis(1)
});

two.addEventListener('click', (event) => {
    addNumDis(2)
});

three.addEventListener('click', (event) => {});
four.addEventListener('click', (event) => {});
five.addEventListener('click', (event) => {});
six.addEventListener('click', (event) => {});
seven.addEventListener('click', (event) => {});
eight.addEventListener('click', (event) => {});
nine.addEventListener('click', (event) => {});

plus.addEventListener('click', (event) => {
    addOppDis("+")
});

minus.addEventListener('click', (event) => {});
divid.addEventListener('click', (event) => {});
multiply.addEventListener('click', (event) => {});
equal.addEventListener('click', (event) => {});

clear.addEventListener('click', (event) => {});

// function for adding a number to the display array
let displayArr = [];
    function addNumDis(x) {
        displayArr.push(x);
        ammendDisplay();

    };

// function to add display array to the display
    function ammendDisplay() {
        let arrString = displayArr.toString();
        let commaDel = arrString.replace(/,/g, "");
        display.textContent = commaDel;
    };


    function addOppDis(x) {
        displayArr.push(" ",x, " ");
        ammendDisplay();
    
    };

