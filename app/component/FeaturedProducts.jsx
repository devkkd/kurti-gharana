"use client";

import Link from "next/link";
import { products } from "@/public/data/products";
import ProductCard from "@/app/component/ProductCard";
import { FadeIn, StaggerParent, StaggerChild } from "./Animations";

export default function FeaturedProducts() {
  return (
    <section className="bg-[#FCF7EF] px-5 py-14 lg:px-10">
      <div className="mx-auto max-w-[1280px]">

        {/* Heading row */}
        <FadeIn className="mb-8 flex items-end justify-between">
          <div className="flex items-center gap-3">
            <span className="text-[#B88A4A]">✦</span>
            <h2 className="text-[34px] text-[#741D29]">
              Featured Collection
            </h2>
            <span className="text-[#B88A4A]">✦</span>
          </div>

          <Link
            href="/shop"
            className="hidden text-[11px] text-[#741D29] sm:block"
          >
            View All →
          </Link>
        </FadeIn>

        {/* Product cards — stagger in */}
        <StaggerParent
          stagger={0.12}
          delayChildren={0.05}
          className="grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-5"
        >
          {products.slice(0, 4).map((product) => (
            <StaggerChild key={product.id} distance={40}>
              <ProductCard product={product} />
            </StaggerChild>
          ))}
        </StaggerParent>

      </div>
    </section>
  );
}
