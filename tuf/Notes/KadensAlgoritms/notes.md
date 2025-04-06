# Kadane’s Algorithm 
Kadane’s Algorithm is used to find the maximum sum subarray in an array in O(N) time complexity.

# Concept:

- Iterate through the array while keeping track of:
  currentSum: The running sum of the current subarray.
  maxSum: The maximum sum found so far.

- If currentSum becomes negative, reset it to 0, since a negative sum won't contribute positively.

- The final maxSum gives the largest subarray sum.

# Implementation:

function maxSubarraySum(nums) {
let maxSum = -Infinity;
let currentSum = 0;

    for (let i = 0; i < nums.length; i++) {
       currentSum = Math.max(nums[i], currentSum + nums[i]);
        maxSum = Math.max(maxSum, currentSum);
    }

    return maxSum;

}
