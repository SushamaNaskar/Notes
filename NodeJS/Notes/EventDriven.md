# Node.js features an event-driven architecture and supports asynchronous I/O (non-blocking I/O).


# JS is syncronous but with the help of node it become asynchronous

# Example of syncronous and asynchronous
- resturant
- coke 0 min
- pizza 10 min
- noodles 5 min
- 5 customer A,B,C,D,E
- Oders A-Coke, B-noodles, C- pizza, D-coke, E-noodles
- Syncronous way of execution: 
1. A - completed in 0 min and out of the queue
2. B - waiting for noodles for 5 mins
3. C - waiting for (5+10)
4. D - waiting for (5+10)
5. E- waiting for (5+10+5)

- Asyncronous way of execution:
1. A - completed in 0 min and out of the queue
2. B and c - placed the order for noddle and pizza and now in waiting state
3. D - completed in 0 min and out of the queue
4. E - placed the order for noddles and now in waiting state
3. B - waiting for noodles for 5 mins out of queue
4. E- waiting for 5+5 min and out of queue
3. C - waiting for 10 min 

# Libuv
- Node.js has a library called libuv, which helps to execute asynchronous operations such as reading a file, connecting to data base, api calls and timeout etc.

