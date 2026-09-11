# Shortest Job First
A software engineer is tasked with using the shortest job first (SJF) policy to calculate the average waiting time for each process. The shortest job first also known as shortest job next (SJN) scheduling policy selects the waiting process with the least execution time to run next.

You are given an array of integers bt of size n representing the burst times (execution times) of n processes.

Your task is to calculate the average waiting time for all processes when scheduled using the SJF policy. The waiting time of a process is the total time a process has to wait before its execution starts, which is the sum of burst times of all previously executed processes.

Return the floor of the average waiting time, i.e., the largest whole number less than or equal to the actual average.

# Example 1

Input : bt = [4, 1, 3, 7, 2]

Output : 4

Explanation : The total waiting time is 20.

So the average waiting time will be 20/5 => 4.

# Example 2

Input : bt = [1, 2, 3, 4]

Output : 2

Explanation : The total waiting time is 10.

So the average waiting time will be 10/4 => 2.

# Constraints

1 <= n <= 105
1 <= bt[i] <= 105

# Hints

## Hint 1
First, sort the burst times in ascending order. For each process, the waiting time is the sum of the burst times of all previous processes.

## Hint 2
"Sum all the waiting times and divide by the total number of processes (n). Use the floor function to return the closest whole number less than or equal to the result. "

# Frequently Occurring Doubts

## Why does sorting the burst times minimize the waiting time?
Sorting ensures shorter processes finish earlier, reducing the waiting time for longer processes that follow. This is the essence of the SJF policy.

## Does SJF consider arrival times of processes?
This question focuses on non-preemptive SJF, where all processes are assumed to arrive at time 0. For preemptive SJF (also known as Shortest Remaining Time First), arrival times are considered.

# Interview Follow-ups
## How would you extend this to include arrival times?
Sort processes by arrival time first. For each time unit, select the process with the shortest burst time among those that have arrived but haven’t been executed.

## What are the limitations of SJF?
SJF may lead to starvation for processes with long burst times if shorter jobs keep arriving. It also assumes knowledge of burst times in advance, which may not always be possible.

# Fun Facts

## Fact 1
The Shortest Job First (SJF) or Shortest Job Next (SJN) scheduling policy used in this problem is often utilized by operating systems to manage the execution of processes in real-world applications.

## Fact 2
This strategy improves process throughput and utilization of CPU, making it suitable for time-sharing systems where efficiency is critical.

## Fact 3
So next time you're working on your PC or using a mobile app, you can imagine a miniature 'queue' of processes, waiting to be handled based on their required computing time!.

# Intuition
The Shortest Job First (SJF) algorithm will be used to solve this problem. First, the job durations are sorted from shortest to longest to ensure the shortest job is handled next. After sorting, each job is processed in sequence, and the waiting time for each job is calculated by summing the durations of all previous jobs. This accumulated waiting time is then used to determine the total waiting time for all jobs.

# Approach
- Begin by sorting the job durations in ascending order so that the jobs are arranged from shortest to longest.
- Initialize counters to keep track of the waiting time for each job and the total waiting time for all jobs.
- Iterate through the sorted list of jobs. For each job, calculate its waiting time by summing the durations of all the previous jobs. Add the duration of the current job to the cumulative total time.
- Once all jobs have been processed, calculate the average waiting time by dividing the total waiting time by the number of jobs.


# Solution
## Java
```
import java.util.*;

class Solution {
    /* Function to calculate total waiting 
       time using Shortest Job First algorithm */
    public long solve(int[] bt) {
        // Sort jobs in ascending order
        Arrays.sort(bt);

        // Initialize total waiting time
        long waitTime = 0;
        // Initialize total time taken
        long totalTime = 0;
        // Get number of jobs
        int n = bt.length;

        // Iterate to calculate waiting time
        for (int i = 0; i < n; ++i) {
            waitTime += totalTime;
            totalTime += bt[i];
        }

        // Return average waiting time
        return waitTime / n;
    }

    public static void main(String[] args) {
        int[] jobs = {1, 2, 3, 4};

        System.out.print("Array Representing Job Durations: ");
        for (int job : jobs) {
            System.out.print(job + " ");
        }
        System.out.println();

        Solution solution = new Solution();
        long ans = solution.solve(jobs);
        System.out.println("Total waiting time: " + ans);
    }
}

```

## JavaScript
```
class Solution {
    /* Function to calculate total waiting 
       time using Shortest Job First algorithm */
    solve(bt) {
        // Sort jobs in ascending order
        bt.sort((a, b) => a - b);

        // Initialize total waiting time
        let waitTime = 0;
        // Initialize total time taken
        let totalTime = 0;
        // Get number of jobs
        let n = bt.length;

        // Iterate to calculate waiting time
        for (let i = 0; i < n; ++i) {
            waitTime += totalTime;
            totalTime += bt[i];
        }

        // Return average waiting time
      return Math.floor(waitTime / n);
    }
}

// Example usage
const jobs = [1, 2, 3, 4];

console.log("Array Representing Job Durations: " + jobs.join(" "));

const solution = new Solution();
const ans = solution.solve(jobs);
console.log("Total waiting time: " + ans);
```

# Complexity Analysis
Time Complexity: O(N logN + N) where N is the length of the jobs array.The code first sorts the job durations, which takes O(N logN) time. After sorting, it iterates through the job durations to calculate the total waiting time, which takes O(N) time.
Space Complexity: O(1) no extra space used.

# My understanding

bt[i] = burst time (execution time) of process i.

The shortest job first also known as shortest job next (SJN) scheduling policy selects the waiting process with the least execution time to run next -> Meaning Always execute the process with the smallest burst time first, so we are allowed to change the order of the array or sort the array


calculate the average waiting time 

## What is waiting time?
A process waits until all previous processes finish.

waiting time of current process = sum of burst times of all previous processes

also The first process never waits,so its waiting time is 0.

## Variables

We maintain two running values:

totalExecutionTime – Total execution time of all processes completed so far. This is also the waiting time of the next process.
totalWaitingTime – Sum of the waiting times of all processes.

## Algorithm

For each process (after sorting):

Add the current process's waiting time to the total waiting time.
Execute the current process by adding its burst time to the total execution time.
totalWaitingTime += totalExecutionTime;
totalExecutionTime += bt[i];

The order is important.

totalExecutionTime represents the waiting time of the current process. Once the current process executes, totalExecutionTime increases and becomes the waiting time for the next process.



 [4, 1, 3, 7, 2]
 [1,2,3,4,7]
 waiting time of each process -> [0,1,3,6,10]

 1 -> total waiting time =0,  totalExecutionTime=1 
 2 -> total waiting time =0+1=1,  totalExecutionTime=1+2=3
 3 -> total waiting time =1+3=4,  totalExecutionTime=3+3=6
 4 -> total waiting time =4+6=10,  totalExecutionTime=6+4=10
 7 -> total waiting time =10+10=20,  totalExecutionTime=10+7=17

 average = total waiting time/ numberOfProcesses = 20/5=4


