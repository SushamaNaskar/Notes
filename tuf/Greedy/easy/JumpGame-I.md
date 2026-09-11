# Jump Game - I
Given an array of integers nums, each element in the array represents the maximum jump length at that position. Initially starting at the first index of the array, determine if it is possible to reach the last index. Return true if the last index can be reached, otherwise return false.


# Example 1

Input : [2, 3, 1, 1, 4]

Output : true

Explanation : We can simply take Jump of 1 step at each index to reach the last index.

# Example 2

Input : [3, 2, 1, 0, 4]

Output : false


Explanation : No matter how you make jumps you will always reach the third index (0 base) of the array.

The maximum jump of index three is 0, So you can never reach the last index of array.

# Example 3

Input : [5, 3, 2, 1, 0]

Output:

true

# Constraints

1 <= nums.length <= 104
0 <= nums[i] <= 105

# Hints

## Hint 1
Maintain a variable farthest to keep track of the farthest index you can reach as you iterate through the array. For each position i, calculate the maximum reach using farthest=max(farthest,i+nums[i]). If farthest ever becomes greater than or equal to the last index, return true.

## Hint 2
If at any index i, the farthest reachable position is less than i, it means you cannot proceed further, and reaching the last index is impossible. Exit early and return false.


# Frequently Occurring Doubts

## What happens if the array contains very large jump lengths?
Large jump lengths don’t impact the algorithm because it only cares about the maximum reachable index at each step, not the specific jump sizes.

## What if the array contains negative or non-integer values?
The problem assumes the array contains only non-negative integers. Negative or non-integer values would require additional validation and adjustments to the logic.


# Interview Follow-ups

## What if you need to find the minimum number of jumps to reach the last index?
Extend the greedy approach by tracking the end of the current jump range and counting the number of jumps. Increment the jump count whenever the current index exceeds the range of the current jump.

## What if you want to return the indices of the path taken?
Modify the greedy solution to store the path by keeping track of the index from which each jump was made. Backtrack from the last index to reconstruct the path.

# Fun Facts

## Fact 1
This problem's underlying concept is applied in routing and networking protocols.

## Fact 2
For example, the Internet Protocol (IP) uses routing algorithms based on the shortest path, which is similar conceptually to the array jump problem.

## Fact 3
These protocols need to calculate the shortest or most efficient route for data packets to reach their destination, making sure data can indeed ‘jump’ from one node to another until it reaches its final destination, or return 'false' if it cannot.

## Fact 4
The problem's notion is also central in video game development.

## Fact 5
For instance, in pathfinding logic for non-playable characters, algorithms evaluate if a character can move from one point to another by 'jumping' through specified navigation points, much like jumping through indices of an array.

# Intuition
Keep track of the farthest position that can be reached at any point. If at an index where it's impossible to move to the next one because it's too far away, then it's impossible to get to the end, and the process must stop.
Otherwise, continue updating the farthest reachable index while moving forward. If the traversal manages to reach or pass the last index, then reaching the end is possible.


# Approach
- Start by setting a pointer to track the farthest point that can be reached from the beginning of the array.
- Iterate through each position in the array, checking if the current position exceeds the farthest point reached so far.
- If the current position is beyond the reachable point, it indicates that further progress is not possible, and reaching the end is infeasible.
- If the current position is within the reachable point, update the pointer to reflect the farthest position that can be reached from the current spot.
- If the entire array is traversed without finding an unreachable position, it confirms that the last index is reachable, thus making it possible to reach the end.



# Solution

## Java
```
import java.util.*;

class Solution {
    // To determine if last index is reachable
    public boolean canJump(int[] nums) {
        // Initialize maximum index
        int maxIndex = 0;

        // Iterate through each index of the array
        for (int i = 0; i < nums.length; i++) {
            /* If the current index 
               is greater than the 
               maximum reachable index
               it means we cannot move 
               forward and should 
               return false */
            if (i > maxIndex) {
                return false;
            }

            /* Update the maximum index that can be 
               reached by comparing
               the current maxIndex with the sum 
               of the current index and
               the maximum jump from that index */
            maxIndex = Math.max(maxIndex, i + nums[i]);
        }

        /* If we complete the 
           loop, it means we 
           can reach the 
           last index */
        return true;
    }

    public static void main(String[] args) {
        int[] nums = {4, 3, 7, 1, 2};

        System.out.print("Array representing maximum jump from each index: ");
        for (int num : nums) {
            System.out.print(num + " ");
        }
        System.out.println();

        Solution solution = new Solution();
        boolean ans = solution.canJump(nums);

        if (ans) {
            System.out.println("It is possible to reach the last index.");
        } else {
            System.out.println("It is not possible to reach the last index.");
        }
    }
}
```

## JavaScript
```
class Solution {
    // To determine if last index is reachable
    canJump(nums) {
        // Initialize maximum index
        let maxIndex = 0;

        // Iterate through each index of the array
        for (let i = 0; i < nums.length; i++) {
            /* If the current index 
               is greater than the 
               maximum reachable index
               it means we cannot move 
               forward and should 
               return false */
            if (i > maxIndex) {
                return false;
            }

            /* Update the maximum index that can be 
               reached by comparing
               the current maxIndex with the sum 
               of the current index and
               the maximum jump from that index */
            maxIndex = Math.max(maxIndex, i + nums[i]);
        }

        /* If we complete the 
           loop, it means we 
           can reach the 
           last index */
        return true;
    }
}

// Example usage
const nums = [4, 3, 7, 1, 2];

console.log("Array representing maximum jump from each index: " + nums.join(" "));

const solution = new Solution();
const ans = solution.canJump(nums);

if (ans) {
    console.log("It is possible to reach the last index.");
} else {
    console.log("It is not possible to reach the last index.");
}

```

# Complexity Analysis
Time Complexity: O(N) where N is the length of the array. We iterate through the input array exactly once and at each element perform constant time operations.
Space Complexity: O(1) no extra space used.


## My understanding
Imagine there is a river with rocks.

Each rock has a number written on it.

The number tells you:

"From this rock, you can jump at most this many rocks ahead."

For every rock you can stand on:

On a piece of paper, write:

- Farthest rock I can currently reach from this rock = current index + jump
- and upto now the farthest rock I can reach = max(previous Farthest Reach, current index + jump length)
- and keep going
    - If your Farthest  Reach value reaches or passes the last rock, you know the last rock is reachable.

How do I know I'm stuck?
- Paper says Farthest rock is 3
- But you're now trying to examine rock 4

Rock 4 is beyond the farthest rock you could ever reach from any previous rocks.
That means you can never stand on Rock 4, so you can't continue.
You're stuck.

Return: false

The paper doesn't record the path I took—it only records the farthest place I can possibly reach so far.