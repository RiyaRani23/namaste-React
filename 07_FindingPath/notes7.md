## UseEffect 

**Case1 - if no dependency array => useEffect is called on every rendering**
```js
useEffect(() => {
    console.log("useEffect is called");
});
```
**Case2 - if dependency array is empty = [] => useEffect is called on initial render(just once)**
```js
useEffect(() => {
    console.log("useEffect is called");
} , []);
```

**Case3 - if dependency array is not empty [btnNameReact] => useEffect is called everytime btnNameReact is updated**
```js
useEffect(() => {
    console.log("useEffect is called");
} , [btnNameReact]);
```


## always call useState inside functional component
- try to call useState in top of the functional component
- never create useState inside if/else or loop or any function statement