import React from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 40px;
  display: flex;
  flex-direction: row;
  align-items: flex-start; /* Adjusted to align items at the top */
`;

const Image = styled.img`
  max-width: 50%; /* Adjust the value as needed */
  height: auto;
`;

const ContentContainer = styled.div`
  margin-left: 40px; /* Add some margin to separate the picture and description */
`;

const Heading = styled.h1`
  font-size: 32px;
  margin-bottom: 16px;
  text-decoration: underline;
`;

const Description = styled.p`
  font-size: 18px;
`;
const About = () => {
 

  return (
    <Container>
    <Image src='https://res.cloudinary.com/dhw1mueq4/image/upload/v1696598470/xpdjeb3khu34nhbn8nzj.jpg' />
    <ContentContainer>
      <Heading>Mulubrhan Geberkidan</Heading>
      <Description>
  Software Engineer with experience in front-end and back-end programming. Skilled in contemporary frameworks and technologies. Committed to continuous learning and staying updated with industry trends.
  <br />
  <br />
  Contact:
  
  +251919151121
  <br />
  mulubrhangebrkidan@gmail.com
  <br />
  GitHub
  @Mulubrhan1511
  <br />
  
  <br />
  Experience:
  <br />
  Full Stack Developer: Developed full-stack applications using modern frameworks. Proficient in React, Node.js/Express.js, and multiple databases. Designed RESTful APIs and continuously updated skills.
  <br />
  Education:
  <br />
  Dire-Dawa University - Electrical and Computer Engineering (2022)
  <br />
  ALX Africa - Graduate with Software Engineering (2020)
  <br />
  <br />
  Skills Summary: Python, JavaScript/TypeScript, C, React/Next.js, Node/Express.js
</Description>


      </ContentContainer>
    </Container>
  );
};

export default About;
