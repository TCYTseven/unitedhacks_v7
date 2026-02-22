"use client";

import React from "react";
import { motion } from "framer-motion";
import { SectionBackground } from "./section-background";

const RegisterCTA = () => {
  return (
    <section
      id="register"
      className="relative py-16 sm:py-20 px-4 overflow-hidden bg-jh-purple-deep"
    >
      <SectionBackground variant="grid" className="opacity-50" />
      <SectionBackground variant="glow" className="opacity-30" />

      {/* Section title above the window */}
      <motion.div
        className="relative mb-8 sm:mb-10 text-center z-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="absolute top-0.5 left-1/2 -translate-x-1/2 text-4xl sm:text-5xl md:text-6xl font-bold font-jersey text-jh-purple-accent opacity-80 whitespace-nowrap">
          REGISTER
        </h2>
        <h2 className="relative text-4xl sm:text-5xl md:text-6xl font-bold font-jersey text-jh-white drop-shadow-[2px_2px_0px_#9937FE] whitespace-nowrap">
          REGISTER
        </h2>
      </motion.div>

      {/* Browser/arcade window like About section */}
      <motion.div
        className="relative w-full max-w-3xl mx-auto z-10"
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <div className="relative rounded-xl overflow-hidden shadow-[8px_8px_0px_#290F3F] border-[4px] border-[#290F3F]">
          {/* Title bar (traffic lights) */}
          <div className="bg-[#3B1C5B] py-3 px-4 border-b-2 border-[#290F3F] flex items-center justify-start gap-2">
            <div className="w-3 h-3 bg-[#FF5F56] rounded-full border border-[rgba(0,0,0,0.2)]" />
            <div className="w-3 h-3 bg-[#FFBD2E] rounded-full border border-[rgba(0,0,0,0.2)]" />
            <div className="w-3 h-3 bg-[#27C93F] rounded-full border border-[rgba(0,0,0,0.2)]" />
          </div>

          {/* Content area - solid background (no gradient) */}
          <div className="p-6 sm:p-8 md:p-10 text-center bg-[#E8C4F0]">
            <p className="font-nunito text-[#300060] text-base sm:text-lg leading-relaxed mb-6 text-left">
              United Hacks V7 is an online event. Even if you are not interested in
              submitting a project, you can still sign-up in order to access
              workshops and networking opportunities with like-minded peers and
              industry professionals. In order to sign-up, please follow the
              instructions below.
            </p>

            <ul className="list-none space-y-3 mb-8 text-left font-nunito text-[#300060] text-base sm:text-lg">
              <li className="flex items-center gap-3">
                <span className="text-[#290F3F] font-bold">•</span>
                Sign up on <a
                  href="https://unitedhacksv7.devpost.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-jh-purple-accent hover:underline font-semibold"
                >
                  Devpost
                </a>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-[#290F3F] font-bold">•</span>
                Join our <a
                  href="https://discord.gg/hackunited"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-jh-purple-accent hover:underline font-semibold"
                >
                  Discord Server
                </a>
              </li>
            </ul>

            <a
              href="https://unitedhacksv7.devpost.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-retro inline-flex text-xl sm:text-2xl px-10 py-4 rounded-sm"
            >
              Register on Devpost
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default RegisterCTA;
