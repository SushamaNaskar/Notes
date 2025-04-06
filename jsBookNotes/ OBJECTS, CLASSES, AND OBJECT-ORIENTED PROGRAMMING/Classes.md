- class declarations are block scoped:
{
function FunctionDeclaration() {}
class ClassDeclaration {}
}

- class declarations are not hoisted:
console.log(ClassDeclaration); // ReferenceError: ClassDeclaration is not defined
class ClassDeclaration {}
console.log(ClassDeclaration); // class ClassDeclaration {}

- By default, everything inside a class definition executes in strict mode.
- As with function constructors, most style guides will direct you to capitalize the class name to distinguish it from instances that are created from it 

# The Class Constructor
- Using the method name constructor will signal to the interpreter that this particular function should be invoked to create a fresh instance using the new operator. 
- Calling a class constructor using new will do the following:
1. A new object is created in memory.
2. The new object’s internal [[Prototype]] pointer is assigned to be the constructor’s prototype property.
3. The this value of the constructor is assigned to the new object (so this points to the new object when referenced inside the constructor).
4. The code inside the constructor is executed (adds properties to the new object).
5. If the constructor function returns an object, that object is returned. Otherwise, the new object that was just created is returned.

class Vegetable {
constructor() {
this.color = 'orange';
}
}

let v = new Vegetable();
console.log(v.color); // orange

- Parameters provided when instantiating the class are used as parameters to the constructor function.
If you do not require the use of parameters, empty parentheses following the class name are optional:

class Person {
constructor(name) {
console.log(arguments.length);
this.name = name || null;
}
}
let p1 = new Person; // 0
console.log(p1.name); // null