# Longest Substring Without Repeating Characters 
Given a string, S. Find the length of the longest substring without repeating characters.


# Brute (two for loops)
   longestNonRepeatingSubstring(s) {
        //your code goes here
      
        let map = new Map();
        let maxLen = 0;

        let n=s.length;

       for (let i = 0; i < n; i++) {
        map.clear();

         for(let j = i; j < n; j++){
            let current = s[j];

            if (map.get(current)===1) {
                break;
            }

            map.set(current,1);
            maxLen = Math.max(maxLen, j - i + 1);

         }

        }
        return maxLen;
    }
    
# optimal
 longestNonRepeatingSubstring(s) {
        //your code goes here
         let right = 0;
        let left = 0;
        let map = new Map();
        let maxLen = 0;

        while (right < s.length) {
            let current = s[right];

            if (map.get(current)) {
                left = Math.max(map.get(current)+1,left);
            }

            map.set(current,right);
            maxLen = Math.max(maxLen, right - left + 1);

            right++;

        }
        return maxLen;
    }