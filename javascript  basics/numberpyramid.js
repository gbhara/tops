let rows =parseInt(promt("enter number"))

for (let i = 1; i <= rows; i++) {
    // Print spaces
   let row=""
    for (let space = rows; space >=i; space--) {
        
         row+=" "
    }
    for(k=0;k<i;k++){
        row+=`${k+1} `
    }
    console.log(row)

    // Print stars
   }