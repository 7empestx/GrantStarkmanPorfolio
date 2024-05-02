import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import myImg from '../../Assets/avatar.svg';
import Tilt from 'react-parallax-tilt';
import { AiFillGithub } from 'react-icons/ai';
import { FaLinkedinIn } from 'react-icons/fa';

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: '2.6em' }}>
              MEET <span className="purple">GRANT STARKMAN</span>
            </h1>
            <p className="home-about-body">
              With a robust foundation in{' '}
              <b className="purple">AWS cloud infrastructure</b> and{' '}
              <b className="purple">real-time systems</b>, my career spans roles
              from an Electronics Technician to a Senior Software Engineer. At
              Amazon Web Services, I spearheaded initiatives to enhance
              microservice efficiency and fostered an inclusive environment with
              accessible, user-centric solutions. My expertise in{' '}
              <b className="purple">full-stack development</b>, combined with a
              proactive approach in open-source communities, highlights my
              capability to innovate and lead in tech-driven environments.
            </p>
            <p className="home-about-body">
              My technical toolkit is extensive, encompassing advanced skills in{' '}
              <b className="purple">
                Typescript (React.js, Angular), Javascript, C++, Java, and PHP
              </b>
              , alongside a strong command of{' '}
              <b className="purple">PostgreSQL</b> and cloud technologies. This
              technical prowess is complemented by a practical understanding of{' '}
              <b className="purple">microservices architecture</b> and{' '}
              <b className="purple">containerization (Docker, Kubernetes)</b>,
              with a robust proficiency in{' '}
              <b className="purple">
                continuous integration and continuous deployment (CI/CD)
                processes
              </b>
              . I am passionate about leveraging technology to solve complex
              problems, enhance user experiences, and drive business outcomes.
            </p>
            <p className="home-about-body">
              Based in Salt Lake City, UT, I am fully authorized to work for any
              employer in the US. Let's connect to discuss how I can contribute
              to your team and projects.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span> with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/7empestx"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons">
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/grant-starkman/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons">
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
