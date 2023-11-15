
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
    if(operator == "+"){
        add(a,b);
    }
    else if(operator == "-"){
        subtract(a, b);
    }
    else if(operator == "*"){
        multiply([a, b]);
    }
    else if(operator == "/"){
        divide(a,b);
    }
    else{
        console.log("error");
    }
}