# SubArray

- contigious part of an array

[1,2,3] = [1] [1,2] [1,2,3] [2] [2,3] [3]

# Generate all subarray

```
for(i = 0 -> n){
  for(j = i -> n){
    for(k = i -> j){
        //every sub array possible
    }
  }
}

```

## dry run

i=0 j=0 k=0 [1]
j=1 k=0,1 [1,2]
j=2 k=0,1,2 [1,2,3]

i=1 j=1 k= 1 [2]
j=2 k= 1,2 [2,3]

i=2 j=2 k=2 [3]

# optimal solutions:

# Algorithm: Prefix Sum + HashMap

1. Longest Subarray with Sum K

- Algorithm: Prefix Sum + HashMap
- Time Complexity: O(N)
- Approach:
  Maintain a prefixSum and store first occurrences in a map.
  If prefixSum - k exists in the map, update maxLen.

2. Count Subarrays with Given XOR K

- Algorithm: Prefix XOR + HashMap
- Time Complexity: O(N)
- Approach:
  Maintain prefix XOR values in a hashmap.
  If prefixXOR ^ K exists, increment count.

3. Count Subarrays with Sum K

- Algorithm: Prefix Sum + HashMap
- Time Complexity:O(N)
- Approach:
  Use a hashmap to store frequency of prefixSum.
  For each new sum, check if (sum - k) exists and count occurrences.

# Kadane’s Algorithm (Greedy / Dynamic Programming)

1. Maximum Subarray Sum

- Algorithm: Kadane’s Algorithm (Dynamic Programming)
- Time Complexity: O(N)
- Approach:
  Maintain currentSum, resetting it if it goes negative.
  Track maxSum across iterations.

2. Maximum Subarray Product

- Algorithm: Modified Kadane’s Algorithm (Handling Negative Products)
- Time Complexity: 𝑂(𝑁)
- Approach:
  Maintain two variables: maxProduct and minProduct (to handle negatives).
  Update them based on current number and swap when encountering a negative.

# Optimal Algorithm Approach for Subarray Problems

1. Kadane’s Algorithm (Greedy / Dynamic Programming)
   Used for: Problems that require finding the maximum/minimum sum or product of a subarray.
   Optimal for: Single pass solution in O(N) time.
   Problems:
   Maximum Subarray Sum → Kadane’s Algorithm
   Maximum Subarray Product → Modified Kadane’s Algorithm (Handles negatives using min/max product tracking)

2. Prefix Sum + HashMap
   Used for: Problems that require finding a subarray with a given sum efficiently.
   Optimal for: Reducing nested loops in brute force to O(N) complexity.
   Problems: 3. Longest Subarray with Sum K → Prefix Sum + HashMap (Track first occurrence for max length) 4. Count Subarrays with Sum K → Prefix Sum + HashMap (Use frequency map for counting)

3. Prefix XOR + HashMap
   Used for: Problems that involve finding subarrays based on XOR conditions.
   Optimal for: Efficient counting of XOR conditions in O(N) complexity.
   Problems: 5. Count Subarrays with Given XOR K → Prefix XOR + HashMap (Track XOR frequency)

# Types of Subarray Coding Questions

1. Maximum / Minimum Sum or Product Subarrays (Kadane’s Algorithm )

   Find the maximum sum subarray → Kadane’s Algorithm (O(N))
   Find the minimum sum subarray → Kadane’s Algorithm with min tracking
   Find the maximum product subarray → Modified Kadane’s Algorithm (O(N))

2. Subarrays with a Given Sum / Difference (Prefix + hashmap)
   Find the longest subarray with sum K → Prefix Sum + HashMap (O(N))
   Count subarrays with sum K → Prefix Sum + HashMap (O(N))
   Find subarrays whose sum is divisible by K → Prefix Sum + Modulo HashMap (O(N))
   Count subarrays with given XOR K → Prefix XOR + HashMap (O(N))
   Find the longest subarray with XOR K → Prefix XOR + HashMap (O(N))

3. Sliding Window / Two Pointers
   Find the longest subarray with at most K distinct elements → Sliding Window (O(N))
   Find the maximum sum of K consecutive elements → Sliding Window (O(N))
   Find the subarray with the largest average sum → Sliding Window (O(N))
   Find the minimum size subarray with sum ≥ K → Sliding Window (O(N))
   Find the shortest subarray with sum ≥ K → Sliding Window / Two Pointers (O(N))
   Find the number of subarrays with at most K odd numbers → Two Pointers (O(N))

4. Miscellaneous Subarray Problems

Find the maximum sum subarray of size at most K → Sliding Window + Kadane’s (O(N))
