import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const FooterContainer = styled.footer`
  background-color: #333;
  color: white;
  padding: 2rem 0;
  margin-top: auto;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const Copyright = styled.p`
  margin: 0;
`;

const SocialLinks = styled.div`
  a {
    color: white;
    margin-left: 1rem;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const FooterNav = styled.nav`
  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }

  li {
    display: inline;
    margin-right: 1rem;
  }

  a {
    color: white;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <FooterContainer>
      <FooterContent>
        <Copyright>
          &copy; {currentYear} Yokoyama Ryunosuke. All rights reserved.
        </Copyright>
        <SocialLinks>
          <a
            href="https://github.com/pt1sp/"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            Twitter
          </a>
        </SocialLinks>
        <FooterNav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </FooterNav>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
