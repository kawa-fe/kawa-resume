import React from 'react';
import './index.scss';

interface SkillsProps {
  skills?: string[];
}

const Skills: React.FC<SkillsProps> = ({ skills = [] }) => {
  return (
    <div className="con">
      <div className="basic-info">
        相关技能
        <div className="title">Skills</div>
      </div>
      <ul className="skills">
        {skills.map((item, index) => (
          <li key={index} className="skill">
            {index + 1}. {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Skills;