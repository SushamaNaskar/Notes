# object used as key in another object

- when objects are used as keys in an object, the object's default behavior is to convert the object to a string representation. 
- In this case, both b and c are converted to the string [object Object], which means that they both end up being used as the same key in the a object. 
- As a result, the value of the property that is set using the object c as the key overwrites the value of the property that was set using the object b as the key.
```
let a = {};
let b = { key: "b" };
let c = { key: "c" };

a[b] = 123;
a[c] = 456;

console.log(a[b]);

output:

{
    "[object Object]": 456
}
```


# object reference
- first obj2 was having the refrence of obj1
- later obj2 is assigned a new object
- so obj2 is not holding the refernce of obj1
- so obj1 and obj3 are haing same value  {key:"new value" }and obj2 now has the new object{ key:"another value"}
```
let obj1 = { key: "value" };
let obj2 = obj1;
let obj3 = obj2;

obj1.key = "new value";
obj2 = { key: "another value" };

console.log(obj1.key, obj2.key, obj3.key);

Answer -  `new value` `another value` `new value`.
```

- a and b has same object referrence
```
let a = {
  x: 1,
  y: 2,
};
let b = a;
a.x = 5;
console.log(a);
console.log(b);

Answer - {x:5, y:2} {x:5, y:2}

```

# this as object method and function defination

- when obj.b is called this is obj, so this.a is "foo"
- c is function (){ console.log(this.a)}. , a is not present since this is undefined 
```
const obj = {
  a: "foo",
  b: function () {
    console.log(this.a);
  },
};

const c = obj.b;

obj.b();
c();

Answer - foo, undefined
```

# obj passed as argument to a function defination
```
const x = { foo: 1 };
const y = { foo: 2 };

function addFoo(obj) {
  return obj.foo + 1;
}

console.log(addFoo(x));
console.log(addFoo(y));

Answer - 2, 3
```

# Merging Objects
```
let obj = { name: "John", age: 25 };
let newObj = { ...obj, age: 30 };

console.log(obj.age);
console.log(newObj.age);
```


# object creation
```
const name = "John";
const age = 25;

const user = { name, age };
console.log(user);
```


# object destructuring
```
const obj = { a: 1, b: 2, c: 3 };
const { a, b } = obj;
console.log(a, b);

Answer: 1 2
```