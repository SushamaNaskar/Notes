# Features:
✅ Auto-focus on load
✅ Debounce to delay API calls or heavy functions
✅ Real-time search simulation

```
import React, { useState, useRef, useEffect } from "react";

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const inputRef = useRef(null);
  const debounceTimer = useRef(null);

  // Auto-focus the input field on mount
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  // Handle search input with debounce
  const handleInputChange = (e) => {
    const value = e.target.value;
    setQuery(value);

    // Clear the previous timer
    if (debounceTimer.current) clearTimeout(debounceTimer.current);

    // Set a new timer to simulate a debounce (300ms delay)
    debounceTimer.current = setTimeout(() => {
      fetchResults(value);
    }, 300);
  };

  // Simulate fetching data (e.g., API call)
  const fetchResults = (searchQuery) => {
    if (searchQuery.trim() === "") {
      setResults([]);
      return;
    }

    // Mock data for demonstration
    const mockData = ["Apple", "Banana", "Orange", "Mango", "Pineapple", "Grapes"];
    const filtered = mockData.filter((item) =>
      item.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setResults(filtered);
  };

  return (
    <div>
      <h1>Debounced Search Bar</h1>
      <input
        ref={inputRef}
        type="text"
        placeholder="Search fruits..."
        value={query}
        onChange={handleInputChange}
      />

      {results.length > 0 ? (
        <ul>
          {results.map((result, index) => (
            <li key={index}>{result}</li>
          ))}
        </ul>
      ) : (
        query && <p>No results found.</p>
      )}
    </div>
  );
}
```
