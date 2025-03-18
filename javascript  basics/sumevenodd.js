n=parseInt(prompt("enter the number"))
let sum=0
let sum1=0

for(let i=1;i<=n;i++){
    if(i%2==0){
        sum+=i

    }
    else{
        sum1+=i
    }
}
console.log(`even sum :${sum}`)
console.log(`odd sum :${sum1}`)
