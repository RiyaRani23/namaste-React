## Igniting the App

## Q: What is Bundler?
A: A bundler in React is a tool that takes all your project files (JavaScript, JSX, CSS, images, etc.), processes them, and combines them into optimized files that the browser can understand and load efficiently.

`Why a bundler is needed in React?`

React apps are written using:
- JSX
- ES6+ JavaScript
- Multiple files and imports
- CSS and assets (images, fonts)

* 👉 Browsers don’t understand JSX or modern JS directly, and loading hundreds of files separately is slow. 

A bundler solves this.

### What a bundler does (step-by-step)

Starts from an entry file -> Usually index.js or main.jsx
Builds a dependency graph
Follows all import and require statements
Transforms code

* JSX → JavaScript 

* ES6+ → browser-compatible JS (via Babel)

Bundles files Combines everything into one or few files ,Optimizes,Minification
Tree shaking (removes unused code)
Code splitting (loads code only when needed)