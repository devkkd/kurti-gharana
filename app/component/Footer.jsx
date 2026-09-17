import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-[#DCC8A9] bg-[#F9F1E5]">

      <div className="mx-auto grid max-w-[1280px] gap-10 px-6 py-14 sm:grid-cols-2 lg:grid-cols-4 lg:px-10">

        {/* Brand */}
        <div>

          <Image
            src="/images/logo.png"
            alt="Kurti Gharana"
            width={150}
            height={100}
            className="w-[130px]"
          />

          <p className="mt-4 max-w-[270px] text-[11px] leading-6 text-[#756A63]">
            Kurti Gharana brings you timeless Jaipur prints and
            handcrafted kurtis, celebrating tradition and the
            modern woman.
          </p>

        </div>

        {/* Shop */}
        <div>

          <h3 className="mb-5 text-[14px] text-[#741D29]">
            Shop
          </h3>

          <div className="flex flex-col gap-3 text-[11px] text-[#756A63]">

            <Link href="/shop">All Kurtis</Link>
            <Link href="/shop">New Arrivals</Link>
            <Link href="/collections/festive-edit">
              Festive Edit
            </Link>
            <Link href="/shop">Sale</Link>

          </div>

        </div>

        {/* Information */}
        <div>

          <h3 className="mb-5 text-[14px] text-[#741D29]">
            Information
          </h3>

          <div className="flex flex-col gap-3 text-[11px] text-[#756A63]">

            <Link href="/about">About Us</Link>
            <Link href="/collections">Our Collections</Link>
            <Link href="/size-guide">Size Guide</Link>
            <Link href="/contact">Contact</Link>

          </div>

        </div>

        {/* Contact */}
        <div>

          <h3 className="mb-5 text-[14px] text-[#741D29]">
            Customer Support
          </h3>

          <div className="space-y-3 text-[11px] text-[#756A63]">

            <p>+91 98765 43210</p>
            <p>care@kurtigharana.com</p>
            <p>Jaipur, Rajasthan, India</p>

          </div>

        </div>

      </div>

      <div className="border-t border-[#DCC8A9]">

        <div className="mx-auto flex max-w-[1280px] items-center justify-between px-6 py-5 text-[10px] text-[#756A63] lg:px-10">

          <p>
            © 2026 Kurti Gharana. All rights reserved.
          </p>

          <div className="flex gap-5">
            <span>Instagram</span>
            <span>Facebook</span>
            <span>Pinterest</span>
          </div>

        </div>

      </div>

    </footer>
  );
}