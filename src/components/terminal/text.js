import Typing from 'react-typing-animation';
import './text.scss'
import React, { useState } from 'react';



function Text() {
  //show result after the typing is done
  var [showText, setShowText ] = useState({display: 'none'})
  const hook = () => setShowText({display: 'block'})

    return (
      <div className="text">
      <Typing startDelay={1000} speed={80} hideCursor="true" onFinishedTyping={hook} >
      ./filip-ahfelt.sh
      </Typing>
      <div style={showText}>    
        <p>
        <span className="projects">> Current location:</span> "Lund, Sweden"
          <br/>
          <span className="projects">> Education:</span> "M.Sc. Student at Faculty of Engineering LTH"
          <br/>
          <span className="projects">> Interests:</span> ["Music", "Design", "Nature"]
          <br />
          <span className="projects">> Skills:</span> ["JavaScript", "Python", "CSS", "React", "SQL", "GraphQL", "Node"]
          <br />
          <span className="projects">> Contact: </span>["<a href="mailto:filahf94@gmail.com">Email</a>", "<a href="https://www.linkedin.com/in/filip-ahfelt/" target="_blank" rel="noopener noreferrer">LinkedIn</a>", "<a href="https://github.com/filahf" target="_blank" rel="noopener noreferrer">Github</a>"]
          <br/>
          <span className="cursor">&nbsp;</span>
        </p>
      </div>
    </div>
    )
}

export default Text;
