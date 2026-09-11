# Union of two sorted arrays
Given two sorted arrays nums1 and nums2, return an array that contains the union of these two arrays. The elements in the union must be in ascending order.

The union of two arrays is an array where all values are distinct and are present in either the first array, the second array, or both.

# Example 1

Input: nums1 = [1, 2, 3, 4, 5], nums2 = [1, 2, 7]

Output: [1, 2, 3, 4, 5, 7]

Explanation:

The elements 1, 2 are common to both, 3, 4, 5 are from nums1 and 7 is from nums2

# Example 2

Input: nums1 = [3, 4, 6, 7, 9, 9], nums2 = [1, 5, 7, 8, 8]

Output: [1, 3, 4, 5, 6, 7, 8, 9]

Explanation:

The element 7 is common to both, 3, 4, 6, 9 are from nums1 and 1, 5, 8 is from nums2

# Example 3

Input: nums1 = [3, 4, 4, 4], nums2 = [6, 7, 7]

Output:

[3, 4, 6, 7]

# Constraints

1 <= nums1.length, nums2.length <= 1000
-104 <= nums1[i] , nums2[i] <= 104
Both nums1 and nums2 are sorted in non-decreasing order


# Hints
## Hint 1
Utilize two pointers to traverse the sorted arrays simultaneously. This helps efficiently handle duplicates and maintain ascending order.

## Hint 2
Since both arrays are sorted, you can skip elements that are equal to the last added element in the union array.


# Frequently Occurring Doubts
## Why do we need both merging and deduplication?
Merging ensures that elements from both arrays are included in the result in sorted order. Deduplication ensures that repeated elements (either within a single array or across both arrays) appear only once in the final result.

## What if the arrays are very large?
For very large arrays: If they fit in memory, use the two-pointer approach to merge them efficiently. If they don’t fit in memory, use external sorting techniques or divide the arrays into manageable chunks, process each chunk separately, and merge the results.

# Interview Follow-ups
## How would you handle unsorted input arrays?
If the input arrays are unsorted: Sort each array first O(mlogm) and O(nlogn)). Apply the two-pointer approach or merge logic. This approach would have an overall time complexity of O(mlogm+nlogn+m+n).

## How would you extend this to handle k sorted arrays?
To handle k sorted arrays: Use a min-heap to merge the arrays. Push the smallest element of each array into the heap. Extract the minimum element, add it to the result, and push the next element from the same array into the heap. This has a time complexity of O(Nlogk), where N is the total number of elements.

# Fun Facts
## Fact 1
This type of problem is often used in database management systems and search engines for combining and analyzing large data sets.

## Fact 2
Particularly, it serves as the underlying concept for SQL's UNION operation, which helps in merging data from two SQL tables while removing duplicates.

## Fact 3
Additionally, search engine algorithms use similar concepts to combine search results from various sources into one single, sorted and non-repetitive result set.

# Intuition
The optimal approach uses the two-pointers to solve the problem. Use two pointers, one for each array, and traverse both arrays simultaneously. Keep adding the smaller element between the two arrays to the result vector if it hasn't been added already.

What if both elements are equal?
If both elements are equal, add any one of them, ensuring that all unique elements are added in sorted order.

# Approach 
- Initialize two variable i to iterate nums1 and j to iterate nums2 as 0.
- Create an empty vector for storing the union of nums1 and nums2.
- If current element of nums1 is equal to current element of nums2, this means its a common element, so insert only one element in the union & increment it by 1.
- If current element of nums1 is less than current element of nums2, insert current element of nums1 in union. Also check if last element in union vector is not equal to nums1[ i ],then insert in union else don’t insert. After checking increment i.
- If current element of nums1 is greater than current element of nums2, insert current element of nums2 in union. Similar to last point, check if the last element in the union vector is not equal to nums2[ j ], then insert in the union, else don’t insert. After checking increment j.
- After traversing if any elements are left in nums1 or nums2 check for condition and insert in the union.

# Solutions
```
import java.util.*;

class Solution {
    public int[] unionArray(int[] nums1, int[] nums2) {
        List<Integer> UnionList = new ArrayList<>();
        int i = 0, j = 0;
        int n = nums1.length;
        int m = nums2.length;

        while (i < n && j < m) {
             // Case 1 and 2
            if (nums1[i] <= nums2[j]) {
                if (UnionList.isEmpty() || UnionList.get(UnionList.size() - 1) != nums1[i]) {
                    UnionList.add(nums1[i]);
                }
                i++;
            } 
            // Case 3
            else {
                if (UnionList.isEmpty() || UnionList.get(UnionList.size() - 1) != nums2[j]) {
                    UnionList.add(nums2[j]);
                }
                j++;
            }
        }

        // Add remaining elements of nums1, if any
        while (i < n) {
            if (UnionList.isEmpty() || UnionList.get(UnionList.size() - 1) != nums1[i]) {
                UnionList.add(nums1[i]);
            }
            i++;
        }

        // Add remaining elements of nums2, if any
        while (j < m) {
            if (UnionList.isEmpty() || UnionList.get(UnionList.size() - 1) != nums2[j]) {
                UnionList.add(nums2[j]);
            }
            j++;
        }

        // Convert List<Integer> to int[]
        int[] Union = new int[UnionList.size()];
        for (int k = 0; k < UnionList.size(); k++) {
            Union[k] = UnionList.get(k);
        }

        return Union;
    }

    public static void main(String[] args) {
        int[] nums1 = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};
        int[] nums2 = {2, 3, 4, 4, 5, 11, 12};

        // Create an instance of the Solution class
        Solution finder = new Solution();

        // Get union of nums1 and nums2 using class method
        int[] Union = finder.unionArray(nums1, nums2);

        // Output the result
        System.out.println("Union of nums1 and nums2 is:");
        for (int val : Union) {
            System.out.print(val + " ");
        }
        System.out.println();
    }
}
```

# Complexity Analysis 
Time Complexity: O(M+N), because both the arrays must be traversed once.

Space Complexity: O(M+N), considering the space for returning the output, which in the worst case, can contain all the elements from both arrays.