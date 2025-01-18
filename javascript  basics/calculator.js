let num1=parseInt(prompt("enter the number"))
let num2=parseInt(prompt("enter number"))
let operator=prompt("enter + or / or - or *")
switch(operator){
    case "+":
        result=num1+num2;
        break;
    case "-":
        result=num1-num2;
        break;
    case "*":
        result=num1*num2;
        break;
    case "/":
        if (num2!==0){
            result=num1/num2
        }
        else{
            alert("zero indexed error")
        }
        break;
    default:
        altert("invalid input")
}
alert(`result is ${result}`)
