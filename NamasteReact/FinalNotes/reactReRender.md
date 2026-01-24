# Re-render
- The component is just a function
- When state changes, React calls the component function again
- The component’s body runs from top to bottom

Everything inside it is re-executed
So:
1. New variables
2. New objects
3. New arrays
4. New functions 
All get created fresh.


⭐ Memoization hooks (useCallback, useRef) prevent this.



```
const debouncedSendRequest = debounce(sendRequest, 500);

```

React re-renders → this line runs again → this happens:

1. debounce(sendRequest, 500) is called again
2. A new debounced function is created
3. A new timer variable is created inside debounce
4. The old debounced function + its timer are lost

So old timers cannot be cleared → Multiple delayed requests fire (not debounced)


function a() {}
function a() {}

These are two separate function objects, even if code is identical.

React re-render = component function run again → new function objects every time → new references.


# How do we prevent new function creation?

Use:

✔ useCallback

or

✔ useRef

Example:

const debouncedSendRequest = useCallback(
  debounce(sendRequest, 500),
  []
);

This ensures:

1. debounce is called once

2. debounced function is reused forever

3. same reference on each render

4. timers clear properly → true debouncing

✔ Memoize with useCallback so the function is created only once.


# Does re-render create a new function?
✔️ Yes.
✔️ Not just a new reference — a new actual function object.

const Component = () => {
  const fn = () => console.log("Hi");
  return <div />;
};

Render #1 → fn is created
Render #2 → fn is created again
Render #3 → fn is created again

Each time, JavaScript creates a new function object in memory.

Even though the code is identical, it's a completely different function object each time.

```
let prev;

function Component() {
  const fn = () => {};

  console.log(fn === prev); // always false
  prev = fn;

  return null;
}
```


🧠 Why does React recreate functions?
Because:

The component is just a function

When state changes, React calls the component function again

The component’s body runs from top to bottom

Everything inside it is re-executed

So:

new variables

new arrays

new objects

new functions

All get created fresh.

This is normal and expected.