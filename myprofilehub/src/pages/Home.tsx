import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

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
      <Title>ポートフォリオへようこそ</Title>
      <Subtitle>ウェブ開発者</Subtitle>
      <p>
        はじめまして、横山龍之介です。将来、美しく機能的な
        ウェブアプリケーションを制作できるエンジニアになることを目指して、
        現在専門学校で勉強中です。
        デジタルの世界でアイデアを形にする方法を日々習得しています。
        まだ勉強中の身ですが、将来はプロのウェブ開発者として活躍したいと考えています。
      </p>
      <CTAButton to="/projects">プロジェクトを見る</CTAButton>
    </HomeContainer>
  );
};

export default Home;
