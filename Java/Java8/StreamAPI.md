# Stream API
- A Stream represents a sequence of elements from a source, such as a collection, array, or I/O channel, that can be processed in a pipeline of operations. 
- These operations can be intermediate (e.g., filtering, mapping) or terminal (e.g., collecting results, printing).

👉 stream does not store data — it processes data from sources like:
   * Collections (List, Set)
   * Arrays
   * I/O channels


```
list.stream()
    .filter(x -> x > 5)
    .map(x -> x * 2)
    .sorted()
    .forEach(System.out::println);
 ```

# Intermediate operationa
- Intermediate operational methods will not produce any results. 
- They usually accept functional interfaces as parameter and always returns new Stream.

 * filtering
 * mapping
 * sorting
 * distinct()

 # Terminal Operational 
- Terminal Operational methods will take input and produce results.
  * forEach()
  * collect()
  * count()
  * reduce()


# 🔹 Important Points (Interview Focus)
- Streams are not reusable
- Streams do not modify original data
- Supports method chaining
- Works with lambda expressions
- Can be parallel

# Streams are not reusable
👉 Once a stream is used (consumed), you cannot use it again.
👉 Always create a new stream if needed again

"Streams are single-use because they represent a one-time data flow."

## 👉 Why?

- A stream behaves like a pipeline
- Once data flows through it, it's closed

```
Stream<Integer> stream = list.stream();

stream.forEach(System.out::println); // First use

stream.forEach(System.out::println); // ❌ ERROR (IllegalStateException)
```

## ✅ Correct Way
```
list.stream().forEach(System.out::println);
list.stream().forEach(System.out::println);
```

# 2. Streams do NOT modify original data
👉 Streams are immutable → they create new results instead of changing the source

"Streams follow immutability — they transform data without altering the source."

```
List<Integer> list = Arrays.asList(1, 2, 3, 4);

List<Integer> result = list.stream()
    .map(x -> x * 2)
    .collect(Collectors.toList());

System.out.println(list);   // [1, 2, 3, 4]  ✅ unchanged
System.out.println(result); // [2, 4, 6, 8]
```

### ❗ Important
- Original list remains safe
- Stream operations are functional (no side effects)

# Works with Lambda Expressions
```
list.stream()
    .sorted((a, b) -> a - b)
    .forEach(System.out::println);
```

# 5. Streams can be Parallel
👉 Streams can run in multiple threads for better performance
```
list.parallelStream()
    .forEach(System.out::println);

```