// JavaScript Fundamentals - Day 14: Assignment

// 1. Create a variable named `temperature` and assign it a value.
// 2. Use an `if` statement to check if the `temperature` is greater than 30. Print a message to the console accordingly.
// 3. Extend the previous example with an `else` statement to print a different message if the temperature is not greater than 30.
// 4. Create a variable named `time` and assign it a value representing the current hour (in 24-hour format).
// 5. Use `else if` statements to greet the user based on the time of day (morning, afternoon, evening).
// 6. Create a switch statement for the variable `day`. Print a message based on the day of the week.

let currentTemperature = 32;
let currentTime = 1330;
let currentDay = 'Thursday';

if (currentTemperature > 30) {
    console.log("The current temperature is greater than 30 degrees celsius.");
} else {
    console.log("The current temperature is less than 30 degrees celsius.");
}

if (currentTime >= 0 && 1200 > currentTime) {
    console.log("Good morning babycakes! Eat your breakfast na ><");
} else if (currentTime >= 1200 && 1800 > currentTime) {
    console.log("Good afternoon babycakes! Tara laro valo!");
} else {
    console.log("Good evening babycakes! Eat your dinner na ><");
}

switch (currentDay) {
    case 'Monday':
        console.log("Today is Monday. Have a good day!");
        break;
    case 'Tuesday':
        console.log("Today is Tuesday. Have a good day!");
        break;
    case 'Wednesday':
        console.log("Today is Wednesday. Have a good day!");
        break;
    case 'Thursday':
        console.log("Today is Thursday. Have a good day!");
        break;
    case 'Friday':
        console.log("Today is Friday. Have a good day!");
        break;
    case 'Saturday':
        console.log("Today is Saturday. Have a good day!");
        break;
    case 'Sunday':
        console.log("Today is Sunday. Have a good day!");
        break;
}