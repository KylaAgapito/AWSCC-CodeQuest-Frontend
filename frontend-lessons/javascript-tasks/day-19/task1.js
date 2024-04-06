// Working with JSON in JavaScript - Day 19: Assignment

// Task 1: JavaScript to JSON

// 1. Create a JavaScript object named `product` with properties for `name`, `price`, and `quantity`.
// 2. Use the `JSON.stringify()` method to convert the `product` object into a JSON string.
// 3. Print the resulting JSON string to the console.

const product = {
    name: 'Peach',
    price: '70',
    quantity: '3'
}

console.log('\nObject before stringify: ');
console.log(product);

const productJSON = JSON.stringify(product);
console.log('\nObject after stringify: ');
console.log(productJSON);