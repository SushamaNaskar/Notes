# 2 pointer/sliding window
## constant window

Q. Given an array containing positive and negative integerters and a vlaue k, denoting number of elements you need to pick contigiously to find the max sum.

ex: [-1,2,3,1,4,-1] k=3
-1+2+3=4
2+3+1=5
3+1+4=8
1+4-1=4

output
8

logic

take two pointer left and right

for our first window (index:0,1,2)
left=0 and right=k-1  
sum=-1+2+3=4
maxsum=4

for remaining window

remove the last left element from sum and move left to next index
sum=sum-arr[left]
left++;

Move right to next element and add it to sum
right++;
sum=sum+arr[right]

compare new sum with maxsum
maxsum=Math.max(maxsum,sum)

continue still right<arr.length-1 (we can only move right if it's the second last element)


## longest subarray/substring and with some conditions

- a single element is a subarray
- the whole array is a subarray
- and contigious elements are subarray

Q. length of longest subarray with sum<=k

[1,2,3] k<=5

1. brute force

generate all subarray

for(i=0 -> i<n-1){
    for(j=i -> j<n-1){

    }
}

add logic based on condition

for(i=0 -> i<n-1){
    sum=0;              //to get the current sum starting for a new i
    for(j=i -> j<n-1){

        sum+=arr[j];    //keep adding new elements

        if(sum>=k){   //since we are looking for sum <=k
            break;
        }else{
            maxLength=Math.max(maxLength,j-i+1); //jth index - ith index +1 =length of current subarray 
        }

    }
}

2. better is using sliding window/2 pointer logic

take left and right =>expand right and check if the condition is valid
if valid keep expanding right
if the condition is not valid shrink left, meaing remove current left element and move left to next element


start with left =0, right=0, sum=0 and maxLength=0

add arr[right] in the sum
sum+=arr[right]


validate and update the ans
if(sum<=k){
    maxlength=Math.max(maxLength, right-left+1);
}
right++;


if the condition is not valid
while(sum>k){
    sum=sum-arr[left]
    left++;
}


code:

while(right<n){
    sum+=arr[right];  add the right element

    while(sum>k){     //if the condition is false keep updating sum and left, still the condition becomes true
        sum=sum-arr[left];
        left--;
    }

    if(sum<=k){  //if the condition is true update the ans
      maxLength=Math.max(maxLength, right-left+1);
    }

    right++; //go to next element
}

# optimal
 while(sum>k){     //if the condition is false keep updating sum and left, still the condition becomes true
        sum=sum-arr[left];
        left--;
    }

change while to if:
since we are looking for max length, 
if we shrink the left to 1
we can check if it is valid increment right
if the condition is false, we don't want to check for 2 length, since the max length is 3, so keep checking for length 3
still we find length>3

if(sum>k){     //if the condition is false keep updating sum and left, still the condition becomes true
        sum=sum-arr[left];
        left--;
    }


## no of subarray with some conditions

Q. no of subarray with sum=k
- if the codition is constant it becomes difficult to add logic for validation
- so we need to break it into two
1. find out the no of subarray where sum<=k  x
3. find out the no of subarray where sum<=k-1 y
and the answer always will be x-y


## find the shortest/minimum window w