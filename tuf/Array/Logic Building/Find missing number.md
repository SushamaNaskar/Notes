# Find missing number
Given an integer array of size n containing distinct values in the range from 0 to n (inclusive), return the only number missing from the array within this range.
# Example 1

Input: nums = [0, 2, 3, 1, 4]

Output: 5

Explanation:

nums contains 0, 1, 2, 3, 4 thus leaving 5 as the only missing number in the range [0, 5]

# Example 2

Input: nums = [0, 1, 2, 4, 5, 6]

Output: 3

Explanation: nums contains 0, 1, 2, 4, 5, 6 thus leaving 3 as the only missing number in the range [0, 6]

# Example 3

Input: nums = [1, 3, 6, 4, 2, 5]

Output:0

# Constraints

n == nums.length
1 <= n <= 104
0 <= nums[i] <= n
All the numbers of nums are unique.


# Hints

## Hint 1
"Use the formula for the sum of the first n natural numbers: S= (n×(n+1))/2. Subtract the sum of the array elements from S to find the missing number."

## Hint 2
Leverage the XOR property: x⊕x=0 and x⊕0=x. XOR all indices and array values; the missing number will be the result.


# Frequently Occurring Doubts
## Why use the sum formula instead of iterative checks?
The sum formula is faster (O(n)) compared to iterative checks (O(n2)) because the sum formula requires only a single pass to compute the sum of array elements and one subtraction. Iterative checks require comparing each number in the range to the array, which is inefficient.


## What happens if the missing number is 0 or n?
If 0 is missing, the sum formula still works because S includes 0 by definition. If n is missing, the sum formula accounts for n since it calculates the sum of the entire range, and subtracting the array sum leaves n

# Interview Follow-ups

## How would you handle the problem if duplicates are allowed in the array?
If duplicates are allowed: Use a hash set to track numbers present in the array. Iterate through 0 to n, checking if each number exists in the set. This approach requires O(n) time and O(n) space.

## How does the performance compare between the sum formula and XOR methods?
Both methods have O(n) time complexity and O(1) space complexity. The sum formula involves addition and subtraction, while the XOR method uses bitwise operations. XOR is slightly faster in practice due to the lower computational cost of bitwise operations.


# Fun Facts

## Fact 1
The problem concept of identifying missing elements in a sequence is commonly used in the software industry for a variety of purposes.

## Fact 2
For instance, it’s integral in database management where checking for missing IDs or sequence gaps is crucial.

## Fact 3
The concept is also highly relevant in network programming, specifically in TCP (Transmission Control Protocol) where packet sequence numbers are maintained.

## Fact 4
Identifying missing sequence numbers helps in detecting packet loss during data transmission.


# Optimal -1 Solution

## Intuition
The optimal is based on simple mathematics, where addition and summation of series is involved.

Ideally while solving this problem, if you think of calculating the sum of natural numbers from 0 to N and also compute the sum of all elements in the array separately. Then, just by subtracting the two results, we can easily identify the missing number. This missing number would not have been included in the sum of all elements of the given array.

## Approach 
- Calculate the summation of first N natural numbers(i.e. 1 to N) using the formula (N*(N+1))/2 and store in variable sum1
- Then add all the array elements by iterating in the array and store it in variable sum2
- Finally, consider the difference between the sum1and sum2, return it.


```
class Solution {
    // Function to find the missing number 
    missingNumber(nums) {
        // Calculate N from the length of nums
        let N = nums.length;
        
        // Summation of first N natural numbers
        let sum1 = (N * (N + 1)) / 2;
        
        // Summation of all elements in nums
        let sum2 = nums.reduce((acc, num) => acc + num, 0);
        
        // Calculate the missing number
        let missingNum = sum1 - sum2;
        
        // Return the missing number
        return missingNum;
    }
}

// Main function to test the implementation
const main = () => {
    // Example array with missing number
    const nums = [0,1, 2, 4];
    
    // Create an instance of the Solution class
    const solution = new Solution();
    
    /* Call the missingNumber method
    to find the missing number*/
    const ans = solution.missingNumber(nums);
    
    // Output the missing number
    console.log(`The missing number is: ${ans}`);
};

// Call the main function
main();
```

# Complexity Analysis
Time Complexity: O(N) where N is size of array, to compute the sum of the array elements.

Space Complexity: O(1) as no extra space is used.


# Optimal - 2 Solution
## Intuition
Another optimal approach, uses the below property of XOR to find the missing number.

XOR of two same numbers is 0.
The XOR of a number with 0 is the number itself
Understand that on calculating the XOR of all numbers from 1 to N we make sure that each number is included. After that on calculating the XOR of all the elements in the array & then performing XOR these two results, all the numbers present in the final result will appear twice expect for the one which is missing. Hence the number occurring twice turn out 0 satisfying first condition, and then followed by 0 ^ missing number, leaving the missing number itself.

## Approach 
Initialize two variables xor1, xor2 as 0. xor1 variable will calculate the XOR of 1 to N
Calculate the XOR of all the elements in the array by xor2 = xor2 ^ arr[i]..
Finally, the answer will be the XOR of xor1 and xor2.

## Java
```
import java.util.*;
class Solution {
    // Function to find missing number in array
    public int missingNumber(int[] nums) {
        int xor1 = 0, xor2 = 0;

        // Calculate XOR of all array elements
        for (int i = 0; i < nums.length; i++) {
            xor1 = xor1 ^ (i + 1); // XOR up to [1...N]
            xor2 = xor2 ^ nums[i]; // XOR of array elements
        }

        // XOR of xor1 and xor2 gives missing number
        return (xor1 ^ xor2);
    }

    public static void main(String[] args) {
        int[] nums = {1, 2, 4, 0};

        // Create an instance of the Solution class
        Solution solution = new Solution();

        /* Call the missingNumber method
        to find the missing number*/
        int ans = solution.missingNumber(nums);

        System.out.println("The missing number is: " + ans);
    }
}
```

## Complexity Analysis
Time Complexity: O(N) for getting the sum of the array elements, where N is the size of the array.

Space Complexity: O(1) as no extra space is used.


# My Understanding

## 1. XOR has 3 important rules


For two bits:
| A | B | A ^ B |
| - | - | ----- |
| 0 | 0 | 0     |
| 0 | 1 | 1     |
| 1 | 0 | 1     |
| 1 | 1 | 0     |


So the simple rule is:

  ***Same → 0, Different → 1***

For example:
```
    5 ^ 5 = 0
```

Because the binary representation is identical.

And:
```
    5 ^ 0 = 5
```

Because XOR with 0 changes nothing.

## 2. The most important property

XOR has a very useful property:
```
A ^ A = 0
```

So:
```
5 ^ 5 = 0
7 ^ 7 = 0
10 ^ 10 = 0
```

And:
```
A ^ A ^ B = B
```

For example:
```
5 ^ 5 ^ 7

= 0 ^ 7

= 7
```

The two 5s cancel each other out.

Also, the order doesn't matter:
```
5 ^ 7 ^ 5
```

can be thought of as:
```
5 ^ 5 ^ 7

= 0 ^ 7

= 7
```
## 3. Now look at your Missing Number problem

Suppose:

nums = [3, 0, 1]

The numbers should be:
```
0, 1, 2, 3
```
So 2 is missing.

Your code does:
```
int xor1 = 0;
int xor2 = 0;

for(int i = 0; i < nums.length; i++){
    xor1 ^= i + 1;
    xor2 ^= nums[i];
}
```
Let's trace it.

xor1

You're generating:

```
1, 2, 3
```

because:

```
i + 1
```

So:

```
xor1 = 1 ^ 2 ^ 3
xor2
```

You're taking the array:

```
xor2 = 3 ^ 0 ^ 1
```

Now return:

```
return xor1 ^ xor2;
```

So we get:

```
(1 ^ 2 ^ 3) ^ (3 ^ 0 ^ 1)
```

Rearrange:

```
1 ^ 2 ^ 3 ^ 3 ^ 0 ^ 1
```

Now cancel matching numbers:

```
1 ^ 1 = 0
3 ^ 3 = 0
```

Leaving:

```
2 ^ 0
```

And:

```
2 ^ 0 = 2
```

Therefore:

return 2;

## 4. Why does this work?

Your two XORs are basically creating:

```
xor1 = all numbers that should exist
xor2 = all numbers that actually exist
```

For:

```
nums = [3, 0, 1]
```

You have:

```
Should exist:   0 1 2 3
Actually exist: 0 1   3
```

When you XOR everything together:

```
0 ^ 1 ^ 2 ^ 3
^
0 ^ 1 ^ 3
```

The numbers that exist in both groups cancel:

```
0 ^ 0 → 0
1 ^ 1 → 0
3 ^ 3 → 0
```

Only:

2

is left.

That's the missing number.

## 5. One small thing about your code

You don't actually need xor1 and xor2 separately.

You could combine everything:

```

public int missingNumber(int[] nums) {
    int xor = nums.length;

    for (int i = 0; i < nums.length; i++) {
        xor ^= i;
        xor ^= nums[i];
    }

    return xor;
}
```

But your current version is actually easier to understand while learning, because you can clearly see:

xor1 → numbers that should exist
xor2 → numbers that actually exist
The DSA idea to remember

When you see XOR in a problem, immediately think:

"Duplicate values cancel each other: A ^ A = 0. What remains is the value that doesn't have a pair."
