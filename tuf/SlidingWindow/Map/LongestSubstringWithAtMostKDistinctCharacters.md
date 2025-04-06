# Longest Substring With At Most K Distinct Characters
Given a string s and an integer k.Find the length of the longest substring with at most k distinct characters.

# Brute (using two loops)
   kDistinctChar(s, k) {
        //your code goes here
        let maxLen = 0;
        let set = new Set();

        for (let i = 0; i < s.length; i++) {
            set.clear();

             for(let j = i; j < s.length; j++){
                let c = s.charAt(j);

                 set.add(c);

                  if(set.size <= k){
                    
                   let len = j - i + 1;
                    maxLen = Math.max(maxLen, len);
                }else break;
             }
        }
        return maxLen;
    }


# Optimal
   kDistinctChar(s, k) {
        //your code goes here
        let maxLen = 0;
        let l = 0;
        let r = 0;
        let map = new Map();

        while (r < s.length) {
            map.set(s[r], (map.get(s[r]) || 0) + 1);

            if (map.size > k) {
                let charL = s[l];
                map.set(charL, map.get(charL) - 1);

                 if(map.get(charL) === 0){
                    map.delete(charL);
                }
                l++;
            }

             if (map.size <= k) {
                maxLen = Math.max(maxLen, r - l + 1);
            }
            
            r++;
        }

        return maxLen;
    }    



    notes: 
    1. why we are using  if (map.size > k)  as optimal and why not while( map.size > k) is optimal?
    - let's say we found max length 5
    - there is no point to decrease the length, instead keep a constanst window of 5 length and shrink left by one
