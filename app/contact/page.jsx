"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "../component/Header";
import Footer from "../component/Footer";

/* =========================================================
   CONTACT INFO CARDS DATA
========================================================= */

const contactInfo = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.44 2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.96a16 16 0 0 0 6.13 6.13l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
    label: "Phone",
    value: "+91 98765 43210",
    sub: "Mon – Sat, 10am – 7pm IST",
    href: "tel:+919876543210",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="16" x="2" y="4" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    ),
    label: "Email",
    value: "care@kurtigharana.com",
    sub: "We reply within 24 hours",
    href: "mailto:care@kurtigharana.com",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    label: "Visit Us",
    value: "Johri Bazaar, Jaipur",
    sub: "Rajasthan 302003, India",
    href: "https://maps.google.com",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="20" x="2" y="2" rx="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
      </svg>
    ),
    label: "Instagram",
    value: "@kurtigharana",
    sub: "Follow us for new arrivals",
    href: "https://instagram.com",
  },
];

const faqs = [
  {
    q: "How long does delivery take?",
    a: "We dispatch within 2 business days. Standard delivery takes 4–7 days across India. Express options are available at checkout.",
  },
  {
    q: "What is your return policy?",
    a: "We accept returns within 7 days of delivery for unused, unwashed items in original packaging. Exchange requests are processed within 3 business days.",
  },
  {
    q: "Do you offer customisation?",
    a: "Yes! We offer size customisation on select styles. Reach out to us via the contact form or WhatsApp for bulk and bridal orders.",
  },
  {
    q: "Are your fabrics authentic Jaipur prints?",
    a: "Absolutely. All our prints are sourced directly from Jaipur artisans using traditional hand-block and screen techniques.",
  },
];

/* =========================================================
   FAQ ACCORDION ITEM
========================================================= */

function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-[#DCC8A9]">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between py-5 text-left"
        aria-expanded={open}
      >
        <span className="font-sans text-[13px] font-medium text-[#741D29]">
          {q}
        </span>
        <span
          className={`ml-4 shrink-0 text-[#B88A4A] transition-transform duration-300 ${
            open ? "rotate-45" : ""
          }`}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <path d="M12 5v14M5 12h14" />
          </svg>
        </span>
      </button>

      {open && (
        <p className="pb-5 font-sans text-[12px] leading-6 text-[#756A63]">
          {a}
        </p>
      )}
    </div>
  );
}

/* =========================================================
   CONTACT FORM
========================================================= */

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "General Enquiry",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const subjects = [
    "General Enquiry",
    "Order Support",
    "Returns & Exchange",
    "Bulk / Wholesale Order",
    "Customisation Request",
    "Other",
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-[#741D29]/10">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#741D29" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 6 9 17l-5-5" />
          </svg>
        </div>
        <h3 className="font-serif text-[28px] text-[#741D29]">
          Message Received
        </h3>
        <p className="mt-3 max-w-[380px] font-sans text-[13px] leading-6 text-[#756A63]">
          Thank you for reaching out. Our team will get back to you
          within 24 hours.
        </p>
        <button
          type="button"
          onClick={() => { setSubmitted(false); setFormData({ name: "", email: "", phone: "", subject: "General Enquiry", message: "" }); }}
          className="mt-7 border border-[#741D29] px-6 py-2.5 font-sans text-[11px] font-medium text-[#741D29] transition hover:bg-[#741D29]/5"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">

      {/* Name + Phone */}
      <div className="grid gap-5 sm:grid-cols-2">

        <div>
          <label htmlFor="name" className="mb-2 block font-sans text-[10px] uppercase tracking-[0.2em] text-[#756A63]">
            Full Name <span className="text-[#741D29]">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="Priya Sharma"
            className="w-full border border-[#DCC8A9] bg-[#FCF7EF] px-4 py-3 font-sans text-[13px] text-[#2D2521] placeholder:text-[#756A63]/50 outline-none transition focus:border-[#B88A4A] focus:ring-1 focus:ring-[#B88A4A]/30"
          />
        </div>

        <div>
          <label htmlFor="phone" className="mb-2 block font-sans text-[10px] uppercase tracking-[0.2em] text-[#756A63]">
            Phone Number
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+91 98765 43210"
            className="w-full border border-[#DCC8A9] bg-[#FCF7EF] px-4 py-3 font-sans text-[13px] text-[#2D2521] placeholder:text-[#756A63]/50 outline-none transition focus:border-[#B88A4A] focus:ring-1 focus:ring-[#B88A4A]/30"
          />
        </div>

      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="mb-2 block font-sans text-[10px] uppercase tracking-[0.2em] text-[#756A63]">
          Email Address <span className="text-[#741D29]">*</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          value={formData.email}
          onChange={handleChange}
          placeholder="priya@example.com"
          className="w-full border border-[#DCC8A9] bg-[#FCF7EF] px-4 py-3 font-sans text-[13px] text-[#2D2521] placeholder:text-[#756A63]/50 outline-none transition focus:border-[#B88A4A] focus:ring-1 focus:ring-[#B88A4A]/30"
        />
      </div>

      {/* Subject */}
      <div>
        <label htmlFor="subject" className="mb-2 block font-sans text-[10px] uppercase tracking-[0.2em] text-[#756A63]">
          Subject
        </label>
        <select
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          className="w-full border border-[#DCC8A9] bg-[#FCF7EF] px-4 py-3 font-sans text-[13px] text-[#2D2521] outline-none transition focus:border-[#B88A4A] focus:ring-1 focus:ring-[#B88A4A]/30 appearance-none"
          style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%23B88A4A' stroke-width='2'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E\")", backgroundRepeat: "no-repeat", backgroundPosition: "right 16px center" }}
        >
          {subjects.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="mb-2 block font-sans text-[10px] uppercase tracking-[0.2em] text-[#756A63]">
          Message <span className="text-[#741D29]">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={formData.message}
          onChange={handleChange}
          placeholder="Tell us how we can help you..."
          className="w-full resize-none border border-[#DCC8A9] bg-[#FCF7EF] px-4 py-3 font-sans text-[13px] text-[#2D2521] placeholder:text-[#756A63]/50 outline-none transition focus:border-[#B88A4A] focus:ring-1 focus:ring-[#B88A4A]/30"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-[#741D29] py-4 font-sans text-[12px] font-medium tracking-[0.08em] text-white transition hover:bg-[#5A1721]"
      >
        Send Message →
      </button>

    </form>
  );
}

/* =========================================================
   PAGE
========================================================= */

export default function ContactPage() {
  return (
    <>
      <Header />

      <main className="bg-[#FCF7EF]">

        {/* ===================================================
            HERO BANNER
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

          <div className="relative mx-auto max-w-[1280px] px-6 py-20 text-center lg:py-28 lg:px-10">

            <p className="mb-4 font-sans text-[10px] font-medium uppercase tracking-[0.35em] text-[#B88A4A]">
              We're Here for You
            </p>

            <h1 className="font-serif text-[52px] leading-[1] text-[#FCF7EF] sm:text-[64px] lg:text-[72px]">
              Get in Touch
            </h1>

            <p className="mx-auto mt-6 max-w-[500px] font-sans text-[14px] leading-7 text-[#FCF7EF]/70">
              Questions about an order, fabric enquiries, or just want
              to say hello — we'd love to hear from you.
            </p>

            <div className="mt-9 flex items-center justify-center gap-4">
              <span className="h-px w-16 bg-[#B88A4A]/60" />
              <span className="text-[#B88A4A]">✦</span>
              <span className="h-px w-16 bg-[#B88A4A]/60" />
            </div>

          </div>

        </section>

        {/* ===================================================
            CONTACT INFO CARDS
        =================================================== */}

        <section className="px-5 py-14 lg:px-10">

          <div className="mx-auto grid max-w-[1280px] gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {contactInfo.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="group border border-[#DCC8A9] bg-[#FCF7EF] p-7 transition-shadow duration-300 hover:shadow-[0_8px_30px_rgba(116,29,41,0.08)]"
              >
                <span className="inline-flex h-11 w-11 items-center justify-center bg-[#741D29]/8 text-[#741D29] transition-colors group-hover:bg-[#741D29] group-hover:text-white">
                  {item.icon}
                </span>

                <p className="mt-4 font-sans text-[10px] uppercase tracking-[0.2em] text-[#B88A4A]">
                  {item.label}
                </p>

                <p className="mt-1 font-serif text-[18px] text-[#741D29]">
                  {item.value}
                </p>

                <p className="mt-1 font-sans text-[11px] text-[#756A63]">
                  {item.sub}
                </p>
              </a>
            ))}
          </div>

        </section>

        {/* ===================================================
            FORM + MAP
        =================================================== */}

        <section className="px-5 pb-16 lg:px-10">

          <div className="mx-auto grid max-w-[1280px] gap-10 lg:grid-cols-[1fr_440px]">

            {/* Form */}
            <div className="border border-[#DCC8A9] bg-[#FCF7EF] p-8 lg:p-12">

              <p className="font-sans text-[10px] uppercase tracking-[0.3em] text-[#B88A4A]">
                Write to Us
              </p>

              <h2 className="mt-2 font-serif text-[38px] leading-tight text-[#741D29]">
                Send a Message
              </h2>

              <p className="mt-3 mb-8 font-sans text-[12px] leading-6 text-[#756A63]">
                Fill in the form and our team will get back to you
                within one business day.
              </p>

              <ContactForm />

            </div>

            {/* Right Column */}
            <div className="flex flex-col gap-6">

              {/* Map Placeholder */}
              <div className="relative flex-1 min-h-[280px] overflow-hidden border border-[#DCC8A9] bg-[#F9F1E5]">

                {/* Decorative map placeholder */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
                  <div className="mb-4 flex h-14 w-14 items-center justify-center bg-[#741D29]/10 text-[#741D29]">
                    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <p className="font-serif text-[20px] text-[#741D29]">
                    Our Studio
                  </p>
                  <p className="mt-2 font-sans text-[12px] leading-5 text-[#756A63]">
                    Johri Bazaar, Near Hawa Mahal
                    <br />
                    Jaipur, Rajasthan 302003
                  </p>
                  <a
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-block border border-[#741D29] px-5 py-2.5 font-sans text-[11px] font-medium text-[#741D29] transition hover:bg-[#741D29]/5"
                  >
                    Open in Maps →
                  </a>
                </div>

                {/* Dot grid decoration */}
                <div
                  className="absolute inset-0 opacity-[0.04]"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle at 1px 1px, #741D29 1px, transparent 0)",
                    backgroundSize: "20px 20px",
                  }}
                />
              </div>

              {/* Store Hours */}
              <div className="border border-[#DCC8A9] bg-[#FCF7EF] p-7">

                <p className="font-sans text-[10px] uppercase tracking-[0.2em] text-[#B88A4A]">
                  Store Hours
                </p>

                <h3 className="mt-2 font-serif text-[22px] text-[#741D29]">
                  Visit Us In Store
                </h3>

                <div className="mt-5 space-y-3">
                  {[
                    { day: "Monday – Friday", time: "10:00 AM – 8:00 PM" },
                    { day: "Saturday", time: "10:00 AM – 9:00 PM" },
                    { day: "Sunday", time: "11:00 AM – 7:00 PM" },
                  ].map((row) => (
                    <div key={row.day} className="flex items-center justify-between border-b border-[#DCC8A9]/60 pb-3">
                      <span className="font-sans text-[12px] text-[#756A63]">{row.day}</span>
                      <span className="font-sans text-[12px] font-medium text-[#741D29]">{row.time}</span>
                    </div>
                  ))}
                </div>

              </div>

              {/* WhatsApp CTA */}
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 border border-[#DCC8A9] bg-[#FCF7EF] p-6 transition hover:shadow-[0_4px_20px_rgba(116,29,41,0.08)]"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-[#741D29]">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
                  </svg>
                </div>
                <div>
                  <p className="font-sans text-[11px] uppercase tracking-[0.2em] text-[#B88A4A]">
                    Quick Support
                  </p>
                  <p className="mt-0.5 font-serif text-[18px] text-[#741D29]">
                    Chat on WhatsApp
                  </p>
                  <p className="font-sans text-[11px] text-[#756A63]">
                    Fastest way to reach us
                  </p>
                </div>
                <span className="ml-auto text-[#B88A4A]">→</span>
              </a>

            </div>

          </div>

        </section>

        {/* ===================================================
            FAQ
        =================================================== */}

        <section className="bg-[#F9F1E5] px-5 py-16 lg:px-10 lg:py-24">

          <div className="mx-auto max-w-[780px]">

            <div className="mb-10 text-center">
              <p className="font-sans text-[10px] uppercase tracking-[0.3em] text-[#B88A4A]">
                Quick Answers
              </p>
              <h2 className="mt-3 font-serif text-[44px] leading-tight text-[#741D29]">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="border-t border-[#DCC8A9]">
              {faqs.map((faq) => (
                <FaqItem key={faq.q} q={faq.q} a={faq.a} />
              ))}
            </div>

            <p className="mt-8 text-center font-sans text-[12px] text-[#756A63]">
              Still have questions?{" "}
              <a
                href="mailto:care@kurtigharana.com"
                className="border-b border-[#741D29] pb-0.5 text-[#741D29]"
              >
                Email us directly
              </a>
            </p>

          </div>

        </section>

      </main>

      <Footer />
    </>
  );
}
