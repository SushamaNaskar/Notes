# Sliding window
The Sliding Window technique is used when you need to find an optimal subarray or substring in terms of length, sum, or unique properties.

# Types of Sliding Windows
Fixed-size Window: When the window size is predetermined.
Variable-size Window: When the window expands or shrinks dynamically.

# Maximum Sum Subarray of Size K (Fixed Window)
function maxSumSubarray(arr, k) {
    let maxSum = 0;
    let currentSum = 0;

    // Calculate the sum of the first 'k' elements
    for (let i = 0; i < k; i++) {
        currentSum += arr[i];
    }
    maxSum = currentSum;

    // Slide the window over the rest of the array
    for (let i = k; i < arr.length; i++) {
        currentSum += arr[i] - arr[i - k];
        maxSum = Math.max(maxSum, currentSum);
    }

    return maxSum;
}

# Longest Substring Without Repeating Characters (Variable Window)

function longestUniqueSubstring(s) {
    let left = 0, maxLength = 0;
    let charSet = new Set();

    for (let right = 0; right < s.length; right++) {
        while (charSet.has(s[right])) {
            charSet.delete(s[left]);
            left++; // Shrink window
        }
        charSet.add(s[right]);
        maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength;
}


# Two Pointers Technique
The Two Pointers technique is used when you need to compare or manipulate two elements in an array.

# Types of Two Pointers
Opposite Direction: One pointer starts from the left, the other from the right.
Same Direction (Sliding Window): Both pointers move from left to right.

# How to Identify Sliding Window / Two Pointers in Subarray Problems

# When to Use Sliding Window / Two Pointers:
- Use Sliding Window when dealing with continuous subarrays that grow/shrink dynamically.

Sliding Window is used for problems involving contiguous subarrays and conditions such as:

Fixed-size subarray (e.g., "Find the maximum sum of K consecutive elements").
Variable-size subarray (e.g., "Find the smallest subarray with sum ≥ K").

# When Not to Use Sliding Window / Two Pointers:

- If the problem involves subarrays with exact sums (like sum K or XOR K), use Prefix Sum / HashMap.
- If negative numbers are present, Kadane’s Algorithm or HashMap is usually better.


## Key Identifiers for Sliding Window / Two Pointers:

"Find the longest/shortest subarray with a condition"

1. Find the longest subarray with sum ≤ K
Solution: Use Sliding Window (Two Pointers) to expand and contract the window efficiently.
"Find the maximum/minimum sum of a subarray of size K"

2. Find the maximum sum of K consecutive elements
Solution: Use Fixed-size Sliding Window to maintain a running sum.
"Count subarrays that satisfy a condition"

3. Count subarrays where the number of odd elements ≤ K
Solution: Use Variable-size Sliding Window with a counter.
"Find a subarray that meets a target sum/condition"

4. Find the smallest subarray with sum ≥ K
Solution: Use Two Pointers to shrink the window once the condition is met.



## subArray

Find the longest subarray with at most K distinct elements → Sliding Window (O(N))
Find the maximum sum of K consecutive elements → Sliding Window (O(N))
Find the subarray with the largest average sum → Sliding Window (O(N))
Find the minimum size subarray with sum ≥ K → Sliding Window (O(N))
Find the shortest subarray with sum ≥ K → Sliding Window / Two Pointers (O(N))
Find the number of subarrays with at most K odd numbers → Two Pointers (O(N))

## subString
Used for: Fixed or variable-length substring problems that involve finding optimal substrings.

Longest Substring with At Most K Distinct Characters
Longest Substring Without Repeating Characters
Smallest Substring Containing All Characters of Another String


#GFG
https://www.geeksforgeeks.org/problems/smallest-window-in-a-string-containing-all-the-characters-of-another-string-1587115621/1?page=1

https://www.geeksforgeeks.org/problems/smallest-window-in-a-string-containing-all-the-characters-of-another-string-1587115621/1?page=1&category=sliding-window&sortBy=submissions


https://www.geeksforgeeks.org/problems/count-number-of-substrings4528/1?page=1&category=sliding-window&sortBy=submissions


https://www.geeksforgeeks.org/problems/length-of-the-longest-substring3036/1?page=1&category=sliding-window&sortBy=submissions


https://www.geeksforgeeks.org/problems/smallest-distant-window3132/1?page=1&category=sliding-window&sortBy=submissions


https://www.geeksforgeeks.org/problems/count-occurences-of-anagrams5839/1?page=1&category=sliding-window&sortBy=submissions



https://www.geeksforgeeks.org/problems/substrings-of-length-k-with-k-1-distinct-elements/1?page=2&category=sliding-window&sortBy=submissions


https://www.geeksforgeeks.org/problems/check-if-permutation-is-substring/1?page=2&category=sliding-window&sortBy=submissions


https://www.geeksforgeeks.org/problems/longest-k-unique-characters-substring0853/1?page=1&category=two-pointer-algorithm&sortBy=submissions


https://www.geeksforgeeks.org/problems/count-number-of-substrings4528/1?page=1&category=two-pointer-algorithm&sortBy=submissions

https://www.geeksforgeeks.org/problems/valid-substring0624/1?page=1&category=two-pointer-algorithm&sortBy=submissions

https://www.geeksforgeeks.org/problems/fruit-into-baskets-1663137462/1?page=1&category=two-pointer-algorithm&sortBy=submissions

https://www.geeksforgeeks.org/problems/string-palindromic-ignoring-spaces4723/1?page=2&category=two-pointer-algorithm&sortBy=submissions

https://www.geeksforgeeks.org/problems/reverse-a-string-with-spaces-intact5213/1?page=3&category=two-pointer-algorithm&sortBy=submissions

https://www.geeksforgeeks.org/problems/longest-repeating-character-replacement/1?page=3&category=two-pointer-algorithm&sortBy=submissions