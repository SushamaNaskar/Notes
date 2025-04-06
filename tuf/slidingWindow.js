// 1. two pointers+sliding widow
//find sum of all subarray

// let arr=[1, 3, 2, 6, 4, 8, 5];
// let k=3;

//BRUTE FORCE

// for(let i=0;i<arr.length;i++){
//     let sum=0;
//     let j=i;

//      while (j-i<k && j<arr.length) {
//         sum+=arr[j];
//         j++;
//     }

//     if(j-i==k){
//         console.log('sum of window',i+1,sum);
//     }

// }

//USING TWO POINTERS

// let sum=0;

// // sum of first widow
// for(let i=0;i<k;i++){
//  sum+=arr[i];
// }
// console.log('sum of window 1',sum);

// for(let i=k;i<arr.length;i++){
//     sum = sum - arr[i-k] + arr[i]; //i-k is the left pointer and i is the right pointer
//     console.log('sum of window',i-k+2 ,sum);
// }

// OR WITH RIGHT AND LEFT VARIABLE

// let sum=0;
// let left=0;
// let right=0;

// //sum of first window
// while(right<k && right<arr.length){
//     sum+=arr[right];
//     right++
// }

// console.log('sum of window 1',sum)

// while(right<arr.length){
//     sum= sum - arr[left];
//     left++;

//     sum=sum+arr[right];
//     right++;

//     console.log('sum of window:',left+1,sum);
// }

// # Finding the longest subarray or substring from a given array or string,
//  where the sum of the elements is less than or equal to a given value K

// let arr=[2, 5, 1, 7, 10];
// let k=14;

// let left=0;
// let right=0;
// let maxLength=0;
// let sum=0;

// for(let right=0;right<arr.length;right++){
//     sum = sum + arr[right]  //add right element

//     while(sum>k){ //shrink window from left still we get a valid sum
//      sum =  sum - arr [left];
//      left++;
//     }

//    maxLength=Math.max(maxLength,right-left+1);

// }

// console.log('maxLength',maxLength);

// # Counting the Number of Subarrays with a Given Sum
//counts the number of all elements or their sum (or subarrays) less  or equal to K =x
//counts the number of all elements or their sum (or subarrays) less  or equal to K-1 =y
//Subtract the result of atMost(K-1) from atMost(K) to get the number of subarrays with exactly K ones.
let arr = [1, 0, 1, 0, 1];
let k = 2;


// // Helper function to find the number of subarrays with at most sum S
function atMost(A, S) {
  if (S < 0) return 0;
  let res = 0;
    let i = 0;

  // Sliding window approach to count subarrays
  for (let j = 0; j < A.length; j++) {
    // Include A[j] in the current window
    S -= A[j];
    while (S < 0) {
      // Shrink the window if the sum exceeds S
      S += A[i++];
    }
    // Count all subarrays ending at j
    res += j - i + 1;
  }

  return res;
}

// Function to find the number of subarrays with exactly sum S
function numSubarraysWithSum(arr, k) {
  return atMost(arr, k) - atMost(arr, k - 1);
}

let ans=numSubarraysWithSum(arr,k);
console.log(ans);
