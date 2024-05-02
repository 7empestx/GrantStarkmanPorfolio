import React from 'react';
import Card from 'react-bootstrap/Card';
import { ImPointRight } from 'react-icons/im';

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: 'justify' }}>
            Hello, I am <span className="purple">Grant Starkman</span> from{' '}
            <span className="purple">Salt Lake City, Utah</span>.
            <br />
            <br />
            As a specialist in software development, I focus on cloud solutions
            and full-stack engineering, with extensive experience in Node.js,
            React, and AWS.
            <br />
            I earned my Bachelor of Science in Computer Science from the
            University of Nevada, Las Vegas, leveraging a strong foundation in
            algorithms, data structures, and software engineering principles.
            <br />
            <br />
            When I'm not coding, I engage in several activities that fuel my
            creativity and curiosity:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Solving complex coding problems on LeetCode,
              HackerRank, and Advent of Code
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading insightful books on technology, business,
              and personal development
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing the electric guitar and exploring various
              music genres
            </li>
            <li className="about-activity">
              <ImPointRight /> Enjoying snowboarding and hiking, embracing
              challenges in both sports and life
            </li>
          </ul>

          <p style={{ color: 'rgb(155 126 172)' }}>
            "The only way to do great work is to love what you do."
          </p>
          <footer className="blockquote-footer">Steve Jobs</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
