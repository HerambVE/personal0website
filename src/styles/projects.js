"use client";

import {
  roboto,
  tourney,
  silkscreen,
  courierPrime,
  poppins,
  kalam,
  gabarito,
} from "./fonts";
import {Down} from "./icon";

import { useState } from "react";

export default function Projects() {
  const data = require("../data/projects.json");
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div
      className={`w-full space-y-2 h-full ${gabarito.className} text-cyan-50`}
    >
      {data.map((project, index) => {
        const isOpen = openIndex === index;

        return (
          <div
            key={index}
            className={`rounded-xl bg-[#1a1a1a] transition-colors
                        ${isOpen ? "bg-[#202020]" : ""}`}
          >
            {/* Trigger */}
            <button
              onClick={() =>
                setOpenIndex(isOpen ? null : index)
              }
              className="w-full px-5 py-3 text-left flex flex-col gap-3"
            >
              {/* Title */}
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-medium text-cyan-50 leading-tight">
                  {project.name}
                </h3>

                <span
                  className={`text-sm transition-transform
                              ${isOpen ? "rotate-0" : "-rotate-90"}`}
                >
                <Down/>
                </span>
              </div>

              {/* Meta */}
              <div className="flex flex-wrap items-center gap-2 text-sm text-white/60">
                <span className="uppercase tracking-wide">
                  {project.type}
                </span>
                <span className="opacity-40">•</span>
                <span>
                  {project.technologies.join(", ")}
                </span>
              </div>
            </button>

            {/* Content */}
            {isOpen && (
              <div className="px-5 pb-5 pt-2">
                <div className="flex flex-col gap-5 text-md text-white/75">

                  {/* Description */}
                  <p className="leading-relaxed max-w-prose">
                    {project.description}
                  </p>

                  {/* Meta + Action */}
                  <div className="flex items-center justify-between gap-4">

                    {/* Meta */}
                    <div className="flex items-center gap-3 text-sm text-white/60">
                      <span className="px-2 py-1 rounded-md bg-white/5">
                        {project.primary_language}
                      </span>

                      {project.is_fork && (
                        <span className="px-2 py-1 rounded-md bg-yellow-500/10 text-yellow-400">
                          Fork
                        </span>
                      )}
                    </div>

                    {/* Link */}
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      GitHub ↗
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
