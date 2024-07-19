import React from "react";
import styled from "styled-components";

const AboutContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
`;

const Section = styled.section`
  margin-bottom: 2rem;
`;

const SectionTitle = styled.h3`
  color: #333;
  border-bottom: 2px solid #333;
  padding-bottom: 0.5rem;
`;

const List = styled.ul`
  list-style-type: none;
  padding-left: 0;
`;

const ListItem = styled.li`
  margin-bottom: 0.5rem;
`;

const About: React.FC = () => {
  return (
    <AboutContainer>
      <h2>About Me</h2>

      <Section>
        <SectionTitle>経歴</SectionTitle>
        <p>
          商業科の高校を卒業後情報系の専門学校へ進学。エンジニアになるために勉強中。
        </p>
      </Section>

      <Section>
        <SectionTitle>興味・専門分野</SectionTitle>
        <List>
          <ListItem>• 対人ゲーム</ListItem>
          <ListItem>• 宇宙</ListItem>
          <ListItem>• プログラミング</ListItem>
        </List>
      </Section>

      <Section>
        <SectionTitle>スキル</SectionTitle>
        <List>
          <ListItem>• 簿記２級</ListItem>
          <ListItem>• エクセル１級</ListItem>
          <ListItem>• ルービックキューブ</ListItem>
        </List>
      </Section>

      <Section>
        <SectionTitle>目標</SectionTitle>
        <p>
          短期的な目標は優秀なエンジニアになること。長期的な目標はイーロンマスクや堀江貴文のようなビジネススキルを持った人物になること。
        </p>
      </Section>
    </AboutContainer>
  );
};

export default About;
