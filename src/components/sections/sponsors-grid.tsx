"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { SectionBackground } from "./section-background";

type Sponsor = {
  name: string;
  logo: string;
  url?: string;
  padding?: string;
  dark?: boolean;
};

const sponsors: Sponsor[] = [
  {
    name: "Devitus",
    logo: "/devitus-rectangle-transparent.svg",
    url: "https://devitus.com",
    padding: "p-6",
    dark: true,
  },
  {
    name: "Art of Problem Solving",
    logo: "/aops.png",
    url: "https://artofproblemsolving.com",
    padding: "p-6",
  },
  {
    name: "Cache Labs",
    logo: "/cachelabs.png",
    url: "https://cachelabs.io",
    padding: "p-3",
  },
  {
    name: "CodeCrafters",
    logo: "/codecrafters.png",
    url: "https://codecrafters.io",
    padding: "p-4",
  },
  {
    name: "Featherless",
    logo: "/featherless.jpeg",
    url: "https://featherless.ai",
    padding: "p-8",
  },
  {
    name: "Interview Cake",
    logo: "/interviewcake.png",
    url: "https://www.interviewcake.com",
    padding: "p-4",
  },
  {
    name: ".xyz",
    logo: "/xyz.png",
    url: "https://gen.xyz",
    padding: "p-3",
  },
];

const PLACEHOLDER_COUNT = 5;

const SponsorsGrid = () => {
  const placeholderSlots = Array.from({ length: PLACEHOLDER_COUNT }, (_, i) => ({
    padding: i < 2 ? "p-12" : i < 6 ? "p-4" : "p-2",
  }));

  return (
    <div id="sponsors" className="relative flex flex-col items-center justify-center bg-jh-purple-deep text-jh-white py-16 px-4 overflow-hidden">
      <SectionBackground variant="dots" className="opacity-70" />
      <SectionBackground variant="glow-bottom" className="opacity-40" />

      {/* Title Section */}
      <motion.div
        className="relative whitespace-nowrap mb-12 z-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="absolute top-1 left-1 text-2xl sm:text-5xl md:text-7xl font-bold font-jersey text-[#9937FE] opacity-80">
          Sponsors
        </h2>
        <h2 className="text-2xl sm:text-5xl md:text-7xl font-bold font-jersey text-jh-white drop-shadow-[2px_2px_0px_#9937FE]">
          Sponsors
        </h2>
      </motion.div>

      {/* Sponsors Grid Container */}
      <div className="w-full max-w-7xl flex flex-col items-center z-10">
        <motion.div
          className="w-full max-w-5xl z-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
            {sponsors.map((sponsor) => {
              const card = (
                <div
                  className={`shadow-lg rounded-lg flex items-center justify-center transition-all duration-300 ease-in-out min-h-[120px] md:min-h-[160px] ${sponsor.padding ?? "p-4"} ${
                    sponsor.dark
                      ? "bg-jh-purple-deep border border-jh-purple-accent/30 hover:border-jh-purple-accent/60"
                      : "bg-white"
                  }`}
                >
                  <Image
                    src={sponsor.logo}
                    alt={`${sponsor.name} logo`}
                    width={200}
                    height={80}
                    className="w-full h-auto max-h-16 md:max-h-20 object-contain"
                  />
                </div>
              );

              return sponsor.url ? (
                <a
                  key={sponsor.name}
                  href={sponsor.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block hover:scale-[1.02] transition-transform"
                >
                  {card}
                </a>
              ) : (
                <div key={sponsor.name}>{card}</div>
              );
            })}
            {placeholderSlots.map((slot, idx) => (
              <div
                key={idx}
                className={`bg-white shadow-lg rounded-lg flex items-center justify-center transition-all duration-300 ease-in-out min-h-[120px] md:min-h-[160px] ${slot.padding}`}
              >
                {/* Placeholder with "Coming Soon" */}
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-2 bg-jh-purple-deep/10 rounded-lg flex items-center justify-center border-2 border-dashed border-jh-purple-accent/30">
                      <span className="text-jh-purple-deep/40 text-xs font-bold">LOGO</span>
                    </div>
                    <span className="text-jh-purple-deep text-xs md:text-sm font-nunito font-medium">
                      Coming Soon
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Sponsorship CTA */}
        <motion.div
          className="text-center mt-12 z-10"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="font-nunito text-jh-white/95 text-base sm:text-lg mb-2">
            Want to sponsor?
          </p>
          <a
            href="mailto:sponsors@hackunited.org"
            className="text-jh-pink hover:text-jh-yellow transition-colors underline underline-offset-2 font-nunito text-base sm:text-lg font-medium"
          >
            sponsors@hackunited.org
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default SponsorsGrid;