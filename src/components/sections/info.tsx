"use client";

import React from "react";
import { motion } from "framer-motion";
import { SectionBackground } from "./section-background";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

const infoCards = [
  {
    title: "Judging Panel",
    body: "Our hackathon is evaluated by industry professionals spanning Engineering, Software Engineering, Business, and the medical industry. These experienced judges will review your projects based on creativity, technical complexity, practicality, design, and presentation. They bring years of real-world experience and will provide valuable feedback to help you grow as a developer.",
    cta: { label: "View judges", href: "https://unitedhacksv7.devpost.com/judges" },
  },
  {
    title: "Schedule",
    body: "Opening Ceremony: July 10th, 2026 at 7:00pm EST\nSubmissions Due: July 12th, 2026 at 12:00pm EST\nClosing Ceremony: July 12th, 2026 at 8:00 PM EST\n\nWorkshop schedule will be posted in our discord!\n\nMake sure to attend the opening ceremony to learn about the theme track and get important updates. All live streams will be linked in our Discord server.",
  },
  {
    title: "Rules",
    body: "• You must be 13+, all ages welcome—students and professionals alike.\n• Projects must be original and built during the hackathon.\n• Teams up to 4 people.\n• You must submit a demo video, GitHub repository, and project description.\n• Follow our code of conduct and maintain a respectful, inclusive environment for all participants.",
    cta: { label: "View code of conduct", href: "https://static.mlh.io/docs/mlh-code-of-conduct.pdf" },
  },
  {
    title: "Theme",
    body: "We have a general track where you can build anything you want and also have a THEME track which will be announced during our opening ceremony! Whether you're passionate about AI, web development, mobile apps, or something completely unique, we welcome all innovative ideas. The theme track will have special prizes for projects that align with the announced theme.",
  },
  {
    title: "Workshops",
    body: "Industry professionals and our team will host workshops to help you learn and enhance your project. Topics range from beginner-friendly introductions to advanced technical deep-dives. Whether you're new to coding or an experienced developer, you'll find sessions that help you build better projects and learn new skills.",
  },
  {
    title: "Networking",
    body: "Network with mentors, professionals, and fellow hackers for future collaborations and opportunities. Connect with like-minded individuals, meet potential teammates for future projects, and build relationships with industry professionals. Our Discord community is active year-round, creating lasting connections beyond the hackathon weekend.",
    cta: { label: "Join Discord", href: "https://discord.gg/hackunited" },
  },
];

function InfoCard({
  title,
  body,
  cta,
}: {
  title: string;
  body: string;
  cta?: { label: string; href: string };
}) {
  return (
    <div className="h-full rounded-xl border-2 border-jh-purple-accent/50 bg-jh-purple-deep/80 backdrop-blur-sm p-6 shadow-[4px_4px_0px_rgba(153,55,254,0.3)] flex flex-col">
      <h3 className="font-display text-2xl md:text-3xl text-jh-yellow mb-4 drop-shadow-[2px_2px_0_#9937FE]">
        {title}
      </h3>
      <div className="flex-1 font-nunito text-jh-white/95 text-sm md:text-base leading-relaxed whitespace-pre-line">
        {body}
      </div>
      {cta && (
        <a
          href={cta.href}
          target={cta.href.startsWith("http") ? "_blank" : undefined}
          rel={cta.href.startsWith("http") ? "noopener noreferrer" : undefined}
          className="mt-4 inline-flex items-center font-display text-lg text-jh-pink hover:text-jh-yellow transition-colors"
        >
          {cta.label} →
        </a>
      )}
    </div>
  );
}

export default function InfoSection() {
  return (
    <section
      id="info"
      className="relative py-16 sm:py-20 px-4 overflow-hidden bg-jh-purple-deep"
    >
      <SectionBackground variant="grid" className="opacity-50" />
      <SectionBackground variant="glow-bottom" className="opacity-30" />

      <motion.div
        className="relative mb-10 text-center z-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="absolute top-0.5 left-1/2 -translate-x-1/2 text-4xl sm:text-5xl md:text-7xl font-bold font-jersey text-jh-purple-accent opacity-80 whitespace-nowrap">
          INFO
        </h2>
        <h2 className="relative text-4xl sm:text-5xl md:text-7xl font-bold font-jersey text-jh-white drop-shadow-[2px_2px_0px_#9937FE] whitespace-nowrap">
          INFO
        </h2>
      </motion.div>

      <div className="relative z-10 max-w-[1200px] mx-auto">
        <Carousel
          opts={{ align: "start", loop: true }}
          className="w-full"
        >
          {/* Nav buttons above the cards */}
          <div className="flex justify-between items-center mb-4 px-1">
            <CarouselPrevious
              variant="outline"
              size="icon"
              className="relative left-0 top-0 translate-y-0 border-jh-purple-accent bg-jh-purple-deep text-jh-white hover:bg-jh-purple-accent hover:text-jh-white disabled:opacity-40 size-10 z-20"
            />
            <CarouselNext
              variant="outline"
              size="icon"
              className="relative right-0 top-0 translate-y-0 border-jh-purple-accent bg-jh-purple-deep text-jh-white hover:bg-jh-purple-accent hover:text-jh-white disabled:opacity-40 size-10 z-20"
            />
          </div>
          <CarouselContent className="-ml-2 md:-ml-4">
            {infoCards.map((card, idx) => (
              <CarouselItem
                key={idx}
                className={cn(
                  "pl-2 md:pl-4",
                  "basis-full md:basis-1/2 lg:basis-1/3"
                )}
              >
                <div className="h-full min-h-[320px] md:min-h-[360px]">
                  <InfoCard
                    title={card.title}
                    body={card.body}
                    cta={card.cta}
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}
