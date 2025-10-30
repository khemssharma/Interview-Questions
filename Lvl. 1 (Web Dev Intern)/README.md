# React Coding Interview Questions
You must learn these answers word by word and these programs token by token by heart to clear any React Interview

## Basic Counter App (React + Hooks)
Make it run here: https://nextleap.app/online-compiler/reactjs-programming
```
import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default Counter;

```

## Fetch and Display Users (React + useEffect)

```
import React, { useState, useEffect } from "react";

function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(data => {
        setUsers(data);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;
  return (
    <ul>
      {users.map(user => <li key={user.id}>{user.name}</li>)}
    </ul>
  );
}

export default UserList;

```


## Other Sample Tasks That May Be Asked:

Toggle between dark/light mode using context or state.

Display error/success messages after a form submit.

Implement component memoization using React.memo or useMemo.

Write a custom hook (e.g., for window size).

Protect a Next.js page using authentication check.

Code for pagination, filtering, or sorting a list.

## React.js Questions & Model Answers

### What are the main features of React?

"React is a component-based library for building user interfaces. Key features include virtual DOM for performance, reusable components, hooks for state and side-effect management, and unidirectional data flow for predictability."

### Difference between props and state?

"Props are external inputs to a component—immutable and set by the parent. State is internal, mutable, and used to manage a component’s local data and UI behavior."

### How does the virtual DOM work?

"React maintains a virtual DOM, which is a lightweight copy of the actual DOM. When state or props change, React updates the virtual DOM and efficiently syncs only the necessary differences to the real DOM using a diffing algorithm."

### What are hooks?

"Hooks are functions like useState and useEffect that let you manage component state and lifecycle directly in functional components, removing the need for class components."

### Explain “lifting state up”.

"Lifting state up means moving shared state to a common ancestor component so multiple child components can access and modify it. This keeps data flow predictable and organized."

## Next.js Questions & Model Answers

### Advantages over plain React?

"Next.js adds features like server-side rendering, static site generation, built-in routing, image optimization, and API routes. This improves SEO, performance, and developer efficiency."

### SSR vs SSG?

"SSR (Server-side Rendering) generates pages on each request, ideal for dynamic data. SSG (Static Site Generation) pre-builds pages at build time for fast load times, perfect for static content."

### How do API routes work in Next.js?

"API routes are serverless functions you can create in the /pages/api folder. They handle backend logic like data fetching, authentication, and act as endpoints within the same codebase."

### How do you deploy a Next.js app?

"Next.js apps can be deployed to platforms like Vercel, Netlify, or any server that supports Node.js. Tools like Vercel automate static generation and serverless deployment."

## Redux Questions & Model Answers

### What is Redux and why use it?

"Redux is a state management library for predictable state updates using actions and reducers. It centralizes state, facilitates debugging, and helps manage complex app flows."

### Redux data flow?

"Data flows from a component dispatching an action → reducer processes it → store updates → UI re-renders based on the new store state."

### Redux Toolkit benefits?

"Redux Toolkit simplifies Redux setup by providing utilities for reducers, actions, and async logic. It reduces boilerplate and promotes best practices."

### Redux vs Context API?

"Redux is best for large-scale state management with advanced tooling and middleware. Context API suits simple, limited global state but may cause performance issues for frequent updates."

## Coding/Scenario Questions (Tips):

### Build a counter app: 
"I'd use useState for local state, or Redux for global state. Render UI with a button to increment, actions to modify state, and display updates immediately using hooks/selectors."

### Fundamental troubleshooting: 
"I’d check the error message, use debugging tools like console.log, and search for undefined variables or incorrect function calls."
