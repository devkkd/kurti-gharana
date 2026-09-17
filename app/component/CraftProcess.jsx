"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SlideInLeft, SlideInRight, SlideUp, StaggerParent, StaggerChild, easeSoft } from "./Animations";

const steps = [
  {
    number: "01",
    title: "Fabric Sourcing",
    desc: "We hand-pick every fabric from Jaipur's finest weavers — sanganeri cotton, chanderi silk, and pure georgette.",
  },
  {
    number: "02",
    title: "Block Printing",
    desc: "Artisans carve intricate wooden blocks and stamp each pattern by hand, one impression at a time.",
  },
  {
    number: "03",
    title: "Natural Dyeing",
    desc: "Colours are set using traditional vegetable dyes — rich, lasting, and gentle on the skin.",
  },
  {
    number: "04",
    title: "Expert Tailoring",
    desc: "Each kurti is cut and stitched by master tailors for a silhouette that flatters every body.",
  },
];

export default function CraftProcess() {
  return (
    <section className="bg-[#F9F1E5] px-5 py-16 lg:px-10 lg:py-24">
      <div className="mx-auto max-w-[1280px]">

        <div className="grid gap-14 lg:grid-cols-2 lg:items-center">

          {/* ── Left: Image ── */}
          <SlideInLeft className="relative">

            {/* Main image */}
            <div className="relative h-[420px] lg:h-[580px]">
              <Image
                src="/images/about2.png"
                alt="Jaipur artisan crafting a kurti"
                fill
                className="object-cover"
              />
            </div>

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5, ease: easeSoft }}
              viewport={{ once: true }}
              className="absolute -bottom-5 -right-4 bg-[#741D29] px-6 py-5 shadow-xl sm:right-6 sm:bottom-6"
            >
              <p className="font-serif text-[38px] leading-none text-white">
                10+
              </p>
              <p className="mt-1 font-sans text-[9px] uppercase tracking-[0.2em] text-[#D6B47A]">
                Years of Craft
              </p>
            </motion.div>

            {/* Gold border accent */}
            <span className="absolute -left-3 -top-3 h-20 w-20 border-l-2 border-t-2 border-[#B88A4A]" />

          </SlideInLeft>

          {/* ── Right: Steps ── */}
          <SlideInRight delay={0.1}>

            <SlideUp delay={0}>
              <p className="font-sans text-[10px] uppercase tracking-[0.3em] text-[#B88A4A]">
                From Loom to You
              </p>
              <h2 className="mt-3 font-serif text-[44px] leading-[1.05] text-[#741D29]">
                Crafted with
                <br />
                Ancient Care
              </h2>
              <p className="mt-4 max-w-[460px] font-sans text-[13px] leading-7 text-[#756A63]">
                Every Kurti Gharana piece travels through centuries-old
                hands before it reaches yours — here is how.
              </p>
            </SlideUp>

            {/* Step list */}
            <StaggerParent stagger={0.1} delayChildren={0.2} className="mt-10 space-y-0">
              {steps.map((step, i) => (
                <StaggerChild key={step.number} distance={24}>
                  <div className="flex gap-5 border-b border-[#DCC8A9] py-5 last:border-b-0">

                    {/* Number */}
                    <span className="mt-0.5 shrink-0 font-serif text-[28px] leading-none text-[#B88A4A]/50">
                      {step.number}
                    </span>

                    <div>
                      <h3 className="font-serif text-[19px] text-[#741D29]">
                        {step.title}
                      </h3>
                      <p className="mt-1 font-sans text-[12px] leading-6 text-[#756A63]">
                        {step.desc}
                      </p>
                    </div>

                  </div>
                </StaggerChild>
              ))}
            </StaggerParent>

          </SlideInRight>

        </div>
      </div>
    </section>
  );
}
