// import React from "react";
// import ReactDOM from "react-dom";
// import "./index.css";
// import App from "./App";

import React from "./React";
// const str = <div name='champon'>
//   <span>儿子1</span>
//   <span>儿子2</span>
// </div>
const str = React.createElement(
  "div",
  { name: "champion" },
  "hello",
  React.createElement("span", {}, 123)
);
console.log(str);
// ReactDOM.render("demo", document.getElementById("root"));
React.render("demo", document.getElementById("root"));
