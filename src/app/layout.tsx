import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans, Kurale } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";

const playfair = Playfair_Display({
  variable: "--font-playfair-raw",
  subsets: ["latin"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta-raw",
  subsets: ["latin"],
  display: "swap",
});

const kurale = Kurale({
  weight: "400",
  variable: "--font-kurale-raw",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Cafe Bengaluru",
  description: "Experience the authentic, unapologetic flavors of South India. Traditional filter coffee, ghee podi masala dosa, and soft idlis in a premium, aesthetic setting.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${jakarta.variable} ${kurale.variable} scroll-smooth`}
    >
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#FAF9F6] paper-grain text-on-surface font-body-md text-body-md antialiased selection:bg-tertiary-fixed-dim selection:text-on-tertiary-fixed overflow-x-hidden min-h-screen flex flex-col">
        <CustomCursor />
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
