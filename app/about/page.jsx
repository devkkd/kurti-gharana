"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Header from "../component/Header";
import Footer from "../component/Footer";
import {
  FadeIn,
  SlideUp,
  SlideInLeft,
  SlideInRight,
  ScaleIn,
  StaggerParent,
  StaggerChild,
  easeSoft,
} from "../component/Animations";

/* =========================================================
   DATA
========================================================= */

const values = [
  {
    icon: "✦",
    title: "Authentic Craftsmanship",
    description:
      "Every kurti is handcrafted by skilled artisans from Jaipur, preserving centuries-old block printing and embroidery traditions.",
  },
  {
    icon: "✦",
    title: "Heritage Prints",
    description:
      "Our fabrics carry the soul of Rajasthan — from sanganeri floral blocks to leheriya stripes, each pattern tells a story.",
  },
  {
    icon: "✦",
    title: "Sustainable Craft",
    description:
      "We work directly with local weavers and artisans, ensuring fair wages and sustainable production practices.",
  },
  {
    icon: "✦",
    title: "Modern Silhouettes",
    description:
      "Timeless heritage meets contemporary design — our cuts are crafted for the modern Indian woman.",
  },
];

const team = [
  {
    name: "Priya Sharma",
    role: "Founder & Creative Director",
    bio: "Raised in Jaipur, Priya brings 15 years of textile expertise and a deep love for Rajasthani crafts to every collection.",
  },
  {
    name: "Meera Agarwal",
    role: "Head of Design",
    bio: "With a background in traditional weaving, Meera bridges the gap between age-old techniques and modern wearability.",
  },
  {
    name: "Kavita Rathi",
    role: "Artisan Relations",
    bio: "Kavita works closely with over 60 artisan families across Jaipur, ensuring their craft and livelihoods are protected.",
  },
];

const milestones = [
  { year: "2015", event: "Founded in the heart of Jaipur's old city" },
  { year: "2017", event: "Partnered with 30+ artisan families" },
  { year: "2019", event: "Launched our first festive collection" },
  { year: "2022", event: "Expanded to pan-India online delivery" },
  { year: "2024", event: "Opened flagship studio in Jaipur" },
  { year: "2026", event: "Serving 50,000+ customers across India" },
];

const stats = [
  { num: "60+", label: "Artisan Families" },
  { num: "500+", label: "Unique Designs" },
  { num: "50K+", label: "Happy Customers" },
];

/* =========================================================
   PAGE
========================================================= */

export default function AboutPage() {
  return (
    <>
      <Header />

      <main className="bg-[#FCF7EF]">

        {/* ===================================================
            HERO BANNER — staggered entrance on load
        =================================================== */}

        <section className="relative overflow-hidden bg-[#741D29]">

          <div
            className="absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, #B88A4A 1px, transparent 0)",
              backgroundSize: "32px 32px",
            }}
          />

          <div className="relative mx-auto max-w-[1280px] px-6 py-24 text-center lg:py-32 lg:px-10">

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: easeSoft }}
              className="mb-4 font-sans text-[10px] font-medium uppercase tracking-[0.35em] text-[#B88A4A]"
            >
              Our Story
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.22, ease: easeSoft }}
              className="font-serif text-[52px] leading-[1] text-[#FCF7EF] sm:text-[64px] lg:text-[76px]"
            >
              The Soul of Jaipur,
              <br />
              <span className="text-[#D6B47A]">Woven in Every Thread</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4, ease: easeSoft }}
              className="mx-auto mt-7 max-w-[560px] font-sans text-[14px] leading-7 text-[#FCF7EF]/70"
            >
              A label born from love for Rajasthan&apos;s textile heritage —
              where every stitch carries the warmth of a master artisan&apos;s
              hands.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.58 }}
              className="mt-10 flex items-center justify-center gap-4"
            >
              <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.65, ease: easeSoft }}
                style={{ originX: 1 }}
                className="block h-px w-16 bg-[#B88A4A]/60"
              />
              <span className="text-[#B88A4A]">✦</span>
              <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.65, ease: easeSoft }}
                style={{ originX: 0 }}
                className="block h-px w-16 bg-[#B88A4A]/60"
              />
            </motion.div>

          </div>
        </section>

        {/* ===================================================
            ORIGIN STORY — image slides left, text slides right
        =================================================== */}

        <section className="px-5 py-16 lg:px-10 lg:py-24">
          <div className="mx-auto grid max-w-[1280px] gap-14 lg:grid-cols-2 lg:items-center">

            {/* Image */}
            <SlideInLeft className="relative h-[420px] border border-[#DCC8A9] lg:h-[580px]">
              <Image
                src="/images/about4.jpeg"
                alt="Jaipur Artisan at Work"
                fill
                className="object-contain"
              />
              <span className="absolute -bottom-3 -right-3 h-16 w-16 border-b-2 border-r-2 border-[#B88A4A]" />
              <span className="absolute -left-3 -top-3 h-16 w-16 border-l-2 border-t-2 border-[#B88A4A]" />
            </SlideInLeft>

            {/* Content */}
            <SlideInRight delay={0.12}>

              <SlideUp delay={0}>
                <p className="text-[10px] uppercase tracking-[0.3em] text-[#B88A4A]">
                  How It All Began
                </p>
              </SlideUp>

              <SlideUp delay={0.08}>
                <h2 className="mt-3 font-serif text-[44px] leading-[1.05] text-[#741D29]">
                  Born in the Lanes
                  <br />
                  of Old Jaipur
                </h2>
              </SlideUp>

              <SlideUp delay={0.16} className="mt-6 space-y-4 font-sans text-[13px] leading-7 text-[#756A63]">
                <p>
                  Kurti Gharana was born from a simple belief — that the
                  artisans of Jaipur deserve a platform as beautiful as
                  the crafts they create. Our founder Priya Sharma grew
                  up watching her grandmother drape herself in hand-block
                  printed fabrics, each piece a conversation between
                  tradition and identity.
                </p>
                <p>
                  In 2015, she returned to the Pink City with a mission:
                  to build a label that would bring these living
                  traditions to women across India, without compromise on
                  quality, authenticity, or artisan welfare.
                </p>
                <p>
                  Today, Kurti Gharana works with over 60 artisan
                  families — preserving the crafts of block printing,
                  leheriya, gota patti, and more — while designing
                  silhouettes that fit the life of the modern woman.
                </p>
              </SlideUp>

              <FadeIn delay={0.25}>
                <div className="mt-8 h-px w-full bg-[#DCC8A9]" />
              </FadeIn>

              {/* Stats */}
              <StaggerParent
                stagger={0.12}
                delayChildren={0.3}
                className="mt-6 grid grid-cols-3 gap-4 text-center"
              >
                {stats.map((stat) => (
                  <StaggerChild key={stat.label} distance={20}>
                    <p className="font-serif text-[36px] leading-none text-[#741D29]">
                      {stat.num}
                    </p>
                    <p className="mt-1 font-sans text-[10px] uppercase tracking-[0.2em] text-[#B88A4A]">
                      {stat.label}
                    </p>
                  </StaggerChild>
                ))}
              </StaggerParent>

            </SlideInRight>

          </div>
        </section>

        {/* ===================================================
            VALUES — staggered cards
        =================================================== */}

        <section className="bg-[#F9F1E5] px-5 py-16 lg:px-10 lg:py-24">
          <div className="mx-auto max-w-[1280px]">

            <SlideUp className="mb-12 text-center">
              <p className="text-[10px] uppercase tracking-[0.3em] text-[#B88A4A]">
                What We Stand For
              </p>
              <h2 className="mt-3 font-serif text-[44px] leading-tight text-[#741D29]">
                Our Values
              </h2>
            </SlideUp>

            <StaggerParent
              stagger={0.1}
              delayChildren={0.05}
              className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
            >
              {values.map((v) => (
                <StaggerChild key={v.title} distance={36}>
                  <div className="h-full border border-[#DCC8A9] bg-[#FCF7EF] p-8 transition-shadow duration-300 hover:shadow-[0_8px_30px_rgba(116,29,41,0.08)]">
                    <span className="text-[22px] text-[#B88A4A]">{v.icon}</span>
                    <h3 className="mt-4 font-serif text-[20px] text-[#741D29]">
                      {v.title}
                    </h3>
                    <p className="mt-3 font-sans text-[12px] leading-6 text-[#756A63]">
                      {v.description}
                    </p>
                  </div>
                </StaggerChild>
              ))}
            </StaggerParent>

          </div>
        </section>

        {/* ===================================================
            TIMELINE — alternating slide in left / right
        =================================================== */}

        <section className="px-5 py-16 lg:px-10 lg:py-24">
          <div className="mx-auto max-w-[860px]">

            <SlideUp className="mb-12 text-center">
              <p className="text-[10px] uppercase tracking-[0.3em] text-[#B88A4A]">
                Our Journey
              </p>
              <h2 className="mt-3 font-serif text-[44px] leading-tight text-[#741D29]">
                Milestones
              </h2>
            </SlideUp>

            <div className="relative">

              {/* Center line — grows down on scroll */}
              <FadeIn className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-[#DCC8A9] sm:block" />

              <div className="space-y-8">
                {milestones.map((m, i) => {
                  const Wrapper = i % 2 === 0 ? SlideInLeft : SlideInRight;
                  return (
                    <div
                      key={m.year}
                      className={`relative flex items-center gap-6 sm:gap-0 ${
                        i % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
                      }`}
                    >
                      {/* Content block */}
                      <div
                        className={`w-full sm:w-[calc(50%-28px)] ${
                          i % 2 === 0
                            ? "sm:text-right sm:pr-8"
                            : "sm:text-left sm:pl-8"
                        }`}
                      >
                        <Wrapper delay={0.05}>
                          <div className="inline-block border border-[#DCC8A9] bg-[#FCF7EF] px-5 py-4">
                            <p className="font-serif text-[28px] text-[#B88A4A]">
                              {m.year}
                            </p>
                            <p className="mt-1 font-sans text-[12px] leading-5 text-[#756A63]">
                              {m.event}
                            </p>
                          </div>
                        </Wrapper>
                      </div>

                      {/* Center dot */}
                      <ScaleIn delay={0.1} className="relative hidden sm:flex h-14 w-14 shrink-0 items-center justify-center">
                        <div className="h-3 w-3 rounded-full bg-[#741D29] ring-4 ring-[#FCF7EF] ring-offset-1 ring-offset-[#DCC8A9]" />
                      </ScaleIn>

                      {/* Empty side */}
                      <div className="hidden w-[calc(50%-28px)] sm:block" />
                    </div>
                  );
                })}
              </div>

            </div>
          </div>
        </section>

        {/* ===================================================
            TEAM — staggered cards
        =================================================== */}

        <section className="bg-[#F9F1E5] px-5 py-16 lg:px-10 lg:py-24">
          <div className="mx-auto max-w-[1280px]">

            <SlideUp className="mb-12 text-center">
              <p className="text-[10px] uppercase tracking-[0.3em] text-[#B88A4A]">
                The People Behind It
              </p>
              <h2 className="mt-3 font-serif text-[44px] leading-tight text-[#741D29]">
                Meet Our Team
              </h2>
            </SlideUp>

            <StaggerParent
              stagger={0.14}
              delayChildren={0.05}
              className="grid gap-8 sm:grid-cols-3"
            >
              {team.map((member) => (
                <StaggerChild key={member.name} distance={40}>
                  <div className="h-full border border-[#DCC8A9] bg-[#FCF7EF] p-8 text-center">
                    <div className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-[#741D29]/10 font-serif text-[32px] text-[#741D29]">
                      {member.name.charAt(0)}
                    </div>
                    <h3 className="font-serif text-[22px] text-[#741D29]">
                      {member.name}
                    </h3>
                    <p className="mt-1 font-sans text-[10px] uppercase tracking-[0.2em] text-[#B88A4A]">
                      {member.role}
                    </p>
                    <div className="mx-auto my-4 h-px w-12 bg-[#DCC8A9]" />
                    <p className="font-sans text-[12px] leading-6 text-[#756A63]">
                      {member.bio}
                    </p>
                  </div>
                </StaggerChild>
              ))}
            </StaggerParent>

          </div>
        </section>

        {/* ===================================================
            CTA — scale in
        =================================================== */}

        <section className="px-5 py-16 lg:px-10 lg:py-24">
          <ScaleIn>
            <div className="mx-auto max-w-[860px] border border-[#DCC8A9] bg-[#FCF7EF] px-8 py-14 text-center">

              <SlideUp delay={0.05}>
                <p className="text-[10px] uppercase tracking-[0.3em] text-[#B88A4A]">
                  Be Part of the Story
                </p>
                <h2 className="mt-3 font-serif text-[42px] leading-tight text-[#741D29]">
                  Wear the Heritage
                </h2>
                <p className="mx-auto mt-5 max-w-[480px] font-sans text-[13px] leading-7 text-[#756A63]">
                  Explore our collections and take home a piece of Jaipur —
                  crafted with pride, worn with grace.
                </p>
              </SlideUp>

              <SlideUp delay={0.18} className="mt-8 flex flex-wrap items-center justify-center gap-5">
                <Link
                  href="/shop"
                  className="bg-[#741D29] px-8 py-3.5 font-sans text-[12px] font-medium text-white transition hover:bg-[#5A1721]"
                >
                  Shop Now →
                </Link>
                <Link
                  href="/contact"
                  className="border border-[#741D29] px-8 py-3.5 font-sans text-[12px] font-medium text-[#741D29] transition hover:bg-[#741D29]/5"
                >
                  Get in Touch
                </Link>
              </SlideUp>

            </div>
          </ScaleIn>
        </section>

      </main>

      <Footer />
    </>
  );
}
