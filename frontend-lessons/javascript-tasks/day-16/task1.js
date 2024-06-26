// JavaScript Fundamentals - Day 16: Assignment

// 1. Create a function named `greet` that prints a greeting message to the console.
// 2. Call the `greet` function to display the greeting.
// 3. Modify the `greet` function to take a parameter `name` and greet the person by name.

// 4. Create a function named `addNumbers` that takes two parameters and returns their sum.
// 5. Call the `addNumbers` function with different values and print the results.

// 6. Create a function named `calculateAverage` that takes an array of numbers as a parameter and returns the average.
// 7. Use the `calculateAverage` function with an array of numbers and print the result.

// These are the fundamental concepts of functions in JavaScript. Functions allow you to write modular and reusable code, making your programs more organized and easier to maintain.

//1-3
function greet(name) {
    console.log(`Hey! How are you, ${name}?`);
}

greet("Pomni");

let x = 10;
let y = 5;

//4-5
function addNumbers(a, b) {
    return a + b;
}
const sum = addNumbers(x, y);
console.log(sum);

//6-7
function calculateAverage(int) {
    let sum = 0;
    for (let i = 0; i < int.length; i++) {
        sum += int[i];
    }
    return sum / int.length;
}

const numberArray = [3, 13, 15, 22, 33];
const average = calculateAverage(numberArray);

console.log(`The average of the array is: ${average}`);