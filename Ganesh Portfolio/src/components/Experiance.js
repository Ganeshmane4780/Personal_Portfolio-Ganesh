import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";



function Experience() {
  return (
    <>
      <div className="exp-title">
        <h3>WHAT I HAVE DONE SO FAR</h3>
        <h1>WORK EXPERIANCE</h1>
      </div>
      <div className="experience" id="experiences">
        <VerticalTimeline lineColor=" rgba(170, 54, 124, 0.5)">
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="Dec-2024 - Present"
            iconStyle={{ background: "#e91e63", color: "#fff" }}
           
          >
            <div>
              <h3 className="vertical-timeline-element-title">
                Full Stack Java Developer
              </h3>
              <h5>SevenMentor & Training Pvt. Ltd.</h5>
              <p>
                ◦ Developed object-oriented solutions in Java, implementing core
                features such as exception handling, multithreading, and file
                I/O, with a focus on writing clean, efficient, and reusable
                code.
              </p>
              <p>
                ◦ Collaborated in an agile team environment to design, develop,
                and debug application modules as part of real-time software
                projects.
              </p>
              <p>
                ◦ Created and maintained MySQL database schemas, including
                tables, queries, and stored procedures for seamless backend
                integration.
              </p>
              <p>
                ◦ Gained hands-on experience in connecting Java applications
                with MySQL using JDBC, enhancing backend data management.
              </p>
              <p>
                {" "}
                ◦ Actively contributed to unit testing and debugging processes,
                ensuring code reliability, performance, and adherence to best
                practices.
              </p>
            </div>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="June-2025"
            iconStyle={{ background: "#e9d35b", color: "#fff" }}
           
          >
            <h3 className="vertical-timeline-element-title">
              Software Engineering - Virtual Internship{" "}
            </h3>
            <h5 className="vertical-timeline-element-subtitle">Accenture (via Forage)</h5>
            <p>
              ◦ Completed a comprehensive virtual internship simulating
              real-world software engineering tasks and team collaboration.
            </p>
            <p>◦ Gained hands-on exposure in key domains:-</p>
            <p>
              Architecture: Understood the structure and design of scalable,
              maintainable applications.
            </p>
            <p>
              Security: Learned secure coding principles and threat mitigation
              techniques.
            </p>
            <p>
              Programming: Applied problem-solving to write clean, efficient,
              and reusable code.
            </p>
            <p>
              Testing: Practiced writing and executing test cases to ensure code
              quality.
            </p>
            <p>
              Agile: Participated in sprint planning, simulated team stand-ups,
              and iterative development cycles.
            </p>
            <p>
              ◦ Developed a strong foundation in the software development
              lifecycle (SDLC) and industry-standard engineering practices.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="June-2025"
            iconStyle={{ background: "#3e497a", color: "#fff" }}
            
          >
            <h3 className="vertical-timeline-element-title ">
           Technology Job Simulation – Virtual Internship
            </h3>

            <h5 className="vertical-timeline-element-subtitle">
             Deloitte Australia (via Forage)
            </h5>

            <p>
              {" "}
              ◦ Completed a virtual job simulation focused on development and coding tasks aligned with real-world consulting scenarios.
            </p>
            <p>
              ◦ Wrote a detailed proposal for creating a data dashboard, outlining business goals, user requirements, and technical implementation strategies.
            </p>
             <p>
              ◦ Gained practical exposure to problem-solving, solution design, and the consulting workflow in a professional environment.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </>
  );
}

export default Experience;
