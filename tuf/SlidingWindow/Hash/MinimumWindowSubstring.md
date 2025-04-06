# Minimum Window Substring

Given two strings s and t. Find the smallest window substring of s that includes all characters in t (including duplicates) , in the window. Return the empty string "" if no such substring exists.


# Brute
   minWindow(s, t) {
        
        /* Variable to store the minimum
        length of substring found*/
        let minLen = Infinity;
        
        /* Variable to store the starting index
        of the minimum length substring*/
        let sIndex = -1;
        
        /* Array to count frequencies
        of characters in string t*/
        let hash = new Array(256).fill(0);
        for (let c of t) {
            hash[c.charCodeAt(0)]++;
        }
        
        /* Initialize count to track the number of
        characters from t found in current window of s*/
        let count = 0;
        
        // Iterate through string s
        for (let i = 0; i < s.length; ++i) {
            // Reset array for counting current window
            let currentHash = hash.slice();
            
            count = 0;
            
            // Iterate through current window 
            for (let j = i; j < s.length; ++j) {
                if (currentHash[s.charCodeAt(j)] > 0) {
                    count++;
                }
                currentHash[s.charCodeAt(j)]--;
                
                /* If all characters from t 
                are found in current window*/
                if (count === t.length) {
                    
                    /* Update minLen and sIndex
                    if current window is smaller*/
                    if (j - i + 1 < minLen) {
                        minLen = j - i + 1;
                        sIndex = i;
                    }
                    break; 
                }
            }
        }
        
        // Return the minimum length substring from s
        return (sIndex === -1) ? "" : s.substring(sIndex, sIndex + minLen);
    }


# Optimal
  minWindow(s, t) {
        let minLen = Infinity;
        let sIndex = -1;
        
        let hash = new Array(256).fill(0);
        
        // Count the frequencies of characters in t
        for (let c of t) {
            hash[c.charCodeAt(0)]++;
        }
            
        let count = 0;
        let l = 0, r = 0;
        
        // Iterate through current window 
        while (r < s.length) {
            // Include the current character in the window
            if (hash[s.charCodeAt(r)] > 0) {
                count++;
            }
            hash[s.charCodeAt(r)]--;
                
            /* If all characters from t 
            are found in current window */
            while (count === t.length) {
                    
                /* Update minLen and sIndex
                if current window is smaller */
                if (r - l + 1 < minLen) {
                    minLen = r - l + 1;
                    sIndex = l;
                }
                
                // Remove leftmost character from window
                hash[s.charCodeAt(l)]++;
                if (hash[s.charCodeAt(l)] > 0) {
                    count--;
                }
                l++;
            }
            r++;
        }
        
        // Return minimum length substring from s
        return (sIndex === -1) ? "" : s.substr(sIndex, minLen);
    }    