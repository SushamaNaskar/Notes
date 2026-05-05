https://www.mygreatlearning.com/blog/collection-in-java/

# 🔹 1. What is Collections Framework?

👉 A unified architecture to store, manipulate, and process groups of objects.

It consists of:
- Interfaces (contracts)
- Classes (implementations)
- Algorithms (utility methods)


# 2. Full Hierarchy (MENTAL MAP)
```
Iterable
   ↓
Collection
   ├── List
   ├── Set
   └── Queue

Map (separate hierarchy)
```

## 🧠 Key:
👉 Map is NOT a Collection


# A. List (Ordered + Duplicates Allowed)

## 🔸 Characteristics
- Maintains insertion order
- Allows duplicates
- Index-based access


## 🔸 Implementations
1. ArrayList
2. LinkedList
3. Vector (Legacy)


## 1. ArrayList
```
List<Integer> list = new ArrayList<>();
```

✔ Fast read (O(1)) \
❌ Slow insert/delete in middle (shifting)

## 2. LinkedList
```
List<Integer> list = new LinkedList<>();
```
✔ Fast insert/delete \
❌ Slow access (no indexing internally) 

## 3. Vector (Legacy)
Thread-safe \
Slower (synchronization overhead)

## 👉 ArrayList vs LinkedList

| Feature       | ArrayList | LinkedList |
| ------------- | --------- | ---------- |
| Access        | Fast      | Slow       |
| Insert/Delete | Slow      | Fast       |
| Memory        | Less      | More       |


# ✅ B. Set (No Duplicates)

## 🔸 Characteristics
- No duplicate elements
- No indexing

## 🔸 Implementations
1. HashSet
2. LinkedHashSet
3. TreeSet

## 1. HashSet
```
Set<Integer> set = new HashSet<>();
```

✔ No order guarantee \
✔ Fast (O(1))

## 2. LinkedHashSet
```
Set<Integer> set = new LinkedHashSet<>();
```
✔ Maintains insertion order

## 3. TreeSet
```
Set<Integer> set = new TreeSet<>();
```

✔ Sorted order \
✔ Uses Red-Black Tree \
❌ Slower (O(log n))

### 👉 Why duplicates not allowed?

✔ Uses:
- hashCode()
- equals()


# ✅ C. Queue (Processing Order)

## 🔸 Characteristics
- FIFO (mostly)
- Used in scheduling, buffering

## 🔸 Implementations
1. PriorityQueue
2. LinkedList

## 1. PriorityQueue
```
Queue<Integer> q = new PriorityQueue<>();
```
✔ Elements sorted by priority \
❌ Not FIFO strictly

## 2. LinkedList
```
Queue<Integer> q = new LinkedList<>();
```
✔ FIFO behavior

## 🔥 Important Methods
| Method | Purpose     |
| ------ | ----------- |
| add()  | Insert      |
| poll() | Remove head |
| peek() | View head   |
