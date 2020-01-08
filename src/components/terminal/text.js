import Typing from 'react-typing-animation';
import './text.scss'
import React from 'react';
//http://ws.audioscrobbler.com/2.0/?method=user.gettopartists&user=murmuroffbeat&api_key=1650d775b3cb99abfe8d0a918bbd76c7&format=json
function Text() {
  const myFunction = () => {
    var x = document.getElementById("result");
      x.style.display = "block";
  }
    return (
      <div className="text">
      <Typing startDelay={1000} speed={80} hideCursor="true" onFinishedTyping={myFunction} >
      ./filip-ahfelt.sh
    </Typing>
      <div id="result" style={{ display: 'none' }}>
        
        <p>
        <span className="projects">> Current location:</span> "Lund, Sweden"
          <br/>
          <span className="projects">> Education:</span> "M.Sc. Student at Faculty of Engineering LTH"
          <br/>
          <span className="projects">> CV:</span> "<a href="">filip_ahfelt_CV.pdf</a>"
          <br/>
          <span className="projects">> Interests:</span> ["Music", "Design", "Nature"]
          <br />
          <span className="projects">> Skills:</span> ["JavaScript", "Python", "CSS", "React", "SQL", "GraphQL", "Node"]
          <br />
          <span className="projects">> Contact: </span>["<a href="mailto:filahf94@gmail.com">Email</a>", "<a href="https://www.linkedin.com/in/filip-%C3%A5hfelt-22977119a/">LinkedIn</a>", "<a href="https://github.com/filahf">Github</a>"]
          <br/>
          <span className="cursor">&nbsp;</span>
        </p>

      </div>
    </div>
    )
}

export default Text;
