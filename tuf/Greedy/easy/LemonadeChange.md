# Question
Each lemonade at a booth sells for $5. Consumers are lining up to place individual orders, following the billing order. Every consumer will purchase a single lemonade and may pay with a $5, $10, or $20 bill. Each customer must receive the appropriate change so that the net transaction is $5. Initially, there is no change available.

Determine if it is possible to provide the correct change to every customer. Return true if the correct change can be given to every customer, and false otherwise.



Given an integer array bills, where bills[i] is the bill the ith customer pays, return true if the correct change can be given to every customer, and false otherwise.

# Example 1

Input : bills = [5, 5, 10, 5, 20]



Output : true



Explanation : Initially we have $0 available for change.

From first two customers, we will collect two $5 bills in order. After the first two customers we have two $5 bills available with us for change.

From the third customer , we collect bill of $10 and give back $5. After third customer we have one $5 and one $10 bill available with us for change.

From fourth customer , we collect $5 bill. After fourth customer we have two $5 and one $10 bills available with us for change if required.

From fifth customer , we collect bill of $20 and give back $15 (one $10 + one $5 bill).

Since all the customers did receive the change correctly , so we return true.

# Example 2

Input : bills = [5, 5, 10, 10, 20]



Output : false



Explanation : From first two customers, we will collect two $5 bills in order. After the first two customers we have two $5 bills available with us for change.

From third customer , we collect $10 and give back $5. After the third customer we have one $5 and one $10 bill available with us for change.

From fourth customer , we collect $10 and give back $5. After the fourth customer we have two $10 bill available with us for change.

From fifth customer , we collect $20 , we cannot give the $15 change as we have two $10 bills.

Since all the customers did not receive the change correctly , the we return false.


# Constraints

1 <= bills.length <= 105
bills[i] = {5 , 10 , 20}

# Hint 1
Use variables to keep track of the count of $5 and $10 bills. Since $20 bills cannot be used as change directly, their count is irrelevant for making change.

# Frequently Occurring Doubts

## What if there are no $5 bills in the array?
If there are no $5 bills and a customer pays with a $10 or $20 bill, return false immediately since change cannot be provided.


## What if there are multiple $20 bills in a row?
The algorithm handles each transaction independently. If enough $10 and $5 bills are available for each $20 transaction, it proceeds. Otherwise, it terminates when change can't be given.


# Interview Follow-ups

## What happens if customers are allowed to pay with other denominations (e.g., $2, $50)?
Extend the tracking system to handle these denominations and implement rules to prioritize their usage for making change.

## How would you modify the solution if the booth starts with some initial change?
Add the initial counts of $5 and $10 bills to the respective variables at the beginning of the simulation.


# Fun Facts
## Fact 1
This problem can be viewed as a real-time inventory management problem, which is a core part of many business softwares and frameworks.

## Fact 2
In use cases like retail or restaurant management software, constantly tracking the availability of change or specific denominations of currency is critical to smooth transactions.

## Fact 3
Understanding how to effectively solve this problem can make automatic payment and billing systems more accurate, improving overall customer experience.

# Intuition
If a customer pays with a $5 bill, it's easy because we don't need to give any change. When a customer pays with a $10 bill, we need to have a $5 bill on hand to give them the correct change.
Now, if someone pays with a $20 bill, we can give them change with one $10 bill and one $5 bill, or if we don't have a $10 bill, we need to have three $5 bills to make the change.

# Approach
- First, keep track of the number of $5 and $10 bills available. Start with zero bills.
- As each customer pays, follow these steps:
   - If a customer pays with a $5 bill, simply keep it because no change is needed.
   - If a customer pays with a $10 bill, provide them with $5 in change. Ensure there is at least one $5 bill to do this. If there is, give the $5 bill and keep the $10 bill. If not, it is impossible to give the correct change, and the process should stop.
   - If a customer pays with a $20 bill, provide them with $15 in change. The preferred way is by giving one $10 bill and one $5 bill. If there is no $10 bill, give three $5 bills instead. If neither option is possible, providing the correct change is not feasible, and the process should stop.
- If the correct change is given to all customers, the process is successful. If at any point providing the correct change is not possible, the process fails.

# Solution

## Java
```
import java.util.*;

class Solution {
    /* Function to find whether each customer can 
       be provided with correct change */
    public boolean lemonadeChange(int[] bills) {
        
        // Counter for $5
        int five = 0; 
        
        // Counter for $10
        int ten = 0;   
        
        // Iterate through each customer's bill
        for (int bill : bills) {
            
            /* If the customer's
               bill is $5 */
            if (bill == 5) {
                
                // Increment $5
                five++;  
            }
            
            /* If the customer's
               bill is $10 */
            else if (bill == 10) {
                
                /* Check if there are $5
                   bills available to give change */
                if (five > 0) {
                    // Use one $5
                    five--; 
                    // Receive one $10
                    ten++;   
                } else {
                    // If no $5 bill available, return false
                    return false;  
                }
            }
            
            /* If the customer's
               bill is $20 */
            else {
                /* Check if there are both
                   $5 and $10 bills
                   available to give change */
                if (five > 0 && ten > 0) {
                    // Use one $5
                    five--; 
                    // Use one $10
                    ten--;   
                } 
                /* If there are not enough $10 bills,
                   check if there are at least
                   three $5 bills available */
                else if (five >= 3) {
                    // Use three $5 bills
                    five -= 3;  
                } 
                /* If unable to give
                   change, return false */
                else {
                    return false;  
                }
            }
        }
        
        // Return true
        return true;  
    }

    public static void main(String[] args) {
        int[] bills = {5, 5, 5, 10, 20};
        System.out.print("Queues of customers: ");
        for (int bill : bills) {
            System.out.print(bill + " ");
        }
        System.out.println();
        Solution solution = new Solution();
        boolean ans = solution.lemonadeChange(bills);
        if (ans)
            System.out.println("It is possible to provide change for all customers.");
        else
            System.out.println("It is not possible to provide change for all customers.");
    }
}

```

## JavaScript
```
class Solution {
    /* Function to find whether each customer can 
       be provided with correct change */
    lemonadeChange(bills) {
        
        // Counter for $5
        let five = 0; 
        
        // Counter for $10
        let ten = 0;   
        
        // Iterate through each customer's bill
        for (let bill of bills) {
            
            /* If the customer's
               bill is $5 */
            if (bill === 5) {
                
                // Increment $5
                five++;  
            }
            
            /* If the customer's
               bill is $10 */
            else if (bill === 10) {
                
                /* Check if there are $5
                   bills available to give change */
                if (five > 0) {
                    // Use one $5
                    five--; 
                    // Receive one $10
                    ten++;   
                } 
                /* If no $5 bill available, return false */
                else {
                    return false;  
                }
            } 
            
            /* If the customer's
               bill is $20 */
            else {
                /* Check if there are both
                   $5 and $10 bills
                   available to give change */
                if (five > 0 && ten > 0) {
                    // Use one $5
                    five--; 
                    // Use one $10
                    ten--;   
                } 
                /* If there are not enough $10 bills,
                   check if there are at least
                   three $5 bills available */
                else if (five >= 3) {
                    // Use three $5 bills
                    five -= 3;  
                } 
                /* If unable to give change, return false */
                else {
                    return false;  
                }
            }
        }
        
        // Return true
        return true;  
    }
}

// Example usage
const bills = [5, 5, 5, 10, 20];
console.log("Queues of customers: " + bills.join(" "));
const solution = new Solution();
const ans = solution.lemonadeChange(bills);
if (ans)
    console.log("It is possible to provide change for all customers.");
else
    console.log("It is not possible to provide change for all customers.");

```

# My understanding
Each lemonade sells for $5
Every consumer will purchase a single lemonade 

Consumers are lining up to place individual orders, following the billing order = meaning the array order can not be changed

As soon as i am not able to return a change i stop and return false

initial cash=0

# Thinking
Lets imagine
- I am working at the cash register
- I customer comes in
  - I take the money
  - put it in correct box -> 5  or 10
  - count the change
  - if i have the correct amount of change
    - i give the change
  - if not i return false

- if i receive 20 , the change =15

  15= 10+5.  or 5+5+5

- if I recieve 10 , the change=5


# code
```
class Solution {
    public boolean lemonadeChange(int[] bills) {
        //your code goes here
      int five=0;
      int ten=0;

      for(int i=0;i<bills.length;i++){
        if(bills[i]==20){
            if(ten>=1 && five>=1){
                ten--;
                five--;
            }else if(five>=3){
                five-=3;
            }else{
                return false;
            }
        }else if(bills[i]==10){
            ten++;
            if(five>=1){
                five--;
            }else{
                return false;
            }
        }else{
        five++;
      }
      }
      return true;
    }
}
```