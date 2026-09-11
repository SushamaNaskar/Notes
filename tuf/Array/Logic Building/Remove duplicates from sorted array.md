# Remove duplicates from sorted array
Given an integer array nums sorted in non-decreasing order, remove all duplicates in-place so that each unique element appears only once.

Return the number of unique elements in the array.

If the number of unique elements be k, then,

- Change the array nums such that the first k elements of nums contain the unique values in the order that they were present originally.
- The remaining elements, as well as the size of the array does not matter in terms of correctness.
- The driver code will assess correctness by printing and checking only the first k elements of the modified array.

An array sorted in non-decreasing order is an array where every element to the right of an element is either equal to or greater in value than that element.

# Example 1

Input: nums = [0, 0, 3, 3, 5, 6]

Output: 4

Explanation:

Resulting array = [0, 3, 5, 6, _, _]

There are 4 distinct elements in nums and the elements marked as _ can have any value.

# Example 2

Input: nums = [-2, 2, 4, 4, 4, 4, 5, 5]

Output: 4

Explanation:

Resulting array = [-2, 2, 4, 5, _, _, _, _]

There are 4 distinct elements in nums and the elements marked as _ can have any value.

# Example 3

Input: nums = [-30, -30, 0, 0, 10, 20, 30, 30]

Select the possible resulting array.

Output:

[-30, 0, 10, 20, 30, _, _, _]

# Constraints
1 <= nums.length <= 105
-104 <= nums[i] <= 104
nums is sorted in non-decreasing order.

# Hints
## Hint 1
Since the array is sorted, duplicates will always be consecutive. Compare adjacent elements to identify duplicates and move unique elements forward.

## Hint 2
Keep a counter to track the number of unique elements as you traverse the array.

# Frequently Occurring Doubts
## What happens to the remaining elements after placing the unique elements?
The problem specifies that the elements after the first k unique values (where k is the number of unique elements) are irrelevant. They do not need to be in any particular order or have specific values, as only the first k elements are considered part of the result.

# Interview Follow-ups
## How would the solution change if the array was not sorted?
If the array was unsorted, the sorted property could not be used to identify duplicates in one pass. Instead: Sort the array first (O(nlogn)), then apply the two-pointer technique. Alternatively, use a hash set to track seen elements, but this would require O(n) extra space.

# Fun Facts
## Fact 1
The concept of removing duplicates from an array, as illustrated in the programming problem, is commonly applied in the real world software industry.

## Fact 2
One well-known example is in database management systems.

## Fact 3
If we consider a database as an array where each row corresponds to an array element, removing duplicates is equivalent to the SQL operation "SELECT DISTINCT", which is frequently used to obtain a list of unique records.

## Fact 4
Furthermore, this operation is often implemented in Javascript-based web development for data manipulation in various web apps to ensure data integrity and avoid redundancy.


# Brute 
## Intuition
The naive way is to think of a data structure that does not store duplicate elements, that is HashSet. Keep track of unique elements in hashset, and at last copy all the elements from the HashSet to the original array.

## Approach 
- Declare a HashSet and traverse the array by putting every element of the array in the HashSet
- Store size of the set in a variable K. Now put all elements of the set in the array from the starting of the array and finally return K

## Java
```
import java.util.*;

class Solution {
    // Function to remove duplicates from the array
    public int removeDuplicates(int[] nums) {
        
        // TreeSet to store unique elements in sorted order
        Set<Integer> s = new TreeSet<>();
        
        // Add all elements from array to the set
        for (int val : nums) {
            s.add(val);
        }
        
        // Get the number of unique elements
        int k = s.size();
        
        int j = 0;
        // Copy unique elements from set to array
        for (int val : s) {
            nums[j++] = val;
        }
        
        // Return the number of unique elements
        return k;
    }
}

class Main {
    // Helper function to print first n elements of the array
    public static void printArray(int[] nums, int n) {
        for (int i = 0; i < n; i++) {
            System.out.print(nums[i] + " ");
        }
        System.out.println();
    }
    
    public static void main(String[] args) {
        int[] nums = {1, 1, 2, 2, 2, 3, 3};
        
        System.out.print("Original Array: ");
        printArray(nums, nums.length);
        
        // Create an instance of the Solution class
        Solution sol = new Solution();
        
        // Function call to remove duplicates from array
        int k = sol.removeDuplicates(nums);
        
        System.out.print("Array after removing the duplicates: ");
        printArray(nums, k);
    }
}

```

## JavaScript
```
class Solution {
    // Function to remove duplicates from the array
    removeDuplicates(nums) {
        
        // Set data structure to store unique elements
        let s = new Set();
        
        // Add all elements from array to the set
        for (let val of nums) {
            s.add(val);
        }
        
        // Get the number of unique elements
        let k = s.size;
        
        let j = 0;
        // Copy unique elements from set to array
        for (let val of s) {
            nums[j++] = val;
        }
        
        // Return the number of unique elements
        return k;
    }
}

// Helper function to print first n elements of the array
function printArray(nums, n) {
    for (let i = 0; i < n; i++) {
        process.stdout.write(nums[i] + " ");
    }
    console.log();
}

// Example usage
let nums = [1, 1, 2, 2, 2, 3, 3];

console.log("Original Array: ");
printArray(nums, nums.length);

// Create an instance of the Solution class
let sol = new Solution();

// Function call to remove duplicates from array
let k = sol.removeDuplicates(nums);

console.log("Array after removing the duplicates: ");
printArray(nums, k);
```

## Complexity Analysis 
Time Complexity: O(N * log N) + O(N), for using hashset, it will take O(N * log N) and also to traverse the array once O(N). Here N is the size of the array.

Space Complexity: O(N) because in the worst case, all the elements of the array can be unique and it will take O(N) space. Here N represents the size of the array.

# Optimal
## Intuition
Imagine you have a shelf where you keep your favorite books, and these books are sorted in alphabetical order. Over time, you notice that some books are repeated multiple times, and you want to organize the shelf so that each book title appears only once. Additionally, you don't want to change the order of the unique books on your shelf.

Here's what you would do:

Start at the beginning of the shelf and pick the first book. Look at the next book, if it's the same as the one just picked, then move on to the next book. If the next book is different, keep it next to the first book that is picked. Repeat this process for all books on the shelf.

Once all the books are checked, the first part of the shelf will have all the unique books in their original order. The rest of the books on the shelf don't matter, so ignore them.

## Approach 
- Initialize 2 variables i as 0 and variable j as 1, where i will track the position of the last unique element found and j will iterate through the array to find new unique elements.
- Iterate in array using j from second element to the end of the array.
- If the element at position j is different from the element at position i, it means a new unique element is found. This is because the array is sorted in non-decreasing order, so any new element that is different from the previous one must be unique.
- When a new unique element is found, increment i to move to the next position for storing unique elements. Copy the element at position j to the new position at i. This ensures that the first i + 1 elements of the array are all unique.
- Continue comparing elements and updating the array until j has iterated through the entire array. Once the loop completes, the value of i + 1 represents the number of unique elements in the array.

## Solutions

## Java
```
import java.util.*;

class Solution {
    // Function to remove duplicates from the array
    public int removeDuplicates(int[] nums) {
        
        
        // Initialize pointer for unique elements
        int i = 0;
        
        // Iterate through the array
        for (int j = 1; j < nums.length; j++) {
            /*If current element is different 
            from the previous unique element*/
            if (nums[i] != nums[j]) {
                /* Move to the next position in 
                the array for the unique element*/
                i++;
                /* Update the current position 
                   with the unique element*/
                nums[i] = nums[j];
            }
        }
        
        // Return the number of unique elements
        return i + 1;
    }
}

public class Main {
    public static void main(String[] args) {
        int[] nums = {1, 1, 2, 2, 2, 3, 3};
        
        // Create an instance of the Solution class
        Solution solution = new Solution();
        
        // Call removeDuplicates to remove duplicates from nums
        int k = solution.removeDuplicates(nums);
        
        System.out.println("The array after removing duplicate elements is ");
        for (int i = 0; i < k; i++) {
            System.out.print(nums[i] + " ");
        }
        System.out.println();
    }
}
```

## Javascript
```
class Solution {
    // Function to remove duplicates from the array
    removeDuplicates(nums) {
      
        // Initialize pointer for unique elements
        let i = 0;
        
        // Iterate through the array
        for (let j = 1; j < nums.length; j++) {
            /* If current element is different 
            from the previous unique element*/
            if (nums[i] !== nums[j]) {
                
                /* Move to the next position in 
                the array for the unique element*/
                i++;
                
                /* Update the current position 
                with the unique element*/
                nums[i] = nums[j];
            }
        }
        
        // Return the number of unique elements
        return i + 1;
    }
}

// Main function to test the implementation
if (typeof require !== 'undefined' && require.main === module) {
    let nums = [1, 1, 2, 2, 2, 3, 3];
    
    // Create an instance of the Solution class
    let solution = new Solution();
    
    // Call removeDuplicates to remove duplicates from nums
    let k = solution.removeDuplicates(nums);
    
    console.log("The array after removing duplicate elements is ");
    for (let i = 0; i < k; i++) {
        process.stdout.write(nums[i] + " ");
    }
    console.log();
}

```

## Complexity Analysis 
Time Complexity: O(N), for single traversal of the array, where N is the size of the array.

Space Complexity: O(1), not using any extra space.


# My understanding
The two questions
For every element, ask:
2. Is this a new unique element?
2. If it is unique, where should I put it

# Where is the last unique element currently stored?
- keeping track using a pointer (lets say write)

# The first element is automatically unique, so:
```
write = 0

arr = [1, 1, 2, 2, 3, 3]
       ↑
     write
```

# How do i find the next unique element?
scan using another pointer, say read.

```
write → last unique
read  → current element
```

# For each arr[read]:

```
if arr[read] != arr[write]:   // found a new unique element

    write++
    arr[write] = arr[read]
    
```

# formula
- Keep track of where the last unique element is.
- For each new element, compare it with the last unique element.
- If different, it is a new unique element → move write forward and put it there.

```
class Solution {
    public int removeDuplicates(int[] nums) {
        int len=nums.length;
        int write=0;

        for(int i=0;i<len;i++){
            if(nums[i]!=nums[write]){
                write++;
                nums[write]=nums[i];
            }
        }
        return write+1;
    }
}
```