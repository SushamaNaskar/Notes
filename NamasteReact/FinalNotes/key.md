# Unique Key id while using map
- Each item in the list must be uniquely identified

# Why?
- When we have components at same level and if a new component comes on the first without ID, 
- DOM is going to re-render all the components again. As DOM can’t identify where to place it. 

# Can we use index as keys in React?
- yes, but it is not recomended.
- first we should use some uniques values, if present
- if not then only use index.


# Optimize lists in react
- Use React.memo for List Items : Only re-render list items when props actually change.
Use when: Item props don’t change frequently.

- Key Props: Use Stable and Unique Keys


- Virtualization with react-window or react-virtualized
Render only visible items in the viewport.

- Pagination or Infinite Scroll
Instead of rendering everything at once, load in chunks.

Use IntersectionObserver for infinite scroll (shown earlier).

Or implement pagination (page 1, 2, ...).


- Avoid Anonymous Functions in render()
Bad (creates a new function on every render):

const handleClick = useCallback((item) => { ... }, []);
items.map(item => <ListItem key={item.id} onClick={() => handleClick(item)} />);


- Use useMemo to Cache Derived Lists
const visibleItems = useMemo(() => {
  return items.filter(item => item.visible);
}, [items]);

- Throttle or Debounce Expensive Updates
 If filtering, debounce the search input.

 - Batch State Updates
 Use a reducer or batch changes in one useState call if updating many things.

 - Avoid Unnecessary DOM Nesting
Keep card/item markup minimal — excessive nesting or deeply styled components can slow down rendering.