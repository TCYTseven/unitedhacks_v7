"use client";

import React from "react";
import { Plus } from "lucide-react";
import { motion } from "framer-motion";
import { SectionBackground } from "./section-background";

/**
 * FAQ Accordion Item Component test
 * Based on the design specs: white background, rounded-lg, Jersey font for title.
 */
const FAQItem = ({ question, answer }: { question: string; answer?: string }) => {
  return (
    <details className="group faq-item w-full bg-[#FCEDFF] rounded-lg overflow-hidden border-2 border-transparent transition-all duration-200 open:border-[#9937FE]">
      <summary className="flex items-center justify-between p-4 cursor-pointer list-none select-none">
        <span className="font-jersey text-xl sm:text-2xl text-[#290F3F] group-hover:text-[#9937FE] transition-colors">
          {question}
        </span>
        <Plus className="w-6 h-6 text-[#9937FE] transition-transform duration-200 group-open:rotate-45" />
      </summary>
      {answer && (
        <div className="px-4 pb-4 pt-0">
          <p className="font-nunito text-[#290F3F] text-sm sm:text-base leading-relaxed">
            {answer}
          </p>
        </div>
      )}
    </details>
  );
};

const FAQSection = () => {
    const faqs = [
      {
        question: "What is a hackathon?",
        answer: "A hackathon is a weekend-long event where students come together to learn new skills, build cool projects, and meet new people. It's not just about coding; it's about creativity and collaboration!"
      },
      {
        question: "Is it free?",
        answer: "Yes! United Hacks is completely free for all participants globally. We provide thousands of dollars in prizes, workshops, and resources at no cost."
      },
      {
        question: "What should my project be about?",
        answer: "Anything you want! Whether it's a web app, mobile app, hardware project, or something completely different, the sky is the limit. We'll have specific tracks and themes announced at the opening ceremony."
      },
      {
        question: "How will we communicate during the event?",
        answer: "We primarily use Discord for all announcements, mentorship requests, and community interaction. It's the hub of United Hacks!"
      },
      {
        question: "What if I don't know how to code?",
        answer: "That's perfectly fine! Many of our attendees are beginners. We'll have workshops, mentors, and resources to help you learn and build something amazing from scratch."
      },
      {
        question: "Who can participate?",
        answer: "United Hacks is open to all participants globally who are 13 years of age or older. No prior experience is required—just a curiosity to learn and build!"
      },
      {
        question: "Is it remote?",
        answer: "Yes! United Hacks V7 is a 100% remote event. You can participate from anywhere in the world as long as you have an internet connection."
      },
      {
        question: "How many people are in a team?",
        answer: "Teams can consist of 1 to 4 people. You can find teammates in our Discord server if you don't have one yet."
      },
      {
        question: "How does judging work?",
        answer: "Projects are judged by industry professionals from companies like Oracle, Amazon, and Walmart. Criteria include creativity, practicality, presentation, and technical complexity."
      },
      {
        question: "What timezone is the event in?",
        answer: "United Hacks operates on Eastern Standard Time (EST). However, we have participants from over 50 countries, so our schedule is designed to be accessible globally."
      },
      {
        question: "Have a question not listed here?",
        answer: "Feel free to reach out to us at humans@hackunited.org and we'll be happy to help you out!"
      }
    ];

  return (
    <section id="faq" className="relative bg-jh-purple-deep py-16 sm:py-24 px-4 overflow-hidden">
      <SectionBackground variant="dots" className="opacity-50" />
      <SectionBackground variant="gradient-stripes" />

      <div className="max-w-[1200px] mx-auto flex flex-col items-center z-10 relative">
        {/* Header with Retro Shadow */}
        <motion.div
          className="relative mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="absolute top-1 left-1 text-5xl sm:text-7xl font-bold font-jersey text-[#9937FE] opacity-80 whitespace-nowrap">
            FAQ
          </h2>
          <h2 className="relative text-5xl sm:text-7xl font-bold font-jersey text-jh-white drop-shadow-[2px_2px_0px_#9937FE] whitespace-nowrap">
            FAQ
          </h2>
        </motion.div>

        {/* FAQ Container Card */}
        <motion.div
          className="w-full max-w-5xl bg-jh-pink/20 backdrop-blur-sm rounded-2xl p-4 sm:p-10 border border-jh-pink/30"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Left Column */}
            <div className="flex flex-col gap-4">
              {faqs.filter((_, i) => i % 2 === 0).map((faq, idx) => (
                <FAQItem key={`left-${idx}`} question={faq.question} answer={faq.answer} />
              ))}
            </div>
            
            {/* Right Column */}
            <div className="flex flex-col gap-4">
              {faqs.filter((_, i) => i % 2 !== 0).map((faq, idx) => (
                <FAQItem key={`right-${idx}`} question={faq.question} answer={faq.answer} />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Footer Contact Info */}
        <div className="mt-16 sm:mt-24 text-center">
          <div className="relative inline-block mb-4">
            <h2 className="absolute top-0.5 left-0.5 text-3xl sm:text-5xl font-bold font-jersey text-[#9937FE] opacity-80 whitespace-nowrap">
              Still have a question?
            </h2>
            <h2 className="relative text-3xl sm:text-5xl font-bold font-jersey text-jh-white drop-shadow-[2px_2px_0px_#9937FE] whitespace-nowrap">
              Still have a question?
            </h2>
          </div>
            <p className="mt-2 text-jh-white font-nunito text-lg sm:text-xl">
              Reach out to us at{" "}
              <a 
                href="mailto:humans@hackunited.org" 
                className="text-[#E495F9] hover:text-[#F5C856] transition-colors underline underline-offset-4"
              >
                humans@hackunited.org
              </a>
            </p>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;