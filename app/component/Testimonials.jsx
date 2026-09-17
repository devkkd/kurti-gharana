"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SlideUp, FadeIn, easeSoft } from "./Animations";

const reviews = [
  {
    name: "Ananya Mehta",
    city: "Delhi",
    rating: 5,
    text: "The fabric quality is absolutely gorgeous. I wore the sanganeri cotton kurti to a family function and got so many compliments. Will definitely order again!",
    initials: "AM",
  },
  {
    name: "Deepika Verma",
    city: "Mumbai",
    rating: 5,
    text: "I have been searching for authentic Jaipur prints for years. Kurti Gharana is the real deal — every piece feels handcrafted and unique. The packaging was also beautiful.",
    initials: "DV",
  },
  {
    name: "Shreya Kapoor",
    city: "Bangalore",
    rating: 5,
    text: "Ordered the festive set and it arrived in 3 days, beautifully packed. The hand-block print is so intricate — you can feel the artisan's work in every detail.",
    initials: "SK",
  },
  {
    name: "Ritika Singh",
    city: "Jaipur",
    rating: 5,
    text: "Being from Jaipur, I have high standards for Rajasthani prints. Kurti Gharana lives up to every expectation. The leheriya dupatta is my absolute favourite.",
    initials: "RS",
  },
];

function Stars({ count = 5 }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width="13" height="13" viewBox="0 0 24 24" fill="#B88A4A">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  const [active, setActive] = useState(0);

  const prev = () => setActive((a) => (a - 1 + reviews.length) % reviews.length);
  const next = () => setActive((a) => (a + 1) % reviews.length);

  return (
    <section className="bg-[#FCF7EF] px-5 py-16 lg:px-10 lg:py-24">
      <div className="mx-auto max-w-[1280px]">

        {/* Section label */}
        <SlideUp className="mb-12 text-center">
          <p className="font-sans text-[10px] uppercase tracking-[0.3em] text-[#B88A4A]">
            Real Women, Real Love
          </p>
          <h2 className="mt-3 font-serif text-[44px] leading-tight text-[#741D29]">
            What Our Customers Say
          </h2>
          <div className="mx-auto mt-5 flex items-center justify-center gap-3">
            <span className="h-px w-12 bg-[#DCC8A9]" />
            <span className="text-[#B88A4A] text-[12px]">✦</span>
            <span className="h-px w-12 bg-[#DCC8A9]" />
          </div>
        </SlideUp>

        <div className="grid gap-8 lg:grid-cols-[1fr_400px] lg:items-start">

          {/* ── Featured review (large) ── */}
          <div className="relative min-h-[280px] border border-[#DCC8A9] bg-[#F9F1E5] p-8 sm:p-12">

            {/* Big quote mark */}
            <span className="absolute right-8 top-6 font-serif text-[96px] leading-none text-[#741D29]/8 select-none">
              "
            </span>

            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.45, ease: easeSoft }}
              >
                <Stars count={reviews[active].rating} />

                <p className="mt-6 font-serif text-[22px] leading-[1.55] text-[#741D29] sm:text-[26px]">
                  &ldquo;{reviews[active].text}&rdquo;
                </p>

                <div className="mt-8 flex items-center gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#741D29] font-serif text-[16px] text-white">
                    {reviews[active].initials}
                  </div>
                  <div>
                    <p className="font-sans text-[13px] font-medium text-[#741D29]">
                      {reviews[active].name}
                    </p>
                    <p className="font-sans text-[11px] text-[#B88A4A]">
                      {reviews[active].city}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Prev / Next controls */}
            <div className="mt-8 flex gap-3">
              <button
                onClick={prev}
                aria-label="Previous review"
                className="flex h-10 w-10 items-center justify-center border border-[#DCC8A9] text-[#741D29] transition hover:border-[#741D29] hover:bg-[#741D29] hover:text-white"
              >
                ←
              </button>
              <button
                onClick={next}
                aria-label="Next review"
                className="flex h-10 w-10 items-center justify-center border border-[#DCC8A9] text-[#741D29] transition hover:border-[#741D29] hover:bg-[#741D29] hover:text-white"
              >
                →
              </button>
              <span className="ml-auto self-center font-sans text-[11px] text-[#756A63]">
                {active + 1} / {reviews.length}
              </span>
            </div>
          </div>

          {/* ── Review list (small cards) ── */}
          <div className="flex flex-col gap-4">
            {reviews.map((r, i) => (
              <motion.button
                key={r.name}
                onClick={() => setActive(i)}
                whileHover={{ x: 4 }}
                transition={{ duration: 0.2 }}
                className={`w-full border p-5 text-left transition-all duration-300 ${
                  i === active
                    ? "border-[#741D29] bg-[#741D29] text-white"
                    : "border-[#DCC8A9] bg-[#F9F1E5] hover:border-[#B88A4A]"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full font-serif text-[14px] ${
                      i === active
                        ? "bg-white/20 text-white"
                        : "bg-[#741D29]/10 text-[#741D29]"
                    }`}
                  >
                    {r.initials}
                  </div>
                  <div>
                    <p
                      className={`font-sans text-[12px] font-medium ${
                        i === active ? "text-white" : "text-[#741D29]"
                      }`}
                    >
                      {r.name}
                    </p>
                    <p
                      className={`font-sans text-[10px] ${
                        i === active ? "text-white/60" : "text-[#B88A4A]"
                      }`}
                    >
                      {r.city}
                    </p>
                  </div>
                  {i === active && (
                    <span className="ml-auto text-[#D6B47A]">✦</span>
                  )}
                </div>
              </motion.button>
            ))}

            {/* Rating summary */}
            <FadeIn delay={0.2} className="border border-[#DCC8A9] bg-[#F9F1E5] p-5 text-center">
              <p className="font-serif text-[42px] leading-none text-[#741D29]">
                4.9
              </p>
              <Stars count={5} />
              <p className="mt-2 font-sans text-[10px] uppercase tracking-[0.2em] text-[#756A63]">
                Based on 2,400+ reviews
              </p>
            </FadeIn>
          </div>

        </div>
      </div>
    </section>
  );
}
