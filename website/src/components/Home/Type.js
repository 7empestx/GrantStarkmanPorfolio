import React from 'react';
import Typewriter from 'typewriter-effect';

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          'Software Developer',
          'Freelancer',
          'Open Source Contributor',
          'Cloud Engineer',
          'Full Stack Engineer',
          'DevOps Enthusiast',
          'Problem Solver',
          'Technology Advocate',
          'Systems Architect',
          'User Experience Designer',
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
