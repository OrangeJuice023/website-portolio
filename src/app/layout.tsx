import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ChatBot from "@/components/ChatBot";
import { personalContext } from "@/lib/context";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: personalContext.meta.siteTitle,
  description: personalContext.meta.siteDescription,
  keywords: personalContext.meta.keywords,
  authors: [{ name: personalContext.name }],
  openGraph: {
    title: personalContext.meta.siteTitle,
    description: personalContext.meta.siteDescription,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: personalContext.meta.siteTitle,
    description: personalContext.meta.siteDescription,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <Navbar />
        {children}
        <Footer />
        <ChatBot />
      </body>
    </html>
  );
}

