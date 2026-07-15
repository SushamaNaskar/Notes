# An Adjacency Matrix is a 2D array where:
- Rows represent source vertices.
- Columns represent destination vertices.
- 1 means an edge exists.
- 0 means no edge exists.

# Example Graph
```
    A ---- B
    |      |
    |      |
    C ---- D
```

# Edges:
A → B
A → C
B → D
C → D

# Adjacency Matrix
|   | A | B | C | D |
| - | - | - | - | - |
| A | 0 | 1 | 1 | 0 |
| B | 1 | 0 | 0 | 1 |
| C | 1 | 0 | 0 | 1 |
| D | 0 | 1 | 1 | 0 |

For an undirected graph, the matrix is symmetric.

# Visual Representation
```
      A  B  C  D
    +------------
A |  0  1  1  0
B |  1  0  0  1
C |  1  0  0  1
D |  0  1  1  0
```

# Java Implementation
```
public class Graph {
    private int[][] adjMatrix;
    private int vertices;

    public Graph(int vertices) {
        this.vertices = vertices;
        adjMatrix = new int[vertices][vertices];
    }

    public void addEdge(int source, int destination) {
        adjMatrix[source][destination] = 1;
        adjMatrix[destination][source] = 1; // Undirected graph
    }

    public void printMatrix() {
        for (int i = 0; i < vertices; i++) {
            for (int j = 0; j < vertices; j++) {
                System.out.print(adjMatrix[i][j] + " ");
            }
            System.out.println();
        }
    }

    public static void main(String[] args) {
        Graph graph = new Graph(4);

        graph.addEdge(0, 1); // A-B
        graph.addEdge(0, 2); // A-C
        graph.addEdge(1, 3); // B-D
        graph.addEdge(2, 3); // C-D

        graph.printMatrix();
    }
}
```

# Output:
```
0 1 1 0
1 0 0 1
1 0 0 1
0 1 1 0
```

# Complexity
| Operation          | Time Complexity |
| ------------------ | --------------- |
| Add Edge           | O(1)            |
| Remove Edge        | O(1)            |
| Check Edge         | O(1)            |
| Traverse Neighbors | O(V)            |
| Space              | O(V²)           |


# JavaScript Implementation
```
class Graph {
    constructor(vertices) {
        this.vertices = vertices;

        // Create V x V matrix filled with 0
        this.adjMatrix = Array.from(
            { length: vertices },
            () => Array(vertices).fill(0)
        );
    }

    // Add an edge (Undirected Graph)
    addEdge(source, destination) {
        this.adjMatrix[source][destination] = 1;
        this.adjMatrix[destination][source] = 1;
    }

    // Remove an edge
    removeEdge(source, destination) {
        this.adjMatrix[source][destination] = 0;
        this.adjMatrix[destination][source] = 0;
    }

    // Check if edge exists
    hasEdge(source, destination) {
        return this.adjMatrix[source][destination] === 1;
    }

    // Print matrix
    printGraph() {
        console.table(this.adjMatrix);
    }
}

const graph = new Graph(4);

graph.addEdge(0, 1); // A-B
graph.addEdge(0, 2); // A-C
graph.addEdge(1, 3); // B-D
graph.addEdge(2, 3); // C-D

graph.printGraph();
```