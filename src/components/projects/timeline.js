import React from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './projects.scss'

function Timeline() {
    return (
        <VerticalTimeline>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#434c5e', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  #81a1c1' }}
                iconStyle={{ background: '#a3be8c', color: '#fff' }}
            >
                <h3 className="vertical-timeline-element-title" style={{ color: '#fff' }}>Personal Website</h3>
                <h4 className="vertical-timeline-element-subtitle" style={{ color: '#81a1c1' }}>React, Sass </h4>
                <p>
                The website you're currently browsing!
                </p>
                <button className="button button1">View Source</button>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                iconStyle={{ background: '#a3be8c', color: '#fff' }}
                contentStyle={{ background: '#434c5e', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  #81a1c1' }}

            >
                <h3 className="vertical-timeline-element-title">Home Dashboard</h3>
                <h4 className="vertical-timeline-element-subtitle" style={{ color: '#81a1c1' }}>React, REST API</h4>
                <p>
                A Dashboard made to control IKEA Trådfri lights
                </p>
                <button className="button button2">Under construction</button>
            </VerticalTimelineElement>
        </VerticalTimeline>
    );
  }
  
  export default Timeline;