# Object
- An object is a real-world entity created from a class that contains:
State (variables)
Behavior (methods)

# 🔹 2. Instance (What it really means)

👉 An instance means:

A specific occurrence of a class in memory.

✔️ In simple words:

Object = Instance (both mostly used interchangeably in interviews) \
But “instance” focuses more on existence in memory


# 🔹 3. Memory Allocation (VERY IMPORTANT 🔥)
When you create an object:

```
Car c1 = new Car();
```

## Step-by-step memory flow:

✅ 1. Car c1 \
Reference variable created \
Stored in Stack memory

✅ 2. new Car() \
Object created in Heap memory \

✅ 3. Assignment \
c1 stores the address (reference) of the object

## 📊 Memory Diagram (Interview Gold 💯)

```
STACK MEMORY                HEAP MEMORY
-------------              -----------------
c1  -----------▶           [ Car Object ]
                           - color
                           - speed
                           - methods
```


# 🔥 Key Points for Interviews

✔️ Object is stored in Heap memory \
✔️ Reference variable is stored in Stack \
✔️ Multiple objects = multiple memory allocations \
✔️ Each object has its own copy of instance variables \
✔️ Methods are shared (only one copy in memory)


## ⚠️ Common Mistake (VERY IMPORTANT)

❌ Thinking object is stored in stack \
✔️ Only reference is in stack, actual object is in heap