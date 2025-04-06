function printValue(val) {
  console.log(val);
}

// Debounce function using closure
function debounce(func, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func(...args);
    }, delay);
  };
}

// Create a debounced version of printValue
const debouncedPrint = debounce(printValue, 300);

// Test calls (only the last one prints!)
debouncedPrint(1);
debouncedPrint(2);
debouncedPrint(3);
