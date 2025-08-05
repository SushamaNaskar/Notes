 # What are the different types of data structure?

 1. Linear: Linear data structures are those where data elements are arranged in a sequential(linear) manner. Example: Arrays, Linked List, Stacks, Queues, etc.

2. Non-linear: Non-linear data structures are those where data elements are not arranged in a sequential manner. They form a hierarchical or interconnected structure. Example: Trees, Graphs, etc.


# What is a Graph data structure?
- A graph is a non-linear data structure consisting of nodes that have data and are connected to other nodes through edges. 
- Graphs have a wide-ranging application in real life. These include analysis of electrical circuits, finding the shortest routes between two places, building navigation systems like Google Maps, even social media using graphs to store data about each user, etc.


# components of graphs:
1. Node
2. Edges
3. Path
4. Cycle

# Node(Vertex):
- Nodes are fundamental units of a graph, representing entities or objects. They store the data.

# Edges(Links):
- Edges are connection between nodes, representing relationships or interactions between the nodes.

- Edges can be of two types:
1. Directed Edges: Edges that have direction, indicating a one-way relationship. Each edge is represented as an ordered pair (u, v), meaning there is a connection from vertex u to vertex v.

2. Undirected Edges: Edges that do not have a direction, indicating a two-way relationship. Each edge is represented as an unordered pair {u, v}, meaning there is a mutual connection between vertex u and vertex v.

## Edge Weight:
Some graphs have edges that have weights associated to them. It is often referred to as the cost of the edge.

# Path in a graph:
- A path in a graph is a sequence of vertices where each adjacent pair of vertices is connected by an edge. A path always contain unique nodes, i.e., a node cannot appear twice in a path.

- It can be of two types:

1. Simple Path: A path where no vertex is repeated.
2. Closed Path (Cycle): A path that starts and ends at the same vertex, with no other repetitions of vertices and edges.

# Cycle in a graph:
- A graph is said to have a cycle if it is possible to start from a node and end at the same node. A graph may or may not contain cycles in it.


# Types of Graphs

## Directed graph:
 A graph where all the edges are directed edges, i.e., unidirectional in nature. It contains an ordered pair of vertices. It implies each edge is represented by a directed pair <u, v>. Therefore, <u, v> and <v, u> represent two different edges.

## Undirected graph: 
A graph where all the edges are undirected edges, i.e., bidirectional in nature. In an undirected graph, the pair of vertices representing any edge is unordered. Thus, the pairs (u, v) and (v, u) represent the same edge.

## Weighted Graphs: 
Having edges that have weights associated with them.

## Unweighted Graphs: 
Having edges that do not have weights associated with them.

## Cyclic: 
Graphs having at least one cycle in them.

## Acyclic:
Graphs that do not have a cycle in them.

# Degree of a node in graph:
- The degree of a node in a graph is a measure of the number of edges connected to that node.

## For an undirected graph:
Degree: The degree of a vertex is the total number of edges connected to it.

## For a directed graph:
In directed graphs, edges have directions (from one vertex to another), hence, there are two types of degrees:

1. In-degree: The in-degree of a vertex is the number of incoming edges to that vertex.
2. Out-degree: The out-degree of a vertex is the number of outgoing edges from that vertex.