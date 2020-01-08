import React from 'react';
import Title from './title/title'
import Terminal from './terminal/terminal'
import './App.scss'


function App() {
  return (
    <div>
    <div className="container">
        <Title />
        <Terminal />
    </div>
</div>
  );
}

export default App;
