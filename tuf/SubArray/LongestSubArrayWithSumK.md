Longest subarray with sum K
Given an array nums of size n and an integer k, find the length of the longest sub-array that sums up to k. If no such sub-array exists, return 0.


# Brute force (using three for loops)

  longestSubarray(nums, k) {
        let len=nums.length;
        let maxLen=0;

        for(let i=0;i<len;i++){
            for(let j=i;j<len;j++){
                let sum=0;

                for(let k=i;k<=j;k++){
                    sum+=nums[k];
                }

                if(sum==k){
                    maxLen=Math.max(maxLen,j-i+1);
                }
            }
        }

        return maxLen;
       
    }


# Better (using two for loops)

     longestSubarray(nums, k) {
        let len = nums.length;
        let maxLen = 0;

        for (let i = 0; i < len; i++) {
            let sum = 0;
            for (let j = i; j < len; j++) {
                sum+=nums[j];

                if (sum == k) {
                    maxLen = Math.max(maxLen, j - i + 1);
                }
            }
        }

        return maxLen;

    }

# optimal

## using map
  longestSubarray(nums, k) {
        let n = nums.length;
        let maxLen = 0;

        const map = new Map();
        let sum = 0;

        for (let i = 0; i < n; i++) {
            sum += nums[i];

            if (sum == k) {
                maxLen = Math.max(maxLen, i + 1);
            }

            const rem = sum - k;

            if (map.has(rem)) {
                const len = i - map.get(rem);
                maxLen = Math.max(maxLen, len);
            }

            if(!map.has(rem)){
                map.set(sum,i);
            }
        }

        return maxLen;

    }