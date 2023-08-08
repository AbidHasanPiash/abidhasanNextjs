import React from "react";

export default function SkillCard({icon, title, expertise, project}) {
  return (
    <div className="h-24 lg:h-32 shadow-5xl backdrop-filter backdrop-blur-sm hover:scale-105 duration-300 hover:ring-1 hover:ring-cyan-300
        border border-r-0 border-b-0 border-gray-100/30 bg-white/10 rounded-xl overflow-hidden">
      <div className="flex h-full items-center justify-start p-2 text-gray-500 hover:text-cyan-300 transition-colors duration-300">
        <div className="text-6xl pr-2">{icon}</div>
        <div className="pl-2 border-l border-l-gray-900">
          <h1 className="text-2xl">{title}</h1>
          <div>
            <p>Expertise: {expertise}%</p>
            <p>Project: {project}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
