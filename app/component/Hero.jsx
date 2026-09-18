"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { easeSoft } from "./Animations";

export default function Hero() {
  return (
    <section className="bg-[#F9F1E5]">
      <div className="grid min-h-[580px] lg:grid-cols-2">

        {/* ── Content ── */}
        <div className="flex items-center px-6 py-16 sm:px-12 lg:px-20">
          <div className="max-w-[550px]">

            {/* Label */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: easeSoft }}
              className="mb-5 text-[11px] font-medium uppercase tracking-[0.3em] text-[#B88A4A]"
            >
              Traditional&nbsp; | &nbsp;Elegant&nbsp; | &nbsp;Timeless
            </motion.p>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.22, ease: easeSoft }}
              className="text-[52px] leading-[0.92] text-[#741D29] sm:text-[64px] lg:text-[72px]"
            >
              Timeless Jaipur,
              <br />
              Woven for You
            </motion.h1>

            {/* Body */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.38, ease: easeSoft }}
              className="mt-7 max-w-[470px] text-[14px] leading-7 text-[#756A63]"
            >
              Discover beautifully crafted kurtis in authentic Jaipur
              prints, designed for the modern woman who values tradition
              and style.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.52, ease: easeSoft }}
              className="mt-8 flex flex-wrap items-center gap-6"
            >
              <Link
                href="/shop"
                className="bg-[#741D29] px-7 py-3.5 text-[12px] font-medium text-white transition hover:bg-[#5A1721]"
              >
                Explore Collection →
              </Link>

              {/* <Link
                href="/collections"
                className="border-b border-[#741D29] pb-1 text-[12px] font-medium text-[#741D29]"
              >
                Explore Styles
              </Link> */}
            </motion.div>

            {/* Divider motif */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="mt-9 flex items-center gap-4"
            >
              <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.75, ease: easeSoft }}
                style={{ originX: 0 }}
                className="block h-px w-20 bg-[#B88A4A]"
              />
              <span className="text-[#B88A4A]">✦</span>
              <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.9, ease: easeSoft }}
                style={{ originX: 1 }}
                className="block h-px w-20 bg-[#B88A4A]"
              />
            </motion.div>

          </div>
        </div>

        {/* ── Image ── */}
        <motion.div
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, delay: 0.15, ease: easeSoft }}
          className="relative min-h-[400px] lg:min-h-full"
        >
          <Image
            src="/images/hero.jpeg"
            alt="Kurti Gharana Jaipur Collection"
            fill
            priority
            className="object-contain"
          />
        </motion.div>

      </div>
    </section>
  );
}
