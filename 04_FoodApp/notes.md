## Functional Component 
Props
always use unique key while using map function
🔑 Why do we give key when using .map() in React?
Short answer:

key helps React identify which list item has changed, added, or removed.

`🧠 What problem does key solve?`

React uses a process called Reconciliation (Virtual DOM diffing).

When a list changes, React asks:

Which item stayed the same?

Which item moved?

Which item was removed?

Which item is new?

👉 Without key, React cannot identify items correctly.

⚡ Real-world analogy

Imagine students in a class 👇

❌ Without roll numbers:

Teacher must recheck every student every day

✅ With roll numbers (key):

Teacher instantly knows who joined, left, or moved seats

`🚫 Why NOT use array index as key?`
```js
key={index} ❌
```
If list order changes:

- React mismatches items
- Leads to UI bugs
- Input values jump unexpectedly