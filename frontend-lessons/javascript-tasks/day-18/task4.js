// Task 4: Advanced Object Techniques

// 10. Create an object named `person` with properties for `name`, `age`, and `address`.
// 11. Use the `delete` keyword to remove the `address` property from the `person` object.
// 12. Create another object named `employee` with properties for `name` and `position`. Combine the `person` and `employee` objects into a new object named `employeeDetails`.

// These tasks will enhance your understanding of working with objects in JavaScript. Objects are versatile and allow you to structure data in a meaningful way. Best of luck! 🌟

const person = {
    name: 'Sakura Miyawaki',
    age: '26',
    address: 'Kagoshima City, Japan'
}

console.log('\nArray before: ');
console.log(person);

delete person.address;

console.log('\nArray after: ');
console.log(person);

const employee = {
    name: 'Saku-chan',
    position: 'Le Sserafim Vocalist'
};

const employeeDetails = {
    ...person,
    ...employee,
};

console.log('\nCombined array: ');
console.log(employeeDetails);