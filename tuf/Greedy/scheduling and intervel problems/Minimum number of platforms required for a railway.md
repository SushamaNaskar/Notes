# Minimum number of platforms required for a railway
Given the arrival and departure times of all trains reaching a particular railway station, determine the minimum number of platforms required so that no train is kept waiting. Consider all trains arrive and depart on the same day.

In any particular instance, the same platform cannot be used for both the departure of one train and the arrival of another train, necessitating the use of different platforms in such cases.

Note: Time intervals are in the minutes , Leading zeros for minutes less than 1000 are optional (e.g., 0900 is the same as 900).

# Example 1

Input : Arrival = [900, 940, 950, 1100, 1500, 1800] , Departure = [910, 1200, 1120, 1130, 1900, 2000]

Output : 3

Explanation : The first , second , fifth number train can use the platform 1.

The third and sixth train can use the platform 2.
The fourth train will use platform 3.
So total we need 3 different platforms for the railway station so that no train is kept waiting.

# Example 2

Input : Arrival = [900, 1100, 1235] , Departure = [1000, 1200, 1240]

Output : 1

Explanation : All the three trains can use the platform 1.

So we required only 1 platform.

# Constraints

1 <= N <= 105
0000 <= Arrival[i] <= Departure[i] <= 2359

# Hints

## Hint 1
Create two separate arrays: one for arrival times and one for departure times. Sort both arrays independently.

## Hint 2
Use two pointers. One pointer for arrival times and another for departure times. Traverse the arrays. If a train arrives before the previous train departs, increment the platform count.


# Frequently Occurring Doubts
## What happens if multiple trains arrive or depart at the same time?
If multiple trains arrive at the same time, the platform count increases for each train. Similarly, if multiple trains depart at the same time, the platform count decreases for each departure.

## Why sort both arrival and departure arrays?
Sorting ensures that trains are processed in chronological order, allowing you to simulate the actual sequence of events and efficiently manage platforms.


# Interview Follow-ups
## What if trains arrive and depart across multiple days?
Extend the logic by incorporating the date into the arrival and departure times. Treat the combined date and time as a single timestamp for sorting and processing.


## How would you handle cases where arrival and departure times are given in different formats?
Standardize the time format before processing. For example, convert all times to 24-hour format or total minutes since midnight.

# Fun Facts

## Fact 1
This problem uses the algorithm concept of scheduling and resource allocation, which is broadly used in operating system design and database management system to handle multiple processes concurrently.


## Fact 2
A practical application can be seen in air traffic control systems, where allocating runway and airspace to numerous incoming and outgoing flights in an efficient manner becomes crucial.

## Fact 3
Similarly, it is used in reservation systems of hotels or even in meeting room booking systems in multi-national companies to maximize utilization and prevent overlapping bookings.

# Intuition
Start by sorting both the arrival and departure times. Once these times are sorted, it becomes much easier to keep track of the trains currently at the station. By moving through these sorted times, we can count how many trains have arrived but not yet departed at any given moment. The difference between the number of arrivals and departures at each point will tell us how many platforms are needed at that time. The highest number of platforms required during these times gives us the final answer.

# Approach
- Start by sorting both the arrival and departure arrays. Sorting helps in managing the train schedules efficiently.
- Initialize two pointers, one for the arrival array and one for the departure array. These pointers will help in traversing both arrays simultaneously.
- Also, initialize two variables to keep track of the count of platforms needed at any time and the maximum number of platforms needed.
- Use a loop to iterate through the arrival and departure times. Compare the current arrival time with the current departure time using the two pointers.
- If the arrival time is less than or equal to the departure time, it means a train has arrived before the earliest train has departed, so increment the count of platforms needed and move the arrival pointer to the next train.
- If the arrival time is greater than the departure time, it means a train has departed, freeing up a platform. Decrement the count of platforms needed and move the departure pointer to the next train.
- After each comparison, update the maximum number of platforms needed if the current count exceeds the previous maximum.
- Continue this process until you have processed all trains, then return the maximum number of platforms needed, which will be the final answer.


# Solutions

## Java
```
import java.util.*;

class Solution {
//  To find number of platforms
    public int findPlatform(int[] Arrival, int[] Departure) {
        int n = Arrival.length;

        // Sort both arrival and departure arrays
        Arrays.sort(Arrival);
        Arrays.sort(Departure);

        int ans = 1;
        int count = 1;
        int i = 1, j = 0;

        // Iterate through the arrays
        while (i < n && j < n) {
            if (Arrival[i] <= Departure[j]) {
                // Increment count
                count++;
                i++;
            } else {
                // Decrement count
                count--;
                j++;
            }
            // Find maximum
            ans = Math.max(ans, count);
        }
        return ans;
    }

    public static void main(String[] args) {
        int[] arr = {900, 945, 955, 1100, 1500, 1800};
        int[] dep = {920, 1200, 1130, 1150, 1900, 2000};

        Solution sol = new Solution();
        System.out.println("Minimum number of Platforms required: " + sol.findPlatform(arr, dep));
    }
}
```

## JavaScript
```
class Solution {
//  To find number of platforms
    findPlatform(Arrival, Departure) {
        let n = Arrival.length;

        // Sort both arrival and departure arrays
        Arrival.sort((a, b) => a - b);
        Departure.sort((a, b) => a - b);

        let ans = 1;
        let count = 1;
        let i = 1, j = 0;

        // Iterate through the arrays
        while (i < n && j < n) {
            if (Arrival[i] <= Departure[j]) {
                // Increment count
                count++;
                i++;
            } else {
                // Decrement count
                count--;
                j++;
            }
            // Find maximum
            ans = Math.max(ans, count);
        }
        return ans;
    }
}

// Test the solution
let arr = [900, 945, 955, 1100, 1500, 1800];
let dep = [920, 1200, 1130, 1150, 1900, 2000];

let solution = new Solution();
console.log("Minimum number of Platforms required:", solution.findPlatform(arr, dep));
```

# Complexity Analysis
Time Complexity: O(N log N) where N is the size of each array.This is primarily due to the sorting operations on the arrival and departure arrays, each taking O(N log N). The subsequent traversal of the arrays using the two-pointer technique takes O(N), but this does not affect the overall complexity, which is dominated by the sorting step. Therefore, the combined time complexity remains O(N log N).

# Space Complexity: O(1) as no extra space is used.

# My understading
At any moment, how many trains are currently at the station?
- That number is exactly the number of platforms needed.

lets say the first train has arrived:
and the first train departure happens at 1200
but next 3 arrival happens at 1030, 1100, 1130 -> we will need 3 new platforms, because no other platforms will be free before 1200

## sorting
We don't care which specific train uses which platform. We only care about how many trains are at the station at the current moment.

That's why we sort the arrival and departure times independently.

Arrival   : 900 940 950 1100
Departure : 910 1120 1130 1200

# Every arrival asks:
"Is there a free platform?"
Yes (arrival > departure) → reuse a platform.
No (arrival <= departure) → allocate a new platform.

## Two pointers
i → next train arriving
j → next train departing

## Initially

platforms = 1
maxPlatforms = 1
i = 1
j = 0

The first train always needs one platform.

## Processing every arrival
For each arriving train, compare

### Case 1: Arrival happens before (or exactly when) the earliest departure

arrival[i] <= departure[j]

No platform has become free.

Need another platform.

for example : 
the next departure happens at 1200
but next 3 arrival happens at 1030 1100 1130 -> we will need 3 new platforms, because no other platforms will be free before 1200

### Case 2: Earliest departure happens first
arrival[i] > departure[j]

A platform becomes free.

platforms--
j++

Now compare the same arriving train again, because it can use this freed platform.

Notice:

Do NOT increment i here.

We haven't assigned a platform to this arrival yet.

Sort arrival times.
Sort departure times.
The first train always occupies one platform.
Compare the next arrival with the earliest departure.
If the arrival is before or exactly at the earliest departure (arrival <= departure), allocate a new platform.
Otherwise (arrival > departure), a platform has become free, so release it by moving the departure pointer. Keep comparing the same arrival until it can be assigned a platform.
Track the maximum number of platforms occupied at any point. That maximum is the answer.