"use client";

import Image from "next/image";
import Link from "next/link";
import { collections } from "@/public/data/collections";
import { SlideUp, StaggerParent, StaggerChild, FadeIn } from "./Animations";

export default function CollectionSection() {
  return (
    <section className="bg-[#FCF7EF] px-5 py-16 lg:px-10">
      <div className="mx-auto max-w-[1280px]">

        {/* Heading */}
        <FadeIn className="mb-9 flex items-center justify-center gap-4">
          <span className="hidden h-px w-24 bg-[#DCC8A9] sm:block" />
          <span className="text-[#B88A4A]">✦</span>
          <h2 className="text-center text-[34px] text-[#741D29]">
            Shop by Collection
          </h2>
          <span className="text-[#B88A4A]">✦</span>
          <span className="hidden h-px w-24 bg-[#DCC8A9] sm:block" />
        </FadeIn>

        {/* Cards — stagger in */}
        <StaggerParent
          stagger={0.1}
          delayChildren={0.05}
          className="grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-5"
        >
          {collections.map((item) => (
            <StaggerChild key={item.id} distance={36}>
              <Link
                href={item.href}
                className="group block border border-[#DCC8A9] bg-[#F9F1E5]"
              >
                <div className="relative aspect-[0.75] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                </div>

                <div className="flex items-center justify-between px-4 py-4">
                  <div>
                    <h3 className="font-[var(--font-cormorant)] text-[19px] text-[#741D29]">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-[10px] text-[#756A63]">
                      {item.subtitle}
                    </p>
                  </div>
                  <span className="text-[#741D29]">→</span>
                </div>
              </Link>
            </StaggerChild>
          ))}
        </StaggerParent>

      </div>
    </section>
  );
}
