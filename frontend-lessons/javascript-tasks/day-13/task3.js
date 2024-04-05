// Task 3: Logical Operators in Action

// 8. Create two variables, `isMorning` and `isRaining`, and assign them boolean values.
// 9. Use the logical **AND** (`&&`) operator to check if it's morning and raining. Print appropriate messages based on the result.
// 10. Use the logical **OR** (`||`) operator to check if it's either morning or raining. Print appropriate messages based on the result.
// 11. Use the logical **NOT** (`!`) operator to invert the value of `isMorning`. Print the new value.

let isMorning = true;
let isRaining = false;

if (isMorning && isRaining == true) {
    console.log("It's a rainy morning today. Let's stay inside the house.");
} else {
    console.log("It's either not morning or not raining today. Maybe let's check outside?");
}

if (isMorning || isRaining == true) {
    console.log("It's either morning or raining today... or both.");
} else {
    console.log("It's neither morning nor raining today.");
}

const invertedMorning = !isMorning;
console.log("The new morning value is:", invertedMorning);