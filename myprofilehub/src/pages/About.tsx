import React from 'react';
import styled from 'styled-components';

const AboutContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
`;

const About: React.FC = () => {
    return (
        <AboutContainer>
            <h2>About Me</h2>
            <p>ここにあなたの経歴や興味、目標などを記述します。</p>
        </AboutContainer>
    );
};

export default About;