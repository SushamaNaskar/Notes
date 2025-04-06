Given an array of integers nums and an integer k, return the total number of subarrays whose sum equals to k.

# Brute force (using three for loops)
  subarraySum(nums, k) {
        let totalCount = 0;

        for (let i = 0; i < nums.length; i++) {
            for (let j = i; j < nums.length; j++) {

                let sum = 0;
                for (let k = i; k <= j; k++) {
                    sum += nums[k];
                }

                if (sum === k) {
                    totalCount++;
                }
            }
        }

        return totalCount;
    }

# Better (using two for loops)
      subarraysWithXorK(nums, k) {
        const n = nums.length;
        let count = 0;

        for (let i = 0; i < n; i++) {
            let xorr = 0;
            for (let j = i; j < n; j++) {
                
                    xorr ^= nums[j];

                if (xorr === k) {
                    count++;
                }
            }
        }

        return count;
    }


# optimal

## using map
 let count = 0;
    let sum = 0;
    const map = new Map();
    map.set(0, 1); // To handle cases where subarray sum directly equals k

    for (let num of nums) {
        sum += num;
        
        // Check if (sum - k) exists in map
        if (map.has(sum - k)) {
            count += map.get(sum - k);
        }
        
        // Update map with the current sum
        map.set(sum, (map.get(sum) || 0) + 1);
    }
    
    return count;

}    