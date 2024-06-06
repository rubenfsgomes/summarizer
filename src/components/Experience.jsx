import React, { forwardRef } from "react";
import ExperienceEntry from "./ExperienceEntry";
import { EXPERIENCES } from "../assets/jsons/experiences";

function Experience({ props }, ref) {
  return (
    <>
      <section ref={ref} className="text-yellow-200 mb-8 sm:mb-40">
        <h1 className="text-4xl mb-8 text-center sm:text-start">Experience</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2">
          {EXPERIENCES.map((exp, index) => (
            <ExperienceEntry
              key={exp.title}
              title={exp.title}
              description={exp.description}
            />
          ))}
        </div>
      </section>
    </>
  );
}

export default forwardRef(Experience);
