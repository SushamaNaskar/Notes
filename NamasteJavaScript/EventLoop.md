# Event loop
The event loop is a mechanism that coordinates the execution of code, the collection and processing of events, and the execution of queued sub-tasks. It continuously checks the call stack and the task queues to determine what to execute next.

1. Check Call Stack: The event loop first checks if the call stack is empty.
2. Execute Task Queue: If the call stack is empty, the event loop checks the task queue (also known as the callback queue) and moves the first task to the call stack for execution.

# Microtask Queue
The microtask queue holds microtasks, which are executed immediately after the currently executing script. It has higher priority than callback queue.. Microtasks are usually scheduled by promises (e.g., Promise.then) and MutationObserver.

1. Microtasks: Include promise callbacks, MutationObserver callbacks.
2. Execution: After executing a task (or finishing the current synchronous code), the event loop processes all available microtasks before moving on to the next task in the task queue.

# MutationObserver
A MutationObserver provides a way to asynchronously observe changes to the DOM. It allows efficient handling of DOM changes, keeping the UI responsive and consistent.
<!-- You can configure it to listen for specific types of mutations, such as changes to attributes, child nodes, or the subtree of an element. -->

## Use Cases for MutationObserver
Allows efficient handling of DOM changes, keeping the UI responsive and consistent.

# MutationObserver callbacks
<!-- - MutationObserver callbacks are a specific type of microtask in JavaScript. -->
- When a MutationObserver detects changes in the DOM, it schedules a callback to handle these changes. This callback is known as mutationObserver callbacks.
- This callback is processed as a microtask and it has a higher priority than regular tasks in the task queue. 
<!-- Microtasks, including MutationObserver callbacks, are executed after the currently executing script and before any tasks from the task queue are processed. -->

## How MutationObserver Callbacks Work
DOM Mutation: A change occurs in the DOM (e.g., an element is added, removed, or modified).
Detection: The MutationObserver detects this change.
Callback Scheduling: The MutationObserver schedules its callback function as a microtask.
Microtask Execution: The event loop completes the current JavaScript execution context, processes all pending microtasks (including promise callbacks and MutationObserver callbacks), and only then moves on to tasks in the task queue.

# Callback Queue/ Task Queue
The Callback queue is where tasks are queued up to be executed after the current script execution. This includes events like setTimeout, setInterval, and I/O tasks.
<!-- Callback Queue gets the ordinary callback functions coming from the setTimeout() API after the timer expires. -->
1. Tasks: This includes events like setTimeout, setInterval, and I/O tasks.
2. Execution: Once the call stack is empty, the event loop picks up tasks from the task queue and pushes them onto the call stack for execution.

ex:
console.log('Start');

setTimeout(() => {
    console.log('Timeout');
}, 0);

Promise.resolve().then(() => {
    console.log('Promise');
});

console.log('End');


Call Stack: console.log('Start') → Output: Start
Call Stack: setTimeout callback is scheduled in the task queue.
Call Stack: Promise.resolve().then callback is scheduled in the microtask queue.
Call Stack: console.log('End') → Output: End
Microtask Queue: Executes the promise callback → Output: Promise
Task Queue: Executes the setTimeout callback → Output: Timeout


# Starvation
Starvation refers to a situation where certain tasks or operations are delayed or not executed because other tasks continuously occupy the event loop. This can happen due to various reasons, such as long-running tasks, frequent microtasks, or a continuous influx of higher-priority tasks.

1. Long-Running Tasks:
If a task takes a long time to complete, it can block the event loop, preventing other tasks or events from being processed. This can cause starvation for any tasks waiting in the queue.

2. Frequent Microtasks:
Microtasks, like promise callbacks and MutationObserver callbacks, have higher priority and are processed before tasks in the callback queue. If microtasks are continuously added, tasks in the callback queue may starve.

3. High-Priority Events:
If certain high-priority events are continuously being pushed to the event loop, lower-priority tasks may never get a chance to execute.