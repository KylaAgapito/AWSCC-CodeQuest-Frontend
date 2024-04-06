// Task 3: Object Methods

// 7. Create an object named `rectangle` with properties for `width` and `height`.
// 8. Add a method named `calculateArea` to the `rectangle` object that returns the area of the rectangle.
// 9. Invoke the `calculateArea` method and store the result in a variable, then print it to the console.

const rectangle = {
    calculateArea: function(width, height) {
        return width * height;
    }
}

const areaValue = rectangle.calculateArea(15, 10);
console.log('Area of the rectangle: ' + areaValue);