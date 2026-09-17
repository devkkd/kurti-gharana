import { Cormorant_Garamond, Montserrat } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata = {
  title: "Kurti Gharana",
  description: "Jaipur Ki Pehchaan, Har Kurti Mein",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${cormorant.variable} ${montserrat.variable}`}
      >
        {children}
      </body>
    </html>
  );
}