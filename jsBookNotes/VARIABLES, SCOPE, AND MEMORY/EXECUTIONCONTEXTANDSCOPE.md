# EXECUTION CONTEXT AND SCOPE

# Scope Chain
- When code is executed in a context, a scope chain of variable objects is created. The purpose of the scope chain is to provide ordered access to all variables and functions that an execution context has access to. 

The global execution context is the outermost one. Depending on the host environment for an
ECMAScript implementation, the object representing this context may differ. In web browsers, the
global context is said to be that of the window object (discussed in the Browser Object Model chap-
ter), so all global variables and functions defined with var are created as properties and methods on
the window object. Declarations using let and const at the top level are not defined in the global
context, but they are resolved identically on the scope chain. 


If the context is a function, then the activation object is used as the variable object. An acti-
vation object starts with a single defined variable called arguments