import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./projects.scss";
import data from "./../../data";

function Timeline() {
  return (
    <VerticalTimeline>
      {data.projects.map(x => (
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#434c5e", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  #81a1c1" }}
          iconStyle={{ background: "#a3be8c", color: "#fff" }}
        >
          <h3
            className="vertical-timeline-element-title"
            style={{ color: "#fff" }}
          >
            {x.title}
          </h3>
          <h4
            className="vertical-timeline-element-subtitle"
            style={{ color: "#81a1c1" }}
          >
            {x.tech}
          </h4>
          <p>{x.desc}</p>
          <a href={x.demo} target="_blank" rel="noopener noreferrer">
            <button className="button button1">Demo</button>
          </a>
          <a href={x.source} target="_blank" rel="noopener noreferrer">
            <button className="button button2">Source</button>
          </a>
        </VerticalTimelineElement>
      ))}
    </VerticalTimeline>
  );
}

export default Timeline;
