# Non-overlapping Intervals
Given an array of N intervals in the form of (start[i], end[i]), where start[i] is the starting point of the interval and end[i] is the ending point of the interval, return the minimum number of intervals that need to be removed to make the remaining intervals non-overlapping.

Note:

Intervals which only touch at a point are also considered as non-overlapping. For example, [1, 3] and [3, 4] are non-overlapping.

# Example 1

Input : Intervals = [ [1, 2] , [2, 3] , [3, 4] ,[1, 3] ]

Output : 1

Explanation : You can remove the interval [1, 3] to make the remaining interval non overlapping.

# Example 2

Input : Intervals = [ [1, 3] , [1, 4] , [3, 5] , [3, 4] , [4, 5] ]

Output : 2

Explanation : You can remove the intervals [1, 4] and [3, 5] and the remaining intervals becomes non overlapping.

# Constraints

1 <= Intervals.length <= 105
0 <= start[i] < end[i] <= 105
Intervals[i].length = 2

# Hints
## Hint 1
Sort the intervals based on their end values in ascending order. If two intervals have the same end, sort by their start. After sorting, initialize a variable to keep track of the end time of the last selected interval.

## Hint 2
Traverse the intervals. If the start time of the current interval is greater than or equal to the end time of the last selected interval, keep the current interval and update the end time. If the intervals overlap (i.e., the start time is less than the current end time), increment the count of intervals to be removed.

# Frequently Occurring Doubts
## Why sort by end time instead of start time?
Sorting by end time ensures that you select the interval that leaves the most space for subsequent intervals, maximizing the number of non-overlapping intervals that can be included.
## What if two intervals have the same end time?
If two intervals share the same end time, their order doesn’t matter because overlapping will still be avoided by comparing the start times.

# Interview Follow-ups
## How would you handle dynamic updates to the intervals?
For dynamic scenarios, such as adding or removing intervals, consider using a balanced binary search tree or interval tree to efficiently manage overlapping intervals.
## What if you wanted to minimize the total "overlap time" instead of removing intervals?
Modify the algorithm to calculate and minimize the sum of overlapping durations rather than the count of intervals removed.

# Fun Facts
## Fact 1
This type of problem scenario and its underlying concept is widely used in the area of resource scheduling in the software industry.
## Fact 2
For instance, in cloud computing, there can be multiple requests for a resource within overlapping intervals.
## Fact 3
Solving a problem like this could determine the minimum number of requests to be canceled, moved or rescheduled to ensure that resource allocation does not overlap, thereby optimizing resource utilization.
## Fact 4
Another popular use case is in the organization of tasks or events in calendar apps where the goal is minimizing event overlap to free up time slots.

# Intuition
Determining if one interval overlaps with another can be done by checking if the end of the current interval is greater than the start of the next interval. Minimizing the number of intervals to remove involves keeping the end points of the selected intervals as small as possible. This maximizes the space available for subsequent intervals.

# Approach
- Sort the intervals based on their end times in ascending order to prioritize intervals that finish earliest.
- Keep a count of the number of non-overlapping intervals and remember the end time of the last selected interval.
- Go through the sorted intervals starting from the second one. For each interval:
   * Check if the start time of the current interval is at or after the end time of the last selected interval.
   * If it is, select this interval, update the end time to the current interval's end time, and increase the count of non-overlapping intervals.
- Determine the minimum number of intervals to remove by subtracting the count of non-overlapping intervals from the total number of intervals.
- Return the minimum number of intervals to remove to make the rest non-overlapping.

# Solution

## Java
```
import java.util.*;

class Solution {
    // Comparator function to compare intervals based on their ending times
    public static int comp(int[] val1, int[] val2) {
        // Compare the ending times of the intervals
        return Integer.compare(val1[1], val2[1]);
    }
    
    // Function to count the maximum number of non-overlapping intervals
    public int MaximumNonOverlappingIntervals(int[][] intervals) {
        // Sort the intervals based on their ending times
        Arrays.sort(intervals, Solution::comp);
    
        // Get total number of intervals
        int n = intervals.length;
    
        // Initialize counter
        int cnt = 1;
    
        // Keep track of the ending time
        int lastEndTime = intervals[0][1];
    
        // Iterate through all intervals
        for (int i = 1; i < n; i++) {
            /* Check if the starting time of the current 
            interval is greater than or equal to 
            the ending time of the last 
            selected interval */
            if (intervals[i][0] >= lastEndTime) {
                // Increment counter
                cnt++;
                // Update the ending time
                lastEndTime = intervals[i][1];
            }
        }
        return n-cnt;
    }
}

// Main class
class Main {
    public static void main(String[] args) {
        Solution obj = new Solution();
        int[][] intervals = {{0, 5}, {3, 4}, {1, 2}, {5, 9}, {7, 9}};
        
        for (int i = 0; i < intervals.length; i++) {
            System.out.println("Interval " + (i + 1) + " Start: " + intervals[i][0] + " End: " + intervals[i][1]);
        }
        
        int ans = obj.MaximumNonOverlappingIntervals(intervals);
        System.out.println("Maximum Non-Overlapping Intervals: " + ans);
    }
}
```

## JavaScript
```
class Solution {
    // Comparator function to compare intervals based on their ending times
    static comp(a, b) {
        // Compare the ending times of the intervals
        return a[1] - b[1];
    }

    // Function to count the maximum number of non-overlapping intervals
    MaximumNonOverlappingIntervals(intervals) {
        // Sort the intervals based on their ending times
        intervals.sort(Solution.comp);

        // Get total number of intervals
        const n = intervals.length;

        // Initialize counter
        let cnt = 1;

        // Keep track of the ending time
        let lastEndTime = intervals[0][1];

        // Iterate through all intervals
        for (let i = 1; i < n; i++) {
            /* Check if the starting time of 
            the current interval is greater
            than or equal to the ending time of
             the last selected interval */
            if (intervals[i][0] >= lastEndTime) {
                // Increment counter
                cnt++;
                // Update the ending time
                lastEndTime = intervals[i][1];
            }
        }
        return n-cnt;
    }
}

// Example usage
const obj = new Solution();
const intervals = [[0, 5], [3, 4], [1, 2], [5, 9], [7, 9]];

intervals.forEach((interval, i) => {
    console.log(`Interval ${i + 1} Start: ${interval[0]} End: ${interval[1]}`);
});

const ans = obj.MaximumNonOverlappingIntervals(intervals);
console.log(`Maximum Non-Overlapping Intervals: ${ans}`);

```

# Complexity Analysis
Time Complexity: O(N log N + N) where N is the number of intervals. We sort the intervals based on their end timings which takes up O(N log N). We then iterate over the sorted intervals to find the maximum number of non-overlapping intervals.
Space Complexity: O(1) as no additional data structure has been used.

# My understanding
Remove the minimum number of intervals.

This is equivalent to:

Keep the maximum number of non-overlapping intervals.

so, we can count 
- number of overlapping intervals to remove 
or 
- number of non-overlapping intervels

# what are non-overlapping interval
if(start>=previousEnd)

# how to maximize number of intervels

## The interval that ends earlier leaves more room for future intervals.
Since our decision depends on which interval ends earlier, sorting by end time makes the greedy choice very natural.

[1,10]
[2,5]
[6,7]

[2,5]
[6,7]
[1,10]

If the intervals are sorted by end time, we only need to discard the current meeting whenever it overlaps with the last valid meeting, because the last valid meeting always ends earlier.

for example we need to remove the [1,10], since the last valid meeting ended at 7, so it's a overlap.

## Approach 1: Count the valid (non-overlapping) intervals

### Keep the first interval

### for rest find a valid interval 
valid if
startTime >= lastValidEndTime

- Keep it
- Increment count
- Update lastValidEndTime = end

### then count the removed one
removed = totalIntervals - count


## Approach 2: Count the invalid (removed) intervals

Keep the first interval.

### Now for every remaining interval, if it does not overlap:
if (start >= lastValidEndTime)

It doesn't overlap.

Keep it.
Update lastValidEndTime.

### Else, if it overlaps
Remove it.
removed++;

```
class Solution {
    public int MaximumNonOverlappingIntervals(int[][] intervals) {
        //your code goes here
        int len=intervals.length;

        Arrays.sort(intervals, (a,b)->a[1]-b[1]);
        
        int previousEnd=intervals[0][1];
        int count=1;

        for(int i=1;i<len;i++){
            if(intervals[i][0]>=previousEnd){
                count++;
                previousEnd=intervals[i][1];
            }
        }

        return len-count;
    }
}
```