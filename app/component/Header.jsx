"use client";

import { useState } from "react";
import Link from "next/link";

/* =========================================================
   NAVIGATION
========================================================= */

const navItems = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Shop",
    href: "/shop",
    dropdown: [
      { label: "All Products",      href: "/shop" },
      { label: "New Arrivals",      href: "/shop?category=New+Arrivals" },
      { label: "Everyday Kurtis",   href: "/shop?category=Everyday+Kurtis" },
      { label: "Festive Edit",      href: "/shop?category=Festive+Edit" },
      { label: "Handcrafted Prints",href: "/shop?category=Handcrafted+Prints" },
    ],
  },
  
  {
    label: "About Us",
    href: "/about",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

/* =========================================================
   CHEVRON ICON
========================================================= */

function ChevronDown({ size = 12 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

/* =========================================================
   MENU ICON
========================================================= */

function MenuIcon({ size = 24 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    >
      <path d="M4 7h16" />
      <path d="M4 12h16" />
      <path d="M4 17h16" />
    </svg>
  );
}

/* =========================================================
   CLOSE ICON
========================================================= */

function CloseIcon({ size = 25 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    >
      <path d="M6 6l12 12" />
      <path d="M18 6L6 18" />
    </svg>
  );
}

/* =========================================================
   DECORATIVE MOTIF
========================================================= */

function DecorativeMotif({ side }) {
  return (
    <div
      className={`
        pointer-events-none
        absolute
        top-1/2
        hidden
        -translate-y-1/2
        text-[#B88A4A]/60
        xl:block
        ${side === "left" ? "left-5" : "right-5"}
      `}
    >
      <svg
        width="28"
        height="38"
        viewBox="0 0 30 38"
        fill="none"
      >
        <path
          d="M15 19C15 11 8 8 5 8c2 5 4 9 10 11Z"
          stroke="currentColor"
          strokeWidth="1.1"
        />

        <path
          d="M15 19c0-8 7-11 10-11-2 5-4 9-10 11Z"
          stroke="currentColor"
          strokeWidth="1.1"
        />

        <path
          d="M15 19c-6-5-10-2-12 1 4 1 8 2 12-1Z"
          stroke="currentColor"
          strokeWidth="1.1"
        />

        <path
          d="M15 19c6-5 10-2 12 1-4 1-8 2-12-1Z"
          stroke="currentColor"
          strokeWidth="1.1"
        />

        <path
          d="M15 19v14"
          stroke="currentColor"
          strokeWidth="1.1"
        />

        <circle
          cx="15"
          cy="19"
          r="2"
          fill="currentColor"
        />
      </svg>
    </div>
  );
}

/* =========================================================
   HEADER
========================================================= */

export default function Header() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const closeMobileMenu = () => {
    setMobileMenu(false);
    setOpenDropdown(null);
  };

  return (
    <>
      {/* ===================================================
          HEADER
      =================================================== */}

      <header
        className="
          relative
          z-50
          w-full
          border-b
          border-[#741D29]/10
          bg-[#FCF7EF]
          text-[#741D29]
        "
      >
        {/* Decorative Elements */}

        <DecorativeMotif side="left" />
        <DecorativeMotif side="right" />

        <div
          className="
            relative
            mx-auto
            flex
            h-[92px]
            max-w-[1500px]
            items-center
            px-5
            sm:px-8
            lg:px-10
            xl:px-14
          "
        >
          {/* =================================================
              LOGO
          ================================================= */}

          <Link
            href="/"
            onClick={closeMobileMenu}
            className="
              absolute
              left-5
              z-10
              flex
              items-center
              sm:left-8
              lg:left-10
              xl:left-14
            "
          >
            <img
              src="/images/logo-1.png"
              alt="Kurti Gharana"
              className="
                h-[62px]
                w-auto
                object-contain
                sm:h-[66px]
              "
            />
          </Link>

          {/* =================================================
              CENTER NAVIGATION
          ================================================= */}

          <nav
            className="
              mx-auto
              hidden
              h-full
              items-center
              justify-center
              gap-7
              lg:flex
              xl:gap-9
            "
          >
            {navItems.map((item) => (
              <div
                key={item.label}
                className="
                  group
                  relative
                  h-full
                "
                onMouseEnter={() => {
                  if (item.dropdown) {
                    setOpenDropdown(item.label);
                  }
                }}
                onMouseLeave={() => {
                  if (item.dropdown) {
                    setOpenDropdown(null);
                  }
                }}
              >
                {/* Nav Link */}

                <Link
                  href={item.href}
                  className="
                    relative
                    flex
                    h-full
                    items-center
                    gap-1.5
                    whitespace-nowrap
                    px-2
                    font-sans
                    text-[13px]
                    font-medium
                    tracking-[0.025em]
                    text-[#741D29]
                    transition-all
                    duration-300
                    hover:text-[#B88A4A]
                  "
                >
                  {item.label}

                  {item.dropdown && (
                    <ChevronDown size={11} />
                  )}

                  {/* Active underline */}

                  {item.label === "Home" && (
                    <span
                      className="
                        absolute
                        bottom-[23px]
                        left-2
                        right-2
                        h-[1.5px]
                        bg-[#B88A4A]
                      "
                    />
                  )}
                </Link>

                {/* =================================================
                    DROPDOWN
                ================================================= */}

                {item.dropdown &&
                  openDropdown === item.label && (
                    <div
                      className="
                        absolute
                        left-1/2
                        top-[78px]
                        w-[235px]
                        -translate-x-1/2
                        border
                        border-[#B88A4A]/25
                        bg-[#FCF7EF]
                        p-2
                        shadow-[0_18px_50px_rgba(116,29,41,0.12)]
                      "
                    >
                      {/* Dropdown Heading */}

                      <div
                        className="
                          border-b
                          border-[#B88A4A]/20
                          px-4
                          py-3
                        "
                      >
                        <p
                          className="
                            font-serif
                            text-[17px]
                            text-[#741D29]
                          "
                        >
                          {item.label}
                        </p>
                      </div>

                      {/* Dropdown Items */}

                      <div className="py-1">
                        {item.dropdown.map(
                          (subItem) => (
                            <Link
                              key={subItem.label}
                              href={subItem.href}
                              className="
                                flex
                                items-center
                                justify-between
                                px-4
                                py-3
                                font-sans
                                text-[12px]
                                tracking-[0.015em]
                                text-[#741D29]
                                transition-all
                                duration-200
                                hover:bg-[#F3E6D6]
                                hover:text-[#B88A4A]
                              "
                            >
                              <span>
                                {subItem.label}
                              </span>

                              <span className="text-[#B88A4A]">
                                →
                              </span>
                            </Link>
                          )
                        )}
                      </div>
                    </div>
                  )}
              </div>
            ))}
          </nav>

          {/* =================================================
              MOBILE MENU BUTTON
          ================================================= */}

          <button
            type="button"
            aria-label="Open menu"
            onClick={() => setMobileMenu(true)}
            className="
              absolute
              right-5
              flex
              items-center
              justify-center
              text-[#741D29]
              transition-colors
              duration-300
              hover:text-[#B88A4A]
              lg:hidden
              sm:right-8
            "
          >
            <MenuIcon />
          </button>
        </div>
      </header>

      {/* =====================================================
          MOBILE DRAWER
      ===================================================== */}

      {mobileMenu && (
        <div className="fixed inset-0 z-[100] lg:hidden">
          {/* Overlay */}

          <button
            type="button"
            aria-label="Close menu"
            onClick={closeMobileMenu}
            className="
              absolute
              inset-0
              bg-[#3A171D]/45
              backdrop-blur-[3px]
            "
          />

          {/* Drawer */}

          <aside
            className="
              absolute
              right-0
              top-0
              h-full
              w-[88%]
              max-w-[390px]
              overflow-y-auto
              bg-[#FCF7EF]
              shadow-[-15px_0_50px_rgba(116,29,41,0.15)]
            "
          >
            {/* Drawer Header */}

            <div
              className="
                flex
                h-[88px]
                items-center
                justify-between
                border-b
                border-[#741D29]/10
                px-6
              "
            >
              <Link
                href="/"
                onClick={closeMobileMenu}
              >
                <img
                  src="/images/logo.png"
                  alt="Kurti Gharana"
                  className="
                    h-[58px]
                    w-auto
                    object-contain
                  "
                />
              </Link>

              <button
                type="button"
                aria-label="Close menu"
                onClick={closeMobileMenu}
                className="
                  text-[#741D29]
                  transition-colors
                  hover:text-[#B88A4A]
                "
              >
                <CloseIcon />
              </button>
            </div>

            {/* Mobile Navigation */}

            <nav className="px-6 py-4">
              {navItems.map((item) => (
                <div
                  key={item.label}
                  className="
                    border-b
                    border-[#741D29]/10
                  "
                >
                  <div className="flex items-center justify-between">
                    <Link
                      href={item.href}
                      onClick={closeMobileMenu}
                      className="
                        py-5
                        font-serif
                        text-[22px]
                        text-[#741D29]
                        transition-colors
                        duration-300
                        hover:text-[#B88A4A]
                      "
                    >
                      {item.label}
                    </Link>

                    {item.dropdown && (
                      <button
                        type="button"
                        aria-label={`Open ${item.label}`}
                        onClick={() =>
                          setOpenDropdown(
                            openDropdown === item.label
                              ? null
                              : item.label
                          )
                        }
                        className="
                          flex
                          h-10
                          w-10
                          items-center
                          justify-center
                          text-[#B88A4A]
                        "
                      >
                        <span
                          className={`
                            transition-transform
                            duration-300
                            ${
                              openDropdown ===
                              item.label
                                ? "rotate-180"
                                : ""
                            }
                          `}
                        >
                          <ChevronDown size={15} />
                        </span>
                      </button>
                    )}
                  </div>

                  {/* Mobile Dropdown */}

                  {item.dropdown &&
                    openDropdown === item.label && (
                      <div className="pb-4 pl-1">
                        {item.dropdown.map(
                          (subItem) => (
                            <Link
                              key={subItem.label}
                              href={subItem.href}
                              onClick={closeMobileMenu}
                              className="
                                flex
                                items-center
                                justify-between
                                py-2.5
                                font-sans
                                text-[12px]
                                tracking-[0.02em]
                                text-[#756A63]
                                transition-colors
                                hover:text-[#741D29]
                              "
                            >
                              {subItem.label}

                              <span className="text-[#B88A4A]">
                                →
                              </span>
                            </Link>
                          )
                        )}
                      </div>
                    )}
                </div>
              ))}
            </nav>

            {/* Bottom Tagline */}

            <div className="px-6 pb-10 pt-12 text-center">
              <div className="mb-4 flex items-center justify-center gap-3">
                <span className="h-px w-10 bg-[#B88A4A]/60" />

                <span className="text-[#B88A4A]">
                  ✦
                </span>

                <span className="h-px w-10 bg-[#B88A4A]/60" />
              </div>

              <p
                className="
                  font-serif
                  text-[18px]
                  italic
                  text-[#741D29]
                "
              >
                Jaipur Ki Pehchaan,
              </p>

              <p
                className="
                  mt-1
                  font-serif
                  text-[18px]
                  italic
                  text-[#B88A4A]
                "
              >
                Har Kurti Mein
              </p>
            </div>
          </aside>
        </div>
      )}
    </>
  );
}