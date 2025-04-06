# Number of Substrings Containing All Three Characters
Given a string s , consisting only of characters 'a' , 'b' , 'c'.Find the number of substrings that contain at least one occurrence of all these characters 'a' , 'b' , 'c'.

# Brute
  numberOfSubstrings(s) {
        let count = 0;
        
        // Iterate through each starting point of substring
        for (let i = 0; i < s.length; ++i) {
            
            // Array to track presence of 'a', 'b', 'c'
            let hash = [0, 0, 0];
            
            // Iterate through each ending point of substring
            for (let j = i; j < s.length; ++j) {
                
                // Mark current character in hash
                hash[s.charCodeAt(j) - 'a'.charCodeAt(0)] = 1;
                
                /* Check if all characters
                'a', 'b', 'c' are present*/
                if (hash[0] + hash[1] + hash[2] === 3) {
                    
                    // Increment count for valid substring
                    count++; 
                }
            }
        }
        // Return the total count of substrings
        return count;
    }

# Optimal
   numberOfSubstrings(s) {
        
        /* Array to store the last seen
        index of characters 'a', 'b', 'c'*/
        let lastSeen = [-1, -1, -1];
        
        let count = 0;
        
        // Iterate through each character in string s
        for (let i = 0; i < s.length; ++i) {
            
            // Update lastSeen index for current character
            lastSeen[s.charCodeAt(i) - 'a'.charCodeAt(0)] = i;
            
            /* Check if all characters 'a',
            'b', 'c' have been seen*/
            if (lastSeen[0] !== -1 && lastSeen[1] !== -1 && lastSeen[2] !== -1) {
                
                /* Count valid substrings
                ending at current index*/
                count += 1 + Math.min(lastSeen[0], lastSeen[1], lastSeen[2]);
            }
        }
        
        // Return the total count of substrings
        return count;
    }    