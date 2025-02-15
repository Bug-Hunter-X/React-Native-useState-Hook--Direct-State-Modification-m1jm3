# React Native useState Hook: Direct State Modification

This repository demonstrates a common error in React Native development involving the `useState` hook.  The `bug.js` file shows incorrect state update, while `bugSolution.js` provides the correct implementation.

## Bug Description

Directly modifying the state variable within the `useState` hook without using its setter function leads to unexpected behavior. The UI won't update, and the application might produce unexpected results.  This is because React's internal mechanisms for detecting state changes are bypassed.

## Solution

Always use the setter function (e.g., `setCount`) provided by `useState` to update state values. This ensures that React can correctly track state changes and efficiently re-render the UI.