"use client";

import React from "react";
import { Instagram, Linkedin } from "lucide-react";
import { motion } from "framer-motion";
import { SectionBackground } from "./section-background";

/**
 * Footer component for United Hacks website.
 * Features contact information, social links, and legal/copyright details.
 * Adheres to the dark 'Retro Arcade' aesthetic with professional UI/UX design.
 */
const Footer = () => {
  return (
    <footer className="relative w-full text-jh-white overflow-hidden min-h-[60vh]" style={{ background: 'transparent' }}>
      {/* Background with proper fade */}
      <div className="absolute inset-0 z-0" aria-hidden>
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
          style={{
            backgroundImage: "url(/bg.png)",
            backgroundPosition: "center bottom",
            backgroundSize: "cover",
          }}
        />
        {/* Overlay: only fades from top, bottom 40% is completely transparent */}
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to bottom, rgba(26,9,48,1) 0%, rgba(26,9,48,0.9) 15%, rgba(26,9,48,0.7) 30%, rgba(26,9,48,0.4) 45%, rgba(26,9,48,0.1) 55%, transparent 60%)",
          }}
        />
      </div>
      
      <SectionBackground variant="grid" className="opacity-30" style={{ bottom: 0 }} />
      <SectionBackground variant="glow-bottom" className="opacity-20" style={{ bottom: 0 }} />

      {/* Main Footer Content */}
      <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-0">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 lg:gap-12">
          {/* Left Section: Contact & Social */}
          <div className="flex flex-col gap-6 flex-1">
            {/* Contact Information */}
            <div className="space-y-2">
              <h3 className="font-display text-xl sm:text-2xl text-jh-white mb-3">
                Get in Touch
              </h3>
              <p className="font-nunito text-base sm:text-lg text-jh-white/90">
                Reach out to us at{' '}
                <a 
                  href="mailto:humans@hackunited.org" 
                  className="text-jh-pink hover:text-jh-yellow transition-colors duration-200 underline-offset-4 hover:underline font-medium"
                >
                  humans@hackunited.org
                </a>
              </p>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              <a 
                href="https://www.instagram.com/hack_united/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 bg-jh-white/10 hover:bg-jh-pink/20 text-jh-white rounded-lg transition-all duration-200 hover:scale-110 hover:shadow-lg hover:shadow-jh-pink/30 border border-jh-purple-accent/30 hover:border-jh-pink/50"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://www.linkedin.com/company/hack-united/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 bg-jh-white/10 hover:bg-jh-pink/20 text-jh-white rounded-lg transition-all duration-200 hover:scale-110 hover:shadow-lg hover:shadow-jh-pink/30 border border-jh-purple-accent/30 hover:border-jh-pink/50"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="https://discord.gg/YyPDpmDZke" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 bg-jh-white/10 hover:bg-jh-pink/20 text-jh-white rounded-lg transition-all duration-200 hover:scale-110 hover:shadow-lg hover:shadow-jh-pink/30 border border-jh-purple-accent/30 hover:border-jh-pink/50"
                aria-label="Discord"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.419-2.157 2.419zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.419-2.157 2.419z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Right Section: Links & Legal */}
          <div className="flex flex-col items-start lg:items-end gap-4 text-sm sm:text-base">
            <div className="flex flex-wrap gap-6 text-jh-yellow">
              <a 
                href="https://unitedhacksv6.hackunited.org" 
                className="hover:text-jh-white transition-colors duration-200 hover:underline underline-offset-4"
                target="_blank"
                rel="noopener noreferrer"
              >
                v6 Site
              </a>
            </div>
            
            <div className="text-right space-y-1 text-jh-white/80 font-nunito">
              <div className="text-jh-pink font-medium">
                Copyright © 2026 Hack United
              </div>
              <div className="text-jh-white/60 text-xs sm:text-sm">
                All rights reserved. EIN: 81-2908499
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;