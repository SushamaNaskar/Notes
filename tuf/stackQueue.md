# Stack
stack is a linear data structure that follows Last In First Out (LIFO) principle. This means that the last element added to the stack, will be the first one to be removed. We can only add or remove elements from top.

## Common operations
1. Push
2. Pop
3. Peek/Top

## Use 
1. Reversion a word
2. Backtracking algorithm
3. Implementation of function call in recursion

## ex:
         Array           Linked list
         []              head= null
push(1)  [1]             head->1->null
push(2)  [1,2]           head->2->1->null
push(3)  [1,2,3]         head->3->2->1->null
push(4)  [1,2,3,4]       head->4->3->2->1->null
top()    = 4             head.val=4
pop()   [1,2,3]          head->3->2->1->null
push(5) [1,2,3,5]        head->5->3->2->1->null
size()  = 4


# Queue
Queue is a linear data structure that follows First In First Out (FIFO) principle. This means that the first element added to the queue will be first one to be removed.

## Common operations
- Push
- Pop
- Peek/Top

## Use 
1. scheduling operations in operating system
2. handling requests in web server
3. bread-first search algorithms

## ex:
         Array                          Linked list
         []                         start = null, end = null
push(1) [1]                         start->end->1->null
push(2) [1,2]                       start->1->2(end)->null
push(3) [1,2,3]                     start->1->2->3(end)->null
push(4) [1,2,3,4]                   start->1->2->3->4(end)->null
top()   = 1                
pop()   Array.shift() [2,3,4]       start->2->3->4(end)->null
push(5) [2,3,4,5]                   start->2->3->4->5(end)->null
size()  = 4