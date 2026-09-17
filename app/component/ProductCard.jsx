"use client";

import Image from "next/image";

export default function ProductCard({ product }) {

  const enquiryMessage = encodeURIComponent(
    `Hi, I am interested in ${product.name}. Please share more details.`
  );

  const whatsappUrl =
    `https://wa.me/919876543210?text=${enquiryMessage}`;

  return (
    <div className="group border border-[#DCC8A9] bg-[#F9F1E5]">

      <div className="relative aspect-[0.82] overflow-hidden">

        {product.badge && (
          <span className="absolute left-3 top-3 z-10 bg-[#741D29] px-3 py-1 text-[9px] text-white">
            {product.badge}
          </span>
        )}

       

        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition duration-700 group-hover:scale-105"
        />

      </div>

      <div className="p-4">

        <h3 className="font-[var(--font-cormorant)] text-[19px] text-[#741D29]">
          {product.name}
        </h3>

       

        <div className="mt-3 flex items-center justify-between">

          {/* <div className="flex gap-1.5">
            {product.colors?.map((color, index) => (
              <span
                key={index}
                className="h-3.5 w-3.5 rounded-full border border-white shadow-sm"
                style={{ backgroundColor: color }}
              />
            ))}
          </div> */}

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[10px] font-medium uppercase tracking-wider text-[#741D29]"
          >
            Enquire →
          </a>

        </div>

      </div>
    </div>
  );
}