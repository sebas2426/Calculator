let number1=document.createElement("p");
let number2=document.createElement("p");
let operand=document.createElement("p");
let valueFinal1=[];
let valueFinal2=[];
let operationsCount=0;
let result= document.createElement("p");

const resultsDiv= document.querySelector("#Results");
const buttonsUser= document.querySelectorAll(".btnUser");
const btnOperations= document.querySelectorAll("#operations .btnOperation");
const btnFloat= document.querySelector(".btnFloat");
const btnBack= document.querySelector(".btnBack");
const btnEqual= document.querySelector(".btnEqual");
const btnClear= document.querySelector(".btnClear");

 buttonsUser.forEach((button) =>{
    button.addEventListener("click", () =>{
    if(operationsCount===0 || number1.textContent===""){
            number1.textContent= `${button.textContent}`;
            let value1=number1.textContent;
            number1.textContent=value1;
            valueFinal1.push(number1.textContent);
            resultsDiv.append(number1.textContent);
            
    }else if(operationsCount>0){
        number2.textContent= `${button.textContent}`;
            let value2=number2.textContent;
            number2.textContent=value2;
            resultsDiv.append(number2.textContent);
            valueFinal2.push(number2.textContent);
    }
    });
 });

btnOperations.forEach((button) =>{
    button.addEventListener("click",() =>{
        btnFloat.disabled=false;
        operationsCount++;
        operand.textContent=`${button.textContent}`;
        resultsDiv.appendChild(operand);
    })
})

btnEqual.addEventListener("click", () => {
    if(number1.textContent==="" || operand.textContent==="" || number2.textContent===""){
        clear();
        resultsDiv.append("The calculator needs all the parameters.");
    }else{
        number1.textContent=valueFinal1.join("");
        number2.textContent=valueFinal2.join("");
    
    if( operand.textContent==="/" && number2.textContent==="0"){
        resultsDiv.append("There is no solution");
    }else{
        result.textContent=`${operate(number1,operand,number2)}`;
        resultsDiv.appendChild(result);
    }
}
});

function clear(){
        btnFloat.disabled=false;
        operationsCount=0;
        number1.textContent="";
        number2.textContent="";
        operand.textContent="";
        result.textContent="";
        resultsDiv.textContent="";
        valueFinal1=[];
        valueFinal2=[];
};

btnClear.addEventListener("click",() =>{
    clear();
})

btnFloat.addEventListener("click", () =>{
    console.log(valueFinal1);
if(valueFinal1.toString("").includes(".")){
        number2.textContent= `${btnFloat.textContent}`;
            let value2=number2.textContent;
            number2.textContent=value2;
            valueFinal2.push(number2.textContent);
            resultsDiv.append(number2.textContent);
    btnFloat.disabled=true;
}else{
        number1.textContent= `${btnFloat.textContent}`;
            let value1=number1.textContent;
            number1.textContent=value1;
            valueFinal1.push(number1.textContent);
            resultsDiv.append(number1.textContent);
    btnFloat.disabled=true;
}
});

btnBack.addEventListener("click",() =>{
    if(operationsCount===0){
        valueFinal1.pop();
        
    }else{
        valueFinal2.pop();
    }
});

function add(num1,num2){
    let operationResult=num1+num2;
    clear();
    number1.textContent=`${operationResult}`;
    valueFinal1.push(number1.textContent);
    console.log(number1.textContent)
    return operationResult;
}

function subtract(num1,num2){
    let operationResult=num1-num2;
    clear();
    number1.textContent=`${operationResult}`;
    valueFinal1.push(number1.textContent);
    console.log(number1.textContent)
    return operationResult;
}

function multiply(num1,num2){
    let operationResult=num1*num2;
    let operationDecimal=operationResult.toString().split(".");
    if(Number.isInteger(operationResult)===true){
        clear();
        number1.textContent=`${operationResult}`;
        valueFinal1.push(number1.textContent);
        console.log(number1.textContent)
        return operationResult;
    }else if(operationDecimal[1].length>8){
        clear();
        number1.textContent=`${operationResult}`;
        valueFinal1.push(number1.textContent);
        console.log(number1.textContent)
        return Math.round(operationResult*10000)/10000;
    }else{
        clear();
        number1.textContent=`${operationResult}`;
        valueFinal1.push(number1.textContent);
        console.log(number1.textContent)
        return operationResult;
    }
}

function divide(num1,num2){
    let operationResult=num1/num2;
    let operationDecimal=operationResult.toString().split(".");
    if(Number.isInteger(operationResult)===true){
        clear();
        number1.textContent=`${operationResult}`;
        valueFinal1.push(number1.textContent);
        console.log(number1.textContent)
        return operationResult;
    }else if(operationDecimal[1].length>8){
        clear();
        number1.textContent=`${operationResult}`;
        valueFinal1.push(number1.textContent);
        console.log(number1.textContent)
        return Math.round(operationResult*10000)/10000;
    }else{
        clear();
        number1.textContent=`${operationResult}`;
        valueFinal1.push(number1.textContent);
        console.log(number1.textContent)
        return operationResult;
    }
    
}


function operate(number1,operand,number2){
   number1=(+number1.textContent);
    number2=(+number2.textContent);
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
};
