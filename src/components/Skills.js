import { Container, Row, Col } from "react-bootstrap";
import p from "../assets/test/6.png";
import { BrowserRouter } from "react-router-dom";
import './Skills.css'

export const SkillsTitle = () => {
  return (
    <div className="skititle" id="skill">
      <h1>SKILLS</h1>
      <hr className="divider" />
    </div>
  );
}

export const Skills = () => {
  return (
    <BrowserRouter>
    <section className="skill" >
      <Container fluid className="px-0"> {/* Use fluid container for responsiveness */}
        <Row className="h-100 d-flex align-items-left rounded-end"> {/* Set row height to 75%, vertically centered, rounded on right end, thicker dark border */}
          <Col xs={12} md={9} xl={9}className="skills-content"> {/* Skills content takes 9 columns */}
            <div className="skills-list"> {/* Container for skills list */}
             <Container className="test" >
                
             <Row className="backendrow">
              <Col><h2>Backend:</h2></Col> 
                <Col><h4>Django</h4></Col>
                <Col><h4>Node</h4></Col>
                <Col></Col>
                <Col></Col>
                <Col></Col>
                
              </Row>
             </Container>
             
              <Container className="test">
              <Row className="frontrow">
              <Col><h2>Frontend:</h2></Col>
              <Col><h4>HTML</h4></Col>
              <Col><h4>CSS</h4></Col>
              <Col><h4>JS</h4></Col>
              <Col><h4>Figma</h4></Col>
              <Col><h4>Canva</h4></Col>

                
              </Row>
              </Container>
              
             <Container className="test">

             <Row className="datarow">
              <Col><h2>Database:</h2></Col>
                <Col><h4>MySQLa</h4></Col>
                <Col><h4>MONGODB</h4></Col>
                <Col><h4>PostgresSQL</h4></Col>
                <Col></Col>
                <Col></Col>
              </Row>
             </Container>
             
            </div>
          </Col>
          <Col xs={0}md={3} xl={3}className="image-container d-flex justify-content-end"> {/* Image container takes 3 columns, horizontally right-aligned */}
            <img src={p} alt="Your Skillset" className="img-fluid rounded-start" /> {/* Image covers full width within container, rounded on left side */}
          </Col>
        </Row>
      </Container>
    </section>
    </BrowserRouter>
  );
}
