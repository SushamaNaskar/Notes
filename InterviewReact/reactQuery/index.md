What is React Query?
React Query is a JavaScript library designed to simplify the complex task of data fetching and caching in React applications. It offers a set of hooks and utilities that enable you to manage data from various sources, including REST APIs, GraphQL, or even local state, effortlessly.

React Query is a powerful library for fetching data and managing state in React applications. This library simplifies the interaction with APIs by providing caching, synchronization, and server state management out of the box. Some key features are as follows:

Data Caching: It will store the fetched data automatically and use it to avoid redundant API calls.
Error Handling: Manages errors internally for easy interaction with APIs.
State Management: Does not require using manually maintained state handling like useEffect.
Improve performance, develop responsive designs, and provide seamless user experiences without headaches with React Query.

Common Hooks:
useQuery() – fetch and cache data

useMutation() – send POST/PUT/DELETE requests

useQueryClient() – manually update or invalidate cache

useInfiniteQuery() – for infinite scroll


What is React Query and why is it used?

It's a data-fetching and state management library for handling asynchronous server state (API data), with built-in caching, syncing, and updates.


What are the main differences between React Query and useEffect + useState?

React Query abstracts common async logic like caching, deduping, error/loading state, refetching, and background sync.


What is a query key? Why is it important?

A query key uniquely identifies each query in the cache; React Query uses it to cache, refetch, and invalidate data correctly.


What is the difference between useQuery and useMutation?

useQuery is for fetching GET data

useMutation is for changing data (POST/PUT/DELETE)

How does caching work in React Query?

React Query caches data using the query key. You can control the cache time, stale time, and manual cache invalidation.


What is stale time? What happens after data becomes stale?

Stale time is how long data is considered "fresh." After that, React Query may refetch it in the background.


How do you manually refetch or invalidate a query?

js
Copy
Edit
const queryClient = useQueryClient();
queryClient.invalidateQueries(['users']);


What is optimistic updating? When would you use it?

It's when you temporarily update the UI before the mutation completes (used in useMutation for better UX).

React Query vs RTK Query (Redux Toolkit Query)


| Feature                      | **React Query**                      | **RTK Query**                       |
| ---------------------------- | ------------------------------------ | ----------------------------------- |
| 🔧 Setup Complexity          | Easy to use independently            | Requires Redux Toolkit setup        |
| 📦 Bundled With Redux?       | ❌ No                                 | ✅ Yes — built into Redux Toolkit    |
| 🧠 Learning Curve            | Slightly easier for React-only devs  | Easier if already using Redux       |
| 💾 Caching & Stale Data Mgmt | ✅ Advanced caching, stale time, etc. | ✅ Good caching, similar features    |
| 📡 REST & GraphQL Support    | ✅ Supports both                      | ✅ Supports both                     |
| ⚙️ Custom Hooks Required?    | ✅ useQuery, useMutation              | ✅ auto-generates hooks per endpoint |
| 🔍 Devtools                  | ✅ Excellent (React Query Devtools)   | ✅ Basic (Redux DevTools)            |
| 🧩 Ecosystem Fit             | Best for non-Redux projects          | Best for apps already using Redux   |


Final Thoughts:
Use React Query if:

You don’t need Redux

You want easy setup for fetching/caching

Use RTK Query if:

You’re already using Redux Toolkit

You want to co-locate API logic in Redux slices