import React from "react";

export default function ExperienceEntry({ title, description }) {
  return (
    <div className="bg-slate-900 mt-4 m-4 max-h-[36rem] p-4 rounded-md hover:cursor-pointer shadow-md shadow-slate-800">
      <h1 className="text-yellow-200">{title}</h1>
      <div className="flex">
        <p className="text-slate-200">{description}</p>
      </div>
    </div>
  );
}
