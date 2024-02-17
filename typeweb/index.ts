import React from "./React";

console.log("Hello,World!");

React.render(
  document.getElementById("root") as HTMLDivElement,
  React.createElem("h1", "Hello,World") as HTMLDivElement
);
