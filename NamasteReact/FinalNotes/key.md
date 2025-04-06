# Unique Key id while using map
- Each item in the list must be uniquely identified

# Why?
- When we have components at same level and if a new component comes on the first without ID, 
- DOM is going to re-render all the components again. As DOM can’t identify where to place it. 

# Can we use index as keys in React?
- yes, but it is not recomended.
- first we should use some uniques values, if present
- if not then only use index.