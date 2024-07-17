import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HomeContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

const Subtitle = styled.h2`
  font-size: 1.5rem;
  color: #666;
  margin-bottom: 2rem;
`;

const CTAButton = styled(Link)`
  display: inline-block;
  background-color: #007bff;
  color: white;
  padding: 0.5rem 1rem;
  text-decoration: none;
  border-radius: 5px;
  font-size: 1.1rem;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

const Home: React.FC = () => {
    return (
        <HomeContainer>
            <Title>Welcome to My Portfolio</Title>
            <Subtitle>Web Developer & Designer</Subtitle>
            <p>
                Hi, I'm [Your Name]. I specialize in creating beautiful and functional websites.
                With a passion for clean code and user-centric design, I bring ideas to life in the digital world.
            </p>
            <CTAButton to="/projects">View My Projects</CTAButton>
        </HomeContainer>
    );
};

export default Home;