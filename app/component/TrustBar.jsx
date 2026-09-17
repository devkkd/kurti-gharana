"use client";

import { motion } from "framer-motion";
import { StaggerParent, StaggerChild } from "./Animations";

const signals = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 12h14" />
        <path d="M12 5l7 7-7 7" />
        <rect x="1" y="3" width="4" height="18" rx="1" />
      </svg>
    ),
    title: "Free Shipping",
    desc: "On all orders above ₹1000",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
    title: "100% Authentic",
    desc: "Genuine Jaipur handcraft",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
    title: "Made with Love",
    desc: "By 60+ artisan families",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 4 23 10 17 10" />
        <polyline points="1 20 1 14 7 14" />
        <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
      </svg>
    ),
    title: "Easy Returns",
    desc: "7-day hassle-free policy",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    title: "Fast Dispatch",
    desc: "Ships within 2 business days",
  },
];

export default function TrustBar() {
  return (
    <section className="bg-[#741D29] px-5 py-12 lg:px-10">
      <div className="mx-auto max-w-[1280px]">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, margin: "-60px" }}
          className="mb-10 flex items-center justify-center gap-4"
        >
          <span className="hidden h-px w-16 bg-[#B88A4A]/50 sm:block" />
          <p className="font-sans text-[10px] uppercase tracking-[0.35em] text-[#D6B47A]">
            Why Kurti Gharana
          </p>
          <span className="hidden h-px w-16 bg-[#B88A4A]/50 sm:block" />
        </motion.div>

        {/* Signals grid */}
        <StaggerParent
          stagger={0.1}
          delayChildren={0.1}
          className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-5"
        >
          {signals.map((s) => (
            <StaggerChild key={s.title} distance={28}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.25 }}
                className="flex flex-col items-center gap-3 border border-[#B88A4A]/20 bg-[#741D29] px-5 py-6 text-center"
              >
                {/* Icon */}
                <span className="flex h-12 w-12 items-center justify-center bg-[#B88A4A]/15 text-[#D6B47A]">
                  {s.icon}
                </span>

                <h3 className="font-serif text-[18px] text-[#FCF7EF]">
                  {s.title}
                </h3>

                <p className="font-sans text-[11px] leading-5 text-[#FCF7EF]/60">
                  {s.desc}
                </p>
              </motion.div>
            </StaggerChild>
          ))}
        </StaggerParent>

      </div>
    </section>
  );
}
