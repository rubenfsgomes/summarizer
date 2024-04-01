import React, { useEffect } from "react";
import Project from "./Project";
import { PROJECTS } from "../assets/jsons/projects";

export default function Projects() {
  return (
    <section className="text-yellow-200">
      <h1 className="text-4xl">Projects</h1>
      {PROJECTS.map((proj, index) => (
        <Project
          key={proj.title}
          title={proj.title}
          description={proj.description}
          isLast={index === PROJECTS.length - 1}
        />
      ))}
    </section>
  );
}
