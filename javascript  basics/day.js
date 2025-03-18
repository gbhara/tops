// Prompt the user for a number
const number = parseInt(prompt("Enter a number (1-7):"));

// Determine the corresponding day using a switch statement
let day;
switch (number) {
    case 1:
        day = "Sunday";
        break;
    case 2:
        day = "Monday";
        break;
    case 3:
        day = "Tuesday";
        break;
    case 4:
        day = "Wednesday";
        break;
    case 5:
        day = "Thursday";
        break;
    case 6:
        day = "Friday";
        break;
    case 7:
        day = "Saturday";
        break;
    default:
        day = "Invalid input";
}

// Display the result
alert("The day is: " + day);
