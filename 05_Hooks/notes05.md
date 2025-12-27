## import and Export

default export 

 `Two types of Export/Import`

 `Default Export/Import`
```js
 export default Component;
 ```
 ```js
 import Component from "path";
```

`Named Export/Import`
```js
- export const Component;
```
```js
- import {Component} from "path";
```

## Hooks
🔹 What are Hooks in React?

`Hooks are special functions that let you use React features inside functional components.`

Before hooks:

State ❌ only in class components

Lifecycle methods ❌ only in classes

After hooks:

State ✅ in function components

Side-effects ✅ in function components

Cleaner & simpler code 🚀

👉 Introduced in React 16.8

🧠 Simple Definition (Exam / Interview)

`Hooks allow functional components to use state, lifecycle behavior, and other React features without using classes.`

❓ Why Hooks were needed

Class components had problems:

Hard to read (this, bindings)

Code repetition

Complex lifecycle methods

Hooks solved all of these.

## React Hooks
(Normal JS utility functions)
- useState() - use state
- useEffect() -

whenever a state variable changes(updates) react rerendered the component

`react is good at dom operation that's why most loved library and fast help of virtual dom`

Reconciliation Algorithm(React Fiber)
virtual DOM
Actual DOM
Diff Alogorithm