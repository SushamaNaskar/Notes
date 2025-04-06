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

function maxSubarraySum(nums) {
let maxSum = -Infinity;
let currentSum = 0;

    for (let i = 0; i < nums.length; i++) {
       currentSum = Math.max(nums[i], currentSum + nums[i]);
        maxSum = Math.max(maxSum, currentSum);
    }

    return maxSum;

}