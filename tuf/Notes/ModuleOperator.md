# Module (%) Operator

- The modulus operator (%) returns the remainder when one number is divided by another.
- It is widely used to ensure indices stay within bounds, implement cyclic behaviors.

10 % 3 = 1

# Applications of Modulus in DSA

1. Circular Array Traversal

- The % operator helps in circular traversal, ensuring that when an index exceeds the array size, it wraps around to the beginning/ending.

## Forward Circular Traversal
- ensuring that when an index exceeds the array size, it wraps around to the beginning

Ex:
in below code the traversal happens 

first Index -> last Index(0->4)

once it reaches to the array last index (which results in 0)

for iteration(5 -> 9)

first Index -> last Index(0->4)

```
let arr[] = {10, 20, 30, 40, 50};
    let n = 5; // Array size

    for (let i = 0; i < n * 2 ; i++) {  // More than array size to show wrapping
        console.log(arr[i % n]);  // Cyclic index
    }

```

Output : 10 20 30 40 50 10 20 30 40 50

Iteration Breakdown:

  <table>
    <thead>
      <tr>
        <th>i</th>
        <th>i%n</th>
        <th>arr[i % n]</th>
        <th>Output</th>
      </tr>
    </thead>
    <tbody>
        <tr>
            <td>0</td>
            <td>0%5 = 0</td>
            <td>arr[0]</td>
            <td>10</td>
        </tr>
         <tr>
            <td>1</td>
            <td>1%5 = 1</td>
            <td>arr[1]</td>
            <td>20</td>
        </tr>
          <tr>
            <td>2</td>
            <td>2%5 = 2</td>
            <td>arr[2]</td>
            <td>30</td>
        </tr>
         <tr>
            <td>3</td>
            <td>3%5 = 3</td>
            <td>arr[3]</td>
            <td>40</td>
        </tr>
         <tr>
            <td>4</td>
            <td>4%5 = 4</td>
            <td>arr[4]</td>
            <td>50</td>
        </tr>
         <tr>
            <td>5</td>
            <td>5%5 = 0</td>
            <td>arr[0]</td>
            <td>10</td>
        </tr>
         <tr>
            <td>6</td>
            <td>6%5 = 1</td>
            <td>arr[1]</td>
            <td>20</td>
        </tr>
        <tr>
            <td>7</td>
            <td>7%5 = 2</td>
            <td>arr[2]</td>
            <td>30</td>
        </tr>
         <tr>
            <td>8</td>
            <td>8%5 = 3</td>
            <td>arr[3]</td>
            <td>40</td>
        </tr>
         <tr>
            <td>9</td>
            <td>9%5 = 4</td>
            <td>arr[4]</td>
            <td>50</td>
        </tr>
       </tbody>
  </table>


## Backward Circular Array Traversal
- ensuring that when an index exceeds the array size, it wraps around to the ending.

- Handling negative indices using % ensures proper wrapping.

Ex:
in below code the traversal happens 

last Index -> first Index (9->5)

once it reaches to the array length (which results in 0)

for iteration(4->0)

last Index -> first Index (4->0)

````

    let arr[] = {10, 20, 30, 40, 50};
    let n = 5; // Array size

    for (let i = n * 2 -1 ; i >= 0 ; i--) {  // More than array size to show wrapping
        console.log(arr[i % n]);  // Cyclic index
    }

````

Output : 10 20 30 40 50 10 20 30 40 50

Iteration Breakdown:

  <table>
    <thead>
      <tr>
        <th>i</th>
        <th>i%n</th>
        <th>arr[i % n]</th>
        <th>Output</th>
      </tr>
    </thead>
    <tbody>
        <tr>
            <td>9</td>
            <td>9%5 = 4</td>
            <td>arr[4]</td>
            <td>50</td>
        </tr>
         <tr>
            <td>8</td>
            <td>8%5 = 3</td>
            <td>arr[3]</td>
            <td>40</td>
        </tr>
         <tr>
            <td>7</td>
            <td>7%5 = 2</td>
            <td>arr[2]</td>
            <td>30</td>
        </tr>
         <tr>
            <td>6</td>
            <td>6%5 = 1</td>
            <td>arr[1]</td>
            <td>20</td>
        </tr>
         <tr>
            <td>5</td>
            <td>5%5 = 0</td>
            <td>arr[0]</td>
            <td>10</td>
        </tr>
         <tr>
            <td>4</td>
            <td>4%5 = 4</td>
            <td>arr[4]</td>
            <td>50</td>
        </tr>
         <tr>
            <td>3</td>
            <td>3%5 = 3</td>
            <td>arr[3]</td>
            <td>40</td>
        </tr>
         <tr>
            <td>2</td>
            <td>2%5 = 2</td>
            <td>arr[2]</td>
            <td>30</td>
        </tr>
         <tr>
            <td>1</td>
            <td>1%5 = 1</td>
            <td>arr[1]</td>
            <td>20</td>
        </tr>
         <tr>
            <td>0</td>
            <td>0%5 = 0</td>
            <td>arr[0]</td>
            <td>10</td>
        </tr>
       </tbody>
  </table>

  ## Traverse from a specific index
  - starts from the next index
  - as it comes to the last index
  - goes back to index 0

  ```
  let arr[] = {10, 20, 30};
  let n = 3; // Array size

  for (let i = 0; i < n ; i++) {  

    for(let j = 1 ; j < n ; j++){
     console.log(arr[(j + i) % n]);  // Cyclic index
    }
        
 }
```


Iteration Breakdown:

  <table>
    <thead>
      <tr>
        <th>Outer Iteration (i)</th>
        <th>Inner Iteration (j)</th>
        <th>j + i</th>
        <th>(j + i) % n</th>
        <th>arr[(j + i) % n]</th>
        <th>Output</th>
      </tr>
    </thead>
    <tbody>
        <tr>
            <td>0</td>
            <td>1</td>
            <td>0 + 1 = 1</td>
            <td>1 % 3 = 1</td>
            <td>arr[1]</td>
            <td>20</td>
        </tr>
         <tr>
            <td>0</td>
            <td>2</td>
            <td>0 + 2 = 2</td>
            <td>2 % 3 = 2</td>
            <td>arr[2]</td>
            <td>30</td>
        </tr>
         <tr>
            <td>1</td>
            <td>1</td>
            <td>1 + 1 = 2</td>
            <td>2 % 3 = 2</td>
            <td>arr[2]</td>
            <td>30</td>
        </tr>
         <tr>
            <td>1</td>
            <td>2</td>
            <td>1 + 2 = 3</td>
            <td>3 % 3 = 0</td>
            <td>arr[0]</td>
            <td>10</td>
        </tr>
         <tr>
            <td>2</td>
            <td>1</td>
            <td>2 + 1 = 3</td>
            <td>3 % 3 = 0</td>
            <td>arr[0]</td>
            <td>10</td>
        </tr>
         <tr>
            <td>2</td>
            <td>2</td>
            <td>2 + 2 = 4</td>
            <td>4 % 3 = 1</td>
            <td>arr[1]</td>
            <td>20</td>
        </tr>
       </tbody>
  </table>