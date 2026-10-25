"use client"; // Make this a 'client component' (gets executed on client side) instead of on the server natively (server component)

import Image from "next/image";
import Tab from "./components/Tab";
import ScotchedPhoto from "./components/ScotchedPhoto";
import StickerLabel from "./components/StickerLabel";
import { getAssetPath } from "./lib/basePath";

import AboutSection from "./components/sections/AboutSection";
import SkillsSection from "./components/sections/SkillsSection";
import ProjectsSection from "./components/sections/ProjectsSection";
import ContactSection from "./components/sections/ContactSection";
import TiltScreenModal from "./components/TiltScreenModal";

import { useState, useEffect, useRef } from "react";

export default function Home() {
  const [activeTab, setActiveTab] = useState<string | null>(null);
  const [animationClass, setAnimationClass] = useState("");
  const [isAnimating, setIsAnimating] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const folderContainerRef = useRef<HTMLDivElement>(null);

  const handleTabClick = (tabName: string) => {
    if (isAnimating) return;
    setIsAnimating(true);
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTop = 0;
    }
    if (activeTab === tabName) {
      setAnimationClass("animate-put-back");
        setTimeout(() => {
          setActiveTab(null);
        }, 800);
    } else {
      if (activeTab) {
        setAnimationClass("animate-put-back");
        setTimeout(() => {
          setActiveTab(tabName);
          setAnimationClass("animate-pull-over");
        }, 800);
      } else {
        setActiveTab(tabName);
        setAnimationClass("animate-pull-over");
      }
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isAnimating) {
        return;
      }
      if (
        folderContainerRef.current &&
        !folderContainerRef.current.contains(event.target as Node)
      ) {
        if (activeTab) {
          setIsAnimating(true);
          setAnimationClass("animate-put-back");
          setTimeout(() => {
            setActiveTab(null);
          }, 800);
        }
      }
    };

    if (activeTab) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [activeTab, isAnimating]);

  useEffect(() => {
    if (isAnimating) {
      const timer = setTimeout(() => setIsAnimating(false), 800);
      return () => clearTimeout(timer);
    }
  }, [isAnimating]);

  return (
    // The screen is the positioning context for our centered div.
    <div className="relative h-screen bg-sky-50 dark:bg-stone-600">
      <div
        ref={folderContainerRef}
        className="absolute top-0 bottom-0 left-0 right-0 m-auto w-[92vw] h-[72vh] sm:w-[85vw] sm:h-[65vw] lg:w-[80vw] lg:h-[60vw] max-w-[106.67vh] max-h-[82vh] z-100">
        {/* Tabs over the folder */}
        <nav className="absolute w-[95%] sm:w-2/3 h-10 sm:h-12 md:h-1/6 right-0 z-20 -translate-y-full sm:-translate-y-2/3 lg:-translate-y-1/2">
          <ul className="flex w-full h-full gap-x-1">
            <Tab bgColor="bg-emerald-500" text="About" onClick={() => handleTabClick("About")} />
            <Tab bgColor="bg-blue-400" text="Skills" onClick={() => handleTabClick("Skills")} />
            <Tab bgColor="bg-red-400" text="Projects" onClick={() => handleTabClick("Projects")} />
            <Tab bgColor="bg-amber-400" text="Contact" onClick={() => handleTabClick("Contact")} />
          </ul>
        </nav>

        {/* Back of the folder */}
        <div className="absolute inset-0 z-10 origin-bottom skew-x-3 w-full rounded-lg bg-orange-200 p-4 mt-1 shadow-lg"></div>

        {/* Document Inside of the folder */}
        <div
          ref={scrollContainerRef}
          className={`absolute inset-x-0 bottom-0 top-6 z-20 w-full rounded-b-lg bg-lined-paper p-4 shadow-lg text-black overflow-y-auto ${animationClass}`}>
          {activeTab === "About" && <AboutSection />}
          {activeTab === "Skills" && <SkillsSection />}
          {activeTab === "Projects" && <ProjectsSection />}
          {activeTab === "Contact" && <ContactSection />}
        </div>
        {/* Front of the folder */}
        <div className="absolute inset-0 z-40 origin-bottom -skew-x-3 w-full rounded-lg bg-orange-200 p-4 shadow-lg overflow-hidden sm:overflow-visible">
          <StickerLabel text="IT'S ME DIDAR" containerClassName=" -rotate-9 translate-y-1/2" />

          <ScotchedPhoto
            image={{ src: getAssetPath("/photoDidar.webp"), width: 320, height: 400, alt: "Didar Lahiry" }}
            containerClassName=" w-[52%] sm:w-[43%] translate-y-[22%] sm:translate-y-[18%] translate-x-[75%] sm:translate-x-[95%] skew-x-3 rotate-4 sm:rotate-6 z-20"
          />

          <Image
            src={getAssetPath("/didar-stamp.png")}
            width="240"
            height="240"
            alt="AI Automation & Web Developer Verified"
            className="absolute w-[32%] sm:w-[28%] left-2 sm:left-4 bottom-2 sm:bottom-4 skew-x-3 -rotate-12 opacity-90 drop-shadow-sm pointer-events-none select-none"
          />
        </div>
        <p className="absolute -bottom-10 left-0 right-0 text-center text-stone-700 dark:text-white text-sm font-medium">
          Didar Lahiry {new Date().getFullYear()} -&nbsp;
          <a
            href="https://github.com/didar-lahiry"
            className="text-blue-500 hover:underline"
            target="_blank"
            rel="noopener noreferrer">
            GitHub
          </a>
          &nbsp;-&nbsp;
          <a
            href="https://wa.me/8801631188500"
            className="text-emerald-500 hover:underline"
            target="_blank"
            rel="noopener noreferrer">
            WhatsApp
          </a>
          &nbsp;-&nbsp;
          <a
            href="mailto:itsdidar60@gmail.com"
            className="text-amber-600 hover:underline">
            Email
          </a>
        </p>
      </div>
    </div>
  );
}
