import React from 'react';
import './terminal.scss'
import {useSpring, animated} from 'react-spring'
import Text from './text';

function Terminal() {
  const params = useSpring({
    opacity: 1, from: {opacity: 0}
  })
  
  return <animated.div style={params}>
    <div>
      <div className="terminal-head">
        <div className="min"></div>
        <div className="max"></div>
        <div className="close"></div>
      </div>
      <div className="card">
        <div className="text">
          <Text />
        </div>
      </div>
    </div>
  </animated.div>

}

export default Terminal;