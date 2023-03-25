import React from "react";
import ReactDOM from "react-dom"; 
 
 // <h1 class="Tag">Hello World</h1>
  const a = React.createElement("h1",{class:"Tag"},"hello world");

  /*<div>
      <div id="parent">
        <div id="child"> 
          <h1>Hello World</h1>
          <h2>Hello World</h2>
        </div>
      </div>
    </div>
  */

  const b  = React.createElement(
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

  root.render(b);