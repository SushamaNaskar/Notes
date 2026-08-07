# Question
Consider a scenario where a teacher wants to distribute cookies to students, with each student receiving at most one cookie.


Given two arrays, student and cookie, the ith value in the Student array describes the minimum size of cookie that the ith student can be assigned. The jth value in the Cookie array represents the size of the jth cookie. If Cookie[j] >= Student[i], the jth cookie can be assigned to the ith student.

Maximize the number of students assigned with cookies and output the maximum number.

# Example 1

Input : student = [1, 2, 3] , cookie = [1, 1]

Output :1

Explanation : You have 3 students and 2 cookies.

The minimum size of cookies required for students are 1 , 2 ,3.

You have 2 cookies both of size 1, So you can assign the cookie only to student having minimum cookie size 1.

So your answer is 1.


# Example 2

Input : student = [1, 2] , cookie = [1, 2, 3]

Output : 2

Explanation : You have 2 students and 3 cookies.

The minimum size of cookies required for students are 1 , 2.

You have 3 cookies and their sizes are big enough to assign cookies to all students.

So your answer is 2.

# Example 3

Input : student = [4, 5, 1] , cookie = [6, 4, 2]

Output:

3


# Constraints

1 <= student.length <= 3*104
0 <= cookie.length <= 3*104
1 <= student[i] , cookie[j] <= 231 - 1



#  Hint 1
Use one pointer to traverse the Student array and another to traverse the Cookie array. If the current cookie satisfies the current student (i.e., Cookie[j] >= Student[i]), assign the cookie to the student and move both pointers forward.


# Hint 2
The goal is to assign the smallest cookie possible to each student that can satisfy their requirement. This greedy approach minimizes wasted resources and ensures that more students can be assigned cookies.


# Frequently Occurring Doubts

## Why is sorting necessary?
Sorting ensures that the smallest available cookie is assigned to the student with the smallest requirement. This maximizes the remaining larger cookies for students with higher requirements.


## What if there are more cookies than students?
The extra cookies will remain unused since the goal is to maximize the number of students who receive cookies, not the usage of cookies.



# Interview Follow-ups

## What if you need to minimize the number of unused cookies?
This problem focuses on maximizing satisfied students, not minimizing unused cookies. To minimize unused cookies, additional logic may be required to assign larger cookies efficiently, but this might reduce the number of satisfied students.

## What if some students can share a cookie?
Modify the logic to track shared cookies. For example, divide the cookie size among eligible students and adjust the student requirements accordingly.


# Fun Facts

## Fact 1
This concept is commonly applied in resource allocation in software development where tasks (students) require certain resources (cookies) to function properly.

## Fact 2
For instance, in Operating Systems, process scheduling algorithms use similar logic to allocate CPU cycles (cookies) to different processes (students) based on their requirements.

## Fact 3
Task scheduling in Big Data frameworks like Hadoop or Spark also use similar concepts to distribute computational resources such as memory and CPU.

## Fact 4
Also, in cloud computing, virtual machines or containers (like in Docker) can be considered as students, and the resources (CPU, memory, etc.) are the cookies.

## Fact 5
The scheduler needs to distribute these resources efficiently among the containers or VMs to ensure optimal usage of resources.

# Intuition
The goal is to maximize the number of students who can be satisfied with the given cookies. By sorting both the students' greed factors and the cookie sizes, we can efficiently assign the smallest available cookie that satisfies each student's greed. We iterate through the arrays, assigning cookies to students until we either run out of students or cookies, ensuring the maximum number of satisfied students.

# Approach
- Sort both the students' greed and cookie sizes to efficiently pair the smallest cookies with the least greedy children.
- Use two pointers to iterate through the arrays, representing the smallest available cookie and the least greedy child.
- For each pair, check if the current cookie can satisfy the current child's greed.
- If a child's greed is satisfied, move to the next child; always move to the next cookie.
- The final count of satisfied children indicates the maximum number of children who can be content with the given cookies.



# Solutions

## Java
```
import java.util.*;

class Solution {
    public int findMaximumCookieStudents(int[] Student, int[] Cookie) {
        int n = Student.length;
        int m = Cookie.length;
        // Pointers
        int l = 0, r = 0;
        // Sorting of arrays
        Arrays.sort(Student);
        Arrays.sort(Cookie);

        // Traverse through both arrays
        while (l < n && r < m) {
            /*If the current cookie can satisfy 
            the current student, move to the 
            next student*/
            if (Cookie[r] >= Student[l]) {
                l++;
            }
            // Move to next cookie
            r++;
        }
        // Return number of students
        return l; 
    }

    public static void main(String[] args) {
        // Example input
        int[] Student = {1, 2};
        int[] Cookie = {1, 2, 3};

        // Create a Solution object
        Solution solution = new Solution();

        // Call the findMaximumCookieStudents function
        int result = solution.findMaximumCookieStudents(Student, Cookie);

        // Output the result
        System.out.println("Number of students satisfied: " + result);
    }
}
```

## JavaScript
```
class Solution {
    findMaximumCookieStudents(Student, Cookie) {
        let n = Student.length;
        let m = Cookie.length;
        // Pointers
        let l = 0, r = 0;
        // Sorting of arrays
        Student.sort((a, b) => a - b);
        Cookie.sort((a, b) => a - b);

        // Traverse through both arrays
        while (l < n && r < m) {
            /*If the current cookie can satisfy 
            the current student, move to the 
            next student*/
            if (Cookie[r] >= Student[l]) {
                l++;
            }
            // Move to next cookie
            r++;
        }
        // Return number of students
        return l; 
    }
}

// Example input
const Student = [1, 2];
const Cookie = [1, 2, 3];

// Create a Solution object
const solution = new Solution();

// Call the findMaximumCookieStudents function
const result = solution.findMaximumCookieStudents(Student, Cookie);

// Output the result
console.log("Number of students satisfied:", result);

```


# My Understanding

cookie [j] ; j=size of one cookie
Student [i] ; i=min size of cookie the ith student can be assigned

if student [i]= 4 -> the student can have  >=4 size cookie

with each student receiving at most one cookie = no sharing

if student=[2,1] and cookie =[4]
either student 2 can have it or student 1 can have it
both can not share
so the output is 1


# Thinking
Lets imagine
- There is a line for student and
- A stack on cookies on my desk, with size written on each packet


- If the student and cookies are sorted in asending order, the task will becomee easy
- each student will need a bigger cookie than the previous student
- And each cookie will be bigger size than the previous cookie

- so a student comes, I check the current cookie
- The cookie size is bigger or same, give it to the student and increate the count, move to next student and next cookie
- The cookie size is small, check the next cookie till i find a correct one
  - if not found then we stop since there are no cookie size that is bigger than the size the student want and the next student will always demand a bigger size cookie


  student=[1,2,4,5,6]. cookie=[1,2,2,3,3]
  we stop after 2
  the answer is 2 


  # code
  ```
  class Solution {
    public int findMaximumCookieStudents(int[] Student, int[] Cookie) {
        //your code goes here

        Arrays.sort(Student);
        Arrays.sort(Cookie);

        int i=0;
        int j=0;

        while(i<Student.length && j<Cookie.length){
            if(Cookie[j]>=Student[i]){
                i++;
            }

            j++;
        }

        return i;
    }
}
```