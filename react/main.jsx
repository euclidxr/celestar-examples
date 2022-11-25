import "@euclidxr/celestar";
import React from "react";
import ReactDOM from "react-dom";

const domContainer = document.querySelector('#root');
const root = ReactDOM.createRoot(domContainer);
root.render(
  <celestar-viewer productId="kondapalli-doll"></celestar-viewer>
);
