// Task 3: Advanced Array Techniques

// 8. Create an array named `numbers` with five numeric values.
// 9. Use the `map()` method to create a new array where each number is multiplied by 2.
// 10. Use the `filter()` method to create a new array containing only the numbers greater than 5 from the original `numbers` array.

console.log("\nOriginal array: ");
const numbers = [7, 2, 6, 8, 5];
const doubledNumbers = numbers.map(function(number) {
    return number * 2;
});
console.log(numbers);
console.log("\nDoubled array: ");
console.log(doubledNumbers);

console.log("\nFiltered array from original array: ");
const filterFive = numbers.filter(function(numbers) {
    return numbers > 5;
});
console.log(filterFive);