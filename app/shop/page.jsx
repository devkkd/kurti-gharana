"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Header from "../component/Header";
import Footer from "../component/Footer";
import { products } from "@/public/data/products";
import { collections } from "@/public/data/collections";
import { SlideUp, StaggerParent, StaggerChild, FadeIn, easeSoft } from "../component/Animations";

/* =========================================================
   CONSTANTS
========================================================= */

const ALL = "All";

const categories = [
  ALL,
  "New Arrivals",
  "Everyday Kurtis",
  "Festive Edit",
  "Handcrafted Prints",
];

const sortOptions = [
  { label: "Featured", value: "featured" },
  { label: "Price: Low to High", value: "price_asc" },
  { label: "Price: High to Low", value: "price_desc" },
  { label: "Top Rated", value: "rating" },
  { label: "Most Reviewed", value: "reviews" },
];

/* =========================================================
   HELPERS
========================================================= */

function parsePrice(str) {
  return parseInt(str.replace(/[₹,]/g, ""), 10);
}

function StarRow({ rating }) {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((s) => (
        <svg
          key={s}
          width="10"
          height="10"
          viewBox="0 0 24 24"
          fill={s <= Math.round(rating) ? "#B88A4A" : "none"}
          stroke="#B88A4A"
          strokeWidth="1.5"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
      <span className="ml-1 font-sans text-[10px] text-[#756A63]">
        ({rating})
      </span>
    </div>
  );
}

/* =========================================================
   PRODUCT CARD
========================================================= */

function ShopProductCard({ product }) {
  const enquiryMsg = encodeURIComponent(
    `Hi, I am interested in ${product.name}. Please share more details.`
  );

  return (
    <motion.div
      layout
      whileHover={{ y: -4 }}
      transition={{ duration: 0.25 }}
      className="group border border-[#DCC8A9] bg-[#F9F1E5]"
    >
      {/* Image */}
      <div className="relative aspect-[0.82] overflow-hidden">
        {product.badge && (
          <span
            className={`absolute left-3 top-3 z-10 px-3 py-1 font-sans text-[9px] font-medium text-white ${
              product.badge === "Sale"
                ? "bg-[#B88A4A]"
                : product.badge === "Bestseller"
                ? "bg-[#2C4A7C]"
                : "bg-[#741D29]"
            }`}
          >
            {product.badge}
          </span>
        )}

        <button
          aria-label="Add to wishlist"
          className="absolute right-3 top-3 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-[#FCF7EF]/90 text-[#741D29] transition hover:bg-[#741D29] hover:text-white"
        >
          ♡
        </button>

        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition duration-700 group-hover:scale-105"
        />
      </div>

      {/* Info */}
      <div className="p-4">
        {/* Category tag */}
        <p className="mb-1 font-sans text-[9px] uppercase tracking-[0.18em] text-[#B88A4A]">
          {product.category}
        </p>

        <h3 className="font-serif text-[18px] text-[#741D29]">
          {product.name}
        </h3>

        {/* Rating */}
        <div className="mt-1">
          <StarRow rating={product.rating} />
        </div>

        {/* Price row */}
        <div className="mt-2 flex items-baseline gap-2">
          <span className="font-sans text-[14px] font-medium text-[#741D29]">
            {product.price}
          </span>
          {product.originalPrice && (
            <span className="font-sans text-[11px] text-[#756A63] line-through">
              {product.originalPrice}
            </span>
          )}
        </div>

        {/* Colors + CTA */}
        <div className="mt-3 flex items-center justify-between">
          <div className="flex gap-1.5">
            {product.colors?.map((color, i) => (
              <span
                key={i}
                className="h-3.5 w-3.5 rounded-full border border-white shadow-sm"
                style={{ backgroundColor: color }}
              />
            ))}
          </div>

          <a
            href={`https://wa.me/919876543210?text=${enquiryMsg}`}
            target="_blank"
            rel="noopener noreferrer"
            className="font-sans text-[10px] font-medium uppercase tracking-wider text-[#741D29] transition hover:text-[#B88A4A]"
          >
            Enquire →
          </a>
        </div>
      </div>
    </motion.div>
  );
}

/* =========================================================
   PAGE
========================================================= */

export default function ShopPage() {
  const [activeCategory, setActiveCategory] = useState(ALL);
  const [sortBy, setSortBy] = useState("featured");
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  /* Filter + Sort */
  const filtered = useMemo(() => {
    let list =
      activeCategory === ALL
        ? [...products]
        : products.filter((p) => p.category === activeCategory);

    switch (sortBy) {
      case "price_asc":
        list.sort((a, b) => parsePrice(a.price) - parsePrice(b.price));
        break;
      case "price_desc":
        list.sort((a, b) => parsePrice(b.price) - parsePrice(a.price));
        break;
      case "rating":
        list.sort((a, b) => b.rating - a.rating);
        break;
      case "reviews":
        list.sort((a, b) => b.reviews - a.reviews);
        break;
      default:
        break;
    }
    return list;
  }, [activeCategory, sortBy]);

  return (
    <>
      <Header />

      <main className="bg-[#FCF7EF]">

        {/* ===================================================
            PAGE HERO BANNER
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

          <div className="relative mx-auto max-w-[1280px] px-6 py-16 lg:px-10 lg:py-20">
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: easeSoft }}
              className="mb-3 font-sans text-[10px] uppercase tracking-[0.35em] text-[#B88A4A]"
            >
              Kurti Gharana
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.2, ease: easeSoft }}
              className="font-serif text-[52px] leading-[1] text-[#FCF7EF] sm:text-[60px]"
            >
              Our Collection
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.32, ease: easeSoft }}
              className="mt-4 max-w-[480px] font-sans text-[13px] leading-7 text-[#FCF7EF]/70"
            >
              Handcrafted kurtis from Jaipur — explore all styles, filter
              by category, or browse by collection.
            </motion.p>

            {/* Breadcrumb */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.44 }}
              className="mt-5 flex items-center gap-2 font-sans text-[11px] text-[#FCF7EF]/50"
            >
              <Link href="/" className="hover:text-[#D6B47A] transition">Home</Link>
              <span>/</span>
              <span className="text-[#D6B47A]">Shop</span>
            </motion.div>
          </div>
        </section>

        {/* ===================================================
            COLLECTION QUICK LINKS
        =================================================== */}

        <section className="border-b border-[#DCC8A9] bg-[#F9F1E5] px-5 py-10 lg:px-10">
          <div className="mx-auto max-w-[1280px]">

            <FadeIn className="mb-7 flex items-center gap-3">
              <span className="h-px flex-1 bg-[#DCC8A9]" />
              <p className="font-sans text-[10px] uppercase tracking-[0.3em] text-[#B88A4A]">
                Shop by Collection
              </p>
              <span className="h-px flex-1 bg-[#DCC8A9]" />
            </FadeIn>

            <StaggerParent
              stagger={0.08}
              delayChildren={0.05}
              className="grid grid-cols-2 gap-4 sm:grid-cols-4"
            >
              {collections.map((col) => (
                <StaggerChild key={col.id} distance={24}>
                  <Link
                    href={col.href}
                    className="group relative overflow-hidden border border-[#DCC8A9]"
                  >
                    <div className="relative aspect-[1.1] w-full">
                      <Image
                        src={col.image}
                        alt={col.title}
                        fill
                        className="object-cover transition duration-700 group-hover:scale-105"
                      />
                      {/* Dark overlay */}
                      <div className="absolute inset-0 bg-[#741D29]/30 transition duration-300 group-hover:bg-[#741D29]/50" />

                      {/* Label */}
                      <div className="absolute inset-0 flex flex-col items-center justify-end p-4 text-center">
                        <h3 className="font-serif text-[18px] leading-tight text-white drop-shadow">
                          {col.title}
                        </h3>
                        <p className="mt-1 font-sans text-[9px] uppercase tracking-[0.15em] text-[#D6B47A]">
                          {col.subtitle}
                        </p>
                        <span className="mt-2 font-sans text-[10px] text-white/80 transition group-hover:text-[#D6B47A]">
                          Shop Now →
                        </span>
                      </div>
                    </div>
                  </Link>
                </StaggerChild>
              ))}
            </StaggerParent>

          </div>
        </section>

        {/* ===================================================
            FILTER BAR + PRODUCT GRID
        =================================================== */}

        <section className="px-5 py-10 lg:px-10 lg:py-14">
          <div className="mx-auto max-w-[1280px]">

            {/* ── Top toolbar ── */}
            <div className="mb-8 flex flex-wrap items-center justify-between gap-4">

              {/* Result count */}
              <SlideUp>
                <p className="font-sans text-[12px] text-[#756A63]">
                  Showing{" "}
                  <span className="font-medium text-[#741D29]">
                    {filtered.length}
                  </span>{" "}
                  {filtered.length === 1 ? "product" : "products"}
                  {activeCategory !== ALL && (
                    <> in <span className="font-medium text-[#741D29]">{activeCategory}</span></>
                  )}
                </p>
              </SlideUp>

              <div className="flex items-center gap-3">
                {/* Mobile filter toggle */}
                <button
                  onClick={() => setMobileFilterOpen(true)}
                  className="flex items-center gap-2 border border-[#DCC8A9] bg-[#F9F1E5] px-4 py-2.5 font-sans text-[11px] text-[#741D29] sm:hidden"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <line x1="4" y1="6" x2="20" y2="6" />
                    <line x1="8" y1="12" x2="20" y2="12" />
                    <line x1="12" y1="18" x2="20" y2="18" />
                  </svg>
                  Filter
                </button>

                {/* Sort dropdown */}
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="border border-[#DCC8A9] bg-[#FCF7EF] px-4 py-2.5 font-sans text-[11px] text-[#741D29] outline-none focus:border-[#B88A4A]"
                  style={{
                    backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='11' height='11' viewBox='0 0 24 24' fill='none' stroke='%23B88A4A' stroke-width='2'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E\")",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "right 12px center",
                    paddingRight: "32px",
                    appearance: "none",
                  }}
                >
                  {sortOptions.map((o) => (
                    <option key={o.value} value={o.value}>
                      Sort: {o.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* ── Main layout: sidebar + grid ── */}
            <div className="flex gap-8">

              {/* ── Category Sidebar (desktop) ── */}
              <aside className="hidden w-[210px] shrink-0 sm:block">

                <div className="sticky top-6">
                  <p className="mb-4 font-sans text-[10px] uppercase tracking-[0.25em] text-[#B88A4A]">
                    Categories
                  </p>

                  <nav className="space-y-1">
                    {categories.map((cat) => (
                      <button
                        key={cat}
                        onClick={() => setActiveCategory(cat)}
                        className={`flex w-full items-center justify-between border-b border-[#DCC8A9]/60 py-3 text-left font-sans text-[12px] transition-colors duration-200 ${
                          activeCategory === cat
                            ? "font-medium text-[#741D29]"
                            : "text-[#756A63] hover:text-[#741D29]"
                        }`}
                      >
                        <span>{cat}</span>
                        <span className="flex items-center gap-2">
                          {activeCategory === cat && (
                            <motion.span
                              layoutId="cat-dot"
                              className="h-1.5 w-1.5 rounded-full bg-[#B88A4A]"
                            />
                          )}
                          <span className="font-sans text-[10px] text-[#B88A4A]">
                            {cat === ALL
                              ? products.length
                              : products.filter((p) => p.category === cat).length}
                          </span>
                        </span>
                      </button>
                    ))}
                  </nav>

                  {/* Divider */}
                  <div className="my-6 h-px bg-[#DCC8A9]" />

                  {/* Price range note */}
                  <p className="mb-3 font-sans text-[10px] uppercase tracking-[0.25em] text-[#B88A4A]">
                    Price Range
                  </p>
                  <p className="font-sans text-[12px] text-[#756A63]">
                    ₹1,500 – ₹4,000
                  </p>
                  <div className="mt-3 h-1 w-full rounded-full bg-[#DCC8A9]">
                    <div className="h-1 w-3/4 rounded-full bg-[#741D29]" />
                  </div>

                </div>
              </aside>

              {/* ── Product Grid ── */}
              <div className="flex-1">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeCategory + sortBy}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.25 }}
                  >
                    {filtered.length === 0 ? (
                      <div className="flex flex-col items-center justify-center py-24 text-center">
                        <span className="text-[40px] text-[#B88A4A]">✦</span>
                        <p className="mt-4 font-serif text-[24px] text-[#741D29]">
                          No products found
                        </p>
                        <button
                          onClick={() => setActiveCategory(ALL)}
                          className="mt-5 border border-[#741D29] px-6 py-2.5 font-sans text-[11px] text-[#741D29] hover:bg-[#741D29]/5"
                        >
                          Clear Filter
                        </button>
                      </div>
                    ) : (
                      <StaggerParent
                        stagger={0.07}
                        delayChildren={0}
                        className="grid grid-cols-2 gap-4 lg:grid-cols-3 lg:gap-5"
                      >
                        {filtered.map((product) => (
                          <StaggerChild key={product.id} distance={32}>
                            <ShopProductCard product={product} />
                          </StaggerChild>
                        ))}
                      </StaggerParent>
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>

            </div>
          </div>
        </section>

        {/* ===================================================
            BOTTOM BANNER — WhatsApp bulk order CTA
        =================================================== */}

        <section className="bg-[#F9F1E5] px-5 py-12 lg:px-10">
          <FadeIn>
            <div className="mx-auto flex max-w-[1280px] flex-wrap items-center justify-between gap-6 border border-[#DCC8A9] bg-[#FCF7EF] px-8 py-10">
              <div>
                <p className="font-sans text-[10px] uppercase tracking-[0.3em] text-[#B88A4A]">
                  Bulk & Wholesale
                </p>
                <h3 className="mt-2 font-serif text-[32px] text-[#741D29]">
                  Need a Custom Order?
                </h3>
                <p className="mt-2 max-w-[420px] font-sans text-[12px] leading-6 text-[#756A63]">
                  We accept bulk orders for weddings, boutiques, and
                  gifting. Reach us on WhatsApp for a personalised quote.
                </p>
              </div>
              <a
                href="https://wa.me/919876543210?text=Hi%2C%20I%20am%20interested%20in%20a%20bulk%20order."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-[#741D29] px-7 py-3.5 font-sans text-[12px] font-medium text-white transition hover:bg-[#5A1721]"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
                </svg>
                WhatsApp Us →
              </a>
            </div>
          </FadeIn>
        </section>

      </main>

      {/* ── Mobile Filter Drawer ── */}
      <AnimatePresence>
        {mobileFilterOpen && (
          <div className="fixed inset-0 z-[200] sm:hidden">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileFilterOpen(false)}
              className="absolute inset-0 bg-black/40"
            />

            <motion.aside
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.35, ease: easeSoft }}
              className="absolute left-0 top-0 h-full w-[80%] max-w-[320px] overflow-y-auto bg-[#FCF7EF] p-7 shadow-xl"
            >
              <div className="mb-6 flex items-center justify-between">
                <p className="font-serif text-[22px] text-[#741D29]">
                  Filter
                </p>
                <button
                  onClick={() => setMobileFilterOpen(false)}
                  className="text-[#741D29]"
                  aria-label="Close filter"
                >
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M18 6 6 18M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <p className="mb-3 font-sans text-[10px] uppercase tracking-[0.25em] text-[#B88A4A]">
                Categories
              </p>

              <nav className="space-y-1">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => {
                      setActiveCategory(cat);
                      setMobileFilterOpen(false);
                    }}
                    className={`flex w-full items-center justify-between border-b border-[#DCC8A9]/60 py-3.5 text-left font-sans text-[13px] transition ${
                      activeCategory === cat
                        ? "font-semibold text-[#741D29]"
                        : "text-[#756A63]"
                    }`}
                  >
                    {cat}
                    {activeCategory === cat && (
                      <span className="h-1.5 w-1.5 rounded-full bg-[#B88A4A]" />
                    )}
                  </button>
                ))}
              </nav>
            </motion.aside>
          </div>
        )}
      </AnimatePresence>

      <Footer />
    </>
  );
}
