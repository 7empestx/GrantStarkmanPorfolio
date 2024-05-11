import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProjectCard from './ProjectCards';
import Particle from '../Particle';
import vozamigo from '../../Assets/Projects/VozAmigo.png';

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works</strong>
        </h1>
        <p style={{ color: 'white' }}>
          Here are a few projects I've worked on recently. Click on the projects
          to see more details.
        </p>
        <Row style={{ justifyContent: 'center', paddingBottom: '10px' }}>
          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={vozamigo}
              isBlog={false}
              title="VozAmigo"
              description="AI-Powered Language Learning Companion: Revolutionize your Spanish learning journey with an innovative app designed to provide personalized and interactive language experiences."
              ghLink="https://github.com/7empestx/VozAmigo"
              demoLink="https://vozamigo.grantstarkman.com/"
            />
          </Col>
          {/* Add more ProjectCards here for other projects */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
