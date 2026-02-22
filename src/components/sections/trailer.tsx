"use client";

import React from "react";
import { motion } from "framer-motion";

const TrailerSection = () => {
  return (
    <section
      id="trailer"
      className="relative w-full flex flex-col items-center justify-center px-4 py-16 sm:py-20 md:py-28 overflow-hidden bg-jh-purple-deep"
    >
      {/* Ambient purple glow behind the video */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        aria-hidden
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full bg-[#9937FE]/20 blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[45%] w-[400px] h-[300px] rounded-full bg-[#e495f9]/15 blur-[80px]" />
      </div>

      <motion.div
        className="relative z-10 w-full max-w-4xl mx-auto flex flex-col items-center"
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
      >
        {/* Label */}
        <motion.p
          className="font-mono text-sm md:text-base text-jh-pink tracking-widest uppercase mb-6"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          Watch the Trailer
        </motion.p>

        {/* Video embed wrapper with glowing border */}
        <div className="relative w-full group">
          {/* Outer glow ring */}
          <div
            className="absolute -inset-[3px] rounded-2xl z-0 opacity-70 group-hover:opacity-100 transition-opacity duration-500"
            style={{
              background:
                "linear-gradient(135deg, #9937FE 0%, #e495f9 40%, #9937FE 70%, #f5c856 100%)",
            }}
          />
          {/* Soft glow spread */}
          <div className="absolute -inset-4 rounded-3xl bg-[#9937FE]/30 blur-2xl z-0 group-hover:bg-[#9937FE]/45 transition-colors duration-500" />

          {/* Video container */}
          <div className="relative z-10 rounded-2xl overflow-hidden bg-black border-2 border-[#290F3F]">
            <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/s0LzgFYI5mU"
                title="United Hacks V7 Trailer"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default TrailerSection;
