//Implement a function that accepts an integer value and returns a function that can be repeatedly called to return increasing values

// Example:
// Let’s break it down with an example:

// If we call the outer function with the value 5, we expect the returned function to:

// First call return 5

// Then each subsequent call should return 6, 7, 8, and so on.


function createIncrementer(startValue) {

  return function() {
    return startValue++;  // Increment and return the current value
  };
}

// Example Usage:
const incrementer = createIncrementer(5);
console.log(incrementer()); // Output: 5
console.log(incrementer()); // Output: 6
console.log(incrementer()); // Output: 7
console.log(incrementer()); // Output: 8