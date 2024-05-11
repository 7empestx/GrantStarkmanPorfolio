import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import homeLogo from '../../Assets/home-main.svg';
import Particle from '../Particle';
import Home2 from './Home2';
import Type from './Type';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();
  return (
    <>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{' '}
                <span className="wave" role="img" aria-label="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'm <strong className="main-name"> Grant Starkman</strong>
              </h1>

              <h2
                style={{ marginLeft: 50, marginTop: 20 }}
                className="heading-title">
                Experienced Full Stack Developer and Cloud Solutions Architect
              </h2>

              <div style={{ padding: 50, textAlign: 'left' }}>
                <Type />
              </div>
              <div>
                <button
                  className="btn btn-primary"
                  onClick={() => navigate('/projects')}>
                  View My Work
                </button>
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="Grant Starkman at work"
                className="img-fluid"
                style={{ maxHeight: '450px' }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </>
  );
}

export default Home;
