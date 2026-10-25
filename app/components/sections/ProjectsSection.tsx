import React from "react";
import { FolderOpen, Github, ArrowUpRight } from "lucide-react";

// Note: Full project items preserved for when you want to enable them back.
/*
export const archivedProjects = [
  {
    title: "Phoenix 3.0",
    category: "Autonomous AI Desktop Copilot",
    tagline: "Autonomous voice-controlled desktop AI and task orchestrator.",
    image: "/projects/phoenix-poster.webp",
    tags: ["Python", "FastAPI", "OpenAI API", "Whisper", "WebSockets", "Electron"],
    github: "https://github.com/didar-lahiry/Phoenix-3.0",
  },
  {
    title: "Prodesk",
    category: "Full-Stack E-Commerce & Automation",
    tagline: "Instant 24/7 digital delivery marketplace & automated fulfillment.",
    image: "/projects/prodesk-poster.webp",
    tags: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS", "Stripe API"],
    github: "https://github.com/didar-lahiry/Prodesk",
  },
  {
    title: "Flood Spaces 2.0",
    category: "Predictive Analytics & Geospatial AI",
    tagline: "Early warning geospatial flood mapping & AI predictive analytics.",
    image: "/projects/floodspaces-poster.webp",
    tags: ["Next.js", "Python", "FastAPI", "PyTorch", "Mapbox GL", "GeoPandas"],
    github: "https://github.com/didar-lahiry/FloodSpaces-2.0",
  },
  {
    title: "Drishti",
    category: "Generative AI & Multimodal LLM",
    tagline: "Multimodal Bengali foundation LLM with deep reasoning.",
    image: "/projects/drishti-poster.webp",
    tags: ["PyTorch", "Transformers", "vLLM", "FastAPI", "React", "LoRA"],
    github: "https://github.com/didar-lahiry/Drishti-LLM",
  },
];
*/

const ProjectsSection: React.FC = () => {
  return (
    <div>
      <div className="text-center p-3">
        <h2 className="text-2xl font-permanent">Projects &amp; Creations</h2>
        <p className="text-stone-600 text-sm mt-1">
          Curated showcase of technical builds and software systems
        </p>
      </div>

      <hr className="h-px m-6 bg-neutral-300" />

      {/* Empty State Card */}
      <div className="p-6 sm:p-10 m-4 border-2 border-dashed rounded-2xl border-stone-300 bg-white/60 backdrop-blur-xs flex flex-col items-center justify-center text-center shadow-xs">
        <div className="w-16 h-16 rounded-full bg-amber-100 flex items-center justify-center text-amber-700 mb-4 shadow-inner">
          <FolderOpen size={32} strokeWidth={1.75} />
        </div>

        <h3 className="text-xl sm:text-2xl font-permanent text-stone-800 mb-2">
          Projects Folder is Empty
        </h3>

        <p className="text-stone-600 text-sm max-w-md leading-relaxed mb-6 font-sans">
          Production case studies and live demos are currently being documented and curated.
          In the meantime, you can explore my open-source repositories directly on GitHub!
        </p>

        <a
          href="https://github.com/didar-lahiry"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-stone-900 text-white rounded-lg text-sm font-semibold hover:bg-stone-800 transition shadow">
          <Github size={16} /> View GitHub Repositories <ArrowUpRight size={16} />
        </a>
      </div>
    </div>
  );
};

export default ProjectsSection;
