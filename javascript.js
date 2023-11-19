
let secondNumber;
let secondNumberHolder = "";
let firstNumber;
let operator;
let fullEquation = "";
let i  = false;

function add(a,b) {
    return a + b;
}

function subtract(a,b) {
    return a - b;
}

const multiply = function (array) {
    return array.reduce((product, current) => product * current)
  };

const divide =  function (a, b){  return (a/b); };



function operate(operator, a, b) {

    let t = 0;
    console.log(operator);
    console.log(a);
    console.log(b);

    if(operator == "+"){
        t = add(a,b);
    }
    else if(operator == "-"){
        t = subtract(a, b);
    }
    else if(operator == "*"){
        t  = multiply([a, b]);
    }
    else if(operator == "/"){
      t =   divide(a,b);
    }
    else{
       return console.log("error");
    }
    return t;

}

 //firstNumber = parseInt(prompt("enter a number"));
 //secondNumber= parseInt(prompt("enter a second number"));
 //operator = prompt("enter an operator");

//let pa = operate(operator, firstNumber, secondNumber);
//console.log(pa);

const display = document.querySelector(".display");

const number  = document.querySelectorAll(".number");

number.forEach((button)=> {

    button.addEventListener("click", () => {
        // @ts-ignore
        display.textContent =   display.textContent + button.textContent ;
        if(i === true) {
            // @ts-ignore
            secondNumberHolder  = secondNumberHolder + button.textContent;
        }
    });
    

});


const ops  = document.querySelectorAll(".operator");

ops.forEach((button)=> {

    button.addEventListener("click", () => {
        // @ts-ignore
        firstNumber = parseInt(display.textContent);
        operator = button.textContent;
        // @ts-ignore
        display.textContent =   display.textContent + button.textContent ;
        i = true;   // USE THIS TO FIND THE SECOND NUMBER
    });
    

});



const clear = document.querySelector(".clear");

// @ts-ignore
clear.addEventListener("click", () => {

    // @ts-ignore
    display.textContent = "";
    secondNumber = 0;
    secondNumberHolder = "";
    firstNumber = "";
    i = false;

});


const equals = document.querySelector(".equals");

// @ts-ignore
equals.addEventListener("click", () => {
    // @ts-ignore
    //fullEquation = display.textContent;
    console.log(secondNumberHolder);
    secondNumber = parseInt(secondNumberHolder);
    // @ts-ignore
    display.textContent = operate(operator, firstNumber, secondNumber);



});
