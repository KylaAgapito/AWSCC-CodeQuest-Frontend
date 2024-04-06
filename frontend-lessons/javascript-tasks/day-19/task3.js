// Task 3: Advanced JSON Operations

// 7. Create an array of objects, each representing a person with properties for `name`, `age`, and `city`.
// 8. Use `JSON.stringify()` to convert the array of objects into a JSON string.
// 9. Use `JSON.parse()` to convert the JSON string back into an array of objects.
// 10. Print the `name` and `city` of each person in the array to the console.

const peopleArray = [
    { name: "Aliyah", age: 18, city: "Marikina City" },
    { name: "Gelo", age: 20, city: "Pasig City" },
    { name: "Dave", age: 19, city: "Marikina City" },
    { name: "Sabby", age: 18, city: "Marikina City" },
    { name: "Mico", age: 18, city: "Manila City" },
];

const jsonSTR = JSON.stringify(peopleArray);

const parsedSTR = JSON.parse(jsonSTR);

parsedSTR.forEach(indivudual => {
    console.log(`Name of individual: ${indivudual.name}, City: ${indivudual.city}`);
});