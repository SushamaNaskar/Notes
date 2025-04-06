Kadane's Algorithm

Given an integer array nums, find the subarray with the largest sum and return the sum of the elements present in that subarray.

# Brute force (using three for loops)

 maxSubArray(nums) {
        let max = -Infinity;

        for (let i = 0; i < nums.length; i++) {
            for (let j = i; j < nums.length; j++) {

                let sum = 0;

                for (let k = i; k <= j; k++) {
                    sum += nums[k];

                }

                max = Math.max(max, sum);
            }
        }
        
        return max;
    }

# Better (using two for loops)

 maxSubArray(nums) {
        let max = -Infinity;

        for (let i = 0; i < nums.length; i++) {
            let sum = 0;

            for (let j = i; j < nums.length; j++) {

                sum+=nums[j]

               

                max = Math.max(max, sum);
            }
        }

        return max;
    }

# Optimal (Kadane’s Algorithm)

- Intuition 
The intuition of the algorithm is to not consider the subarray as a part of the answer if its sum is less than 0. A subarray with a sum less than 0 will always reduce the answer and so this type of subarray cannot be a part of the subarray with maximum sum.

- Approach 
Iterate in the array using a variable i & while iterating add the elements to the sum variable and consider the maximum one.
If at any point the sum becomes negative, reset the sum to 0 as that will be not considered as a part of our answer. Finally, return the maximum sum.

function maxSumSubarrayK(nums, k) {
    let sum = 0, maxSum = -Infinity;
    for (let i = 0; i < k; i++) sum += nums[i];

    maxSum = sum;
    for (let i = k; i < nums.length; i++) {
        sum += nums[i] - nums[i - k];
        maxSum = Math.max(maxSum, sum);
    }

    return maxSum;
}