# Greedy Algorithm

A greedy algorithm solves problems by making the best choice at each step. Instead of looking at all possible solutions, it focuses on the option that seems best right now.


# How to Identify Greedy Problems:
1. Can we break the problem into smaller parts? If so, and solving those parts helps us solve the main problem, it probably would be solved using greedy approach. For example - In activity selection problem, once we have selected a activity then remaining subproblem is to choose those activities that start after the selected activity.

2. Will choosing the best option at each step lead to the best overall solution? If yes, then a greedy algorithm could be a good choice. For example - In Dijkstra’s shortest path algorithm, choosing the minimum-cost edge at each step guarantees the shortest path.