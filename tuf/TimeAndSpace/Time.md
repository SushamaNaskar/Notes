# O(N)
- for loop 1-N

```
for(let i=0;i<N;i++){}
```

# O(N) + O(N) = O(2N)
- due to two linear traversals, where N is the length of the array

```
for(let i=0;i<N;i++){}
for(let i=0;i<N;i++){}
```


# N*logN (where N is the length of the array)
- it takes logN time to sort one element, so N * logN time for N elements

```
  nums.sort((a, b) => a - b);
```

