import React from 'react';
import './title.scss'

function Title() {
    return( 
        <div>
            <div className="banner">
                <div className="avatar" />
                <h1>Filip Åhfelt</h1>
            </div>
            
            <div className="intro">
                <p style={{ color: '#434c5e' }}>
                    Hello, I'm Filip.
                    <br />
                    I'm a M.Sc. Student at Faculty of Engineering LTH. Currently, IT Consult at <a className="link" href="http://www.lunicore.se/">Lunicore.</a>
                    <br />
                    To keep in touch, simply <a className="link" href="mailto:filahf94@gmail.com">email</a> or add me on <a className="link" href="https://www.linkedin.com/in/filip-%C3%A5hfelt-22977119a/">LinkedIn</a>.
                </p>
            </div>
        </div>
    )
}

export default Title;