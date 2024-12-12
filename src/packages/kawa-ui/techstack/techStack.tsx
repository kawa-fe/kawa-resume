//techStack组件基于skillstag的不同布局排列而成，默认是横向排列
import React from "react";
import  SkillTag  from "../skillsTag/skillTag";

const TechStack: React.FC<{ stacks: string[] }> = ({ stacks }) => {
  return (
    <div className="kawa-tech-stack">
      <span style={{ fontWeight: "bold", fontSize: "18px" }}>技术栈：</span>
      {stacks.map((stack, index) => (
            <SkillTag>{stack}</SkillTag> //使用SkillTag组件渲染stack
      ))}
    </div>
  );
};

export default TechStack;
