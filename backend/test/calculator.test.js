const doMaths = require('../src/calculator');

describe("Calculator Tests", () => {
test("Addition of 2 numbers", () => {
// arrange and act
var result = doMaths.sum(1,2)

// assert
expect(result).toBe(3);
});

test("Subtraction of 2 numbers", () => {
// arrange and act
var result = doMaths.diff(10,2)

// assert
expect(result).toBe(8);
});

test("Multiplication of 2 numbers", () => {
// arrange and act
var result = doMaths.product(2,8)

// assert
expect(result).toBe(16);
});

test("Division of 2 numbers", () => {
// arrange and act
var result = doMaths.divide(24,8)

// assert
expect(result).toBe(3);
});
})