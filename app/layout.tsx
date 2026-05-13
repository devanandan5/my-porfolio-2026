import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Devanandan S — MERN Stack Developer",
  description:
    "Devanandan S — MERN Stack Developer based in Bengaluru. 5+ years building web and mobile apps with React, Node.js, MongoDB, React Native, Next.js and Web3.",
  keywords: [
    "Devanandan S",
    "MERN Stack Developer",
    "React Developer",
    "Node.js",
    "React Native",
    "Next.js",
    "Web3",
    "Bengaluru",
    "Portfolio",
  ],
  authors: [{ name: "Devanandan S" }],
  creator: "Devanandan S",
  openGraph: {
    title: "Devanandan S — MERN Stack Developer",
    description:
      "5+ years building web and mobile experiences with React, Node.js, MongoDB and React Native.",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Devanandan S — MERN Stack Developer",
    description:
      "5+ years building web and mobile experiences with React, Node.js, MongoDB and React Native.",
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
