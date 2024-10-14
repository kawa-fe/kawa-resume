import React from "react";
import Info from "../components/info";
import Intern from "../components/intern";
import Project from "../components/project";
import Skills from "../components/skills";

export default function Template() {
  return (
    <div className="max-w-4xl mx-auto p-10">
      <Info />
      <Intern />
      <Project />
      <Skills />
    </div>
  );
}
