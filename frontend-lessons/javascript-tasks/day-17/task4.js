// Task 4: Array Manipulation

// 11. Create an array named `colors` with at least four different colors.
// 12. Add a new color to the beginning of the `colors` array using the `unshift()` method.
// 13. Remove the first color from the array using the `shift()` method.
// 14. Use the `slice()` method to create a new array containing the second and third colors from the original array.

console.log("\nOriginal array: ");
const colors = ['red', 'pink', 'yellow', 'blue']
console.log(colors);

colors.unshift('orange');
console.log("\nNew unshift array: ");
console.log(colors);

colors.shift();
console.log("\nNew shift array: ");
console.log(colors);

const sliceArray = colors.slice(1, 3);
console.log("\nNew slice array: ");
console.log(sliceArray);