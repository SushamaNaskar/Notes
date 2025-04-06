# The Boolean Type
has only two literal values: true and false.

# Boolean()
All types of values have Boolean equivalents in ECMAScript. To convert a value into its Boolean equivalent, the special Boolean() casting function is called, like this:
let message = "Hello world!";
let messageAsBoolean = Boolean(message);

Boolean() returns true for
- Boolean -> true 
- String -> Any nonempty string
- Number -> Any nonzero number (including infinity)
- Object -> Any object (including {})

Boolean() returns false for
- Boolean -> false
- String -> ''
- Number -> 0, NaN
- Object -> null
- undefined