import React, { forwardRef, useEffect } from "react";
import Project from "./Project";
import { PROJECTS } from "../assets/jsons/projects";

function Projects({ props }, ref) {
  return (
    <section ref={ref} className="text-yellow-200 mb-8 sm:mb-40">
      <h1 className="text-4xl mb-8 text-center sm:text-start">Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2">
        {PROJECTS.map((proj, index) => (
          <Project
            key={proj.title}
            title={proj.title}
            description={proj.description}
          />
        ))}
      </div>
    </section>
  );
}

export default forwardRef(Projects);
