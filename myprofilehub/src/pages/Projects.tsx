import React from "react";
import styled from "styled-components";

const ProjectsContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
`;

const ProjectCard = styled.div`
  background-color: #f9f9f9;
  border-radius: 8px;
  padding: 1.5rem;
  margin-bottom: 2rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const ProjectTitle = styled.h3`
  margin-top: 0;
`;

const ProjectDescription = styled.p`
  color: #666;
`;

const ProjectLink = styled.a`
  display: inline-block;
  margin-top: 1rem;
  color: #007bff;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const Projects: React.FC = () => {
  const projects = [
    {
      title: "自動集計システム",
      description:
        "Pythonと画像認識を使ってチームの得点を自動集計するシステム。",
      link: "https://github.com/pt1sp/auto-calculation",
    },
    {
      title: "(古)自己紹介サイト",
      description: "ReactとJavaScriptを使った、自己紹介サイト。",
      link: "https://github.com/pt1sp/myprofile-site",
    },
    {
      title: "タスク管理システム",
      description:
        "ReactとDjangoを使用して構築されたタスクとプロジェクトを管理するためのフルスタックアプリケーション。",
      link: "https://github.com/yourusername/task-manager",
    },
  ];

  return (
    <ProjectsContainer>
      <h2>プロジェクト</h2>
      {projects.map((project, index) => (
        <ProjectCard key={index}>
          <ProjectTitle>{project.title}</ProjectTitle>
          <ProjectDescription>{project.description}</ProjectDescription>
          <ProjectLink
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            プロジェクトを見る
          </ProjectLink>
        </ProjectCard>
      ))}
    </ProjectsContainer>
  );
};

export default Projects;
