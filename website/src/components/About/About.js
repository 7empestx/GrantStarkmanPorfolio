import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Particle from '../Particle';
import Github from './Github';
import Techstack from './TechStack';
import Aboutcard from './AboutCard';
import laptopImg from '../../Assets/about.png';
import Toolstack from './ToolStack';

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: 'center', padding: '10px' }}>
          <Col
            md={7}
            style={{
              justifyContent: 'center',
              paddingTop: '30px',
              paddingBottom: '50px',
            }}>
            <h1 style={{ fontSize: '2.1em', paddingBottom: '20px' }}>
              Discover <strong className="purple">My Story</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: '120px', paddingBottom: '50px' }}
            className="about-img">
            <img
              src={laptopImg}
              alt="Grant Starkman in action"
              className="img-fluid"
            />
          </Col>
        </Row>
        <h1 className="project-heading">
          Technical <strong className="purple">Expertise</strong>
        </h1>
        <Techstack />

        <h1 className="project-heading">
          <strong className="purple">Tools</strong> I Regularly Use
        </h1>
        <Toolstack />

        <Github />
      </Container>
    </Container>
  );
}

export default About;
