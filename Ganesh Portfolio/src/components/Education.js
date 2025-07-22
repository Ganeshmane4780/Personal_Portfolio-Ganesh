import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

function Education() {
  return (
    <>
      <div className="edu-title">
        <h3>MY ACADEMIC JOURNEY</h3>
        <h1>EDUCATION</h1>
      </div>
      <div className="education-section" id="education">
        <VerticalTimeline lineColor="#b39ddb">
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2024 | CGPA: 7.05/10 "
            dateClassName="edu-date"
            iconStyle={{
              background: "transparent",
              color: "#2196f3",
              border: "5px solid #2196f3",
            }}
            contentStyle={{
              background: "#ffffff",
              color: "#333",
              borderRadius: "15px",
            }}
            contentArrowStyle={{ borderRight: "7px solid #ffffff" }}
          >
            <h3 className="vertical-timeline-element-title">
              Bachelor of Computer Applications (BCA)
            </h3>
            <h5 className="vertical-timeline-element-subtitle">
              Dahiwadi College, Dahiwadi — Shivaji University, Kolhapur
            </h5>
            <p>◦ Studied core subjects such as Data Structures, Java, Web Technologies, and Software Engineering.</p>
            <p>◦ Built projects like a To-Do List App and a Responsive Coffee Shop Project.</p>
            <p>◦ Participated in workshops and tech fests to improve collaboration and presentation skills.</p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2021 | 76.83% "
            dateClassName="edu-date"
            iconStyle={{
              background: "transparent",
              color: "#e91e63",
              border: "5px solid #e91e63",
            }}
            contentStyle={{
              background: "#ffffff",
              color: "#333",
              borderRadius: "15px",
            }}
            contentArrowStyle={{ borderRight: "7px solid #ffffff" }}
          >
            <h3 className="vertical-timeline-element-title">
              Higher Secondary Education (12th)
            </h3>
            <h5 className="vertical-timeline-element-subtitle">
              Ch.Shivaji Jr. College Vaduj, Maharashtra Board
            </h5>
            <p>◦ Completed HSC with focus on Commerce stream.</p>
          <p>◦ Developed strong analytical and logical reasoning skills through coursework in commerce-related subjects.</p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2019 | 81% "
            dateClassName="edu-date"
            iconStyle={{
              background: "transparent",
              color: "#fbc02d",
              border: "5px solid #fbc02d",
            }}
            contentStyle={{
              background: "#ffffff",
              color: "#333",
              borderRadius: "15px",
            }}
            contentArrowStyle={{ borderRight: "7px solid #ffffff" }}
          >
            <h3 className="vertical-timeline-element-title">
              Secondary Education (10th)
            </h3>
            <h5 className="vertical-timeline-element-subtitle">
              Shri Katreshwar High-School Katarkhatav, Maharashtra Board
            </h5>
            <p>◦ Completed SSC with distinction.</p>
            <p>◦ Built strong foundations in problem-solving and time management.</p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </>
  );
}

export default Education;
