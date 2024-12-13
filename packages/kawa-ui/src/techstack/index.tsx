import React from "react";
import "./index.scss";
interface TechStackProps {
  techStack: string[];
}

const TechStack: React.FC<TechStackProps> = ({ techStack }) => {
  return (
    <div className="kawa-techStack">
      {techStack.map((tech, index) => (
        <span key={index} className="kawa-tech-item">
          {tech}
        </span>
      ))}
    </div>
  );
};

export default TechStack;