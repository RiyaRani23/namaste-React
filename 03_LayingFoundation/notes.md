## Q1: What is JSX?
A: `JSX (JavaScript XML) is a syntax extension for JavaScript used in React to describe what the UI should look like.`

Simple definition

`👉 JSX lets you write HTML-like code inside JavaScript.`

Example
```js
const element = <h1>Hello World</h1>;
```

**This looks like HTML, but it is not HTML.**
`It is JSX, which gets converted to JavaScript`.

**Behind the scenes**

`JSX is compiled by tools like Babel into:`
```js
React.createElement("h1", null, "Hello World");
```

So:
JSX → JavaScript

`Browser understands JavaScript, not JSX`

**Why JSX is used?**

✔ Makes UI code easy to read
✔ Combines logic + UI in one place
✔ Reduces code complexity
✔ Prevents manual DOM manipulation

JSX with JavaScript expressions

Use {} to insert JS:
```js
const name = "Ravi";

<h2>Hello, {name}</h2>
```
JSX Rules (Important)

1️⃣ Must have one parent element
```js
return (
  <div>
    <h1>Title</h1>
    <p>Text</p>
  </div>
);
```

2️⃣ Use className instead of class
```js
<div className="box"></div>
```

3️⃣ JSX is not mandatory, but highly recommended

Is JSX required?

❌ No
✔ But 99% of React apps use JSX because it is cleaner and readable

Parcel -> babbel transpiling our code takes jsx converts code that js engine understand

Browser, JS Engine & ECMAScript (No JSX).
JS Engine (V8, SpiderMonkey) understands only ECMAScript (JavaScript standard)
JSX is NOT part of ECMAScript
Browsers do NOT understand JSX

`✅ So if JSX reaches the JS engine → ❌ Error`

Then how does JSX work?

Because JSX never reaches the browser.

What happens behind the scenes (Correct Flow)

1️⃣ You write JSX
```js
const heading = <h1>Hello</h1>;
```

`2️⃣ Parcel runs first (before browser)`

Parcel is a bundler, not a transpiler.
Parcel’s job:

- Bundle files
- Start dev server
- Optimize assets
- Use Babel internally

`3️⃣ Babel does the transpiling`

Parcel uses Babel to:

`Convert JSX → JavaScript`
Convert modern JS → ECMAScript compatible code

JSX becomes:
```js
const heading = React.createElement("h1", null, "Hello");
```

✔ This code follows ECMAScript
✔ JS engine understands it

`4️⃣ JS Engine executes the transpiled code`

Now the browser receives:

Pure JavaScript
No JSX
No syntax errors

Correct Statement (Interview-Ready)

Browser does not understand JSX.
Parcel uses Babel behind the scenes to transpile JSX into standard JavaScript (ECMAScript) before the code reaches the JavaScript engine, allowing it to execute without errors.

Roles Summary
| Tool      | Role                      |
| --------- | ------------------------- |
| JSX       | Developer-friendly syntax |
| Parcel    | Bundler + uses Babel      |
| Babel     | Transpiler (JSX → JS)     |
| JS Engine | Executes ECMAScript       |
| Browser   | Runs JS engine            |

One-line Flow

JSX → Babel (via Parcel) → JavaScript (ECMAScript) → JS Engine → Browser UI

### Is Transpiler same as Compiler?

| Compiler                         | Transpiler                       |
| -------------------------------- | -------------------------------- |
| Converts one language to another | Converts same language (JS → JS) |
| C → Machine code                 | ES6 → ES5                        |
| Low-level output                 | Human-readable output            |

Important points :-
 `When JSX spans multiple lines, it is wrapped in parentheses() so JavaScript treats it as a single expression and avoids automatic semicolon insertion.`