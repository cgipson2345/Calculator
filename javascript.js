
let secondNumber;
let firstNumber;
let operator;


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
        display.textContent =   display.textContent + button.textContent ;
    });
    

});


const ops  = document.querySelectorAll(".operator");

ops.forEach((button)=> {

    button.addEventListener("click", () => {
        display.textContent =   display.textContent + button.textContent ;
    });
    

});



