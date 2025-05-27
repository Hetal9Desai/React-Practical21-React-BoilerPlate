import React, { useState } from "react";
import logo from "./logo.svg";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <h1>React Webpack Boilerplate</h1>

      <img src={logo} alt="React Logo" className="logo" />

      <button onClick={() => setCount(count + 1)}>Clicked {count} times</button>

      <p>
        This demonstrates React + CSS + SVG + HMR + Asset loading with Webpack
        5.
      </p>
    </div>
  );
}
