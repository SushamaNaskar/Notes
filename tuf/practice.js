// 1. two pointers+sliding widow
//find sum of all subarray

// let arr = [1, 2, 3, 4, 5];

// function findSumOfAllSubArray(arr) {
//   let left = 0;
//   let right = 0;

//   while (left < arr.length) {
//     right = left;
//     let sum = 0;
//     while (right < arr.length) {
//       sum += arr[right];
//       console.log("sum of window",arr[left],arr[right],'=', sum);
//       right++;
//     }

//     left++;
//   }
// }

// findSumOfAllSubArray(arr);

//find sum of all subarray with length k

// BRUTE FORCE

// let arr = [1, 3, 2, 6, 4, 8, 5];
// let k = 3;

// function sumOfSubArrayWithLengthk(arr, k) {
//   let left = 0;
//   let right = 0;

//   for (left = 0; left < arr.length; left++) {
//     right = left;
//     let sum = 0;

//     while (right - left < k && right < arr.length) {
//         sum+=arr[right];
//         right++;
//     }

//     if(right-left==k){
//         console.log('sum of window',sum);
//     }

//   }
// }

// sumOfSubArrayWithLengthk(arr, k);

//USING ONE POINTER BETTER

// let arr = [1, 3, 2, 6, 4, 8, 5];
// let k = 3;

// function sumOfSubArrayWithLengthk(arr, k) {
//   let sum = 0;
//   let right = 0;

//   //calculate first k element sum

//   for (right = 0; right < k; right++) {
//     sum += arr[right];
//   }

//   console.log("sum of window 1", sum);

//   for (let right = k; right < arr.length; right++) {
//     sum = sum - arr[right-k] + arr[right];
//     console.log('sum of window',right-1,sum);
//   }
// }

// sumOfSubArrayWithLengthk(arr, k);

//USING TWO POINTER

// let arr = [1, 3, 2, 6, 4, 8, 5];
// let k = 3;

// function sumOfSubArrayWithLengthk(arr, k) {
//   let sum = 0;
//   let right = 0;
//   let left = 0;

//   //calculate first k element sum

//   for (right = 0; right < k; right++) {
//     sum += arr[right];
//   }

//   console.log("sum of window 1", sum);

//   while (right < arr.length) {
//     sum = sum - arr[left];
//     left++;

//     sum=sum+arr[right];
//     right++

//     console.log('sum of window',left+1,sum);
//   }
// }

// sumOfSubArrayWithLengthk(arr, k);

// # Finding the longest subarray or substring from a given array or string,
//  where the sum of the elements is less than or equal to a given value K

// let arr = [2, 5, 1, 7, 10];
// let k = 14;

// function longestSubArrayWithValue(arr, k) {
//   let left = 0;
//   let right = 0;
//   let maxLength = 0;
//   let sum = 0;

//   while (right < arr.length) {
//     sum += arr[right];

//     if (sum > k) {
//       sum = sum - arr[left];
//       left++;
//     }

//     maxLength = Math.max(maxLength, right - left + 1);

//     right++;
//   }

//   console.log("max length", maxLength);
// }

// longestSubArrayWithValue(arr, k);

// # Counting the Number of Subarrays with a Given Sum
//find all subarray with at most sum k =x
//find all subarray with at most sum k-1 =y
//ans=x-y

let arr = [1, 0, 1, 0, 1];
let k = 2;

function atMost(arr, sum) {
  if (sum < 0) {
    return 0;
  }
  let left = 0;
  let count = 0;
  for (let right = 0; right < arr.length; right++) {
    console.log("right", arr[right]);
    sum = sum - arr[right]; //2-1=1 ,meaning the current element is in the range, or less than sum
    console.log("include right", sum);
    if (sum < 0) {
      //meaning current right element exceeds the sum
      //add the left element meaning, we are excluding from the sum
      console.log("exclude left", arr[left]);
      sum = sum + arr[left];
      console.log("exclude left sum", sum);
      left++;
    }

    count += right - left + 1; //count all elements than's is less than or equal to given sum
  }
  return count;
}

function numSubarraysWithSum(arr, k) {
  const ans = atMost(arr, k) - atMost(k - 1);
  console.log(ans);
}

numSubarraysWithSum(arr, k);
