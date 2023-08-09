function performCalcultation(operand1,operand2,operation,input){
let result=0;
if(operand2==""){
    operand2=0;
}
if(operand1==""){
    operand1=0;
}
if(operation == '=' && operand2==""){
    result= parseInt(operand1)
}
if(operation == '=' && operand2!=""){
    result= parseInt(operand2)
}
switch(operation){
    case '+': result= parseInt(operand1) + parseInt(operand2);
              break;
    case '-': result= parseInt(operand1) - parseInt(operand2);
              break;
    case '*': result= parseInt(operand1) * parseInt(operand2);
              break;
    case '/': result= parseInt(operand1)/ parseInt(operand2);
              break;
}
document.getElementById("operand1").innerHTML=result;
document.getElementById("operator1").innerHTML=input;
document.getElementById("operand2").innerHTML="";
}

function onClickClearAll(){
    document.getElementById("operand1").innerHTML="";
    document.getElementById("operand2").innerHTML="";
    document.getElementById("operator1").innerHTML="";
}

function enterOperandNumberOne(operand1,input){
    if(operand1==null){
        operand1=input;
    } else{
        operand1=10*operand1+input;
    }
    document.getElementById("operand1").innerHTML=operand1;
}

function enterOperandNumberTwo(operand2,input){
    if(operand2==null){
        operand2=input;
    } else{
        operand2=10*operand2+input;
    }
    document.getElementById("operand2").innerHTML=operand2;
    
}

function storeOperator(input){
    document.getElementById("operator1").innerHTML=input;
}


function onClickDecideOperation(input){
    let operand1=document.getElementById("operand1").innerHTML;
    let operand2=document.getElementById("operand2").innerHTML;
    let operator1=document.getElementById("operator1").innerHTML;
    if(input=='+' || input=='-'|| input=='*'|| input=='/'  || input=='='){
        if(operator1==""){
           storeOperator(input);
        }
        else{
            performCalcultation(operand1,operand2,operator1,input);
        }
    }else{
        if(operator1=="" && operand2==""){
            enterOperandNumberOne(operand1,input);
        }
        else if(operator1!=""){
            enterOperandNumberTwo(operand2,input)
        }

    }

}

/*
 *  Enter a number the value of operand 1 = number
 *  Enter two number the value of operand 2 = number last entered and symbol previously entered
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 *
 * 
 * 
 * 
 * 
 * 
 * 
*/
