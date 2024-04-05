// Task 5: Array Splicing

// 15. Create an array named `characters` with at least six characters (strings).
// 16. Use the `splice()` method to insert two new characters at index 2 of the `characters` array.
// 17. Use the `splice()` method to remove three characters starting from index 4 of the `characters` array.

// These tasks will help you strengthen your understanding of working with arrays in JavaScript. Arrays are powerful tools for managing and manipulating collections of data. Good luck! 🚀

console.log("\nOriginal array: ");
const characters = ['Jett', 'Sage', 'Reyna', 'Viper', 'Killjoy', 'Clove'];
console.log(characters);

console.log("\nNew array: ");
characters.splice(2, 0, 'Raze', 'Fade');
console.log(characters);

characters.splice(4, 3);
console.log("\nSpliced array: ");
console.log(characters);