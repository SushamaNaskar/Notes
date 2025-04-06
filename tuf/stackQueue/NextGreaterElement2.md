Input: arr = [3, 10, 4, 2, 1, 2, 6, 1, 7, 2, 9]

Output: [10, -1, 6, 6, 2, 6, 7, 7, 9, 9, 10]

Logic
- assume it is a circular array
[3, 10, 4, 2, 1, 2, 6, 1, 7, 2, 9, 3, 10, 4, 2, 1, 2, 6, 1, 7, 2, 9]

- start from the last index = 2 * n-1
- check if the stack is empty
   1. if stack is not empty pop the lesser or equal elements than the current element
-  if the index is less than length, start updating the ans with top stack element, if no stack element is please update with -1
- push the current value into the stack


Dry run

i = 2 * 11 - 1 = 21
index = i % n = 21 % 11 = 10
arr[10] -> 9
stack is empty,no pop
i is greater than n, no update in arr
push the element
sack=[9];


i = 20
index = i % n = 20 % 11 = 9
arr[9] ->  2
stack is not empty, top stack element greater than current element, no pop
i is greater than n, no update in arr
push the element
sack=[2,9];

i = 19
index = i % n = 19 % 11 = 8
arr[8] ->  7
stack is not empty, stack top element is less than current, pop top
stack=[9]
i is greater than n, no update in arr
push the element
sack=[7,9];

i = 18
index = i % n = 18 % 11 = 7
arr[7] ->  1
stack is not empty, stack top element is greater than current, no pop
stack=[7,9]
i is greater than n, no update in arr
push the element
sack=[1,7,9];

i = 17
index = i % n = 17 % 11 = 6
arr[6] ->  6
stack is not empty, stack top element is less than current, pop top
stack=[7,9]
i is greater than n, no update in arr
push the element
sack=[6,7,9];

i = 16
index = i % n = 16 % 11 = 5
arr[5] ->  2
stack is not empty, stack top element is greater than current, no pop
stack=[6,7,9]
i is greater than n, no update in arr
push the element
sack=[2,6,7,9];

i = 15
index = i % n = 15 % 11 = 4
arr[4] ->  1
stack is not empty, stack top element is greater than current, no pop
stack=[2,6,7,9]
i is greater than n, no update in arr
push the element
sack=[1,2,6,7,9];


i = 14
index = i % n = 14 % 11 = 3
arr[3] ->  2
stack is not empty, stack top element is less than current, pop top
stack=[2,6,7,9]
stack is not empty, stack top element is equl to current, pop top
stack=[6,7,9]
i is greater than n, no update in arr
push the element
sack=[2,6,7,9];


i = 13
index = i % n = 13 % 11 = 2
arr[2] ->  4
stack is not empty, stack top element is less than current, pop top
stack=[6,7,9]
i is greater than n, no update in arr
push the element
sack=[4,6,7,9];


i = 12
index = i % n = 12 % 11 = 1
arr[1] ->  10
stack is not empty, stack top element is less than current, pop top
stack=[6,7,9]
stack is not empty, stack top element is less than current, pop top
stack=[7,9]
stack is not empty, stack top element is less than current, pop top
stack=[9]
stack is not empty, stack top element is less than current, pop top
stack=[]
i is greater than n, no update in arr
push the element
sack=[10];


i = 11
index = i % n = 11 % 11 = 0
arr[0] ->  3
stack is not empty, stack top element is greater than current, no pop
stack=[10]
i is greater than n, no update in arr
push the element
sack=[3,10];

i = 10
index = i % n = 10 % 11 = 10
arr[10] ->  9
stack is not empty, stack top element is greater than current, no pop
stack=[10]
i is less than n, update arr
arr[10]=10;
push the element
sack=[9,10];

i = 9
index = i % n = 9 % 11 = 9
arr[9] ->  2
stack is not empty, stack top element is greater than current, no pop
stack=[9,10]
i is less than n, update arr
arr[9]=9;
push the element
sack=[2,9,10];
