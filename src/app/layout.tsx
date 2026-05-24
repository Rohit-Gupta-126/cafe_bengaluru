import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans, Kurale } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import PageLoader from "@/components/PageLoader";

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
  metadataBase: new URL('https://cafe-bengaluru.vercel.app'),
  title: "Cafe Bengaluru",
  description: "Experience the authentic, unapologetic flavors of South India. Traditional filter coffee, ghee podi masala dosa, and soft idlis in a premium, aesthetic setting.",
  keywords: ["cafe bengaluru", "south indian food", "filter coffee", "masala dosa", "bhubaneswar cafe", "authentic south indian"],
  openGraph: {
    title: "Cafe Bengaluru | Authentic South Indian Heritage",
    description: "Experience the authentic, unapologetic flavors of South India in a premium, aesthetic setting.",
    url: "https://cafe-bengaluru.vercel.app/",
    siteName: "Cafe Bengaluru",
    images: [
      {
        url: "/images/vibe_hero.png",
        width: 1200,
        height: 630,
        alt: "Cafe Bengaluru Interior and Coffee",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cafe Bengaluru",
    description: "Experience the authentic, unapologetic flavors of South India.",
    images: ["/images/vibe_hero.png"],
  },
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
        <PageLoader />
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
