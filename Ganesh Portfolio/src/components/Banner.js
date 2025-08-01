import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.png";

// import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "Full Stack Developer", "Web Developer", "Web Developer" ];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  const onButtonClick = () => {
    const pdfUrl = "https://drive.google.com/file/d/1pcsEs0vbGFe_SuWdorB3OCCV0a5DuzDo/view?usp=drive_link";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "document.pdf"; // specify the filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};
const onButtonClick1 = () => {
  const pdfUrl = "https://www.linkedin.com/in/ganeshmane4780/";
  const link = document.createElement("a");
  link.href = pdfUrl;
 
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

  return (
    <>
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <span className="tagline">Welcome to my Portfolio</span>
                <h1>{`Hi , I'm Ganesh`} <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Full Stack Developer", "Web Developer",  "Frontend Developer"]'><span className="wrap">{text}</span></span></h1>
                  <p>I’m a Java Full Stack Developer and Frontend Developer with a passion for building modern, responsive, and scalable web applications. I specialize in Java-based backend development combined with frontend technologies like HTML, CSS, JavaScript, Bootstrap, and React.js.🚀</p>
                  <button onClick={onButtonClick}>Resume </button>
                  
                  <button onClick={onButtonClick1} className="linkedin1">Linkedin </button>
                 
              </div>}
            </TrackVisibility>
          </Col>
         
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={headerImg} alt="Header Img"/>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>

      </Container>
      
    </section>
    
    </>
  )
}
