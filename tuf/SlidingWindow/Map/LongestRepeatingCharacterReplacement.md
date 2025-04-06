# Longest Repeating Character Replacement

Given an integer k and a string s, any character in the string can be selected and changed to any other uppercase English character. This operation can be performed up to k times. After completing these steps, return the length of the longest substring that contains the same letter.

# Brute
 characterReplacement(s, k) {
        //your code goes here

        let map = new Map();
        let maxLen = 0;
        let maxFreq = 0;

        let n = s.length;

        for (let i = 0; i < n; i++) {
            map.clear();

            for (let j = i; j < n; j++) {
                let current = s[j];

                map.set(current, (map.get(current) || 0) + 1);

                maxFreq = Math.max(maxFreq, map.get(current));

                let changes = (j - i + 1) - maxFreq;

                if (changes <= k) {
                    maxLen = Math.max(maxLen, j - i + 1);
                }else{
                    break;
                }


            }

        }
        return maxLen;
    }


# optimal
 characterReplacement(s, k) {
        //your code goes here

        let right = 0;
        let left = 0;
        let map = new Map();
        let maxLen = 0;
        let maxFreq = 0;

        while (right < s.length) {
            let current = s[right];

            map.set(current, (map.get(current) || 0) + 1);

            maxFreq = Math.max(maxFreq, map.get(current));

            let changes = (right - left + 1) - maxFreq;

            if (changes > k) {
                // Slide the left pointer to make the window valid again
                let leftChar = s[left];  // Character being removed from window
                map.set(leftChar, map.get(leftChar) - 1);

                // Move left pointer forward
                left++;
            }

            maxLen = Math.max(maxLen, right - left + 1);
            right++;
        }

        return maxLen;
    }    