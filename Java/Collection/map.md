#  Map (Separate but IMPORTANT)
- A map is a part of the collection framework but it does not implement a collection interface.
- A map stores values based on Key and value Pair.
- Duplicate value of the key is not allowed.

## 🔸 Implementations
1. HashMap
2. LinkedHashMap
3. TreeMap

<!-- # 1. HashMap

✔ Fast (O(1)) \
✔ Allows 1 null key -->

# 2. LinkedHashMap
✔ Maintains insertion order

# 3. TreeMap
✔ Sorted by keys (Red-Black Tree)

# 👉 Why Map not part of Collection?
✔ Because:

Collection → stores single objects \
Map → stores key-value pairs

# 1. HashMap
👉 HashMap stores key-value pairs using hashing for fast access (O(1) average).

```
Map<Integer, String> map = new HashMap<>();
```

# Internal Structure of HashMap

**A HashMap is basically:**  \
👉 Array of buckets


```
index → bucket
0     → (key1, value1)
1     → null
2     → (key2, value2) → (key3, value3)   // collision (Linked List / Tree)
```

Each bucket can contain:

- Single node, OR
- Linked List, OR
- Balanced Tree (Red-Black Tree) (Java 8+)

## Important Internal Classes
Each entry is:
```
static class Node<K,V> {
    final int hash;
    final K key;
    V value;
    Node<K,V> next;
}
```

## 🔹 3. How put(key, value) Works
### Step-by-step:

✅ Step 1: Compute hash

```
int hash = key.hashCode();
```

### ✅ Step 2: Find index

```
index = hash & (n - 1);
```

👉 n = array size

### ✅ Step 3: Check bucket

 **Case 1: Empty bucket** \
👉 Insert directly

**Case 2: Collision happens** \
👉 Compare keys using:

```
equals()
```

#### 🔥 Collision Handling

**Before Java 8:**  \
👉 Linked List


**Java 8+:** \
👉 If bucket size > 8 → convert to Red-Black Tree


## Final Flow:
```
key → hashCode() → index → bucket → equals() → insert/update
```
# summary
- HashMap internally uses an array of buckets.
- When we insert a key-value pair, it computes the hashCode of the key and maps it to an index using a hash function. 
- If multiple keys map to the same index, collisions are handled using a linked list or a red-black tree in Java 8+.
- Retrieval uses hashCode and equals to locate the correct entry. 
- It resizes dynamically based on load factor.”

## How get(key) Works

### Steps:
- Compute hash
- Find index
- Traverse bucket:
   * If 1 element → return
   * If multiple → use equals() to match key


# What is Load Factor?
👉 Load Factor = how full the HashMap is allowed to get before resizing

Formula
```
Load Factor = number of elements / capacity
```


# 🔹 Default Value

👉 0.75 (75%)

Meaning:

HashMap will fill up to 75%
After that → resize


# 🔹 Example
Initial capacity = 16

```
Threshold = 16 × 0.75 = 12
```
👉 When you insert the 13th element, resizing happens.


# If load factor is HIGH (e.g., 0.9)

❌ More elements per bucket
❌ More collisions
❌ Slower get() (more traversal)

# If load factor is LOW (e.g., 0.5)

❌ Less collisions
✅ Faster access
❌ But wastes memory (more empty space)

# 🔥 Why Resizing Happens?
👉 To reduce collisions and maintain O(1) performance


# Problem Without Resizing
Imagine:

```
capacity = 4
elements = 10
```

👉 Buckets become crowded:
```
bucket[1] → A → B → C → D
```
❌ Lookup becomes slow → O(n)

## 🔹 Solution: Resize
👉 Increase capacity → reduce crowding


# 🔥 What Happens During Resizing?

## 1. New capacity
```
Old: 16 → New: 32
```
👉 Always doubles

## 2. Rehashing

👉 Every element is:

Recalculated
Placed into new bucket
```
newIndex = hash & (newCapacity - 1);
```

## 3. Redistribution

👉 Elements spread out → fewer collisions


## 🔥 Important Insight (INTERVIEW LEVEL)

👉 During resize, elements do NOT stay in same bucket