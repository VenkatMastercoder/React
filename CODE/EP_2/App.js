import React from "react";
import ReactDOM from "react-dom"; 
 
 
const a = React.createElement("h1",{class:"Tag"},"hello world");

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