# Parameter Type Annotations

```
function greet(name: string) {
}

function sum({ a, b, c }: { a: number; b: number; c: number }) {
 
}
```

# callback as parameter
function myForEach(callback: (arg: any, index?: number) => void) {
    callback();
}

# Return Type Annotations

```
function getFavoriteNumber(): number {
  return 26;
}
```

# Functions Which Return Promises
```
async function getFavoriteNumber(): Promise<number> {
  return 26;
}
```


# void
- void represents the return value of functions which don’t return a value

```
function f2(): void {
 
}
 
const f3 = function (): void {
  
};
```

# Function (⚠️ Avoid)
No type safety
accepts ANY function

```
function doSomething(f: Function) {
  return f(1, 2, 3);
}
```

# Assignability of Functions

```
type voidFunc = () => void;
 
const f1: voidFunc = () => {
  return true;
};
 
const f2: voidFunc = () => true;
 
const f3: voidFunc = function () {
  return true;
};
```