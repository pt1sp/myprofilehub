import React from 'react';
import styled from 'styled-components';
import Navigation from './Navigation';

const HeaderContainer = styled.header`
  background-color: #333;
  color: white;
  padding: 1rem;
`;

const Header: React.FC = () => {
    return (
        <HeaderContainer>
            <h1>横山 龍之介</h1>
            <Navigation />
        </HeaderContainer>
    );
};

export default Header;