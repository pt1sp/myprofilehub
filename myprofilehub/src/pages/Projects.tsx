import React from 'react';
import styled from 'styled-components';

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
            title: 'E-commerce Website',
            description: 'A fully functional e-commerce platform built with React and Node.js.',
            link: 'https://github.com/yourusername/ecommerce-project',
        },
        {
            title: 'Weather App',
            description: 'A weather application that uses a third-party API to display current weather conditions.',
            link: 'https://github.com/yourusername/weather-app',
        },
        {
            title: 'Task Management System',
            description: 'A full-stack application for managing tasks and projects, built with React and Django.',
            link: 'https://github.com/yourusername/task-manager',
        },
    ];

    return (
        <ProjectsContainer>
            <h2>My Projects</h2>
            {projects.map((project, index) => (
                <ProjectCard key={index}>
                    <ProjectTitle>{project.title}</ProjectTitle>
                    <ProjectDescription>{project.description}</ProjectDescription>
                    <ProjectLink href={project.link} target="_blank" rel="noopener noreferrer">
                        View Project
                    </ProjectLink>
                </ProjectCard>
            ))}
        </ProjectsContainer>
    );
};

export default Projects;