import React from "react";
import Card from "../Card";
import { Timeline, TimelineItem } from "../Timeline";
import { Bot, Globe, Smartphone, ShieldAlert, GraduationCap, Award, Zap } from "lucide-react";

const SkillsSection: React.FC = () => {
  return (
    <div>
      <div className="text-center p-3">
        <h2 className="text-2xl font-permanent">Skills &amp; Education</h2>
        <p className="text-stone-600 text-sm mt-1">Technical mastery, core competencies, and academic background</p>
      </div>

      <hr className="h-px m-6 bg-neutral-300" />

      {/* 4 Pillars Skills */}
      <div className="skills-shit p-4 m-4 border-2 rounded-2xl border-stone-300 bg-white/50 backdrop-blur-xs">
        <h2 className="pb-4 text-2xl font-permanent">Core Disciplines</h2>
        <div className="lg:grid lg:grid-cols-2 gap-2">
          <Card
            title="AI Automation &amp; LLMs"
            icon={<Bot size={24} strokeWidth={2} color="#ffffff" />}
            elements={[
              "AI Agents",
              "OpenAI API",
              "Claude API",
              "LLMs",
              "Python",
              "FastAPI",
              "Whisper",
              "RAG Pipelines",
              "WebSockets",
              "vLLM"
            ]}
            iconColor="bg-purple-600"
          />
          <Card
            title="Full-Stack Web &amp; 3D"
            icon={<Globe size={24} strokeWidth={2} color="#ffffff" />}
            elements={[
              "React",
              "Next.js",
              "TypeScript",
              "JavaScript",
              "Three.js / WebGL",
              "Node.js",
              "Tailwind CSS",
              "MongoDB",
              "REST APIs"
            ]}
            iconColor="bg-blue-600"
          />
          <Card
            title="Mobile &amp; Cross-Platform"
            icon={<Smartphone size={24} strokeWidth={2} color="#ffffff" />}
            elements={[
              "React Native",
              "Expo",
              "Flutter",
              "Android & iOS",
              "Electron",
              "Offline-First Sync",
              "Touch UI/UX",
              "Background Services"
            ]}
            iconColor="bg-emerald-600"
          />
          <Card
            title="Reverse Engineering (REA)"
            icon={<ShieldAlert size={24} strokeWidth={2} color="#ffffff" />}
            elements={[
              "Frida",
              "GDB",
              "Rizin / Cutter",
              "Ghidra",
              "APK / DEX Reversing",
              "Protocol Inspection",
              "Assembly",
              "Memory Forensics"
            ]}
            iconColor="bg-rose-600"
          />
        </div>

        {/* Strengths / Soft Skills */}
        <div className="mt-6 pt-4 border-t border-stone-200">
          <h3 className="text-sm font-bold uppercase tracking-wider text-stone-700 mb-2.5 flex items-center gap-1.5">
            <Zap size={16} className="text-amber-500" /> Key Strengths &amp; Methodologies
          </h3>
          <div className="flex flex-wrap gap-2">
            {[
              "Workflow Automation",
              "Problem Solving",
              "Quick Learning",
              "Analytical Logic",
              "System Architecture",
              "Code Optimization",
              "Clean Code Principles"
            ].map((strength, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-white border border-stone-300 rounded-full text-xs font-semibold text-stone-800 shadow-2xs">
                {strength}
              </span>
            ))}
          </div>
        </div>
      </div>

      <hr className="h-px m-10 bg-neutral-300" />

      {/* Education */}
      <div className="Education-shit p-4 m-4 border-2 rounded-2xl border-stone-300 bg-white/50 backdrop-blur-xs">
        <h2 className="pb-4 text-2xl font-permanent">My Education</h2>
        <Timeline>
          <TimelineItem date="Batch 2024">
            <Card
              title="Higher Secondary Certificate (HSC) — Science"
              icon={<GraduationCap size={24} strokeWidth={2} color="#ffffff" />}
              iconTitle="Govt. Sreenagar College"
              text="Grade: GPA 4.58 / 5.00 (Science Group)"
              elements={[
                "Higher Mathematics",
                "Physics",
                "Computer Science",
                "Analytical Logic"
              ]}
              iconColor="bg-emerald-600">
              <p className="text-stone-700 text-xs sm:text-sm mb-3">
                Science group with academic focus on Mathematics, Physics, and analytical logic. Active in science fairs and technology problem-solving clubs.
              </p>
            </Card>
          </TimelineItem>

          <TimelineItem date="Completed">
            <Card
              title="Secondary School Certificate (SSC) — Science"
              icon={<Award size={24} strokeWidth={2} color="#ffffff" />}
              iconTitle="Kazir Pagla Avoy Talukdar Institution"
              text="Grade: GPA 4.89 / 5.00 (Science Group)"
              elements={[
                "Foundational Computing",
                "Science & Mathematics",
                "Algorithms",
                "Problem Solving"
              ]}
              iconColor="bg-blue-600">
              <p className="text-stone-700 text-xs sm:text-sm mb-3">
                Science group with outstanding academic achievements in mathematics &amp; sciences. Early foundational work in algorithms and computer literacy.
              </p>
            </Card>
          </TimelineItem>
        </Timeline>
      </div>
    </div>
  );
};

export default SkillsSection;
