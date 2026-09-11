# Move Zeros to End
Given an integer array nums, move all the 0's to the end of the array. The relative order of the other elements must remain the same.

This must be done in place, without making a copy of the array.

# Example 1

Input: nums = [0, 1, 4, 0, 5, 2]

Output: [1, 4, 5, 2, 0, 0]

Explanation:

Both the zeroes are moved to the end and the order of the other elements stay the same

# Example 2

Input: nums = [0, 0, 0, 1, 3, -2]

Output: [1, 3, -2, 0, 0, 0]

Explanation:

All 3 zeroes are moved to the end and the order of the other elements stay the same

# Example 3

Input: nums = [0, 20, 0, -20, 0, 20]

Output:

[20, -20, 20, 0, 0, 0]


# Constraints

1 <= nums.length <= 105
-104 <=nums[i] <= 104

# Hints

## Hint 1
Use two pointers to iterate through the array. One pointer keeps track of the current position, and the other identifies where the next non-zero element should go.

## Hint 2
Focus on swapping non-zero elements to the front while keeping track of the current index for placing zeros at the end. Avoid creating a new array by modifying the original array directly. Shift non-zero elements left and fill zeros at the end.


# Frequently Occurring Doubts
## What ensures the relative order of non-zero elements is preserved?
By iterating from left to right and moving each non-zero element to the next available position, the algorithm keeps their original sequence intact. Zeros are moved to the end only after all non-zero elements are correctly positioned, ensuring relative order remains unchanged.

## Can this logic be generalized for multi-dimensional arrays?
The same principle can be extended to multi-dimensional arrays, but it must be applied consistently row-wise or column-wise depending on the problem’s definition of “end.” Preserving relative order in higher dimensions requires careful handling, usually with nested loops or recursion—to ensure elements maintain their intended sequence within each sub-structure.

# Interview Follow-ups

## How would you modify the algorithm to move all zeros to the beginning instead?
To move zeros to the beginning: - Iterate through the array from right to left. - Shift non-zero elements to the rightmost available position, and place zeros at the beginning. - This maintains the relative order of non-zero elements.

## How can you adapt this algorithm for other conditions, like moving all negative numbers to the end?
Instead of checking for zeros, modify the condition to identify negative numbers. Use the same two-pointer approach to shift non-negative numbers to the front while maintaining their order.

# Fun Facts
## Fact 1
This problem and its underlying concept are commonly applied in memory management within computation.

## Fact 2
An everyday example could be when a streaming service needs to manage its content list.

## Fact 3
When a user finishes watching a TV show, it could be marked as '0' and sent to the 'end of the list', making way for new or unwatched content.

## Fact 4
So, this programming problem is like creating an algorithm to keep the recommendation engine engaging by bringing fresh content to the front while pushing consumed or less important items to the back.

# Intuition
Imagine having a row of empty (represented by 0) and non empty (represented by non zero number) boxes on a conveyor belt. Given a task to move all the empty boxes to the end of the conveyor belt while keeping the order of the boxes with items intact.

To achieve this efficiently, you decide to use two workers (pointers) who will work together to sort the boxes. Here's how they do it:

- Worker 1 starts at the beginning of the conveyor belt and is responsible for finding the empty boxes.
- Worker 2 also starts at the beginning and will be used to keep track of where the next non-empty box should go. The process goes like this :
  
  * Worker 1 moves along the conveyor belt, checking each box. When Worker 1 finds a non-empty box, they swap it with the box at Worker 2's position.
  * After the swap, Worker 2 moves to the next position, ready to receive the next non-empty box.
  * Worker 1 continues to move down the conveyor belt, repeating the process until they have checked all the boxes.

By the end of this process, all the non-empty boxes will have been moved to the front of the conveyor belt in their original order, and all the empty boxes will have been moved to the end.


# Approach 
- Start by taking two pointers, i and j. Initialize j = 0. The pointer j will track the position where the next non-zero element should be placed.
- Traverse the array using pointer i from index 0 to n − 1.
- Whenever i encounters a non-zero element, swap the elements at positions i and j. This moves the non-zero element toward the front of the array.
- After performing the swap, increment j by 1. This updates j to the next position where the following non-zero element should be placed.
- If the current element at i is zero, simply move i forward without making any changes.
- Repeat the process until i reaches the end of the array. By the end of the traversal, all non-zero elements will be shifted to the front of the array in their original order, and all zeros will automatically move to the end.


# Solution

## Java
class Solution {
    public void moveZeroes(int[] nums) {
        // j keeps track of where the next non-zero should be placed
        int j = 0;

        // Loop through all elements
        for (int i = 0; i < nums.length; i++) {
            // If current element is non-zero
            if (nums[i] != 0) {
                // Swap current element with the one at index j
                int temp = nums[i];
                nums[i] = nums[j];
                nums[j] = temp;

                // Move j forward
                j++;
            }
        }
    }
}

public class Main {
    public static void main(String[] args) {
        // Input array
        int[] arr = {1, 0, 2, 3, 2, 0, 0, 4, 5, 1};

        // Create Solution instance and move zeroes
        Solution sol = new Solution();
        sol.moveZeroes(arr);

        // Print updated array
        for (int num : arr) {
            System.out.print(num + " ");
        }
    }
}

## JavaScript
class Solution {
  moveZeroes(nums) {
    // j points to the next position to place a non-zero
    let j = 0;

    // Traverse all elements
    for (let i = 0; i < nums.length; i++) {
      // If current element is non-zero
      if (nums[i] !== 0) {
        // Swap with element at index j
        [nums[i], nums[j]] = [nums[j], nums[i]];

        // Move j forward
        j++;
      }
    }
  }
}

// Driver code
const arr = [1, 0, 2, 3, 2, 0, 0, 4, 5, 1];

// Create Solution instance and move zeroes
const sol = new Solution();
sol.moveZeroes(arr);

// Print updated array
console.log(arr.join(' '));


# Complexity Analysis 
Time Complexity: O(N), where N is size of the array, as we are traversing the array once.

Space Complexity: O(1) , as no use of any extra space is done to solve this problem.


# My understanding
All non-zero elements should come to the front.
Their relative order must stay the same.
The remaining positions become 0.

## 1. How do I find the next non-zero?

Use a read pointer.

read → looks at the current element and finds the next non-zero.

```
read
 ↓
[0, 1, 0, 3, 12]
```

If:
```
arr[read] == 0
```
→ ignore it and continue.

If:
```
arr[read] != 0
```
→ we found the next non-zero element.

## 2. Where does the non-zero element go?

Now we need to know:

Where is the last non-zero element currently stored?

Use another pointer:
```
write → position where the next non-zero should go
```

# The reusable pattern

## Find

read finds the next element that I care about.

## Place

write tells me where that element should go.

For this problem:
```
read  → finds next non-zero
write → tells where next non-zero goes
```

So your mental formula becomes:
```
find next non-zero
        ↓
where should it go?
        ↓
at write
        ↓
put it there
        ↓
move write forward
```

```
class Solution {
    public void moveZeroes(int[] nums) {
        int write=0;

        for(int i=0;i<nums.length;i++){
            if(nums[i]!=0){
                nums[write]=nums[i];
                write++;
            }
        }

        while(write<nums.length){
            nums[write]=0;
            write++;
        }
        
    }
}
```

