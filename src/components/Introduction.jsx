import React from "react";
import Timeline from "./Timeline";

export default function Introduction() {
  return (
    <section className="text-slate-200 mb-40">
      <p className="mb-4 text-yellow-100">Hi, I'm</p>
      <h2 className="text-4xl text-yellow-200 mb-4">Rúben Gomes.</h2>
      <p className="text-md">
        I am currently employed at Uapgo, where I actively contribute to diverse
        projects while also exploring personal ventures.
      </p>
      <p className="text-md">
        My work primarily involves full-stack development, where I frequently
        utilize technologies such as React.js, .NET, and SQL Server.
      </p>
      <p className="text-md">
        However, I am always eager to explore new technologies and expand my
        skill set beyond these boundaries.
      </p>
      <Timeline />
    </section>
  );
}
