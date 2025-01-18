let x=Math.floor(Math.random()*101)
while (1){
    k=parseInt(prompt('enter the number'))
    if (x===k){
        console.log("correct number:"+x)
        break

    }
    else if (k>x){
        alert("too high")
    }
    else if(k<x){
        alert("too low");
        
    }




}