// Task 2: JSON to JavaScript

// 4. Create a JSON string representing a book with properties for `title`, `author`, and `publishedYear`.
// 5. Use the `JSON.parse()` method to convert the JSON string into a JavaScript object.
// 6. Access and print the `author` property of the resulting JavaScript object.

const bookJSON = {
    "title": "Animal Farm",
    "author": "George Orwell",
    "publishedYear": "1945"
}

const jsonString = JSON.stringify(bookJSON);
console.log('\nObject before parse: ');
console.log(jsonString);


console.log('\nObject after parse: ');
const bookJS = JSON.parse(jsonString);
console.log('Author: ' + bookJS.author);