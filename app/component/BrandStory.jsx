"use client";

import Image from "next/image";
import Link from "next/link";
import { SlideInLeft, SlideInRight } from "./Animations";

export default function BrandStory() {
  return (
    <section className="bg-[#FCF7EF] px-5 py-10 lg:px-10">
      <div className="mx-auto grid max-w-[1280px] border border-[#DCC8A9] lg:grid-cols-2">

        {/* Image — slides in from left */}
        <SlideInLeft className="relative min-h-[350px]">
          <Image
            src="/images/landing.svg"
            alt="Jaipur Heritage"
            fill
            className="object-contain"
          />
        </SlideInLeft>

        {/* Content — slides in from right */}
        <SlideInRight delay={0.1} className="flex items-center px-7 py-12 sm:px-12">
          <div>
            <p className="text-[10px] uppercase tracking-[0.25em] text-[#B88A4A]">
              Our Story
            </p>

            <h2 className="mt-3 text-[40px] leading-[1] text-[#741D29]">
              The Art of Jaipur,
              <br />
              in Every Thread
            </h2>

            <p className="mt-5 max-w-[480px] text-[13px] leading-7 text-[#756A63]">
              At Kurti Gharana, we bring authentic Jaipur prints,
              handcrafted by skilled artisans, blending heritage
              with contemporary style.
            </p>

            <Link
              href="/about"
              className="mt-7 inline-block bg-[#741D29] px-6 py-3 text-[11px] text-white transition hover:bg-[#5A1721]"
            >
              Know Our Story →
            </Link>
          </div>
        </SlideInRight>

      </div>
    </section>
  );
}
