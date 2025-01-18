let year=prompt("enter year")
if (year%4===0 && year%100!==0){
    alert(`${year} is leap year`)
}
else if (year%100===0 && year%400===0){
    alert(`${year} is leap year`)
}
else{
    alert(`${year} is not leap year`)
}