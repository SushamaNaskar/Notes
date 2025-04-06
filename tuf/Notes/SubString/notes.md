Types of Substring Problems Based on Algorithms
Substring problems can be classified into different algorithmic approaches based on their optimal solutions.

# Sliding Window Technique (Two Pointers)
Used for: Fixed or variable-length substring problems that involve finding optimal substrings.

- Common Problems:

1. Longest Substring Without Repeating Characters 
2. Longest Substring with At Most K Distinct Characters
3. Smallest Substring Containing All Characters of Another String

- Optimal Approach: Use a hashmap/set and maintain a dynamic window with two pointers.

- Time Complexity: O(N)

# Hashing (Prefix Sum, Frequency Maps)
Used for: Counting occurrences, checking substrings efficiently.

- Common Problems:

1. Find All Anagrams in a String
2. Count Number of Substrings with Exactly K Unique Characters
3. Subarrays with Given XOR (Prefix Sum with HashMap)

- Optimal Approach: Use HashMap/Set to track previous occurrences.

- Time Complexity:O(N)

# Dynamic Programming (DP)
✅ Used for: Counting or finding optimal substring properties that depend on previous states.

🔹 Common Problems:

Longest Palindromic Substring (LeetCode 5)
Count Palindromic Substrings (LeetCode 647)
Longest Common Substring (LCS Variation)
🔹 Optimal Approach: DP table or Kadane’s-style DP.

🔹 Time Complexity: 
𝑂
(
𝑁
2
)
O(N 
2
 ) (for palindrome problems) or 
𝑂
(
𝑁
𝑀
)
O(NM) (for LCS)

# KMP / Z-Algorithm (Pattern Matching)
✅ Used for: Finding occurrences of one string in another efficiently.

🔹 Common Problems:

Find Pattern in a String (LeetCode 28)
Count Occurrences of a Pattern in a Text
Smallest Rotation to Make a String Palindrome
🔹 Optimal Approach: Use KMP (Knuth-Morris-Pratt) or Z-Algorithm for efficient pattern searching.

🔹 Time Complexity: 
𝑂
(
𝑁
)
O(N) for KMP, 
𝑂
(
𝑁
+
𝑀
)
O(N+M) for Z-Algorithm

# Trie (Prefix Trees)
✅ Used for: Storing and searching substrings efficiently.

🔹 Common Problems:

Longest Word in Dictionary That Can Be Formed
Count Distinct Substrings of a String
Autocomplete System
🔹 Optimal Approach: Use Trie (Prefix Tree) for substring indexing.

🔹 Time Complexity: 
𝑂
(
𝑁
)
O(N) for insertion/search.