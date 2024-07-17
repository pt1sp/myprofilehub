import React from 'react';
import styled from 'styled-components';

const SkillsContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
`;

const SkillCategory = styled.div`
  margin-bottom: 2rem;
`;

const SkillList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;

const SkillItem = styled.li`
  background-color: #f0f0f0;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
`;

const Skills: React.FC = () => {
    const skillCategories = [
        {
            name: 'Frontend',
            skills: ['HTML', 'CSS', 'JavaScript', 'React', 'TypeScript', 'Vue.js'],
        },
        {
            name: 'Backend',
            skills: ['Node.js', 'Express', 'Python', 'Django', 'SQL'],
        },
        {
            name: 'Tools & Others',
            skills: ['Git', 'Docker', 'AWS', 'Figma', 'Agile Methodologies'],
        },
    ];

    return (
        <SkillsContainer>
            <h2>My Skills</h2>
            {skillCategories.map((category) => (
                <SkillCategory key={category.name}>
                    <h3>{category.name}</h3>
                    <SkillList>
                        {category.skills.map((skill) => (
                            <SkillItem key={skill}>{skill}</SkillItem>
                        ))}
                    </SkillList>
                </SkillCategory>
            ))}
        </SkillsContainer>
    );
};

export default Skills;