Count subarrays with given xor K

# Brute force (using three for loops)
subarraysWithXorK(nums, k) {
        const n = nums.length;
        let count = 0;

        for (let i = 0; i < n; i++) {
            for (let j = i; j < n; j++) {
                let xorr = 0;

                for (let k = i; k <= j; k++) {
                    xorr ^= nums[k];
                }

                if (xorr === k) {
                    count++;
                }
            }
        }

        return count;
    }

 # Better (using two for loops)
  subarraySum(nums, k) {
        let totalCount = 0;

        for (let i = 0; i < nums.length; i++) {
            let sum = 0;

            for (let j = i; j < nums.length; j++) {

                sum += nums[j];

                if (sum === k) {
                    totalCount++;
                }
            }
        }

        return totalCount;
    }   



# Optimal

## using map
  subarraysWithXorK(nums, k) {
        const n = nums.length;
        let xr = 0;
        const mpp = new Map();
        // setting the value of 0.
        mpp.set(xr, (mpp.get(xr) || 0) + 1);
        let cnt = 0;

        for (let i = 0; i < n; i++) {
            // prefix XOR till index i:
            xr = xr ^ nums[i];

            // By formula: x = xr ^ k:
            const x = xr ^ k;

            // add the occurrence of xr ^ k to the count:
            cnt += mpp.get(x) || 0;

            // Insert the prefix xor till index i into the map:
            mpp.set(xr, (mpp.get(xr) || 0) + 1);
        }
        return cnt;
    }    