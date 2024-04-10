// Functions assume a 3 integer array. Unclear on how numbers are to be accessed
// from it so did it by parsing to those functions with the appropiate array index.
// Declaring and displaying variables.
let numArray = [5, 2.5, 13];
console.log(numArray);


// Function that totals an array
function findSum(nums) {
    let sum = 0;
    let toSum = nums;
    toSum.forEach(num => {
        sum += num;
        })
    return sum;
};

let total = findSum(numArray)
console.log("findSum result = " + findSum(numArray));




// Function that that subtracts the second number from the first number.
function subtractNumbers(num1, num2) {
    subtraction = num1 - num2;
    return subtraction;
};

console.log("Second number minus first number result = " +  subtractNumbers(numArray[0], numArray[1]));




// Function that multiplies two numbers.
function multiplyNumbers(num1, num2) {
    multiplication = num1 * num2;
    return multiplication;
};

console.log("multiplyNumbers result of first and third number = " +  multiplyNumbers(numArray[0], numArray[2]));




// Function that first checks if the dividing number is 0. 
// If false divides the first number by the second number.
function divideNumbers(total, num1) {
    divider = num1;
    if (divider == 0) {
        division = "Can not divide by zero.";
    } else {
        division = total / divider;
    }
    return division;
};

divisionResult = divideNumbers(total, numArray[2]);
console.log("divideNumbers result of findSum total divided by third number = "+ divisionResult);
