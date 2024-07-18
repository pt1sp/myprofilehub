import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  ul {
    list-style-type: none;
    padding: 0;
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

const Navigation: React.FC = () => {
  return (
    <Nav>
      <ul>
        <li><Link to="/">ホーム</Link></li>
        <li><Link to="/about">自己紹介</Link></li>
        <li><Link to="/skills">スキル</Link></li>
        <li><Link to="/projects">プロジェクト</Link></li>
        <li><Link to="/contact">お問い合わせ</Link></li>
      </ul>
    </Nav>
  );
};

export default Navigation;