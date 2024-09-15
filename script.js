let number1=document.createElement("p");
let number2=document.createElement("p");
let operand=document.createElement("p");
const result= document.createElement("p");

const resultsDiv= document.querySelector("#Results");
const buttonsUser= document.querySelectorAll(".btnUser");
const btnEqual= document.querySelector(".btnEqual");
const btnClear= document.querySelector(".btnClear");

 buttonsUser.forEach((button) =>{
    button.addEventListener("click", () =>{
    if(number1.textContent.length===0){
            number1.textContent=`${button.textContent}`;
            resultsDiv.appendChild(number1);
    }else if(operand.textContent.length===0){
            operand.textContent=`${button.textContent}`;
            resultsDiv.appendChild(operand);
    }else if(number2.textContent.length===0){
            number2.textContent=`${button.textContent}`;
            resultsDiv.appendChild(number2);
    }   
    });
 });

btnEqual.addEventListener("click", () => {
    result.textContent=`=${operate(number1,operand,number2)}`;
    resultsDiv.appendChild(result);
});

btnClear.addEventListener("click", () =>{
    number1.textContent=undefined;
    number2.textContent=undefined;
    operand.textContent=undefined;
    result.textContent=undefined;
})

function add(num1,num2){
    return num1+num2;
}

function subtract(num1,num2){
    return num1-num2;
}

function multiply(num1,num2){
    return num1*num2;
}

function divide(num1,num2){
    return num1/num2;
}


function operate(number1,operand,number2){
    number1=Number(parseInt(number1.textContent));
    number2=Number(parseInt(number2.textContent));
    switch (operand.textContent){
        case "+":
            return (add(number1,number2));
        case "-":
            return(subtract(number1,number2));
        case "*":
            return(multiply(number1,number2));
        case "/":
            return (divide(number1,number2));
        default:
            console.log("Ta mAl");
    }
}
