"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

/* =========================================================
   SHARED EASINGS & TRANSITIONS
========================================================= */

export const ease = [0.25, 0.1, 0.25, 1];
export const easeSoft = [0.16, 1, 0.3, 1]; // expo out — feels very smooth

/* =========================================================
   FADE IN  (opacity 0 → 1)
   Usage: <FadeIn> ... </FadeIn>
========================================================= */

export function FadeIn({
  children,
  delay = 0,
  duration = 0.7,
  className = "",
  once = true,
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : {}}
      transition={{ duration, delay, ease }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* =========================================================
   SLIDE UP  (y 40 → 0, opacity 0 → 1)
   Usage: <SlideUp delay={0.1}> ... </SlideUp>
========================================================= */

export function SlideUp({
  children,
  delay = 0,
  duration = 0.75,
  distance = 40,
  className = "",
  once = true,
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: distance }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration, delay, ease: easeSoft }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* =========================================================
   SLIDE IN FROM LEFT
========================================================= */

export function SlideInLeft({
  children,
  delay = 0,
  duration = 0.8,
  className = "",
  once = true,
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -60 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration, delay, ease: easeSoft }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* =========================================================
   SLIDE IN FROM RIGHT
========================================================= */

export function SlideInRight({
  children,
  delay = 0,
  duration = 0.8,
  className = "",
  once = true,
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: 60 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration, delay, ease: easeSoft }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* =========================================================
   SCALE IN  (scale 0.92 → 1, opacity 0 → 1)
========================================================= */

export function ScaleIn({
  children,
  delay = 0,
  duration = 0.7,
  className = "",
  once = true,
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.92 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration, delay, ease: easeSoft }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* =========================================================
   STAGGER CHILDREN  — parent that staggers child animations
   Wrap with <StaggerParent> and children with <StaggerChild>
========================================================= */

export function StaggerParent({
  children,
  stagger = 0.1,
  delayChildren = 0,
  className = "",
  once = true,
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "show" : "hidden"}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: stagger,
            delayChildren,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerChild({ children, distance = 30, className = "" }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: distance },
        show: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.65, ease: easeSoft },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* =========================================================
   COUNTER ANIMATION  — number counts up on enter
========================================================= */

export function CountUp({ from = 0, to, suffix = "", duration = 1.5, delay = 0 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <span ref={ref}>
      <motion.span
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.3, delay }}
      >
        <motion.span>
          {inView && (
            <AnimatedNumber from={from} to={to} duration={duration} delay={delay} />
          )}
          {!inView && from}
        </motion.span>
      </motion.span>
      {suffix}
    </span>
  );
}

function AnimatedNumber({ from, to, duration, delay }) {
  const ref = useRef(null);

  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay }}
    >
      <motion.span
        initial={from}
        animate={to}
        transition={{ duration, delay, ease: "easeOut" }}
      >
        {({ latest }) => Math.round(latest)}
      </motion.span>
    </motion.span>
  );
}

/* =========================================================
   LINE GROW  — horizontal rule that grows from 0 width
========================================================= */

export function LineGrow({ delay = 0, className = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.span
      ref={ref}
      initial={{ scaleX: 0, originX: 0 }}
      animate={inView ? { scaleX: 1 } : {}}
      transition={{ duration: 0.9, delay, ease: easeSoft }}
      className={className}
      style={{ display: "block" }}
    />
  );
}
