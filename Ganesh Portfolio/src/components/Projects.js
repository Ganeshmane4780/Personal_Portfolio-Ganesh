/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-undef */

import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";


import birds from "../assets/img/birds animation.png";
import loginform from "../assets/img/login form.jpg";
import todo from "../assets/img/To-di list.png";
import todoreact from "../assets/img/To-do react.png";
import foodie from "../assets/img/foodie.png";
import netflix from "../assets/img/Netflix clone.png";
import cafe from "../assets/img/cafe html.png";
import translator from "../assets/img/translator.png";
import freezedelight from "../assets/img/freezedelight.png";
import calculator from "../assets/img/Calculator.png";
import coffe from "../assets/img/Coffee react.png";
import Ems from "../assets/img/Ems system.png";

import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {
 
  const texturl1="https://github.com/Ganeshmane4780?tab=repositories"
  const gotToNewPage=()=>{
    navigate("https://github.com/Ganeshmane4780?tab=repositories");
  }
  
  const projects = [
    {
       title: " Login Form",
    description: "Simple Login Form Design with HTML, CSS and JavaScript",
    imgUrl:loginform,
    texturl: "Live demo - Git repo's",
    },
    {
      title: "Birds Animation",
      description: "Simple Animation of Birds",
      imgUrl: birds,
      texturl:"Live demo - Git repo's",
    },
    
    {
      title: "Foodie Restaurant Website",
      description: "Foodie web-application design with HTML, CSS",
      imgUrl: foodie,
       texturl:"Live demo - Git repo's",
    },
    {
      title: " To-Do list app",
      description: " To-Do list app with HTML, CSS and JavaScript",
     imgUrl: todo,
       texturl:"Live demo - Git repo's",
    },
    {
      title: "Netflix Clone",
      description: "Responsive Netflix Clone with HTML, CSS",
       imgUrl: netflix,
     texturl:"Live demo - Git repo's",
    },
    {
      title: "Cafe Culture",
      description: "Simple Cafe Culture Website Design with HTML, CSS",
     imgUrl: cafe,
       texturl:"Live demo - Git repo's",
    },
  ];
  const project2 = [
    {
      title: "To-Do List React",
      description: "A To-Do List Web App build with React",
     imgUrl: todoreact,
      texturl:"Live demo - Git repo's",
      
    },
    
    {
      title: "Language Translator",
      description: "Design A Language Translatorweb app with HTML, CSS, JavaScript",
      imgUrl: translator,
     texturl:"Live demo - Git repo's",
      
    },
    {
      title: "Freezedelight",
      description: "Responsive web-application Build with the React",
       imgUrl: freezedelight,
     texturl:"Live demo - Git repo's",
    },
    {
      title: "Calculator",
      description: "Design a responsive calculator using HTML, CSS, JavaScript",
         imgUrl: calculator,
      texturl:"Live demo - Git repo's",
    },
    {
      title: "Coffee Shop Project",
      description: "Design Responsive web-application using React",
       imgUrl: coffe,
      texturl:"Live demo - Git repo's",
    },
    {
      title: "Employee Management System",
      description:"Built a full-stack web app with React.js and Spring Boot to perform employee CRUD operations via RESTful APIs.",
      imgUrl: Ems,
      texturl:"Live demo - Git repo's",
    },
  ];
  
  
  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>🚀 Welcome to my project portfolio, where I present real-world applications that demonstrate my ability to design, develop, and deploy efficient, scalable, and user-centric solutions. Each project includes a brief overview along with links to source code and live demos, highlighting my technical proficiency, problem-solving approach, and commitment to best practices. Explore the collection to see how I translate ideas into impactful digital experiences.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                    
                      <Row >
                        {
                          projects.map((project, index) => {
                            return (
                              
                              <ProjectCard 
                                key={index}
                                {...project}
                               
                                />
                              
                              
                            )
                          })
                        }
                      </Row>
                      
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    <Row>
                        {
                          project2.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                      </Tab.Pane>
                    <Tab.Pane eventKey="third">
                    <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row> </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
