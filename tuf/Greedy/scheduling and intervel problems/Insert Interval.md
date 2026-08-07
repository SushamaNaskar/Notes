# Insert Interval
Given a 2D array Intervals, where Intervals[i] = [start[i], end[i]] represents the start and end of the ith interval, the array represents non-overlapping intervals sorted in ascending order by start[i]. 

Given another array newInterval, where newInterval = [start, end] represents the start and end of another interval, merge newInterval into Intervals such that Intervals remain non-overlapping and sorted in ascending order by start[i].

Return Intervals after the insertion of newInterval.

# Example 1

Input : Intervals = [ [1, 3] , [6, 9] ] , newInterval = [2, 5]

Output : [ [1, 5] , [6, 9] ]

Explanation : After inserting the newInterval the Intervals array becomes [ [1, 3] , [2, 5] , [6, 9] ].

So to make them non overlapping we can merge the intervals [1, 3] and [2, 5].

So the Intervals array is [ [1, 5] , [6, 9] ].

# Example 2

Input : Intervals = [ [1, 2] , [3, 5] , [6, 7] , [8,10] ] , newInterval = [4, 8]

Output : [ [1, 2] , [3, 10] ]

Explanation : The Intervals array after inserting newInterval is [ [1, 2] , [3, 5] , [4, 8] , [6, 7] , [8, 10] ].

We merge the required intervals to make it non overlapping.

So final array is [ [1, 2] , [3, 10] ].

# Constraints

0 <= Intervals.length <= 105
0 <= start[i] < end[i] <= 107
0 <= start < end <= 107
Intervals[i].length = 2
newInterval.length = 2

# Hints
## Hint 1
Since the input intervals are already sorted and non-overlapping, iterate through the intervals one by one. Compare the newInterval with each interval.
## Hint 2
Update the start of newInterval to the minimum of its current start and the start of the overlapping interval. Update the end of newInterval to the maximum of its current end and the end of the overlapping interval. Skip the intervals that are merged into newInterval.

# Frequently Occurring Doubts
## What if newInterval does not overlap with any interval?
If newInterval is completely disjoint from all intervals, insert it at the correct position based on its start value while maintaining sorted order.
## What if newInterval is entirely outside the bounds of Intervals?
If newInterval ends before the first interval starts or starts after the last interval ends, add it directly to the beginning or the end of the result.

# Interview Follow-ups
## How would you modify the solution to return overlapping intervals instead of inserting the new interval?
Instead of merging overlapping intervals, collect all intervals that overlap with newInterval into a separate result list and return them.

# Fun Facts
## Fact 1
This type of programming problem is used in various time scheduling applications, as seen in Google Calendar or Outlook, to prevent overlapping events and maintain them in sorted order.
## Fact 2
For instance, when a user wants to insert a new calendar event, the system will check if the time overlaps with other events, then if doesn't, the system inserts the event while preserving chronological order.
## Fact 3
So, such algorithms are essential to ensure effective time management in calendar-based applications.

# Intuition
Inserting a new interval into a sorted list of non-overlapping intervals involves a straightforward approach. Start by adding intervals that come completely before the new interval. For intervals that overlap with the new one, adjust the start and end times to merge them into a single interval. After handling the overlapping intervals, add any remaining intervals that come after the new interval.

# Approach
- Initialize Result Structure: Start by creating an empty 2D array to store the resulting list of intervals after insertion and merging. Also, set up an index to keep track of your position as you iterate through the intervals.
- Insert Intervals Before the New Interval: Go through the intervals that end before the new interval starts. These intervals do not overlap with the new interval and can be directly added to the result.
- Merge Overlapping Intervals: Next, look at the intervals that start before or at the same time the new interval ends. These intervals overlap with the new interval and need to be merged. Update the new interval’s start time to the earliest start time and its end time to the latest end time among the overlapping intervals.
- Add the Merged Interval: Once all overlapping intervals have been merged, add the new interval, now updated with its new start and end times, to the result.
- Insert Remaining Intervals: Finally, add any intervals that start after the new interval ends. These intervals do not overlap with the new interval and can be directly added to the result.
- Return the Result: The result array now contains the updated list of intervals, with the new interval correctly inserted and merged.

# Solution
## Java
```
import java.util.*;

class Solution {
// To insert new interval
    public int[][] insertNewInterval(int[][] intervals, int[] newInterval) {
        // Initialize a list to store the result
        List<int[]> res = new ArrayList<>();
        
        /* Track the index while
        iterating through 
        intervals */
        int i = 0;
        
        // Get total intervals
        int n = intervals.length;
        
        // Insert intervals before newInterval
        while (i < n && intervals[i][1] < newInterval[0]) {
            /* Add intervals to the result list
            until their end time is before
            the start time of newInterval */
            
            res.add(intervals[i]);
            // Move to next interval
            i++;
        }
        
        // Merge overlapping intervals
        while (i < n && intervals[i][0] <= newInterval[1]) {
            /* Update the start time of newInterval to the
            minimum of its current start time and the
            start time of the current interval */
            newInterval[0] = Math.min(newInterval[0], intervals[i][0]);
            
            /* Update the end time of newInterval to the
            maximum of its current end time and the
            end time of the current interval */
            newInterval[1] = Math.max(newInterval[1], intervals[i][1]);
            
            // Move to the next interval
            i++;
        }
        
        /* Insert the merged interval
        Add the merged interval to 
        the result list */
        res.add(newInterval);
        
        /* Insert remaining 
        intervals after 
        newInterval */
        while (i < n) {
            /* Add the remaining intervals
            after newInterval to the result
            list */
            res.add(intervals[i]);
            
            // Move to next interval
            i++;
        }
        
        // Convert the result list to a 2D array and return
        return res.toArray(new int[res.size()][]);
    }

    public static void main(String[] args) {
        Solution sol = new Solution();
        int[][] intervals = {{1, 2}, {3, 4}, {6, 7}, {8, 10}, {12, 16}};
        int[] newInterval = {5, 8};
        
        System.out.print("Intervals Array: ");
        for (int[] interval : intervals) {
            System.out.print("[" + interval[0] + ", " + interval[1] + "], ");
        }
        System.out.println();
        
        System.out.print("New Interval to be Inserted: ");
        System.out.println("[" + newInterval[0] + ", " + newInterval[1] + "]");
        
        int[][] result = sol.insertNewInterval(intervals, newInterval);
        System.out.print("Resulting Intervals after Insertion: ");
        for (int[] interval : result) {
            System.out.print("[" + interval[0] + ", " + interval[1] + "], ");
        }
        System.out.println();
    }
}

```

## JavaScript
```
class Solution {
// To insert new interval
    insertNewInterval(intervals, newInterval) {
        // Initialize array 
        let res = [];
        
        // Track index
        let i = 0;
        
        // Get total intervals
        let n = intervals.length;
        
        // Insert intervals before newInterval
        while (i < n && intervals[i][1] < newInterval[0]) {
            /* Add intervals to the result array
            until their end time is before
            the start time of newInterval */
            
            res.push(intervals[i]);
            // Move to next interval
            i++;
        }
        
        // Merge overlapping intervals
        while (i < n && intervals[i][0] <= newInterval[1]) {
            /* Update the start time of newInterval to the
            minimum of its current start time and the
            start time of the current interval */
            newInterval[0] = Math.min(newInterval[0], intervals[i][0]);
            
            /* Update the end time of newInterval to the
            maximum of its current end time and the
            end time of the current interval */
            newInterval[1] = Math.max(newInterval[1], intervals[i][1]);
            
            // Move to the next interval
            i++;
        }
        
        /* Insert the merged interval
        Add the merged interval to 
        the result array */
        res.push(newInterval);
        
        /* Insert remaining 
        intervals after 
        newInterval */
        while (i < n) {
            /* Add the remaining intervals
            after newInterval to the result
            array */
            res.push(intervals[i]);
            
            // Move to next interval
            i++;
        }
        
        // Return result array
        return res;
    }
}

// Test the function
let intervals = [[1, 2], [3, 4], [6, 7], [8, 10], [12, 16]];
let newInterval = [5, 8];

console.log("Intervals Array:", intervals);
console.log("New Interval to be Inserted:", newInterval);

let solution = new Solution();
let result = solution.insertNewInterval(intervals, newInterval);
console.log("Resulting Intervals after Insertion:", result);

```

# My Understanding
 intervals= [ [1, 2] , [3, 5] , [6, 7] , [8,10],[12,14] ] 
 newInterval = [4, 8]

there are three types of interval 
1. intervals before newInterval -> intervals_end < new_start -> [1,2]
2. overlapping intervals ->  intervals_start <= new_end -> [3,5], [6,7],[8,10]
3. remaining intervals -> intervals_start > new_end -> [12,14]

## for intervals before newInterval 
-  add them to the new array, since they dont overlap

## for the overlapping intervals
- We Merge them:

1. we need to find the lowest starting point
[3,5] and [4,8] -> we will consider 3 as the starting point

new_starting_point = Min(3,4)

1. we need to find the highest end point
[8,10] and [4,8] -> we will consider 10 as the ending point

new_ending_point = Max(8,10)

## remaining intervals
-  add them to the new array, since they dont overlap

output :  [ [1, 2] , [3, 10], [12, 14] ]
