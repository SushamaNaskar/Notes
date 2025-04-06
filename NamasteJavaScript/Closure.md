# Closure
- function along with it's lexical scope bundle together forms a closure. In other words, the function defined in the closure ‘remembers’ the environment in which it was created.

function outerFunction() {
    let outerVariable = 'I am from outer function';

    function innerFunction() {
        console.log(outerVariable); // Accesses the variable from outerFunction's scope
    }

    return innerFunction;
}

const closureExample = outerFunction();
closureExample(); // Logs: "I am from outer function"

# Garbage collector
- Garbage collection (GC) is a process performed by the JavaScript engine to automatically free up memory that is no longer being used by the program. This helps in managing memory allocation efficiently and prevents memory leaks.

# Garbage collector and closure
- When closures are involved, variables referenced by the closure remain reachable as long as the closure itself is reachable. if they capture references to large objects or DOM elements that are no longer needed but remain in memory due to the closure’s reference, it can causes memory leaks.

function createClosure() {
    let largeArray = new Array(1000000).fill('*');

    return function() {
        console.log(largeArray.length);
    };
}

const closureFunc = createClosure();

In this example, largeArray is a large array that is referenced by the closure returned from createClosure. As long as closureFunc is reachable, largeArray will not be garbage collected.

Potential Memory Leaks with Closures:
Closures can inadvertently cause memory leaks if they capture references to large objects or DOM elements that are no longer needed but remain in memory due to the closure’s reference.