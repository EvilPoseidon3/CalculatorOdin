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
let zero = document.querySelector('#numberZero');
let period = document.querySelector('#numberPeriod');

let plus = document.querySelector('#plusButton');
let minus = document.querySelector('#minusButton');
let divid = document.querySelector('#dividButton');
let multiply = document.querySelector('#multiplyButton');
let equal = document.querySelector('#equalButton');

let historyDisplay = document.querySelector('#historyDisplay');

clear.addEventListener('click', (event) => {
    displayArr = []
    display.textContent = displayArr
})

one.addEventListener('click', (event) => {
    addNumDis(1)
});

two.addEventListener('click', (event) => {
    addNumDis(2)
});

three.addEventListener('click', (event) => {
    addNumDis(3)
});

four.addEventListener('click', (event) => {
    addNumDis(4)
});

five.addEventListener('click', (event) => {
    addNumDis(5)
});

six.addEventListener('click', (event) => {
    addNumDis(6)
});

seven.addEventListener('click', (event) => {
    addNumDis(7)
});

eight.addEventListener('click', (event) => {
    addNumDis(8)
});

nine.addEventListener('click', (event) => {
    addNumDis(9)
});

zero.addEventListener('click', (event) => {
    addNumDis(0)
});

period.addEventListener('click', (event) => {
    addNumDis(".")
});

plus.addEventListener('click', (event) => {
    addOppDis("+")
});

minus.addEventListener('click', (event) => {
    addOppDis("-")
});

divid.addEventListener('click', (event) => {
    addOppDis("/")
});

multiply.addEventListener('click', (event) => {
    addOppDis("*")
});

equal.addEventListener('click', (event) => {
    let answer = evalEquation()
    console.log(answer)
    display.textContent = answer
});

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

// function to add opperators
    function addOppDis(x) {
        displayArr.push(" ",x, " ");
        ammendDisplay();
    
    };

    function evalEquation() {
        let broArr = (displayArr.join('')).split(' ');

            console.log(displayArr);
            console.log(broArr);

        if ( broArr[0] === "" || broArr[broArr.length - 1] === "")
            { return "Error"}

       
            while (broArr.includes('*')){
            for (let i = 0; i < broArr.length; i++) {
                
                 if (broArr[i] === "*") 
                {broArr.splice(i-1, 3, (Number(broArr[i-1]) * Number(broArr[i+1])))}
                
            }}
            while (broArr.includes('/')){
            for (let i = 0; i < broArr.length; i++) {
                
                 if (broArr[i] === "/") 
                {broArr.splice(i-1, 3, (Number(broArr[i-1]) / Number(broArr[i+1])))}
                
            }}
            while (broArr.includes('+')){
            for (let i = 0; i < broArr.length; i++) {
                
                 if (broArr[i] === "+") 
                {broArr.splice(i-1, 3, (Number(broArr[i-1]) + Number(broArr[i+1])))}
                
            }}
            while (broArr.includes('-')){
            for (let i = 0; i < broArr.length; i++) {
                
                 if (broArr[i] === "-") 
                {broArr.splice(i-1, 3, (Number(broArr[i-1]) - Number(broArr[i+1])))}
                
            }}
        
            return (broArr.toString())
    }


    // try joining with array join() and use a space, then splice
    // it together using string method splice() then run it like an equation