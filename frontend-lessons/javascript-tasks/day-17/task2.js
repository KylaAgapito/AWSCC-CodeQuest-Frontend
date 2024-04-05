// Task 2: Array Operations

// 4. Create an array named `fruits` with at least three different fruits.
// 5. Add a new fruit to the end of the `fruits` array using the `push()` method.
// 6. Remove the last fruit from the array using the `pop()` method.
// 7. Use a loop to iterate through the `fruits` array and print each fruit to the console.

console.log(`\nOriginal array:`);
const fruits = ['apple', 'banana', 'kiwi'];
fruits.push('blueberry');
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

console.log(`\nNew array:`);
const removedFruit = fruits.pop();
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}
console.log(`Removed fruit: ${removedFruit}`);