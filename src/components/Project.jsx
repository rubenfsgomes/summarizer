import React from "react";

export default function Project({ title, description, isLast }) {
  return (
    <div className="mt-4 max-h-[36rem] rounded-md hover:cursor-pointer">
      <h1 className="text-yellow-200">{title}</h1>
      <div className="flex">
        <p className="text-slate-200">{description}</p>
        
      </div>
      {isLast ? null : <div className="border-b-2 my-4 bg-slate-600 w-1/2" />}
    </div>
  );
}
