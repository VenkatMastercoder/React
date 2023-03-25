# Code 

# 1. IMPORT REACT FROM CDN
```js
    <script crossorigin src="https://unpkg.com/react@18/umd/react.production.min.js"></script>
```
```js
    <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"></script>
```

# 2. 3 -- Things to Render a React Element

- React.CreateElement 
```js
    // <h1 class="Tag">Hello World</h1>
    const ReactElement = React.createElement("h1",{class:"Tag"},"hello world");
```
- React.createRoot
```js
    const root = ReactDOM.createRoot(document.getElementById("root"));
```
- Render a React Element
```js
    root.render(ReactElement);
```
- Output a React Element
```html
   <h1 class="Tag">Hello World</h1>
```


# 3. How to Render a Nested React Element

- Example Code
```html
    <div id="parent">
      <div id="child"> 
        <h1>Hello World</h1>
        <h2>Hello World</h2>
      </div>
    </div>
```

- We Have to Use <b>[] </b>wrap up the element and render it 
```js
    const ReactElement  = React.createElement(
      "div",
      {id:"parent"},
      React.createElement(
        "div",
        {id:"child"},
        [
          React.createElement("h1",{id:"h1"},"h1 tag 1"),
          React.createElement("h1",{id:"h2"},"h1 tag 2"),
        ]
      )
    )

    const root = ReactDOM.createRoot(document.getElementById("root"));

    root.render(ReactElement);
```

 
