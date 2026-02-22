"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { SectionBackground } from "./section-background";

const AboutSection = () => {
  return (
    <section
      id="about"
      className="relative flex flex-col items-center justify-start text-jh-white py-8 sm:py-12 md:py-16 px-4 sm:px-6 overflow-hidden"
    >
      {/* First 35vh transparent so hero’s solid #1a0930 shows through (no second layer, no line) */}
      <div className="absolute top-[35vh] left-0 right-0 bottom-0 z-[1] pointer-events-none bg-jh-purple-deep">
        <SectionBackground variant="dots" />
      </div>
      <SectionBackground variant="glow-bottom" className="opacity-60 z-[1]" />

      {/* Section Title with Retro Shadow Effect */}
      <motion.div
        className="relative mb-12 sm:mb-16 md:mb-20 text-center z-10 w-full px-2"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
      >
          <h2 
            className="absolute top-0.5 sm:top-1 left-1/2 -translate-x-1/2 text-4xl sm:text-5xl md:text-7xl font-bold font-jersey text-[#9937FE] opacity-80 select-none whitespace-nowrap"
            aria-hidden="true"
          >
            About Hack United
          </h2>
          <h2 className="relative text-4xl sm:text-5xl md:text-7xl font-bold font-jersey text-jh-white drop-shadow-[4px_4px_0px_rgba(153,55,254,0.8)] whitespace-nowrap">
            About Hack United
          </h2>
      </motion.div>

      {/* Arcade/Browser Window Container */}
      <motion.div
        className="relative w-full max-w-4xl mx-auto z-10"
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
          <div className="relative rounded-xl overflow-hidden shadow-[8px_8px_0px_#290F3F] border-[4px] border-[#290F3F] w-full max-w-full">
            {/* Title Bar */}
            <div className="bg-[#3B1C5B] py-3 px-4 border-b-2 border-[#290F3F] flex items-center justify-start gap-2">
              <div className="w-3 h-3 bg-[#FF5F56] rounded-full border border-[rgba(0,0,0,0.2)]"></div>
              <div className="w-3 h-3 bg-[#FFBD2E] rounded-full border border-[rgba(0,0,0,0.2)]"></div>
              <div className="w-3 h-3 bg-[#27C93F] rounded-full border border-[rgba(0,0,0,0.2)]"></div>
            </div>

            {/* Content Area - solid background (no gradient) */}
            <div 
              className="p-4 sm:p-6 md:p-8 lg:p-12 min-h-[300px] bg-[#E8C4F0] overflow-hidden"
            >
              <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-10">
                {/* Text Content */}
                <div className="w-full md:w-[60%] text-left min-w-0">
                  <p className="text-sm sm:text-base md:text-lg font-nunito text-[#300060] leading-relaxed mb-6">
                    Hack United is a nonprofit organization that hosts United Hacks. In the past, we have hosted 6 iterations of United Hacks, with over 3,750+ combined participants from over 50 countries. Our hackathons are different because we emphasize soft skills often overlooked in the tech world.
                  </p>
                  
                  {/* Learn More Button */}
                  <div className="mt-4">
                    <a 
                      href="https://hackunited.org" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 sm:px-6 py-3 bg-[#300060] text-white font-jersey text-lg sm:text-xl md:text-2xl rounded-sm hover:bg-[#4C0973] transition-colors break-words"
                    >
                      Learn More About Hack United
                    </a>
                  </div>
                </div>

              {/* Image Container */}
              <div className="w-full sm:w-[50%] md:w-[32%] flex-shrink-0 min-w-0">
                <div className="relative aspect-[3/2] w-full rounded-xl overflow-hidden shadow-lg border-2 border-[#300060]/20">
                  <Image
                    src="/logo_main.webp"
                    alt="Hackathon Participants"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 30vw"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;