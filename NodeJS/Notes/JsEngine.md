# Javascript runtime envirment
- has all the things inside it to run javascript code.
- To run javascript code we need:
1. Javascript engine
2. Set of apis to connect to the outer enviorment : setTimeOut, console etc.
3. Event loop, callback queue and microtask queue

- Every browser has it's own javascript runtime enviorment
- Node.js is a javascript runtime enviorment that allows us to run javascript code outside web browser.


# Javascript engine
- Every browser has it's own javascript engine. All these engines follows the ECMAScript standard.
ex: 
- Chakra used in microsoft edge, 
- spiderMonkey used in Mozilla fixefox which is also the first js engine, created by Brendan Eich in 1995 for Netscape Navigator web browser. This evolved into the SpiderMonkey engine, still used by the Firefox browser.
- v8 for google chrome and node.js


- Javascript engine is nothing but a normal program or code, written in low-level languages. ex: v8 written in cpp. Like a normal program, it takes in high-level code(which we write in js) and creates the machine-level code which can be executed by the machine.

- Javascript engine takes human readable codes as input
- this code now goes throught three major steps: parsing -> compilation -> execution

# Phases or process of javascript engine
- There are three major steps: parsing -> compilation -> execution

# Parsing
Parsing involves reading the JavaScript code and converting it into a format that the engine can work with.

- Tokenization: The source code is converted into tokens, which are small, manageable pieces of the code (keywords, operators, literals, etc.).
- Parsing: Tokens are analyzed to generate an Abstract Syntax Tree (AST). The AST represents the hierarchical structure of the code.

#  Compilation
- JavaScript engines use a mix of Just-In-Time (JIT) compilation and interpretation to execute code.

Interpreter: Initially, JavaScript engines use an interpreter to quickly convert the AST into bytecode.
 <!-- This step allows for fast startup times. -->
Baseline Compiler: The interpreter may pass the bytecode to a baseline compiler for further optimization. 
<!-- The baseline compiler performs basic optimizations. -->
Optimizing Compiler: For frequently executed code (hot code), the optimizing compiler takes over. often producing highly optimized machine code.
<!-- It performs more aggressive optimizations based on profiling data collected during execution. -->

# Execution Process
The execution of JavaScript involves interpreting or running the compiled bytecode on the underlying hardware.

Execution Context: When code is executed, a new execution context is created. This context contains information about variables, the scope chain, and the this object.
Call Stack: JavaScript uses a call stack to manage function calls. Each function call creates a new stack frame.
Garbage Collection: JavaScript engines use garbage collection to automatically manage memory. The garbage collector identifies and removes objects that are no longer needed.

# Detailed Process:
1. Loading: JavaScript code is loaded from files or other sources.
2. Tokenization: The code is broken into tokens.which are small, manageable pieces of the code (keywords, operators, literals, etc.).
3. Parsing: Tokens are parsed into an AST. The AST represents the hierarchical structure of the code.
4. Initial Compilation (Interpreter): The AST is converted into bytecode by an interpreter.
5. Baseline Compilation: The bytecode is optimized by a baseline compiler.
6. Optimization: Hot code is further optimized by an optimizing compiler, often producing highly optimized machine code.
7. Execution: The bytecode (or machine code) is executed by the JavaScript engine.
8. Garbage Collection: Unused memory is reclaimed by the garbage collector.

# Just-In-Time Compilation (JIT)
A hybrid approach where code is initially interpreted and then compiled during runtime for optimization.

JIT compilation blends interpretation and compilation for better performance:

Interpreter: Quickly executes the code by interpreting bytecode.
Baseline Compiler: Provides basic optimizations to speed up execution.
Optimizing Compiler: Collects profiling data to identify hot code and applies advanced optimizations.

# Execution Engines:
V8: Chrome and Node.js engine, known for its fast performance and use of Ignition (interpreter) and TurboFan (optimizing compiler).
SpiderMonkey: Firefox engine, with similar JIT and optimization strategies.
JavaScriptCore: Safari engine, also known as Nitro, with a focus on performance optimization.