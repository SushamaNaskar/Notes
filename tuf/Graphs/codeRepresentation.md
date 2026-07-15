# How Graphs are Stored in Code
Before you can traverse or manipulate a graph, you must represent it in your code. The two most common methods to do this are:

## 1. Adjacency Matrix
An Adjacency Matrix is a 2D array of size V X V. The cell matrix[i][j] contains a value (usually 1) if there is an edge between vertex i and j, and 0 if there isn't. For weighted graphs, the cell contains the weight of the edge instead of 1.

Pros: Easy to implement and checks for a specific edge in O(1) time.
Cons: Takes up O(V^2) space, even if the graph is sparsely

## 2. Adjacency List
An Adjacency List uses an array (or hash map) of linked lists or vectors. The index of the array represents a vertex, and the connected nodes are stored in a list associated with that index.

Pros: Highly efficient in space, taking O(V + E) memory, which makes it ideal for sparse graphs.Cons: Checking if a specific edge exists takes O(V) time in the worst case.


# Core Graph Algorithms
Graph operations rely heavily on traversal and pathfinding:
- Breadth-First Search (BFS): Traverses the graph layer by layer, starting from a given node. It explores all direct neighbors first before going deeper.
- Depth-First Search (DFS): Traverses the graph by going as deep as possible down a single path before backtracking.
- Dijkstra's Algorithm: Used for finding the shortest path between a starting node and all other nodes in a weighted graph.
- Topological Sorting: Linearly orders the vertices of a directed acyclic graph (DAG) such that for every directed edge \(u \to v\), vertex \(u\) comes before vertex \(v\).