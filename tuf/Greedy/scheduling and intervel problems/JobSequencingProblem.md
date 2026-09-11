# Job sequencing Problem
Given an 2D array Jobs of size Nx3, where Jobs[i][0] represents JobID , Jobs[i][1] represents Deadline , Jobs[i][2] represents Profit associated with that job. Each Job takes 1 unit of time to complete and only one job can be scheduled at a time.

The profit associated with a job is earned only if it is completed by its deadline. Find the number of jobs and maximum profit.

## Example 1

Input : Jobs = [ [1, 4, 20] , [2, 1, 10] , [3, 1, 40] , [4, 1, 30] ]

Output : 2 60

Explanation : Job with JobID 3 can be performed at time t=1 giving a profit of 40.

Job with JobID 1 can be performed at time t=2 giving a profit of 20.

No more jobs can be scheduled, So total Profit = 40 + 20 => 60.

Total number of jobs completed are two, JobID 1, JobID 3.

So answer is 2 60.

## Example 2

Input : Jobs = [ [1, 2, 100] , [2, 1, 19] , [3, 2, 27] , [4, 1, 25] , [5, 1, 15] ]

Output : 2 127

Explanation : Job with JobID 1 can be performed at time time t=1 giving a profit of 100.

Job with JobID 3 can be performed at time t=2 giving a profit of 27.

No more jobs can be scheduled, So total Profit = 100 + 27 => 127.

Total number of jobs completed are two, JobID 1, JobID 3.

So answer is 2 127.

## Example 3

Input : Jobs = [ [1, 1, 100] , [2, 2, 200] , [3, 3, 300] , [4, 4, 400] ]

Output:

4 1000


# Constraints

1 <= N <= 104
1 <= Deadline <= N
1 <= Profit <= 500

# Hints

## Hint 1
Maintain a timeline (e.g., a list of size equal to the maximum deadline) to keep track of which time slots are occupied. For each job, attempt to schedule it at the latest available time slot before its deadline. If no such slot exists, skip the job.

## Hint 2
Keep a count of the number of successfully scheduled jobs. Add the profit of each scheduled job to the total profit. At the end, return the number of jobs and the maximum profit.

# Frequently Occurring Doubts

## Why sort jobs by profit?
Sorting by profit ensures that jobs with the highest reward are scheduled first, maximizing the total profit. A greedy approach works here because each job takes exactly 1 unit of time.

## What if a job's deadline is greater than the number of jobs?
Jobs with deadlines exceeding the maximum number of jobs can still be scheduled, as long as a free slot exists before their deadline. Deadlines beyond the timeline size don’t affect scheduling logic.

# Interview Follow-ups

## How would you handle overlapping deadlines?
Overlapping deadlines are automatically handled by the greedy approach. Jobs are scheduled into the latest available slot before their respective deadlines.

## How would you handle jobs that take more than 1 unit of time?
For jobs with varying durations, modify the timeline to account for the job's duration. Ensure that consecutive slots are available before scheduling a job.

# Fun Facts

## Fact 1
This type of problem is commonly encountered in project management and scheduling software applications.

## Fact 2
For instance, software that manages tasks and deadlines in industries such as manufacturing, supply chain, or software development often needs to optimise schedules based on profit and deadlines.

## Fact 3
This involves choosing an order to execute jobs in a way that maximises profit while respecting deadlines — a real-world application of the job scheduling problem.


# Intuition
The strategy to maximize profit involves prioritizing jobs that offer higher profits. To achieve this, the jobs should be sorted in descending order of profit. For example, a job with a deadline of 4 can be completed anytime between day 1 and day 4. However, performing the job on its last possible day is more beneficial. This leaves earlier days available for other jobs, optimizing the schedule and allowing more jobs to be completed within their deadlines.

# Approach
- Sort the jobs in descending order of profit.
- Determine the maximum deadline and create an array of that size. Initially, set each array index to -1 to indicate no jobs have been scheduled.
- For each job, check if it can be scheduled as late as possible before its deadline.
    * If possible, mark that index with the job ID and add the profit to the total profit.
    * If not possible, check the previous days until an empty slot is found.

# Solution

## Java
```
import java.util.*;

class Solution {
    // Function to calculate maximum profit
    public int[] JobScheduling(int[][] Jobs) {
        // Sort jobs based on profit in descending order
        Arrays.sort(Jobs, (a, b) -> b[2] - a[2]);

        // Total number of jobs
        int n = Jobs.length;

        // Get the maximum deadline to complete the jobs
        int maxDeadline = -1;
        for (int[] it : Jobs) {
            maxDeadline = Math.max(maxDeadline, it[1]);
        }

        // Initialize a hash table to store selected jobs
        int[] hash = new int[maxDeadline];
        Arrays.fill(hash, -1);

        // Initialize count
        int cnt = 0;

        // Initialize the total profit earned
        int totalProfit = 0;

        // Iterate over each job
        for (int i = 0; i < n; i++) {

            /* Iterate over each deadline slot 
            starting from the job's deadline */
            for (int j = Jobs[i][1] - 1; j >= 0; j--) {

                // If the current deadline slot is available 
                if (hash[j] == -1) {
                    cnt++; // Count of selected jobs
                    hash[j] = Jobs[i][0]; // Mark the job as selected
                    totalProfit += Jobs[i][2]; // Update the total profit

                    // Move to the next job
                    break;
                }
            }
        }

        // Return the array
        return new int[]{cnt, totalProfit};
    }
}

class Main {
    public static void main(String[] args) {
        int[][] jobs = {{1, 4, 20}, {2, 1, 10}, {3, 1, 40}, {4, 1, 30}};

        Solution solution = new Solution();
        int[] result = solution.JobScheduling(jobs);

        // Output the result
        System.out.println("Number of Jobs: " + result[0]);
        System.out.println("Maximum Profit: " + result[1]);
    }
}

```

## JavaScript
```
class Solution {

    // Function to calculate maximum profit
    JobScheduling(Jobs) {
        // Sort jobs based on profit in descending order
        Jobs.sort((a, b) => b[2] - a[2]);

        // Total number of jobs
        let n = Jobs.length;

        // Get the maximum deadline to complete the jobs
        let maxDeadline = -1;
        for (let it of Jobs) {
            maxDeadline = Math.max(maxDeadline, it[1]);
        }

        // Initialize a hash table to store selected jobs
        let hash = new Array(maxDeadline).fill(-1);

        // Initialize count
        let cnt = 0;

        // Initialize the total profit earned
        let totalProfit = 0;

        // Iterate over each job
        for (let i = 0; i < n; i++) {

            /* Iterate over each deadline slot 
            starting from the job's deadline */
            for (let j = Jobs[i][1] - 1; j >= 0; j--) {

                // If the current deadline slot is available 
                if (hash[j] === -1) {
                    cnt++; // Count of selected jobs
                    hash[j] = Jobs[i][0]; // Mark the job as selected
                    totalProfit += Jobs[i][2]; // Update the total profit

                    // Move to the next job
                    break;
                }
            }
        }

        // Return the array
        return [cnt, totalProfit];
    }
}

const jobs = [[1, 4, 20], [2, 1, 10], [3, 1, 40], [4, 1, 30]];

const solution = new Solution();
const result = solution.JobScheduling(jobs);

// Output the result
console.log("Number of Jobs:", result[0]);
console.log("Maximum Profit:", result[1]);
```

# Complexity Analysis
Time Complexity: O(N logN + N2) where N is the number of jobs. First, the jobs are sorted based on profit in descending order, resulting in O(N logN) complexity. Then, the algorithm iterates over the jobs to select them. The outer loop runs once for each job (N iterations), and the inner loop iterates up to the job’s deadline, which can be at most N in the worst case, giving a complexity of O(N2).
Space Complexity: O(N) where N is the number of jobs. An array of size N is used to keep track of occupied slots taking O(N) space.

# My Understanding
each array = [JobID,Deadline,Profit]

If you have jobs deadlines like - 1,2,3,4

Think of available time slots as
```
Slot 1
Slot 2
Slot 3
Slot 4
```
the job with deadline 1 must finish on or before time slot 1
similarly job with deadline 2 must finish on or before time slot 2 -> so you can execute it slot 1 or slot 2
job with deadline 3 must finish on or before time slot 3 -> so you can execute it at slot 1 or slot 2

Each Job takes 1 unit of time to complete  -> meaning each job takes 1 slot to complete

only one job can be scheduled at a time -> meaning if a job is being executed at slot 2 then no other job can be schedule for that slot

# goal
Find the number of jobs and maximum profit


# approach
- first you need to know what is the max deadline
  - if max deadline is 4, you have -1,2,3,4 slots to complete all tasks
  - There is no point creating more slots, because no job can be done after its deadline.
- second since we need to max our profit we need to execute the most profitable jobs forst -> so sorting the arrays based on profits make sense
- now if we start scheduling max profit the jobs at the very last moment they can be executed then all the previous spots can be left for other jobs with tighter deadlines, hence we can maximize the number of jobs 

A deadline=4 profit=100
B deadline=1 profit=70

Wrong scheduling.   1 -> A

Now -> B cannot be scheduled.
Profit->100

Correct scheduling  4 -> A
Now 1 -> B
Profit-> 170
This is exactly why we always schedule as late as possible.