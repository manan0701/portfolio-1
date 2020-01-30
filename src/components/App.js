import React from 'react';
import Title from './title/title'
import Terminal from './terminal/terminal'
import Projects from './projects/projects'
import './App.scss'


function App() {
  return (
    <div className="container">
        <Title />
        <Terminal />
        <Projects />
    </div>
  );
}

export default App;
