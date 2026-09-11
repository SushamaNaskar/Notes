# N meetings in one room
Given one meeting room and N meetings represented by two arrays, start and end, where start[i] represents the start time of the ith meeting and end[i] represents the end time of the ith meeting, determine the maximum number of meetings that can be accommodated in the meeting room if only one meeting can be held at a time. A meeting starting at the same time another meeting ends is considered overlapping.

# Example 1

Input : Start = [1, 3, 0, 5, 8, 5] , End = [2, 4, 6, 7, 9, 9]

Output : 4

Explanation : The meetings that can be accommodated in meeting room are (1,2) , (3,4) , (5,7) , (8,9).

# Example 2

Input : Start = [10, 12, 20] , End = [20, 25, 30]

Output : 1

Explanation : Given the start and end time, only one meeting can be held in meeting room.

# Constraints

1 <= N <= 105
0 <= start[i] < end[i] <= 105

# Hints
## Hint 1
Sort the meetings by their end time in ascending order. If two meetings have the same end time, sort by their start time.

## Hint 2
Start with the earliest possible meeting. For each subsequent meeting, check if its start time is strictly greater than the end time of the previously selected meeting.

# Frequently Occurring Doubts
## Why sort by end time?
Sorting by end time ensures that meetings that finish earlier are prioritized. This allows more meetings to be accommodated since the room is freed up sooner.
## What if all meetings overlap?
If all meetings overlap, only one meeting (the one with the earliest end time) can be scheduled.

# Interview Follow-ups
## What if there are multiple meeting rooms?
If multiple rooms are available, the problem becomes a meeting room allocation problem, which can be solved using a min-heap to track the end times of ongoing meetings.

## What is the difference between this and the interval scheduling maximization problem?
This is a specific case of interval scheduling maximization, where the goal is to select the maximum number of non-overlapping intervals from a set of intervals.

# Fun Facts
## Fact 1
This problem, in its essence, is an instance of interval scheduling, which is a classic topic in optimization and used widely across real-world applications.
## Fact 2
Calendar apps like Google Calendar and Outlook use this principle to optimize meeting schedules.
## Fact 3
The algorithms behind ride-sharing apps like Uber and Lyft or food delivery services like Grubhub and DoorDash, which need to accommodate multiple delivery or pick-up requests within specific time windows, also leverage this concept.
## Fact 4
In the realm of cloud computing, similar algorithms are used for optimizing usage of computing resources based on their start and end usage times.

# Intuition
If there are two meetings, one that finishes early and another that finishes later, it is better to choose the meeting that finishes early. Choosing a meeting that ends earlier frees up the room sooner, allowing more meetings to be accommodated afterwards. By prioritizing meetings that end early, the meeting room is utilized more efficiently, maximizing the total number of meetings that can be held.

# Approach
- Use a vector to store pairs of start and end times of the meetings. This helps in easily accessing and sorting the meeting times.
- Sort the meetings based on their end times in ascending order. This ensures that the meetings which finish earliest are considered first.
- Create a variable to keep track of the end time of the last selected meeting. Also, initialize a counter to count the number of meetings that can be accommodated.
- Loop through the sorted meetings and for each meeting:
  * Check if the start time of the current meeting is greater than the end time of the last selected meeting.
  * If true, select the current meeting, update the end time to the end time of the current meeting, and increment the counter.
- After iterating through all meetings, the counter will contain the maximum number of non-overlapping meetings that can be accommodated.

# Solution

## Java
```
import java.util.*;

class Solution {
    // Comparator function to sort meetings based on end times
    static class MeetingComparator implements Comparator<int[]> {
        public int compare(int[] a, int[] b) {
            // Sort by end time in ascending order
            return Integer.compare(a[1], b[1]);
        }
    }

    // Function to find the maximum number of meetings that can be held
    public int maxMeetings(int[] start, int[] end) {
        int n = start.length;
        // List to store meetings
        List<int[]> meetings = new ArrayList<>();
        
        // Fill the meetings list with start and end times
        for (int i = 0; i < n; i++) {
            meetings.add(new int[]{start[i], end[i]});
        }

        // Sort the meetings based on the custom comparator
        Collections.sort(meetings, new MeetingComparator());

        // The end time of last selected meeting
        int limit = meetings.get(0)[1];
        // Initialize count
        int count = 1;

        /*Iterate through the meetings 
        to select the maximum number 
        of non-overlapping meetings*/
        for (int i = 1; i < n; i++) {
            /*If the current meeting starts 
            after the last selected meeting ends*/
            if (meetings.get(i)[0] > limit) {
                /*Update the limit to the end 
                time of the current meeting*/
                limit = meetings.get(i)[1];
                // Increment count
                count++;
            }
        }

        // Return count
        return count;
    }

    public static void main(String[] args) {
        Solution obj = new Solution();
        // Start and end times of the meetings
        int[] start = {1, 3, 0, 5, 8, 5};
        int[] end = {2, 4, 6, 7, 9, 9};
        // Get the maximum number of meetings that can be held
        int maxMeetings = obj.maxMeetings(start, end);
        // Output the maximum number of meetings
        System.out.println("Maximum number of meetings: " + maxMeetings);
    }
}
```

## JavaScript
```
class Solution {
    // Comparator function to sort meetings based on end times
    static comparator(a, b) {
        // Sort by end time in ascending order
        return a[1] - b[1];
    }

    // Function to find the maximum number of meetings that can be held
    maxMeetings(start, end) {
        const n = start.length;
        // Array to store meetings
        const meetings = [];
        
        // Fill the meetings array with start and end times
        for (let i = 0; i < n; i++) {
            meetings.push([start[i], end[i]]);
        }

        // Sort the meetings based on the custom comparator
        meetings.sort(Solution.comparator);

        // The end time of last selected meeting
        let limit = meetings[0][1];
        // Initialize count
        let count = 1;

        /*Iterate through the meetings 
        to select the maximum number 
        of non-overlapping meetings*/
        for (let i = 1; i < n; i++) {
            /*If the current meeting starts 
            after the last selected meeting ends*/
            if (meetings[i][0] > limit) {
                /*Update the limit to the end 
                time of the current meeting*/
                limit = meetings[i][1];
                // Increment count
                count++;
            }
        }

        // Return count
        return count;
    }
}

// Example usage
const obj = new Solution();
// Start and end times of the meetings
const start = [1, 3, 0, 5, 8, 5];
const end = [2, 4, 6, 7, 9, 9];
// Get the maximum number of meetings that can be held
const maxMeetings = obj.maxMeetings(start, end);
// Output the maximum number of meetings
console.log("Maximum number of meetings:", maxMeetings);

```

# Complexity Analysis
Time Complexity: O(N+N logN) where 𝑁 is the size of the start and end arrays. The O(N) term accounts for filling the meetings array with start and end times. The O(NlogN) term arises from sorting the meetings based on their end times. After sorting, the function iterates through the sorted meetings in O(N) time to count the maximum number of non-overlapping meetings.
Space Complexity: O(N) since we used an additional data structure for storing the start time and end time.

# My understanding
We have

start[i] → meeting start time
end[i] → meeting finish time

Meetings are
(1,2)
(3,4)
(0,6)
(5,7)
(8,9)
(5,9)

Only one meeting can happen at a time -> if one meeting ends at time t, another cannot start exactly at t.  start > previousEnd

## The meeting finishing earlier leaves more room for future meetings.
- This is the greedy idea.

(1,10)
(2,3)
(4,5)
(6,7)

If we choose:
(1,10) -> only one meeting

If we choose:
(2,3)
(4,5)
(6,7)
Total = 3 meetings.

# combine start and end time 
- since we need to sort it by endtime and we need to maintain the order we combine the start and end and create a vector or array of arrays.

## approach
combine start and end time -> (start,end)
Sort them by end time increasing

Then
Take first meeting.

For every next meeting

    if start > previousEnd
            take it


```
class Solution {
  

    public int maxMeetings(int[] start, int[] end) {
       //your code goes here
       int n=start.length;
       List<int[]> meetings=new ArrayList<>();

       for(int i=0;i<n;i++){
        meetings.add(new int[]{start[i],end[i]});
       }

      meetings.sort((a,b)->a[1]-b[1]);

       int previousEnd=meetings.get(0)[1];
       int count=1;

       for(int i=1;i<n;i++){
        if(meetings.get(i)[0]>previousEnd){
            count++;
            previousEnd=meetings.get(i)[1];

        }
       }

       return count;
    }
}
```