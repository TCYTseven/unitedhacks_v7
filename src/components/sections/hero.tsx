"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { SectionBackground } from "./section-background";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const sectionTop = rect.top + window.scrollY;
      const scrollY = window.scrollY;
      if (scrollY <= sectionTop + rect.height) {
        setOffsetY(scrollY * 0.4);
      }
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative w-full overflow-visible min-h-[90vh] flex items-center"
    >
      {/* Parallax background image + overlay: extends well below section for long, soft fade into About */}
      <div
        className="absolute top-0 left-0 right-0 z-0 min-h-[90vh]"
        style={{ bottom: "-35vh" }}
        aria-hidden
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url(/bg.png)",
            transform: `translate3d(0, ${offsetY}px, 0)`,
            willChange: "transform",
          }}
        />
        {/* Overlay: reaches full opacity at section boundary (72% = 90vh) so one solid #1a0930, no line */}
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to bottom, rgba(26,9,48,0.7) 0%, rgba(26,9,48,0.82) 28%, rgba(26,9,48,0.92) 52%, rgba(26,9,48,1) 72%, rgba(26,9,48,1) 100%)",
          }}
        />
      </div>
      {/* Fade out hero texture (scanlines/glows) at bottom so no hard line at section boundary */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          maskImage: "linear-gradient(to bottom, black 0%, black 70%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to bottom, black 0%, black 70%, transparent 100%)",
        }}
      >
        <SectionBackground variant="hero" />
      </div>

      {/* Floating pixel accents */}
    
      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-4 py-16 md:py-24">
        <motion.div
          className="flex flex-col items-center text-center"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          {/* Arcade-style top strip */}
          <motion.div
            variants={item}
            className="mb-6 px-4 py-2 rounded border-2 border-jh-purple-accent/50 bg-jh-purple-deep/80 backdrop-blur-sm"
          >
            <span className="font-mono text-sm md:text-base text-jh-pink tracking-widest uppercase">
              July 10–12, 2026 • Virtual
            </span>
          </motion.div>

          <motion.h1
            variants={item}
            className="text-5xl sm:text-6xl md:text-[min(11vw,140px)] font-bold font-display leading-[0.95] mb-4 select-none"
          >
            <span className="text-gradient-hero block">United Hacks</span>
            <span className="text-jh-yellow drop-shadow-[3px_3px_0_#9937FE] block mt-1">V7</span>
          </motion.h1>

          <motion.div variants={item} className="h-1 w-20 bg-jh-yellow my-6 rounded-full" />

          <motion.p
            variants={item}
            className="text-jh-white/90 text-base sm:text-lg font-nunito mb-10 max-w-xl"
          >
            Build, learn, and compete with thousands of participants worldwide. $25K+ in prizes, mentors, and workshops.
          </motion.p>

          <motion.div variants={item} className="flex flex-col sm:flex-row gap-4 items-center justify-center">
            <a
              href="https://unitedhacksv7.devpost.com"
              className="btn-retro text-2xl sm:text-3xl px-10 py-4 rounded-sm"
            >
              Register Now
            </a>
            <a
              href="https://discord.gg/hackunited"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-discord text-xl sm:text-2xl px-8 py-4 rounded-sm flex items-center gap-2"
            >
              <svg 
                viewBox="0 0 24 24" 
                fill="currentColor" 
                className="w-6 h-6" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.419-2.157 2.419zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.419-2.157 2.419z"/>
              </svg>
              Discord
            </a>
          </motion.div>
        </motion.div>
      </div>

     
      <style jsx global>{`
        .text-gradient-hero {
          background: linear-gradient(to bottom, #ffffff 0%, #e495f9 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .btn-retro {
          background-color: #f5c856;
          color: #4c0973;
          font-family: "Jersey 10", system-ui;
          border: 3px solid #290f3f;
          box-shadow: 4px 4px 0 #290f3f;
          transition: all 0.15s ease-in-out;
          display: inline-flex;
          align-items: center;
          justify-content: center;
        }
        .btn-retro:hover {
          background-color: #e495f9;
          transform: translate(-2px, -2px);
          box-shadow: 6px 6px 0 #290f3f;
        }
        .btn-retro:active {
          transform: translate(2px, 2px);
          box-shadow: 2px 2px 0 #290f3f;
        }
        .btn-discord {
          background-color: #5865F2;
          color: #ffffff;
          font-family: "Jersey 10", system-ui;
          border: 3px solid #290f3f;
          box-shadow: 4px 4px 0 #290f3f;
          transition: all 0.15s ease-in-out;
          display: inline-flex;
          align-items: center;
          justify-content: center;
        }
        .btn-discord:hover {
          background-color: #4752C4;
          transform: translate(-2px, -2px);
          box-shadow: 6px 6px 0 #290f3f;
        }
        .btn-discord:active {
          transform: translate(2px, 2px);
          box-shadow: 2px 2px 0 #290f3f;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
