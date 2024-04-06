// Task 2: Object Operations

// 4. Create an object named `student` with properties for `name`, `age`, and `grade`.
// 5. Modify the `age` property of the `student` object to a different value.
// 6. Add a new property named `subjects` to the `student` object, which should be an array of at least three subjects.

const student = {
    name: 'Hitori Gotoh',
    age: '15',
    grade: 'First Year Highschool',
    subjects: ['Music', 'Arts', 'Science']
};
console.log('\nAge before: ');
console.log(student.age);

console.log('\nAge after: ');
student.age = '17';
console.log(student.age);

console.log('\nArray with subjects: ');
console.log(student.subjects);