Kadane's Algorithm

Given an integer array nums, find the subarray with the smallest sum and return the sum of the elements present in that subarray.

# Brute force (using three for loops)

 maxSubArray(nums) {
        let min = Infinity;

        for (let i = 0; i < nums.length; i++) {
            for (let j = i; j < nums.length; j++) {

                let sum = 0;

                for (let k = i; k <= j; k++) {
                    sum += nums[k];

                }

                min = Math.min(min, sum);
            }
        }
        
        return min;
    }

# Better (using two for loops)

 maxSubArray(nums) {
        let min = Infinity;

        for (let i = 0; i < nums.length; i++) {
            let sum = 0;

            for (let j = i; j < nums.length; j++) {

                sum+=nums[j]

               

                min = Math.min(min, sum);
            }
        }

        return min;
    }

# Optimal (Kadane’s Algorithm)

function minSubarraySum(nums) {
    let minSum = nums[0], currentSum = nums[0];

    for (let i = 1; i < nums.length; i++) {
        currentSum = Math.min(nums[i], currentSum + nums[i]);
        minSum = Math.min(minSum, currentSum);
    }

    return minSum;
}