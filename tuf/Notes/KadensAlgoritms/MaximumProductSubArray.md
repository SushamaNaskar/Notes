Given an integer array nums. Find the subarray with the largest product, and return the product of the elements present in that subarray.

# Brute force (using three for loops)
 maxProduct(nums) {
        let maxPro = -Infinity;

        for (let i = 0; i < nums.length; i++) {
            for (let j = i; j < nums.length; j++) {
                let pro = 1;

                for (let k = i; k <= j; k++) {
                    pro = pro * nums[k];

                }

                maxPro = Math.max(pro, maxPro);
            }
        }
        
        return maxPro;
    }

# Better (using two for loops)
 maxProduct(nums) {
        let maxPro = -Infinity;

        for (let i = 0; i < nums.length; i++) {
            let pro = 1;

            for (let j = i; j < nums.length; j++) {
                pro = pro * nums[j];

                maxPro = Math.max(pro, maxPro);
            }
        }

        return maxPro;
    }

# optimal   (Modified Kaden's Algoritm)

function maxProductSubarray(nums) {
    let maxProduct = nums[0];
    let minProduct = nums[0];
    let result = nums[0];

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] < 0) {
            [maxProduct, minProduct] = [minProduct, maxProduct]; // Swap if negative
        }
        
        maxProduct = Math.max(nums[i], nums[i] * maxProduct);
        minProduct = Math.min(nums[i], nums[i] * minProduct);
        
        result = Math.max(result, maxProduct);
    }

    return result;
}