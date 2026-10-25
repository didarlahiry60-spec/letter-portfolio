import React from "react";
import Image from "next/image";
import Card from "../Card";
import { Timeline, TimelineItem } from "../Timeline";
import { Bot, Globe, Smartphone, ShieldAlert, Download, Sparkles, MapPin, CheckCircle2 } from "lucide-react";
import { getAssetPath } from "../../lib/basePath";

const AboutSection: React.FC = () => {
  return (
    <div>
      {/* Header Profile */}
      <div className="flex flex-col sm:flex-row justify-evenly items-center rounded-lg p-3 gap-4">
        <div className="text-center sm:text-left">
          <h2 className="mb-2 text-xl font-permanent text-stone-600">Who am I ?</h2>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-stone-900">Didar Lahiry</h1>
          <p className="text-lg sm:text-xl text-stone-700 font-semibold mt-1">
            AI Automation Specialist • Web Developer • App Developer • Reverse Engineer
          </p>
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 mt-2 text-sm text-stone-600">
            <span className="flex items-center gap-1 font-medium">
              <MapPin size={16} className="text-rose-500" /> Dhaka, Bangladesh (BST · GMT+6)
            </span>
            <span className="bg-amber-100 text-amber-900 text-xs px-2.5 py-0.5 rounded-full font-bold">
              Available for Global Projects
            </span>
          </div>
        </div>
        <div className="w-32 h-32 sm:w-40 sm:h-40 relative shrink-0">
          <Image
            className="rounded-full object-cover shadow-md border-4 border-white"
            src={getAssetPath("/profil-olive.webp")}
            alt="Didar Lahiry"
            fill
            sizes="(max-width: 640px) 128px, 160px"
            priority
          />
        </div>
      </div>

      <hr className="h-px m-6 bg-neutral-300" />

      {/* Profile & What I Do */}
      <div className="p-4 m-4 border-2 rounded-2xl border-stone-300 bg-white/50 backdrop-blur-xs">
        <h2 className="mb-4 text-2xl font-permanent flex items-center gap-2">
          <Sparkles className="text-amber-500" size={24} /> Professional Profile
        </h2>
        <div className="text-justify text-stone-800 leading-relaxed space-y-3 font-sans">
          <p className="text-base sm:text-lg italic font-medium text-stone-700 border-l-4 border-amber-400 pl-3">
            &ldquo;I build AI workflows &amp; web apps that scale. Code is the engine, AI is the catalyst.&rdquo;
          </p>
          <p>
            Motivated <b>AI Automation Specialist, Web Developer, App Developer, and Reverse Engineer</b> who designs automated
            workflows, modern websites, and high-performance applications that save hours of manual time and solve real-world problems.
            A fast learner who enjoys turning tricky challenges into working digital solutions in a practical, results-focused environment.
          </p>
        </div>

        {/* 4 Pillars Grid (What I Do) */}
        <div className="mt-6">
          <h3 className="text-lg font-bold text-stone-800 mb-3 flex items-center gap-2">
            <CheckCircle2 size={18} className="text-emerald-600" /> What I Do
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="p-3.5 rounded-xl border border-stone-200 bg-white shadow-xs">
              <div className="flex items-center gap-2 font-bold text-stone-900 text-sm">
                <span className="p-1.5 bg-purple-100 text-purple-700 rounded-md">
                  <Bot size={18} />
                </span>
                AI Automation Specialist
              </div>
              <p className="text-xs text-stone-600 mt-1.5 leading-relaxed">
                Building autonomous AI agents and smart automations that handle repetitive tasks, connect tools, and eliminate manual bottlenecks.
              </p>
            </div>

            <div className="p-3.5 rounded-xl border border-stone-200 bg-white shadow-xs">
              <div className="flex items-center gap-2 font-bold text-stone-900 text-sm">
                <span className="p-1.5 bg-blue-100 text-blue-700 rounded-md">
                  <Globe size={18} />
                </span>
                Web Developer
              </div>
              <p className="text-xs text-stone-600 mt-1.5 leading-relaxed">
                Creating clean, responsive, and user-friendly websites and interactive 3D WebGL experiences that look professional on every device.
              </p>
            </div>

            <div className="p-3.5 rounded-xl border border-stone-200 bg-white shadow-xs">
              <div className="flex items-center gap-2 font-bold text-stone-900 text-sm">
                <span className="p-1.5 bg-emerald-100 text-emerald-700 rounded-md">
                  <Smartphone size={18} />
                </span>
                App Developer
              </div>
              <p className="text-xs text-stone-600 mt-1.5 leading-relaxed">
                Building smooth, responsive cross-platform mobile &amp; desktop applications that work seamlessly across Android, iOS, and desktop.
              </p>
            </div>

            <div className="p-3.5 rounded-xl border border-stone-200 bg-white shadow-xs">
              <div className="flex items-center gap-2 font-bold text-stone-900 text-sm">
                <span className="p-1.5 bg-rose-100 text-rose-700 rounded-md">
                  <ShieldAlert size={18} />
                </span>
                Reverse Engineer (REA)
              </div>
              <p className="text-xs text-stone-600 mt-1.5 leading-relaxed">
                Analyzing software architectures, inspecting network protocols, disassembling binaries, and solving complex security problems.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-3">
          <a
            href={getAssetPath("/DIDAR-LAHIRY (Resume).pdf")}
            download="DIDAR-LAHIRY (Resume).pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-stone-900 text-white rounded-lg text-sm font-semibold hover:bg-stone-700 transition shadow">
            <Download size={16} /> Download Official CV (PDF)
          </a>
          <span className="text-xs text-stone-500 font-medium">
            Languages: Bangla (Native) • English (Working / Professional)
          </span>
        </div>
      </div>

      <hr className="h-px m-10 bg-neutral-300" />

      {/* Experience Timeline */}
      <div className="p-4 m-4 border-2 rounded-2xl border-stone-300 bg-white/50 backdrop-blur-xs">
        <h2 className="mb-4 text-2xl font-permanent">Experience &amp; Track Record</h2>
        <Timeline>
          <TimelineItem date="2024 - Present">
            <Card
              title="AI Automation"
              icon={<Bot size={24} strokeWidth={2} color="#ffffff" />}
              iconTitle="AI Workflow & Agent Developer"
              iconColor="bg-purple-600"
              elements={["AI Agents", "Python", "OpenAI API", "FastAPI", "Whisper", "RAG", "WebSockets", "Automation"]}>
              <ul className="list-disc list-inside space-y-1.5 text-xs text-stone-700">
                <li>
                  Architecting autonomous AI agents, multi-turn LLM pipelines, and automated business workflows.
                </li>
                <li>
                  Building intelligent voice-controlled orchestrators (Phoenix 3.0) and API-driven automated toolchains.
                </li>
                <li>
                  Specialized in LLM fine-tuning, vector retrieval, and custom multi-agent collaboration systems.
                </li>
              </ul>
            </Card>
          </TimelineItem>

          <TimelineItem date="2022 - Present">
            <Card
              title="Web Development"
              icon={<Globe size={24} strokeWidth={2} color="#ffffff" />}
              iconTitle="Full-Stack Web & 3D WebGL Developer"
              iconColor="bg-blue-600"
              elements={["React", "Next.js", "TypeScript", "Three.js", "Node.js", "Tailwind CSS", "MongoDB", "REST APIs"]}>
              <ul className="list-disc list-inside space-y-1.5 text-xs text-stone-700">
                <li>
                  Engineering high-performance, modern responsive web applications and interactive 3D WebGL experiences.
                </li>
                <li>
                  Mastery across JavaScript/TypeScript, React, Next.js, Node.js, REST &amp; GraphQL APIs, and Tailwind CSS.
                </li>
                <li>
                  Real-time client-server architectures, database integration, and performance optimization.
                </li>
              </ul>
            </Card>
          </TimelineItem>

          <TimelineItem date="2023 - Present">
            <Card
              title="App Development"
              icon={<Smartphone size={24} strokeWidth={2} color="#ffffff" />}
              iconTitle="Mobile & Cross-Platform App Developer"
              iconColor="bg-emerald-600"
              elements={["React Native", "Expo", "Flutter", "Android", "iOS", "Offline-First Sync", "Native APIs"]}>
              <ul className="list-disc list-inside space-y-1.5 text-xs text-stone-700">
                <li>
                  Building cross-platform mobile and desktop applications with clean architecture and native speed.
                </li>
                <li>
                  Developing native device integrations, background workers, offline-first sync, and smooth animations.
                </li>
                <li>
                  Creating intuitive, touch-optimized user interfaces tailored for high engagement.
                </li>
              </ul>
            </Card>
          </TimelineItem>

          <TimelineItem date="2023 - Present">
            <Card
              title="Reverse Engineering"
              icon={<ShieldAlert size={24} strokeWidth={2} color="#ffffff" />}
              iconTitle="REA & Binary / Security Analyst"
              iconColor="bg-rose-600"
              elements={["Frida", "GDB", "Rizin / Cutter", "Ghidra", "APK Reversing", "Assembly", "Network Security"]}>
              <ul className="list-disc list-inside space-y-1.5 text-xs text-stone-700">
                <li>
                  Deep-dive binary analysis, disassembly, decompilation, and dynamic runtime instrumentation.
                </li>
                <li>
                  Hands-on expertise with Frida, GDB, Rizin/Cutter, Ghidra, and Android APK / DEX reversing.
                </li>
                <li>
                  Network protocol inspection, API reversing, memory forensics, and native code reconstruction.
                </li>
              </ul>
            </Card>
          </TimelineItem>
        </Timeline>
      </div>
    </div>
  );
};

export default AboutSection;
