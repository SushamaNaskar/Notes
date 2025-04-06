# Fruit Into Baskets (similar to Longest Substring With At Most K Distinct Characters)
There is only one row of fruit trees on the farm, oriented left to right. An integer array called fruits represents the trees, where fruits[i] denotes the kind of fruit produced by the ith tree.

The goal is to gather as much fruit as possible, adhering to the owner's stringent rules:

1) There are two baskets available, and each basket can only contain one kind of fruit. The quantity of fruit each basket can contain is unlimited.

2) Start at any tree, but as you proceed to the right, select exactly one fruit from each tree, including the starting tree. One of the baskets must hold the harvested fruits.

3) Once reaching a tree with fruit that cannot fit into any basket, stop.

Return the maximum number of fruits that can be picked.

# Brute (using two loops)

   totalFruits(fruits) {
        //your code goes here
        let maxLen = 0;
        let set = new Set();

        for (let i = 0; i < fruits.length; i++) {
            set.clear();

            for (let j = i; j < fruits.length; j++) {
                let c = fruits[j];

                 set.add(c);

                 if (set.size <= 2) {
                    
                    /* Calculate the length 
                    of current substring*/
                    let len = j - i + 1;
  
                    maxLen = Math.max(maxLen, len);
                } else break;
            }

        }

        return maxLen;
    }

# Optimal
  totalFruits(fruits) {
        //your code goes here
        let maxLen = 0;
        let l = 0;
        let r = 0;
        let map = new Map();

        while (r < fruits.length) {
            map.set(fruits[r], (map.get(fruits[r]) || 0) + 1);

            if (map.size > 2) {
                let fruitL = fruits[l];
                map.set(fruitL, map.get(fruitL) - 1);

                if (map.get(fruitL) === 0) {
                    map.delete(fruitL);
                }
                l++;
            }

             if (map.size <= 2) {
                maxLen = Math.max(maxLen, r - l + 1);
            }
            
            r++;
        }

        return maxLen;
    }    