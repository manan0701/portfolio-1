import React from "react";
import Title from "./title";
import Terminal from "./terminal";
import Projects from "./projects/";
import "./App.scss";

function App() {
  return (
    <div className='container'>
      <Title />
      <Terminal />
      <Projects />
    </div>
  );
}

export default App;
